import type { Request, Response } from 'express';

// ── Types ─────────────────────────────────────────────────────────
interface ContactPayload {
  name: string;
  email: string;
  message: string;
  subject?: string;
}

// ── Simple in-memory rate limiter ─────────────────────────────────
// Keyed by IP; allows MAX_SUBMISSIONS per window.
// Replace with express-rate-limit + Redis for production.
const MAX_SUBMISSIONS = 5;
const WINDOW_MS = 60 * 60 * 1000; // 1 hour
const submissionCounts = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = submissionCounts.get(ip);

  if (!record || now > record.resetAt) {
    submissionCounts.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }

  if (record.count >= MAX_SUBMISSIONS) return true;

  record.count += 1;
  return false;
}

// ── Helpers ───────────────────────────────────────────────────────
function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function sanitize(str: string): string {
  return str.trim().slice(0, 2000); // cap length, trim whitespace
}

// ── Controller ────────────────────────────────────────────────────

/**
 * POST /api/contact
 * Body: { name, email, message, subject? }
 */
export function submitContact(req: Request, res: Response): void {
  const ip = (req.headers['x-forwarded-for'] as string)?.split(',')[0] ?? req.socket.remoteAddress ?? 'unknown';

  if (isRateLimited(ip)) {
    res.status(429).json({
      success: false,
      message: 'Too many submissions. Please try again later.',
    });
    return;
  }

  const { name, email, message, subject } = req.body as Partial<ContactPayload>;

  // Validate required fields
  const errors: string[] = [];
  if (!name || name.trim().length < 2) errors.push('A valid name is required.');
  if (!email || !isValidEmail(email.trim())) errors.push('A valid email address is required.');
  if (!message || message.trim().length < 10) errors.push('Message must be at least 10 characters.');

  if (errors.length > 0) {
    res.status(400).json({ success: false, message: errors.join(' ') });
    return;
  }

  const payload = {
    name: sanitize(name!),
    email: email!.trim().toLowerCase(),
    message: sanitize(message!),
    subject: subject ? sanitize(subject) : 'General Enquiry',
    submittedAt: new Date().toISOString(),
    ip,
  };

  // TODO: Replace this block with your actual delivery method:
  //   - Send via nodemailer / SendGrid / Postmark
  //   - Insert into a DB submissions table
  //   - Forward to a CRM
  console.log('[contact] New submission:', payload);

  res.status(201).json({
    success: true,
    message: 'Thank you for reaching out. We will be in touch soon.',
  });
}
