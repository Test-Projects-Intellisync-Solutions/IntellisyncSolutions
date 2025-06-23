// This file helps TypeScript understand the @/ path aliases

// Type for the Supabase database
declare module '@/types/supabase' {
  import { Database as SupabaseDatabase } from './types/supabase';
  export type Database = SupabaseDatabase;
  const Database: SupabaseDatabase;
  export default Database;
}

// Add module declarations for specific paths
declare module '@/lib/supabase/client' {
  import { SupabaseClient } from '@supabase/supabase-js';
  export const supabase: SupabaseClient;
  export const createClient: () => SupabaseClient;
  export type { SupabaseClient };
}

declare module '@/components/analytics/ChatAnalyticsDashboard' {
  import { FC } from 'react';
  const ChatAnalyticsDashboard: FC;
  export default ChatAnalyticsDashboard;
}
