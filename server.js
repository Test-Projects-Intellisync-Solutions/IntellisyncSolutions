// server.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import OpenAI from 'openai';

// Load environment variables from .env
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json({ limit: '5mb' }));

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Streaming endpoint for GPT-4.1-nano
app.post('/api/ai/stream', async (req, res) => {
  try {
    const { messages, max_tokens, temperature } = req.body;
    if (!Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: 'messages array required' });
    }

    // --- Event context handling ---
    let processedMessages = [];
    let eventContext = null;
    try {
      // Find event message if present
      const systemMsg = messages.find(m => m.role === 'system');
      const eventMsg = messages.find(m => m.role === 'event');
      const userMsg = messages.find(m => m.role === 'user');

      if (eventMsg && typeof eventMsg.content === 'string' && eventMsg.content.trim()) {
        eventContext = eventMsg.content.trim();
        console.log('[AI Stream] Received event context:', eventContext);
      }

      // Build messages array for OpenAI API
      processedMessages = [];
      if (systemMsg) processedMessages.push(systemMsg);
      if (eventContext) {
        // Prepend event context as a user message with clear separator
        processedMessages.push({
          role: 'user',
          content: `---\n[EVENT CONTEXT]\n${eventContext}\n---`
        });
      }
      if (userMsg) processedMessages.push(userMsg);
    } catch (err) {
      console.error('[AI Stream] Error processing event context:', err);
      // Fallback: use original messages
      processedMessages = messages;
    }

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    const stream = await openai.chat.completions.create({
      model: 'gpt-4.1-nano',
      messages: processedMessages,
      max_tokens: 10000,
      temperature: temperature ?? 0.7,
      stream: true,
    });

    for await (const chunk of stream) {
      const content = chunk.choices?.[0]?.delta?.content;
      if (content) {
        res.write(`data: ${JSON.stringify(content)}\n\n`);
      }
    }
    res.write('event: done\ndata: END\n\n');
    res.end();
  } catch (error) {
    console.error('[AI Stream] Streaming error:', error);
    res.write(`event: error\ndata: ${JSON.stringify(error.message)}\n\n`);
    res.end();
  }
});

app.listen(PORT, () => {
  console.log(`Express server running on http://localhost:${PORT}`);
});
