import Link from 'next/link';
import { FOOTER_COLUMNS, SOCIAL_LINKS } from '@/lib/constants';
import LogoSvg from '@/components/icons/LogoSvg';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* ── Nav Columns ─────────────────────────────────── */}
        <div className={styles.columns}>
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.heading} className={styles.col}>
              <h6 className={styles.colHeading}>
                {col.href ? (
                  <Link href={col.href}>{col.heading}</Link>
                ) : (
                  col.heading
                )}
              </h6>
              <ul className={styles.colList}>
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={styles.colLink}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className={styles.divider} />

        {/* ── Bottom Row ──────────────────────────────────── */}
        <div className={styles.bottomRow}>
          <Link href="/" aria-label="Teach For All Home" className={styles.footerLogo}>
            <LogoSvg variant="white" />
          </Link>

          <p className={styles.copyright}>
            © {year} Teach For All —{' '}
            <Link href="/privacy-policy">Privacy Policy</Link>
            {' '}|{' '}
            <Link href="/financials">Financials</Link>
          </p>

          <div className={styles.social}>
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.platform}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.platform}
                className={styles.socialLink}
              >
                {/* Replace with proper icon library or SVGs */}
                {s.icon === 'facebook' && 'f'}
                {s.icon === 'x-twitter' && '𝕏'}
                {s.icon === 'instagram' && '◎'}
                {s.icon === 'linkedin' && 'in'}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
