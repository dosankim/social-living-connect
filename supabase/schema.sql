-- ====================================================
-- 이집넷 (Ezipnet) Supabase Database Schema
-- Run these in the Supabase SQL Editor
-- ====================================================

-- 1. USER PROFILES
-- (Extends Supabase's built-in auth.users table)
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    email TEXT NOT NULL,
    name TEXT,
    avatar_url TEXT,
    is_resident BOOLEAN DEFAULT FALSE,  -- 입주자 인증 여부
    housing_id UUID,                     -- 입주 중인 주택 ID (추후 housing 테이블 추가 시)
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Auto-create profile when user signs up
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.profiles (id, email, name)
    VALUES (NEW.id, NEW.email, NEW.raw_user_meta_data->>'name');
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE OR REPLACE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- RLS: Each user can read their own profile; anyone can read public profiles
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "프로필 조회 허용" ON public.profiles FOR SELECT USING (TRUE);
CREATE POLICY "본인 프로필만 수정" ON public.profiles FOR UPDATE USING (auth.uid() = id);


-- 2. COMMUNITIES (모임)
CREATE TABLE IF NOT EXISTS public.communities (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    description TEXT,
    host_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
    category TEXT DEFAULT '원데이클래스',  -- e.g. 원데이클래스, 네트워킹, 취미모임
    location TEXT,
    image_url TEXT,
    date_time TIMESTAMPTZ,
    max_participants INTEGER DEFAULT 10,
    price INTEGER DEFAULT 0,
    discount_price INTEGER,               -- 입주민 할인가
    status TEXT DEFAULT 'open',           -- open | closed | cancelled
    created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.communities ENABLE ROW LEVEL SECURITY;
CREATE POLICY "모임 전체 조회" ON public.communities FOR SELECT USING (TRUE);
CREATE POLICY "로그인 사용자만 모임 생성" ON public.communities FOR INSERT WITH CHECK (auth.uid() = host_id);
CREATE POLICY "모임 주최자만 수정" ON public.communities FOR UPDATE USING (auth.uid() = host_id);


-- 3. COMMUNITY PARTICIPANTS (모임 참가)
CREATE TABLE IF NOT EXISTS public.community_participants (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    community_id UUID NOT NULL REFERENCES public.communities(id) ON DELETE CASCADE,
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    status TEXT DEFAULT 'confirmed',       -- confirmed | cancelled | waitlisted
    joined_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(community_id, user_id)          -- 중복 참가 방지
);

ALTER TABLE public.community_participants ENABLE ROW LEVEL SECURITY;
CREATE POLICY "참가자 목록 조회" ON public.community_participants FOR SELECT USING (TRUE);
CREATE POLICY "로그인 사용자만 참가 신청" ON public.community_participants FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "본인 참가만 취소 가능" ON public.community_participants FOR DELETE USING (auth.uid() = user_id);
