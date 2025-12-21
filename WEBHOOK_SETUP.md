# Webhook Setup Guide

This guide explains how to configure webhooks for your Shine Culture Marketing website to capture lead form submissions and button interactions.

## Quick Setup

1. **Create a `.env` file** in the root directory:
   ```bash
   cp .env.example .env
   ```

2. **Add your webhook URL** to the `.env` file:
   ```
   VITE_WEBHOOK_URL=https://your-webhook-endpoint.com/submit
   ```

3. **Restart your development server** to load the new environment variables:
   ```bash
   npm run dev
   ```

## Getting a Webhook URL

### Option 1: n8n (Recommended)
1. Create a new workflow in n8n
2. Add a "Webhook" trigger node
3. Set the HTTP Method to POST
4. Copy the Production URL
5. Paste it as your `VITE_WEBHOOK_URL`

### Option 2: Make.com (Integromat)
1. Create a new scenario
2. Add a "Webhooks" > "Custom webhook" module
3. Copy the webhook URL
4. Paste it as your `VITE_WEBHOOK_URL`

### Option 3: Zapier
1. Create a new Zap
2. Choose "Webhooks by Zapier" as the trigger
3. Select "Catch Hook"
4. Copy the webhook URL
5. Paste it as your `VITE_WEBHOOK_URL`

## Webhook Events

Your webhook will receive the following types of events:

### 1. Lead Form Submission
Sent when a user completes the lead funnel form.

**Source**: `lead_funnel_form`

**Payload**:
```json
{
  "businessType": "E-commerce",
  "followerCount": "",
  "bottleneck": "User's description...",
  "fullName": "John Doe",
  "businessName": "Acme Corp",
  "email": "john@acme.com",
  "phone": "+1 555-0000",
  "timestamp": "2024-01-15T10:30:00.000Z",
  "source": "lead_funnel_form"
}
```

### 2. CTA Button Clicks
Sent when users click Call-to-Action buttons.

**Sources**:
- `hero_start_automating` - "Start Automating" button in hero section
- `hero_how_it_works` - "How It Works" button in hero section
- `navbar_get_started_desktop` - "Get Started" button in navigation (desktop)
- `navbar_get_started_mobile` - "Get Started" button in navigation (mobile)

**Payload**:
```json
{
  "event": "cta_clicked",
  "timestamp": "2024-01-15T10:30:00.000Z",
  "source": "hero_start_automating",
  "data": {
    "buttonText": "Start Automating"
  }
}
```

## Testing Your Webhook

1. Start your development server with `npm run dev`
2. Open the website in your browser
3. Click a CTA button or submit the lead form
4. Check your webhook platform (n8n, Make.com, etc.) to see if the data was received

## Troubleshooting

### Webhook not receiving data
- Verify `VITE_WEBHOOK_URL` is set in your `.env` file
- Restart your dev server after changing `.env`
- Check browser console for any errors
- Verify your webhook URL is accessible and accepts POST requests

### CORS errors
- Ensure your webhook endpoint allows requests from your domain
- For n8n, Make.com, and Zapier, CORS is typically handled automatically

## Production Deployment

When deploying to production:
1. Set the `VITE_WEBHOOK_URL` environment variable in your hosting platform
2. Do NOT commit your `.env` file to version control
3. Ensure your webhook endpoint is production-ready and can handle traffic

## Security Notes

- Never expose sensitive webhook URLs in client-side code
- Use environment variables for all webhook URLs
- Consider adding authentication headers if your webhook supports them
- Monitor your webhook endpoint for unusual activity
