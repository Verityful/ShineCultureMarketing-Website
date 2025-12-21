// Webhook utility for sending button click and interaction events

export interface WebhookEvent {
  event: string;
  timestamp: string;
  source: string;
  data?: Record<string, any>;
}

export const sendWebhookEvent = async (
  event: string,
  source: string,
  data?: Record<string, any>
): Promise<void> => {
  const webhookUrl = import.meta.env.VITE_WEBHOOK_URL;

  if (!webhookUrl) {
    console.warn('VITE_WEBHOOK_URL not configured. Event:', event, 'Source:', source, 'Data:', data);
    return;
  }

  try {
    const payload: WebhookEvent = {
      event,
      timestamp: new Date().toISOString(),
      source,
      ...(data && { data })
    };

    await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
  } catch (error) {
    console.error('Webhook notification error:', error);
    // Don't throw - we don't want webhook failures to break user experience
  }
};
