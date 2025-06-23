// Database types for Supabase tables

export interface Database {
  public: {
    Tables: {
      chat_sessions: {
        Row: {
          id: string;
          created_at: string;
          updated_at: string;
          user_id: string | null;
          user_agent: string | null;
          ip_address: string | null;
          screen_resolution: string | null;
          language: string | null;
          page_url: string | null;
          referrer: string | null;
          metadata: Record<string, any>;
        };
        Insert: {
          id?: string;
          created_at?: string;
          updated_at?: string;
          user_id?: string | null;
          user_agent?: string | null;
          ip_address?: string | null;
          screen_resolution?: string | null;
          language?: string | null;
          page_url?: string | null;
          referrer?: string | null;
          metadata?: Record<string, any>;
        };
        Update: {
          updated_at?: string;
          metadata?: Record<string, any>;
        };
      };

      chat_messages: {
        Row: {
          id: string;
          session_id: string;
          created_at: string;
          role: 'user' | 'assistant' | 'system';
          content: string;
          message_order: number;
          metadata: Record<string, any>;
        };
        Insert: {
          id?: string;
          session_id: string;
          created_at?: string;
          role: 'user' | 'assistant' | 'system';
          content: string;
          message_order: number;
          metadata?: Record<string, any>;
        };
        Update: {
          metadata?: Record<string, any>;
        };
      };

      chat_analytics: {
        Row: {
          id: string;
          message_id: string;
          session_id: string;
          created_at: string;
          intent: string;
          sentiment: 'positive' | 'neutral' | 'negative';
          confidence: number;
          topics: string[];
          requires_follow_up: boolean;
          suggested_response: string | null;
          metadata: Record<string, any>;
        };
        Insert: {
          id?: string;
          message_id: string;
          session_id: string;
          created_at?: string;
          intent: string;
          sentiment: 'positive' | 'neutral' | 'negative';
          confidence: number;
          topics?: string[];
          requires_follow_up?: boolean;
          suggested_response?: string | null;
          metadata?: Record<string, any>;
        };
        Update: {
          metadata?: Record<string, any>;
        };
      };
    };

    Functions: {
      get_or_create_chat_session: {
        Args: {
          p_user_id: string;
          p_user_agent?: string;
          p_ip_address?: string;
          p_screen_resolution?: string;
          p_language?: string;
          p_page_url?: string;
          p_referrer?: string;
          p_metadata?: Record<string, any>;
        };
        Returns: string;
      };
      update_updated_at_column: {
        Args: Record<string, never>;
        Returns: unknown;
      };
    };
  };
}

// Type aliases for easier reference
export type ChatSession = Database['public']['Tables']['chat_sessions']['Row'];
export type ChatMessage = Database['public']['Tables']['chat_messages']['Row'];
export type ChatAnalytic = Database['public']['Tables']['chat_analytics']['Row'];

// Type for the get_or_create_chat_session function arguments
export type GetOrCreateChatSessionArgs = [
  p_user_id: string,
  p_user_agent?: string,
  p_ip_address?: string,
  p_screen_resolution?: string,
  p_language?: string,
  p_page_url?: string,
  p_referrer?: string,
  p_metadata?: Record<string, any>
];
