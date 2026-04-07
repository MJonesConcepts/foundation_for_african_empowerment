'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { MAIN_NAV, UTILITY_NAV } from '@/lib/constants';
import type { NavItem } from '@/types';
import LogoSvg from '@/components/icons/LogoSvg';
import LogoSmSvg from '@/components/icons/LogoSmSvg';
import styles from './Header.module.css';
import SearchSvg from '../icons/SearchSvg';

// ── Dropdown sub-component ────────────────────────────────────────
function NavDropdown({ item, scrolled, useFixed = false }: { item: NavItem; scrolled: boolean; useFixed?: boolean }) {
  const [open, setOpen] = useState(false);
  const [fixedStyle, setFixedStyle] = useState<React.CSSProperties>({});
  const ref = useRef<HTMLLIElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  const calcPosition = () => {
    if (useFixed && btnRef.current) {
      const r = btnRef.current.getBoundingClientRect();
      setFixedStyle({ position: 'fixed', top: r.bottom + 4, left: r.left, zIndex: 9999 });
    }
  };

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const linkClass = `${styles.navLink} ${scrolled ? styles.navLinkDark : styles.navLinkLight}`;

  if (!item.dropdown) {
    return (
      <li className={styles.navItem}>
        <Link href={item.href ?? '#'} className={linkClass}>
          {item.label}
        </Link>
      </li>
    );
  }

  return (
    <li
      ref={ref}
      className={`${styles.navItem} ${styles.hasDropdown}`}
      onMouseEnter={() => { calcPosition(); setOpen(true); }}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        ref={btnRef}
        className={linkClass}
        aria-expanded={open}
        onClick={() => { calcPosition(); setOpen((v) => !v); }}
      >
        {item.label}
        <span className={styles.chevron} aria-hidden>▾</span>
      </button>
      {open && (
        <ul className={styles.dropdown} style={useFixed ? fixedStyle : undefined}>
          {item.dropdown.map((child) => (
            <li key={child.href}>
              <Link
                href={child.href}
                className={styles.dropdownItem}
                onClick={() => setOpen(false)}
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

// ── Header ────────────────────────────────────────────────────────
export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      {/* ── Utility Bar (desktop only) ───────────────────────────── */}
      <div className={styles.utilityBar}>
        <div className={styles.utilityInner}>
          <span className={styles.translateNote}>Powered By You</span>
          <nav aria-label="Utility navigation" data-always-dark>
            <ul className={styles.utilityNav}>
              {UTILITY_NAV.map((item) => (
                <NavDropdown key={item.label} item={item} scrolled={scrolled} useFixed />
              ))}
              <li>
                <Link href="/donate" className={styles.btnDonate}>
                  Donate
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* ── Main Navbar ──────────────────────────────────────────── */}
      <nav className={styles.mainNav} aria-label="Main navigation">
        <div className={styles.navInner}>
          {/* Logo */}
          <Link href="/" className={styles.logo} aria-label="The Foundation for African Empowerment">
            {scrolled
              ? <LogoSmSvg variant="default" height={60} />
              : <LogoSvg variant="white" height={100} />
            }
          </Link>

          {/* Desktop nav links */}
          <ul className={styles.mainNavList}>
            {MAIN_NAV.map((item) => (
              <NavDropdown key={item.label} item={item} scrolled={scrolled} />
            ))}
            <li className={styles.navItem}>
              <Link
                href="/search"
                className={`${styles.navLink} ${scrolled ? styles.navLinkDark : styles.navLinkLight}`}
                aria-label="Search"
              >
               <SearchSvg variant={scrolled ? 'default' : 'white'} />
              </Link>
            </li>
          </ul>

          {/* Mobile hamburger */}
          <button
            className={styles.hamburger}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        {/* Mobile nav drawer */}
        {mobileOpen && (
          <div className={styles.mobileDrawer}>
            <ul className={styles.mobileNavList}>
              {MAIN_NAV.map((item) => (
                <li key={item.label} className={styles.mobileNavItem}>
                  {item.href ? (
                    <Link
                      href={item.href}
                      className={styles.mobileNavLink}
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <details className={styles.mobileDetails}>
                      <summary className={styles.mobileNavLink}>{item.label}</summary>
                      <ul className={styles.mobileSubList}>
                        {item.dropdown?.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className={styles.mobileSubLink}
                              onClick={() => setMobileOpen(false)}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </details>
                  )}
                </li>
              ))}
              <li>
                <Link href="/donate" className={styles.btnDonate} onClick={() => setMobileOpen(false)}>
                  Donate
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}