-- Create chat_sessions table
drop table if exists public.chat_sessions cascade;
create table public.chat_sessions (
  id uuid not null default gen_random_uuid(),
  created_at timestamp with time zone not null default now(),
  updated_at timestamp with time zone not null default now(),
  user_id uuid references auth.users on delete cascade,
  user_agent text,
  ip_address inet,
  screen_resolution text,
  language text,
  page_url text,
  referrer text,
  metadata jsonb default '{}'::jsonb,
  primary key (id)
);

-- Enable RLS on chat_sessions
alter table public.chat_sessions enable row level security;

-- Create chat_messages table
drop table if exists public.chat_messages cascade;
create table public.chat_messages (
  id uuid not null default gen_random_uuid(),
  session_id uuid not null references public.chat_sessions on delete cascade,
  created_at timestamp with time zone not null default now(),
  role text not null check (role in ('user', 'assistant', 'system')),
  content text not null,
  message_order integer not null,
  metadata jsonb default '{}'::jsonb,
  primary key (id)
);

-- Create index for faster lookups by session_id
create index idx_chat_messages_session_id on public.chat_messages(session_id);

-- Enable RLS on chat_messages
alter table public.chat_messages enable row level security;

-- Create chat_analytics table
drop table if exists public.chat_analytics cascade;
create table public.chat_analytics (
  id uuid not null default gen_random_uuid(),
  message_id uuid not null references public.chat_messages on delete cascade,
  session_id uuid not null references public.chat_sessions on delete cascade,
  created_at timestamp with time zone not null default now(),
  intent text not null,
  sentiment text not null check (sentiment in ('positive', 'neutral', 'negative')),
  confidence float not null check (confidence >= 0 and confidence <= 1),
  topics text[] not null default '{}'::text[],
  requires_follow_up boolean not null default false,
  suggested_response text,
  metadata jsonb default '{}'::jsonb,
  primary key (id)
);

-- Create index for faster lookups by message_id and session_id
create index idx_chat_analytics_message_id on public.chat_analytics(message_id);
create index idx_chat_analytics_session_id on public.chat_analytics(session_id);
create index idx_chat_analytics_intent on public.chat_analytics(intent);
create index idx_chat_analytics_sentiment on public.chat_analytics(sentiment);

-- Enable RLS on chat_analytics
alter table public.chat_analytics enable row level security;

-- Create RLS policies for chat_sessions
create policy "Users can view their own chat sessions"
on public.chat_sessions for select
using (auth.uid() = user_id);

create policy "Users can insert their own chat sessions"
on public.chat_sessions for insert
with check (auth.role() = 'authenticated' and auth.uid() = user_id);

-- Create RLS policies for chat_messages
create policy "Users can view their own chat messages"
on public.chat_messages for select
using (
  exists (
    select 1 from public.chat_sessions cs 
    where cs.id = chat_messages.session_id and cs.user_id = auth.uid()
  )
);

create policy "Users can insert their own chat messages"
on public.chat_messages for insert
with check (
  exists (
    select 1 from public.chat_sessions cs 
    where cs.id = chat_messages.session_id and cs.user_id = auth.uid()
  )
);

-- Create RLS policies for chat_analytics
create policy "Users can view their own chat analytics"
on public.chat_analytics for select
using (
  exists (
    select 1 from public.chat_messages cm
    join public.chat_sessions cs on cm.session_id = cs.id
    where cm.id = chat_analytics.message_id and cs.user_id = auth.uid()
  )
);

-- Create function to update updated_at column
create or replace function public.update_updated_at_column()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

-- Create trigger for chat_sessions
create trigger update_chat_sessions_updated_at
before update on public.chat_sessions
for each row
execute function public.update_updated_at_column();

-- Create a function to get or create a chat session
create or replace function public.get_or_create_chat_session(
  p_user_id uuid,
  p_user_agent text default null,
  p_ip_address inet default null,
  p_screen_resolution text default null,
  p_language text default null,
  p_page_url text default null,
  p_referrer text default null,
  p_metadata jsonb default '{}'::jsonb
) returns uuid as $$
declare
  v_session_id uuid;
begin
  -- Try to find an existing session from the last 4 hours
  select id into v_session_id
  from public.chat_sessions
  where user_id = p_user_id
    and created_at > (now() - interval '4 hours')
  order by created_at desc
  limit 1;

  -- If no recent session exists, create a new one
  if v_session_id is null then
    insert into public.chat_sessions (
      user_id, 
      user_agent, 
      ip_address, 
      screen_resolution, 
      language, 
      page_url, 
      referrer, 
      metadata
    ) values (
      p_user_id, 
      p_user_agent, 
      p_ip_address, 
      p_screen_resolution, 
      p_language, 
      p_page_url, 
      p_referrer, 
      p_metadata
    )
    returning id into v_session_id;
  end if;

  return v_session_id;
end;
$$ language plpgsql security definer;

-- Grant execute permission to authenticated users
grant execute on function public.get_or_create_chat_session(uuid, text, inet, text, text, text, text, jsonb) to authenticated;
