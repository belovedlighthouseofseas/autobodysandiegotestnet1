# Supabase Email Templates — AutoBody San Diego

Branded HTML for the 4 auth emails Supabase sends. Paste these into the Supabase dashboard so confirmation / reset / magic-link / change-email emails look like AutoBody San Diego instead of the generic Supabase default.

## Where to paste

1. Open **https://supabase.com/dashboard/project/opwpvpxgjgdnfckhxzyu/auth/templates**
2. For each template below, click its row in the left sidebar
3. Update the **Subject** field
4. Paste the HTML into the **Message Body** field
5. Click **Save changes** at the bottom

Templates to update: **Confirm signup**, **Reset password**, **Magic Link**, **Change Email Address**.

The variables Supabase fills in (`{{ .ConfirmationURL }}`, `{{ .Email }}`, `{{ .Token }}`, `{{ .SiteURL }}`) are documented at https://supabase.com/docs/guides/auth/auth-email-templates

---

## 1) Confirm signup

**Subject:**
```
Confirm your AutoBody San Diego admin account
```

**Message Body:**
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Confirm your AutoBody San Diego admin account</title>
</head>
<body style="margin:0;padding:0;background:#050505;font-family:'Helvetica Neue',Arial,sans-serif;color:#F2F4F7;">
  <table width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#050505;padding:32px 12px;">
    <tr><td align="center">
      <table width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:560px;background:#0B0F14;border:1px solid #1B2230;border-radius:6px;overflow:hidden;">

        <tr><td align="center" style="padding:32px 32px 24px;background:#050505;border-bottom:1px solid #1B2230;">
          <img src="https://autobodysandiego.com/assets/logo.png" alt="AutoBody San Diego" width="220" style="display:block;max-width:220px;height:auto;">
        </td></tr>

        <tr><td style="padding:32px 32px 0;">
          <p style="margin:0;color:#00AEEF;font-size:11px;letter-spacing:2.4px;text-transform:uppercase;font-weight:600;">Admin Account · Confirmation</p>
        </td></tr>

        <tr><td style="padding:8px 32px 16px;">
          <h1 style="margin:0;color:#F2F4F7;font-size:28px;line-height:1.2;font-weight:700;letter-spacing:-0.5px;">Confirm your admin email.</h1>
        </td></tr>

        <tr><td style="padding:0 32px;color:#9AA4B2;font-size:15px;line-height:1.6;">
          <p style="margin:0 0 16px;">You just created the admin account for the AutoBody San Diego lead-intake dashboard. Confirm your email below to finish setup and access the portal.</p>
        </td></tr>

        <tr><td align="center" style="padding:24px 32px 8px;">
          <a href="{{ .ConfirmationURL }}" style="display:inline-block;background:#009DFF;color:#ffffff;font-size:15px;font-weight:700;text-decoration:none;padding:14px 28px;border-radius:2px;letter-spacing:0.4px;font-family:'Helvetica Neue',Arial,sans-serif;">Confirm Email &amp; Continue &rarr;</a>
        </td></tr>

        <tr><td style="padding:16px 32px 32px;color:#6B7585;font-size:12px;line-height:1.6;">
          <p style="margin:0 0 8px;">If the button doesn't work, paste this URL into your browser:</p>
          <p style="margin:0;word-break:break-all;"><a href="{{ .ConfirmationURL }}" style="color:#00AEEF;text-decoration:none;">{{ .ConfirmationURL }}</a></p>
        </td></tr>

        <tr><td style="padding:0 32px 32px;border-top:1px solid #1B2230;">
          <p style="margin:24px 0 12px;color:#F2F4F7;font-size:12px;letter-spacing:1.8px;text-transform:uppercase;font-weight:600;">What this gets you</p>
          <table cellspacing="0" cellpadding="0" border="0" width="100%">
            <tr><td style="padding:6px 0;color:#9AA4B2;font-size:14px;line-height:1.5;"><span style="color:#00AEEF;margin-right:8px;">&#9656;</span>Live lead intake dashboard at <a href="https://autobodysandiego.com/admin" style="color:#00AEEF;text-decoration:none;">autobodysandiego.com/admin</a></td></tr>
            <tr><td style="padding:6px 0;color:#9AA4B2;font-size:14px;line-height:1.5;"><span style="color:#00AEEF;margin-right:8px;">&#9656;</span>Bumper &middot; Paint &middot; Collision &middot; Insurance routing</td></tr>
            <tr><td style="padding:6px 0;color:#9AA4B2;font-size:14px;line-height:1.5;"><span style="color:#00AEEF;margin-right:8px;">&#9656;</span>Photo uploads, vehicle details, contact preferences</td></tr>
            <tr><td style="padding:6px 0;color:#9AA4B2;font-size:14px;line-height:1.5;"><span style="color:#00AEEF;margin-right:8px;">&#9656;</span>Reply to customers from your Gmail</td></tr>
          </table>
        </td></tr>

        <tr><td align="center" style="padding:24px 32px;background:#050505;border-top:1px solid #1B2230;">
          <p style="margin:0 0 6px;color:#F2F4F7;font-size:13px;font-weight:700;letter-spacing:2px;">AUTOBODY SAN DIEGO</p>
          <p style="margin:0;color:#6B7585;font-size:10px;letter-spacing:1.2px;text-transform:uppercase;">Collision &middot; Paint &middot; Bumper &middot; Insurance Help</p>
          <p style="margin:18px 0 0;color:#6B7585;font-size:11px;line-height:1.5;">You're receiving this because someone (probably you) created an admin account at autobodysandiego.com. If this wasn't you, ignore this email.</p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>
```

---

## 2) Reset password

**Subject:**
```
Reset your AutoBody San Diego admin password
```

**Message Body:**
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Reset your AutoBody San Diego password</title>
</head>
<body style="margin:0;padding:0;background:#050505;font-family:'Helvetica Neue',Arial,sans-serif;color:#F2F4F7;">
  <table width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#050505;padding:32px 12px;">
    <tr><td align="center">
      <table width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:560px;background:#0B0F14;border:1px solid #1B2230;border-radius:6px;overflow:hidden;">

        <tr><td align="center" style="padding:32px 32px 24px;background:#050505;border-bottom:1px solid #1B2230;">
          <img src="https://autobodysandiego.com/assets/logo.png" alt="AutoBody San Diego" width="220" style="display:block;max-width:220px;height:auto;">
        </td></tr>

        <tr><td style="padding:32px 32px 0;">
          <p style="margin:0;color:#00AEEF;font-size:11px;letter-spacing:2.4px;text-transform:uppercase;font-weight:600;">Admin Account &middot; Password Reset</p>
        </td></tr>

        <tr><td style="padding:8px 32px 16px;">
          <h1 style="margin:0;color:#F2F4F7;font-size:28px;line-height:1.2;font-weight:700;letter-spacing:-0.5px;">Reset your password.</h1>
        </td></tr>

        <tr><td style="padding:0 32px;color:#9AA4B2;font-size:15px;line-height:1.6;">
          <p style="margin:0 0 16px;">Someone requested a password reset for the AutoBody San Diego admin account. Click below to set a new password. The link expires in one hour.</p>
        </td></tr>

        <tr><td align="center" style="padding:24px 32px 8px;">
          <a href="{{ .ConfirmationURL }}" style="display:inline-block;background:#009DFF;color:#ffffff;font-size:15px;font-weight:700;text-decoration:none;padding:14px 28px;border-radius:2px;letter-spacing:0.4px;font-family:'Helvetica Neue',Arial,sans-serif;">Reset Password &rarr;</a>
        </td></tr>

        <tr><td style="padding:16px 32px 32px;color:#6B7585;font-size:12px;line-height:1.6;">
          <p style="margin:0 0 8px;">If the button doesn't work, paste this URL into your browser:</p>
          <p style="margin:0;word-break:break-all;"><a href="{{ .ConfirmationURL }}" style="color:#00AEEF;text-decoration:none;">{{ .ConfirmationURL }}</a></p>
          <p style="margin:18px 0 0;">If you didn't request this, ignore the email &mdash; your password stays the same.</p>
        </td></tr>

        <tr><td align="center" style="padding:24px 32px;background:#050505;border-top:1px solid #1B2230;">
          <p style="margin:0 0 6px;color:#F2F4F7;font-size:13px;font-weight:700;letter-spacing:2px;">AUTOBODY SAN DIEGO</p>
          <p style="margin:0;color:#6B7585;font-size:10px;letter-spacing:1.2px;text-transform:uppercase;">Collision &middot; Paint &middot; Bumper &middot; Insurance Help</p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>
```

---

## 3) Magic Link

**Subject:**
```
Your AutoBody San Diego admin sign-in link
```

**Message Body:**
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Your AutoBody San Diego sign-in link</title>
</head>
<body style="margin:0;padding:0;background:#050505;font-family:'Helvetica Neue',Arial,sans-serif;color:#F2F4F7;">
  <table width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#050505;padding:32px 12px;">
    <tr><td align="center">
      <table width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:560px;background:#0B0F14;border:1px solid #1B2230;border-radius:6px;overflow:hidden;">

        <tr><td align="center" style="padding:32px 32px 24px;background:#050505;border-bottom:1px solid #1B2230;">
          <img src="https://autobodysandiego.com/assets/logo.png" alt="AutoBody San Diego" width="220" style="display:block;max-width:220px;height:auto;">
        </td></tr>

        <tr><td style="padding:32px 32px 0;">
          <p style="margin:0;color:#00AEEF;font-size:11px;letter-spacing:2.4px;text-transform:uppercase;font-weight:600;">Admin Sign-In Link</p>
        </td></tr>

        <tr><td style="padding:8px 32px 16px;">
          <h1 style="margin:0;color:#F2F4F7;font-size:28px;line-height:1.2;font-weight:700;letter-spacing:-0.5px;">Sign in to the admin portal.</h1>
        </td></tr>

        <tr><td style="padding:0 32px;color:#9AA4B2;font-size:15px;line-height:1.6;">
          <p style="margin:0 0 16px;">Click below to sign in to the AutoBody San Diego admin dashboard. The link expires in one hour.</p>
        </td></tr>

        <tr><td align="center" style="padding:24px 32px 8px;">
          <a href="{{ .ConfirmationURL }}" style="display:inline-block;background:#009DFF;color:#ffffff;font-size:15px;font-weight:700;text-decoration:none;padding:14px 28px;border-radius:2px;letter-spacing:0.4px;font-family:'Helvetica Neue',Arial,sans-serif;">Sign In &rarr;</a>
        </td></tr>

        <tr><td style="padding:16px 32px 32px;color:#6B7585;font-size:12px;line-height:1.6;">
          <p style="margin:0 0 8px;">If the button doesn't work, paste this URL into your browser:</p>
          <p style="margin:0;word-break:break-all;"><a href="{{ .ConfirmationURL }}" style="color:#00AEEF;text-decoration:none;">{{ .ConfirmationURL }}</a></p>
        </td></tr>

        <tr><td align="center" style="padding:24px 32px;background:#050505;border-top:1px solid #1B2230;">
          <p style="margin:0 0 6px;color:#F2F4F7;font-size:13px;font-weight:700;letter-spacing:2px;">AUTOBODY SAN DIEGO</p>
          <p style="margin:0;color:#6B7585;font-size:10px;letter-spacing:1.2px;text-transform:uppercase;">Collision &middot; Paint &middot; Bumper &middot; Insurance Help</p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>
```

---

## 4) Change Email Address

**Subject:**
```
Confirm your new AutoBody San Diego admin email
```

**Message Body:**
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Confirm your new AutoBody San Diego admin email</title>
</head>
<body style="margin:0;padding:0;background:#050505;font-family:'Helvetica Neue',Arial,sans-serif;color:#F2F4F7;">
  <table width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#050505;padding:32px 12px;">
    <tr><td align="center">
      <table width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:560px;background:#0B0F14;border:1px solid #1B2230;border-radius:6px;overflow:hidden;">

        <tr><td align="center" style="padding:32px 32px 24px;background:#050505;border-bottom:1px solid #1B2230;">
          <img src="https://autobodysandiego.com/assets/logo.png" alt="AutoBody San Diego" width="220" style="display:block;max-width:220px;height:auto;">
        </td></tr>

        <tr><td style="padding:32px 32px 0;">
          <p style="margin:0;color:#00AEEF;font-size:11px;letter-spacing:2.4px;text-transform:uppercase;font-weight:600;">Admin Account &middot; Email Change</p>
        </td></tr>

        <tr><td style="padding:8px 32px 16px;">
          <h1 style="margin:0;color:#F2F4F7;font-size:28px;line-height:1.2;font-weight:700;letter-spacing:-0.5px;">Confirm your new email.</h1>
        </td></tr>

        <tr><td style="padding:0 32px;color:#9AA4B2;font-size:15px;line-height:1.6;">
          <p style="margin:0 0 16px;">A request was made to change the admin email on the AutoBody San Diego portal. Confirm the change below to finish.</p>
        </td></tr>

        <tr><td align="center" style="padding:24px 32px 8px;">
          <a href="{{ .ConfirmationURL }}" style="display:inline-block;background:#009DFF;color:#ffffff;font-size:15px;font-weight:700;text-decoration:none;padding:14px 28px;border-radius:2px;letter-spacing:0.4px;font-family:'Helvetica Neue',Arial,sans-serif;">Confirm Email Change &rarr;</a>
        </td></tr>

        <tr><td style="padding:16px 32px 32px;color:#6B7585;font-size:12px;line-height:1.6;">
          <p style="margin:0 0 8px;">If the button doesn't work, paste this URL into your browser:</p>
          <p style="margin:0;word-break:break-all;"><a href="{{ .ConfirmationURL }}" style="color:#00AEEF;text-decoration:none;">{{ .ConfirmationURL }}</a></p>
          <p style="margin:18px 0 0;">If you didn't request this change, ignore the email.</p>
        </td></tr>

        <tr><td align="center" style="padding:24px 32px;background:#050505;border-top:1px solid #1B2230;">
          <p style="margin:0 0 6px;color:#F2F4F7;font-size:13px;font-weight:700;letter-spacing:2px;">AUTOBODY SAN DIEGO</p>
          <p style="margin:0;color:#6B7585;font-size:10px;letter-spacing:1.2px;text-transform:uppercase;">Collision &middot; Paint &middot; Bumper &middot; Insurance Help</p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>
```

---

## Also do this on the same page (one-time)

Open **https://supabase.com/dashboard/project/opwpvpxgjgdnfckhxzyu/auth/url-configuration**

- **Site URL**: `https://autobodysandiego.com`
- **Redirect URLs**: add `https://autobodysandiego.com/**`
- Click **Save**

This ensures the `{{ .ConfirmationURL }}` in every email above lands back on the live site instead of `localhost:3000`.

## Then sign up again

1. Visit https://autobodysandiego.com/admin/login
2. Enter `davidraymurillo@gmail.com` + a password (8+ chars)
3. Click **Create Account**
4. Check your email — the confirmation will be branded as AutoBody San Diego
5. Click the link → it returns you to the live admin login
6. Sign in → land on the dashboard
