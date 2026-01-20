/*
  # Ensure Public Access for Links Table
  
  ## Query Description:
  This migration explicitly grants full access (SELECT, INSERT, UPDATE, DELETE) to the 'links' table for public users (anon role).
  This is required because the application uses a client-side password ('ichabias') for authentication, 
  so the database connection itself is technically 'anonymous'.
  
  ## Metadata:
  - Schema-Category: "Permissions"
  - Impact-Level: "Medium" (Opens table to public, relies on client-side checks)
  - Requires-Backup: false
  - Reversible: true
  
  ## Security Implications:
  - RLS Status: Enabled but permissive (USING true)
  - Policy Changes: Recreates policies to ensure they are open.
*/

-- Ensure RLS is enabled
ALTER TABLE links ENABLE ROW LEVEL SECURITY;

-- Drop existing policies to avoid conflicts
DROP POLICY IF EXISTS "Enable read access for all users" ON links;
DROP POLICY IF EXISTS "Enable insert for all users" ON links;
DROP POLICY IF EXISTS "Enable update for all users" ON links;
DROP POLICY IF EXISTS "Enable delete for all users" ON links;
DROP POLICY IF EXISTS "Public Access" ON links;

-- Create permissive policies for anon/public usage
CREATE POLICY "Enable read access for all users" ON links FOR SELECT USING (true);
CREATE POLICY "Enable insert for all users" ON links FOR INSERT WITH CHECK (true);
CREATE POLICY "Enable update for all users" ON links FOR UPDATE USING (true);
CREATE POLICY "Enable delete for all users" ON links FOR DELETE USING (true);

-- Grant permissions to anon and authenticated roles explicitly
GRANT ALL ON TABLE links TO anon;
GRANT ALL ON TABLE links TO authenticated;
GRANT ALL ON TABLE links TO service_role;
