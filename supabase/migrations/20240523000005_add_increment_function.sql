-- Function to safely increment clicks without race conditions
create or replace function increment_clicks(row_id uuid)
returns void
language plpgsql
security definer
as $$
begin
  update links
  set clicks = clicks + 1
  where id = row_id;
end;
$$;
