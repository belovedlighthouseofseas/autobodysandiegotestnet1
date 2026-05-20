/*
 * AutoBody San Diego — Supabase client config
 *
 * Public URL + anon publishable key. These are safe to expose; Row-Level
 * Security policies on the leads table and the lead-photos storage bucket
 * enforce that:
 *   - Anonymous visitors can INSERT new leads (the public quote form) and
 *     UPLOAD photos to the lead-photos bucket.
 *   - Reading leads / reading photos / updating lead status is restricted
 *     to authenticated users whose email is on the admin allowlist
 *     (see Supabase migration scope_admin_to_email_allowlist).
 *
 * Loads Supabase via UMD bundle from the CDN — no build step required.
 */
window.SUPABASE_CONFIG = {
  url: 'https://opwpvpxgjgdnfckhxzyu.supabase.co',
  // Legacy anon JWT — RLS policies use `to anon` which requires this
  // role explicitly in the JWT claims. The newer publishable key flavour
  // (`sb_publishable_*`) maps differently and was hitting RLS errors on
  // the public form INSERTs. Both keys are public and safe to expose.
  anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9wd3B2cHhnamdkbmZja2h4enl1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkxNzEzMzgsImV4cCI6MjA5NDc0NzMzOH0.HoHIo9Fg8kJ3nZgbWjWsQ1p4fNHAmhZ9VfA3eXLhRSA',
  photosBucket: 'lead-photos',
};

// Initialise the Supabase singleton once the UMD bundle has loaded.
// Pages can rely on window.sb being available after the supabase-js script.
window.initSupabase = function () {
  if (window.sb) return window.sb;
  if (!window.supabase || !window.supabase.createClient) return null;
  window.sb = window.supabase.createClient(
    window.SUPABASE_CONFIG.url,
    window.SUPABASE_CONFIG.anonKey,
    {
      auth: { persistSession: true, autoRefreshToken: true },
    }
  );
  return window.sb;
};
