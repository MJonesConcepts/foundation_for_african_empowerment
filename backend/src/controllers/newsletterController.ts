import type { Request, Response } from 'express';

// ── In-memory subscriber store ────────────────────────────────────
// Replace with a real DB insert or a third-party ESP (Mailchimp, SendGrid, etc.)
const subscribers = new Set<string>();

// ── Helpers ───────────────────────────────────────────────────────
function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// ── Controllers ───────────────────────────────────────────────────

/**
 * POST /api/newsletter/subscribe
 * Body: { email: string }
 */
export function subscribe(req: Request, res: Response): void {
  const { email } = req.body as { email?: string };

  if (!email || typeof email !== 'string') {
    res.status(400).json({ success: false, message: 'Email is required.' });
    return;
  }

  const trimmed = email.trim().toLowerCase();

  if (!isValidEmail(trimmed)) {
    res.status(400).json({ success: false, message: 'Please provide a valid email address.' });
    return;
  }

  if (subscribers.has(trimmed)) {
    // Return 200 so the UI shows success — avoids leaking whether an email exists
    res.json({ success: true, message: 'You are already subscribed. Thank you!' });
    return;
  }

  subscribers.add(trimmed);

  // TODO: persist to DB / forward to ESP here
  console.log(`[newsletter] New subscriber: ${trimmed}`);

  res.status(201).json({
    success: true,
    message: 'Thank you for subscribing! You will hear from us soon.',
  });
}

/**
 * DELETE /api/newsletter/unsubscribe
 * Body: { email: string }
 */
export function unsubscribe(req: Request, res: Response): void {
  const { email } = req.body as { email?: string };

  if (!email || typeof email !== 'string') {
    res.status(400).json({ success: false, message: 'Email is required.' });
    return;
  }

  const trimmed = email.trim().toLowerCase();
  subscribers.delete(trimmed);

  res.json({ success: true, message: 'You have been unsubscribed.' });
}
