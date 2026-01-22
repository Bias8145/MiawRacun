-- Add image_url column to links table
ALTER TABLE links ADD COLUMN IF NOT EXISTS image_url text;
