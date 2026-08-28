/*
  # Create Links Table for MeowRacun Application

  ## Query Description: 
  This migration creates the core `links` table required by the MeowRacun application.
  It stores product/product link information with tracking capabilities.
  
  ## Metadata:
  - Schema-Category: Structural
  - Impact-Level: High
  - Requires-Backup: false
  - Reversible: true
  
  ## Structure Details:
  - Table: public.links
  - Columns: id, created_at, title, url, description, category, platform, image_url, clicks, is_active, is_pinned
  - Primary Key: id (uuid)
  - Indexes: created_at (descending for sorting)
  
  ## Security Implications:
  - RLS Status: Enabled
  - Policy Changes: Yes - Public read access, anonymous insert/update/delete
  - Auth Requirements: None (public access for this application)
  
  ## Performance Impact:
  - Indexes: Added on created_at for efficient sorting
  - Triggers: None
  - Estimated Impact: Low - Simple table structure
*/

-- Create the links table
CREATE TABLE IF NOT EXISTS public.links (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  title TEXT NOT NULL,
  url TEXT NOT NULL,
  description TEXT DEFAULT ''::TEXT,
  category TEXT DEFAULT 'Semua'::TEXT,
  platform TEXT DEFAULT 'Lainnya'::TEXT,
  image_url TEXT,
  clicks INTEGER DEFAULT 0 NOT NULL,
  is_active BOOLEAN DEFAULT true NOT NULL,
  is_pinned BOOLEAN DEFAULT false
);

-- Create index for efficient sorting by creation date
CREATE INDEX IF NOT EXISTS links_created_at_idx ON public.links (created_at DESC);

-- Enable Row Level Security
ALTER TABLE public.links ENABLE ROW LEVEL SECURITY;

-- Create policies for public access (required by MeowRacun app)
-- Allow public read access
CREATE POLICY "Allow public read access on links"
  ON public.links
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Allow anonymous insert
CREATE POLICY "Allow anonymous insert on links"
  ON public.links
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Allow anonymous update
CREATE POLICY "Allow anonymous update on links"
  ON public.links
  FOR UPDATE
  TO anon, authenticated
  USING (true)
  WITH CHECK (true);

-- Allow anonymous delete
CREATE POLICY "Allow anonymous delete on links"
  ON public.links
  FOR DELETE
  TO anon, authenticated
  USING (true);

/*
  # Create increment_clicks Function

  ## Query Description:
  This function increments the click counter for a specific link.
  Used when users click on product links to track popularity.
  
  ## Metadata:
  - Schema-Category: Safe
  - Impact-Level: Low
  - Requires-Backup: false
  - Reversible: true
  
  ## Structure Details:
  - Function: public.increment_clicks
  - Parameters: row_id (uuid)
  - Return Type: void
  
  ## Security Implications:
  - RLS Status: N/A (function)
  - Policy Changes: No
  - Auth Requirements: None - public function
  
  ## Performance Impact:
  - Indexes: N/A
  - Triggers: N/A
  - Estimated Impact: Minimal - single row update
*/

-- Create or replace the increment_clicks function
CREATE OR REPLACE FUNCTION public.increment_clicks(row_id UUID)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  UPDATE public.links
  SET clicks = clicks + 1
  WHERE id = row_id;
END;
$$;

-- Grant execute permission to anonymous and authenticated users
GRANT EXECUTE ON FUNCTION public.increment_clicks(UUID) TO anon;
GRANT EXECUTE ON FUNCTION public.increment_clicks(UUID) TO authenticated;
