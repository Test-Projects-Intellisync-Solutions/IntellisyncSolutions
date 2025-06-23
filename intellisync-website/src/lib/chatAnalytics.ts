import { chatAnalyticsService } from './supabase/chatAnalyticsService';

export interface ChatAnalysis {
  intent: string;
  sentiment: 'positive' | 'neutral' | 'negative';
  confidence: number;
  topics: string[];
  requiresFollowUp: boolean;
  suggestedResponse?: string;
  metadata?: Record<string, any>;
}

const ANALYSIS_SYSTEM_PROMPT = `You are an AI assistant that analyzes chat messages to extract insights and analytics. Your task is to analyze the following message and provide a structured analysis including intent classification, sentiment analysis, and key topics.

For each message, provide a JSON object with the following fields:
- intent: The primary intent of the message (e.g., 'question', 'pricing_inquiry', 'technical_issue', 'general_inquiry', 'feedback', 'greeting', 'goodbye', 'request_demo', 'compare_plans', 'billing_question')
- sentiment: The sentiment of the message ('positive', 'neutral', or 'negative')
- confidence: A confidence score between 0 and 1
- topics: Array of key topics or entities mentioned
- requiresFollowUp: Boolean indicating if this message requires follow-up
- suggestedResponse: A suggested response template (optional)

Example:
{
  "intent": "pricing_inquiry",
  "sentiment": "neutral",
  "confidence": 0.92,
  "topics": ["pricing", "plans", "cost"],
  "requiresFollowUp": true,
  "suggestedResponse": "I'd be happy to provide pricing information. Our plans start at $X/month for Y features. Would you like me to go over the different options we offer?"
}

IMPORTANT: Always respond with a valid JSON object.`;

/**
 * Analyzes a chat message to extract intent, sentiment, and other analytics
 * @param message The message content to analyze
 * @param context Additional context about the conversation or user
 * @returns Promise<ChatAnalysis> Analysis results
 */
export async function analyzeChatMessage(
  message: string,
  context: {
    conversationHistory?: Array<{ role: 'user' | 'assistant'; content: string }>;
    userInfo?: Record<string, any>;
    pageContext?: string;
  } = {}
): Promise<ChatAnalysis> {
  try {
    // Prepare the user prompt with message and context
    let userPrompt = `Analyze the following message:\n\n${message}\n\n`;
    
    if (context.conversationHistory?.length) {
      userPrompt += `\nConversation context (most recent first):\n`;
      userPrompt += context.conversationHistory
        .slice(-5)
        .map(msg => `${msg.role === 'user' ? 'User' : 'Assistant'}: ${msg.content}`)
        .join('\n');
    }

    if (context.pageContext) {
      userPrompt += `\n\nPage context: ${context.pageContext}`;
    }

    if (context.userInfo) {
      userPrompt += `\n\nUser information (if relevant): ${JSON.stringify(context.userInfo, null, 2)}`;
    }

    // Prepare messages for the API
    const messages = [
      { role: 'system', content: ANALYSIS_SYSTEM_PROMPT },
      { role: 'user', content: userPrompt }
    ];

    // Get sessionId from localStorage if available
    let sessionId = null;
    if (typeof window !== 'undefined') {
      sessionId = localStorage.getItem('ai-chat-session-id');
    }

    // Call the streaming API directly, but request a non-streamed response
    const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || '';
    const apiResponse = await fetch(`${apiBaseUrl}/api/ai/stream`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        messages,
        sessionId,
        temperature: 0.2,
        max_tokens: 1000,
        stream: false // Request a single JSON object response
      }),
    });

    if (!apiResponse.ok) {
      const errorBody = await apiResponse.text();
      console.error('API Error Response:', errorBody);
      throw new Error(`API request failed with status ${apiResponse.status}`);
    }
    
    const responseText = await apiResponse.text();
    
    // Parse the response
    let result: Partial<ChatAnalysis>;
    try {
      result = JSON.parse(responseText);
    } catch (e) {
      console.error('Failed to parse analysis response as JSON:', responseText);
      result = {
        intent: 'unknown',
        sentiment: 'neutral',
        confidence: 0.5,
        topics: [],
        requiresFollowUp: false
      };
    }

    // Ensure all required fields are present
    return {
      intent: result.intent || 'unknown',
      sentiment: (result.sentiment as 'positive' | 'neutral' | 'negative') || 'neutral',
      confidence: typeof result.confidence === 'number' ? Math.max(0, Math.min(1, result.confidence)) : 0.5,
      topics: Array.isArray(result.topics) ? result.topics : [],
      requiresFollowUp: Boolean(result.requiresFollowUp),
      suggestedResponse: result.suggestedResponse,
      metadata: result.metadata || {}
    };
  } catch (error) {
    console.error('Error analyzing chat message:', error);
    // Return a default analysis in case of errors
    return {
      intent: 'error',
      sentiment: 'neutral',
      confidence: 0,
      topics: [],
      requiresFollowUp: false,
      metadata: { error: 'Analysis failed', details: String(error) }
    };
  }
}

/**
 * Tracks a chat message in the analytics system
 * @param message The message content
 * @param role The role of the message sender ('user' or 'assistant')
 * @param analysis Optional pre-computed analysis of the message
 * @param metadata Additional metadata to include with the tracking
 */
export async function trackChatMessage(
  message: string,
  data: {
    role: 'user' | 'assistant';
    analysis?: ChatAnalysis;
    [key: string]: any;
  }
): Promise<void> {
  const { role, analysis: providedAnalysis, ...metadata } = data;
  let analysis = providedAnalysis;

  try {
    // If no analysis provided and this is a user message, analyze it
    if (role === 'user' && !analysis) {
      analysis = await analyzeChatMessage(message, { userInfo: metadata });
    }

    // Record the message in Supabase
    const recordedMessage = await chatAnalyticsService.recordMessage(
      message,
      role,
      {
        ...metadata,
        userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : undefined,
        screenResolution: typeof window !== 'undefined' 
          ? `${window.innerWidth}x${window.innerHeight}` 
          : undefined,
        language: typeof navigator !== 'undefined' ? navigator.language : undefined,
      }
    );

    // If we have analysis results, record them as well
    if (analysis && recordedMessage?.id) {
      await chatAnalyticsService.recordAnalysis(
        recordedMessage.id,
        analysis,
        { source: 'chat-analytics' }
      );
    }
    
  } catch (error) {
    console.error('Error tracking chat message:', error);
  }
}

// Helper function to get the current conversation history from session storage
export function getConversationHistory(): Array<{ role: 'user' | 'assistant'; content: string }> {
  if (typeof window === 'undefined') return [];
  
  try {
    const history = sessionStorage.getItem('chat_conversation_history');
    return history ? JSON.parse(history) : [];
  } catch (e) {
    console.error('Error retrieving conversation history:', e);
    return [];
  }
}

// Helper function to update the conversation history in session storage
export function updateConversationHistory(role: 'user' | 'assistant', content: string): void {
  if (typeof window === 'undefined') return;
  
  try {
    const history = getConversationHistory();
    // Keep only the last 20 messages to avoid storage issues
    const updatedHistory = [...history, { role, content }].slice(-20);
    sessionStorage.setItem('chat_conversation_history', JSON.stringify(updatedHistory));
  } catch (e) {
    console.error('Error updating conversation history:', e);
  }
}
