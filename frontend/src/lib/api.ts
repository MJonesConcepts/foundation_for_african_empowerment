const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:4000';

// Generic fetch wrapper with error handling
async function apiFetch<T>(
  path: string,
  options?: RequestInit
): Promise<T> {
  const url = `${API_BASE}${path}`;
  const res = await fetch(url, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });

  if (!res.ok) {
    throw new Error(`API error ${res.status}: ${res.statusText}`);
  }

  return res.json() as Promise<T>;
}

// =============================================
// NEWS
// =============================================
export async function fetchNews(limit = 4) {
  return apiFetch<{ data: unknown[] }>(`/api/news?limit=${limit}`);
}

// =============================================
// NEWSLETTER SUBSCRIPTION
// =============================================
export async function subscribeNewsletter(email: string) {
  return apiFetch<{ success: boolean; message: string }>('/api/newsletter/subscribe', {
    method: 'POST',
    body: JSON.stringify({ email }),
  });
}

// =============================================
// CONTACT FORM
// =============================================
export async function submitContactForm(payload: {
  name: string;
  email: string;
  message: string;
}) {
  return apiFetch<{ success: boolean; message: string }>('/api/contact', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}
