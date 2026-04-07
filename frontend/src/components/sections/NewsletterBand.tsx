'use client';

import { useState } from 'react';
import { subscribeNewsletter } from '@/lib/api';
import styles from './NewsletterBand.module.css';

export default function NewsletterBand() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    try {
      const res = await subscribeNewsletter(email);
      if (res.success) {
        setStatus('success');
        setMessage('Thanks for subscribing!');
        setEmail('');
      } else {
        throw new Error(res.message);
      }
    } catch {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <section className={styles.band}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <span className={styles.icon} aria-hidden="true">✉️</span>
          <div className={styles.text}>
            <h2 className={styles.heading}>Stay Connected</h2>
            <p className={styles.subheading}>
              Subscribe to our newsletters for the latest updates about our work.
            </p>
          </div>
          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className={styles.input}
              required
              aria-label="Email address"
              disabled={status === 'loading' || status === 'success'}
            />
            <button
              type="submit"
              className={styles.submitBtn}
              disabled={status === 'loading' || status === 'success'}
            >
              {status === 'loading' ? 'Subscribing…' : 'Subscribe'}
            </button>
          </form>
          {message && (
            <p className={`${styles.feedback} ${status === 'error' ? styles.error : styles.success}`}>
              {message}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
