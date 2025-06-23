import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { Database } from '../../types/supabase';
import { ChatAnalysis } from '../chatAnalytics';

// Initialize Supabase client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export type SupabaseClientType = SupabaseClient<Database>;

class ChatAnalyticsService {
  private supabase: SupabaseClientType;
  private sessionId: string | null = null;
  private messageOrder = 0;

  constructor() {
    this.supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true,
      },
    });
  }

  // Initialize the service with user session
  async initialize() {
    const { data: { session } } = await this.supabase.auth.getSession();
    if (session?.user) {
      await this.ensureSession(session.user.id);
    }
  }

  // Ensure we have a valid chat session
  private async ensureSession(userId: string) {
    if (this.sessionId) return this.sessionId;

    const userAgent = typeof navigator !== 'undefined' ? navigator.userAgent : null;
    const screenResolution = typeof window !== 'undefined' 
      ? `${window.innerWidth}x${window.innerHeight}` 
      : null;
    const language = typeof navigator !== 'undefined' ? navigator.language : null;
    const pageUrl = typeof window !== 'undefined' ? window.location.href : null;
    const referrer = typeof document !== 'undefined' ? document.referrer : null;

    const { data, error } = await this.supabase.rpc('get_or_create_chat_session', {
      p_user_id: userId,
      p_user_agent: userAgent,
      p_screen_resolution: screenResolution,
      p_language: language,
      p_page_url: pageUrl,
      p_referrer: referrer,
      p_metadata: {}
    });

    if (error) {
      console.error('Error getting or creating chat session:', error);
      throw error;
    }

    this.sessionId = data;
    return this.sessionId;
  }

  // Record a chat message
  async recordMessage(
    content: string,
    role: 'user' | 'assistant' | 'system',
    metadata: Record<string, any> = {}
  ) {
    try {
      const { data: { user } } = await this.supabase.auth.getUser();
      if (!user) {
        console.warn('No authenticated user, skipping message recording');
        return null;
      }

      await this.ensureSession(user.id);
      
      const { data, error } = await this.supabase
        .from('chat_messages')
        .insert({
          session_id: this.sessionId!,
          role,
          content,
          message_order: this.messageOrder++,
          metadata: {
            ...metadata,
            timestamp: new Date().toISOString(),
          },
        })
        .select()
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error recording chat message:', error);
      return null;
    }
  }

  // Record chat analysis
  async recordAnalysis(
    messageId: string,
    analysis: ChatAnalysis,
    metadata: Record<string, any> = {}
  ) {
    try {
      const { error } = await this.supabase.from('chat_analytics').insert({
        message_id: messageId,
        session_id: this.sessionId!,
        intent: analysis.intent,
        sentiment: analysis.sentiment,
        confidence: analysis.confidence,
        topics: analysis.topics,
        requires_follow_up: analysis.requiresFollowUp,
        suggested_response: analysis.suggestedResponse,
        metadata: {
          ...analysis.metadata,
          ...metadata,
        },
      });

      if (error) throw error;
      return true;
    } catch (error) {
      console.error('Error recording chat analysis:', error);
      return false;
    }
  }

  // Get chat history for a session
  async getChatHistory(limit = 50) {
    try {
      if (!this.sessionId) {
        throw new Error('No active chat session');
      }

      const { data, error } = await this.supabase
        .from('chat_messages')
        .select('*, chat_analytics(*)')
        .eq('session_id', this.sessionId)
        .order('created_at', { ascending: false })
        .limit(limit);

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error fetching chat history:', error);
      return [];
    }
  }

  // Get analytics for a session
  async getSessionAnalytics() {
    try {
      if (!this.sessionId) {
        throw new Error('No active chat session');
      }

      const { data, error } = await this.supabase
        .from('chat_analytics')
        .select('*')
        .eq('session_id', this.sessionId);

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error fetching session analytics:', error);
      return [];
    }
  }

  // Get aggregated analytics for reporting
  async getAggregatedAnalytics(options: {
    startDate?: string;
    endDate?: string;
    intent?: string;
    sentiment?: 'positive' | 'neutral' | 'negative';
  } = {}) {
    try {
      const { startDate, endDate, intent, sentiment } = options;
      
      let query = this.supabase
        .from('chat_analytics')
        .select('*', { count: 'exact' });

      if (startDate) {
        query = query.gte('created_at', startDate);
      }
      
      if (endDate) {
        query = query.lte('created_at', endDate);
      }
      
      if (intent) {
        query = query.eq('intent', intent);
      }
      
      if (sentiment) {
        query = query.eq('sentiment', sentiment);
      }

      const { data, error, count } = await query;
      
      if (error) throw error;
      
      // Calculate summary statistics
      const summary = {
        total: count || 0,
        byIntent: data?.reduce((acc, item) => {
          acc[item.intent] = (acc[item.intent] || 0) + 1;
          return acc;
        }, {} as Record<string, number>),
        bySentiment: data?.reduce((acc, item) => {
          acc[item.sentiment] = (acc[item.sentiment] || 0) + 1;
          return acc;
        }, {} as Record<string, number>),
        requiresFollowUp: data?.filter(item => item.requires_follow_up).length || 0,
      };

      return {
        data,
        summary,
      };
    } catch (error) {
      console.error('Error fetching aggregated analytics:', error);
      return { data: [], summary: null };
    }
  }
}

// Export a singleton instance
export const chatAnalyticsService = new ChatAnalyticsService();

// Initialize the service when the module is loaded
if (typeof window !== 'undefined') {
  chatAnalyticsService.initialize().catch(console.error);
}
