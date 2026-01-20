-- Enable RLS but allow public access for this specific app use-case
-- Since we are using a client-side password ('ichabias'), we need the DB to accept requests from 'anon'
ALTER TABLE "public"."links" ENABLE ROW LEVEL SECURITY;

-- Drop existing policies to avoid conflicts
DROP POLICY IF EXISTS "Enable read access for all users" ON "public"."links";
DROP POLICY IF EXISTS "Enable insert for all users" ON "public"."links";
DROP POLICY IF EXISTS "Enable update for all users" ON "public"."links";
DROP POLICY IF EXISTS "Enable delete for all users" ON "public"."links";

-- Create permissive policies
CREATE POLICY "Enable read access for all users" ON "public"."links" FOR SELECT USING (true);
CREATE POLICY "Enable insert for all users" ON "public"."links" FOR INSERT WITH CHECK (true);
CREATE POLICY "Enable update for all users" ON "public"."links" FOR UPDATE USING (true);
CREATE POLICY "Enable delete for all users" ON "public"."links" FOR DELETE USING (true);

-- Ensure table has all required columns
ALTER TABLE "public"."links" ADD COLUMN IF NOT EXISTS "clicks" integer DEFAULT 0;
ALTER TABLE "public"."links" ADD COLUMN IF NOT EXISTS "is_active" boolean DEFAULT true;
ALTER TABLE "public"."links" ADD COLUMN IF NOT EXISTS "image_url" text;
ALTER TABLE "public"."links" ADD COLUMN IF NOT EXISTS "platform" text DEFAULT 'Lainnya';
ALTER TABLE "public"."links" ADD COLUMN IF NOT EXISTS "category" text DEFAULT 'Random Aja 🌈';
