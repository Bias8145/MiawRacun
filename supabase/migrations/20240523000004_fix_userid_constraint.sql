-- Make user_id nullable to support "ichabias" simple login
ALTER TABLE links ALTER COLUMN user_id DROP NOT NULL;

-- Ensure RLS policies don't block null user_ids
DROP POLICY IF EXISTS "Allow public insert" ON links;
CREATE POLICY "Allow public insert" ON links FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "Allow public update" ON links;
CREATE POLICY "Allow public update" ON links FOR UPDATE USING (true);

DROP POLICY IF EXISTS "Allow public delete" ON links;
CREATE POLICY "Allow public delete" ON links FOR DELETE USING (true);
