import { useState, useEffect, useCallback } from 'react';
import { Database } from '../types/supabase';

type AnalyticsQueryParams = {
  startDate?: string;
  endDate?: string;
  intent?: string;
  sentiment?: 'positive' | 'neutral' | 'negative';
  limit?: number;
  offset?: number;
};

type AnalyticsResponse = {
  data: Array<Database['public']['Tables']['chat_analytics']['Row'] & {
    chat_messages: {
      content: string;
      role: string;
      created_at: string;
      metadata: Record<string, any>;
    };
  }>;
  summary: {
    total: number;
    byIntent: Record<string, number>;
    bySentiment: Record<string, number>;
    requiresFollowUp: number;
  } | null;
  pagination: {
    total: number;
    limit: number;
    offset: number;
  };
  error?: string;
  loading: boolean;
};

export function useChatAnalytics({
  startDate,
  endDate,
  intent,
  sentiment,
  limit = 100,
  offset = 0,
  autoFetch = true,
}: AnalyticsQueryParams & { autoFetch?: boolean } = {}) {
  const [state, setState] = useState<Omit<AnalyticsResponse, 'refetch'>>({
    data: [],
    summary: null,
    pagination: {
      total: 0,
      limit,
      offset,
    },
    loading: false,
  });

  const fetchAnalytics = useCallback(async () => {
    setState(prev => ({ ...prev, loading: true }));
    
    try {
      const params = new URLSearchParams();
      
      if (startDate) params.set('startDate', startDate);
      if (endDate) params.set('endDate', endDate);
      if (intent) params.set('intent', intent);
      if (sentiment) params.set('sentiment', sentiment);
      if (limit) params.set('limit', limit.toString());
      if (offset) params.set('offset', offset.toString());

      const response = await fetch(`/api/chat/analytics?${params.toString()}`);
      
      if (!response.ok) {
        const error = await response.json().catch(() => ({}));
        throw new Error(error.message || 'Failed to fetch analytics');
      }

      const result = await response.json();
      
      setState({
        data: result.data || [],
        summary: result.summary || null,
        pagination: result.pagination || {
          total: 0,
          limit,
          offset,
        },
        loading: false,
      });
      
      return result;
    } catch (error) {
      console.error('Error fetching analytics:', error);
      setState(prev => ({
        ...prev,
        error: error instanceof Error ? error.message : 'Failed to fetch analytics',
        loading: false,
      }));
      throw error;
    }
  }, [startDate, endDate, intent, sentiment, limit, offset]);

  useEffect(() => {
    if (autoFetch) {
      fetchAnalytics();
    }
  }, [fetchAnalytics, autoFetch]);

  return {
    ...state,
    refetch: fetchAnalytics,
  };
}

// Hook to get analytics summary (counts by intent, sentiment, etc.)
export function useAnalyticsSummary() {
  const [summary, setSummary] = useState<{
    total: number;
    byIntent: Record<string, number>;
    bySentiment: Record<string, number>;
    requiresFollowUp: number;
  } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchSummary = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch('/api/chat/analytics?limit=0');
      
      if (!response.ok) {
        const error = await response.json().catch(() => ({}));
        throw new Error(error.message || 'Failed to fetch analytics summary');
      }

      const result = await response.json();
      setSummary(result.summary);
      return result.summary;
    } catch (error) {
      console.error('Error fetching analytics summary:', error);
      setError(error instanceof Error ? error.message : 'Failed to fetch analytics summary');
      throw error;
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchSummary();
  }, [fetchSummary]);

  return {
    summary,
    loading,
    error,
    refetch: fetchSummary,
  };
}
