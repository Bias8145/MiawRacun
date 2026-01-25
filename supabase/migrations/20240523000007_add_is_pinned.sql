/*
  # Add is_pinned column
  Adds a boolean column to track pinned links.

  ## Metadata:
  - Schema-Category: "Structural"
  - Impact-Level: "Low"
  - Requires-Backup: false
  - Reversible: true

  ## Structure Details:
  - Table: links
  - Column: is_pinned (boolean, default false)
*/

ALTER TABLE links ADD COLUMN IF NOT EXISTS is_pinned BOOLEAN DEFAULT false;
