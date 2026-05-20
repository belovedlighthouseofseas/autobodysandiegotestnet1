# Resend Setup — The One Thing You Need to Do

The custom email confirmation flow is built and deployed. The only piece missing is the email-sending API key. Once you set it, signup is fully self-serve.

## Why Resend?

- **Free tier:** 3,000 emails/month, 100/day. We need ~1 email per signup.
- **No credit card required.**
- **60-second signup:** email + password, done.
- **Works immediately** from `onboarding@resend.dev` (no domain verification needed for testing).

## Step 1 — Create a Resend account

1. Go to https://resend.com/signup
2. Sign up with `davidraymurillo@gmail.com` + a password
3. Confirm via email
4. You're in

## Step 2 — Grab an API key

1. In Resend dashboard → **API Keys** → **Create API Key**
2. Name: `AutoBody San Diego Admin`
3. Permission: `Sending access` (default)
4. Copy the key (starts with `re_…`)

## Step 3 — Add the key to Supabase as a secret

Either tell me the key and I'll set it via my Supabase MCP, OR do it yourself:

1. Go to https://supabase.com/dashboard/project/opwpvpxgjgdnfckhxzyu/settings/functions
2. Scroll to **Edge Function Secrets**
3. Click **Add new secret**
4. Name: `RESEND_API_KEY`
5. Value: paste your `re_…` key
6. Click **Save**

## Step 4 (optional) — Use a custom from-address

By default the verification email arrives from `onboarding@resend.dev` (Resend's shared address). That works fine for testing, but you can upgrade to send from `noreply@autobodysandiego.com`:

1. In Resend dashboard → **Domains** → **Add Domain**
2. Enter `autobodysandiego.com`
3. Add the DNS records Resend shows (SPF, DKIM, DMARC) — these go in your domain registrar's DNS settings
4. Once verified, add another Supabase secret: `RESEND_FROM` = `AutoBody San Diego <noreply@autobodysandiego.com>`

This is optional. The flow works fine without it.

## Step 5 — Test the flow

After the secret is set:

1. Go to https://autobodysandiego.com/admin/login
2. Type `davidraymurillo@gmail.com` + a password (8+ chars)
3. Click **Create Account (first time)**
4. Same tab transforms to "Enter your access code"
5. Open your inbox — there's an email from AutoBody San Diego (chrome logo, electric blue, 6-digit code in a big box)
6. Type the code into the 6 boxes on the page
7. Auto-advances after the 6th digit → branded "Welcome" success state → dashboard with welcome modal

No tab switching. No localhost redirects. No Supabase Site URL config touched.

## Why this works (and the old approach didn't)

The old flow used Supabase's built-in email confirmation:
- Supabase generated the email content (default template, no branding)
- The link in the email pointed to Supabase's "Site URL" config (which is `localhost:3000` by default and can only be changed in their dashboard)
- I cannot edit Supabase's email templates or Site URL config remotely — no MCP / SQL access to those

The new flow:
- Custom Supabase Edge Function generates a 6-digit code, stores a hash of it in the database
- Same Edge Function sends a branded email via Resend (template HTML is hardcoded in the function, fully under our control)
- Frontend has a 6-box OTP input — user types the code, never clicks a link, never leaves the tab
- Verify Edge Function checks the code, lets sign-in proceed

Everything Supabase auth-related (Site URL, email templates) is now bypassed. The user experience is entirely controlled by our code.
