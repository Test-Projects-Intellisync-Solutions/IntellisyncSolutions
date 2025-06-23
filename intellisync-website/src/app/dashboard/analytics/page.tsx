import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/lib/supabase/client';
import ChatAnalyticsDashboard from '@/components/analytics/ChatAnalyticsDashboard';

export default function AnalyticsPage() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is authenticated
    const checkAuth = async () => {
      const { data: { session }, error } = await supabase.auth.getSession();
      
      if (error || !session) {
        navigate('/signin', { state: { from: '/dashboard/analytics' } });
        return;
      }
      
      // Fetch user role
      const { data: userData, error: roleError } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', session.user.id)
        .single();

      if (roleError || !userData) {
        console.error('Error fetching user role:', roleError);
        navigate('/dashboard?error=unauthorized');
        return;
      }
      
      // Check if user has required role
      if (!['admin', 'analyst'].includes(userData.role)) {
        navigate('/dashboard?error=unauthorized');
        return;
      }
      
      setLoading(false);
    };

    checkAuth();
  }, [navigate]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Chat Analytics</h1>
        <p className="text-muted-foreground">
          Insights and metrics from customer conversations
        </p>
      </div>
      
      <div className="space-y-6">
        <ChatAnalyticsDashboard />
      </div>
    </div>
  );
}
