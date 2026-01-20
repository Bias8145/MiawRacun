/*
  # Allow Public Access for Client-Side Admin
  
  Since the user requested a simple "password-only" login without Supabase Auth,
  we need to allow the client (which acts as 'anon') to perform CRUD operations
  on the 'links' table.
  
  WARNING: This makes the table publicly writable by anyone with the anon key
  who knows the API endpoint. This is implemented strictly per user request
  for "simple login" without backend auth complexity.
*/

-- Enable RLS (if not already enabled)
ALTER TABLE links ENABLE ROW LEVEL SECURITY;

-- Create policy to allow ALL operations for anon users
-- This allows the "ichabias" client-side password logic to actually save data to the DB
CREATE POLICY "Allow public access for links"
ON links
FOR ALL
TO anon
USING (true)
WITH CHECK (true);
