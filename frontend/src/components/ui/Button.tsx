import Link from 'next/link';
import type { ReactNode } from 'react';
import styles from './Button.module.css';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'donate' | 'card';

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
  target?: string;
  rel?: string;
  ariaLabel?: string;
}

export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  type = 'button',
  disabled,
  className = '',
  target,
  rel,
  ariaLabel,
}: ButtonProps) {
  const cls = `${styles.btn} ${styles[variant]} ${className}`.trim();

  if (href) {
    const isExternal = href.startsWith('http');
    return (
      <Link
        href={href}
        className={cls}
        target={target ?? (isExternal ? '_blank' : undefined)}
        rel={rel ?? (isExternal ? 'noopener noreferrer' : undefined)}
        aria-label={ariaLabel}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cls}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
