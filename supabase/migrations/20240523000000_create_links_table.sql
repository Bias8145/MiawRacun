/*
  # Create Links Table for Affiliate App

  ## Query Description:
  Creates a table to store affiliate links with support for categories, platforms, and click tracking.
  
  ## Metadata:
  - Schema-Category: "Data"
  - Impact-Level: "Medium"
  - Requires-Backup: false
  - Reversible: true
  
  ## Structure Details:
  - Table: public.links
  - Columns: id, title, url, description, category, platform, image_url, clicks, created_at
  
  ## Security Implications:
  - RLS enabled but policies allow public read access (for the linktree nature).
  - Write access will be restricted via application logic (password gate), but for this specific request, we'll allow anon inserts/updates to support the "simple password" requirement without complex auth users.
*/

CREATE TABLE IF NOT EXISTS public.links (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMPTZ DEFAULT now(),
    title TEXT NOT NULL,
    url TEXT NOT NULL,
    description TEXT,
    category TEXT DEFAULT 'General',
    platform TEXT DEFAULT 'Other',
    image_url TEXT,
    clicks INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT true
);

-- Enable RLS
ALTER TABLE public.links ENABLE ROW LEVEL SECURITY;

-- Create policies
-- Allow everyone to read links (it's a public linktree)
CREATE POLICY "Allow public read access" ON public.links
    FOR SELECT USING (true);

-- Allow everyone to insert/update/delete (Protected by client-side password gate as requested)
-- Note: In a strict production env, we'd use Auth, but per user request for "simple password only", we open the DB gate and lock the UI gate.
CREATE POLICY "Allow public write access" ON public.links
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public update access" ON public.links
    FOR UPDATE USING (true);

CREATE POLICY "Allow public delete access" ON public.links
    FOR DELETE USING (true);
