'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import styles from './FocusSection.module.css';

export interface FocusSlide {
  id: string;
  imageSrc: string;
  imageAlt: string;
  heading: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
}

interface FocusSectionProps {
  title?: string;
  slides: FocusSlide[];
  autoPlayInterval?: number; // ms, default 5000
}

export default function FocusSection({
  title = 'Focus',
  slides,
  autoPlayInterval = 5000,
}: FocusSectionProps) {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [animating, setAnimating] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const total = slides.length;

  const goTo = useCallback(
    (index: number) => {
      if (animating) return;
      setAnimating(true);
      setActive((index + total) % total);
      setTimeout(() => setAnimating(false), 500);
    },
    [animating, total]
  );

  const prev = useCallback(() => goTo(active - 1), [active, goTo]);
  const next = useCallback(() => goTo(active + 1), [active, goTo]);

  // Autoplay
  useEffect(() => {
    if (!playing) return;
    timerRef.current = setTimeout(next, autoPlayInterval);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [playing, active, next, autoPlayInterval]);

  const togglePlay = () => setPlaying((p) => !p);

  if (!slides.length) return null;

  // Build visible slides: prev, active, next (for the image strip)
  const visibleIndices = [
    (active - 1 + total) % total,
    active,
    (active + 1) % total,
  ];

  return (
    <section className={styles.section}>
      <div className={styles.layout}>
        
          {/* ── Left: carousel ──────────────────────────── */}
        <div className={styles.carouselCol}>
          <div className={styles.inner}>
          {/* ── Right: title + static intro ──*/}
          <div className={styles.contentCol}>
            <h2 className={styles.sectionTitle}>{title}</h2>
            <p className={styles.sectionIntro}>
              {/* TODO: replace with your intro paragraph */}
              We are focused on the underserved, and often completely overlooked communities<br />that other organizations miss. This means FAE can make a huge impact. FAE is working<br /> with these communitiesand partners to keep children safe and support their wellbeing and<br />development through increasing their access to quality disability inclusive education.
            </p>
          </div>
        </div>
          <div className={styles.imageSlider}>
            <div className={styles.imageTrack}>
              {visibleIndices.map((idx, pos) => (
                <div
                  key={`${idx}-${pos}`}
                  className={`${styles.imageSlide} ${pos === 1 ? styles.activeSlide : styles.sideSlide}`}
                  onClick={() => pos !== 1 && goTo(idx)}
                  role={pos !== 1 ? 'button' : undefined}
                  tabIndex={pos !== 1 ? 0 : undefined}
                  aria-label={pos !== 1 ? `Go to slide ${idx + 1}` : undefined}
                >
                  <Image
                    src={slides[idx].imageSrc}
                    alt={slides[idx].imageAlt}
                    fill
                    className={styles.slideImage}
                    sizes="(max-width: 768px) 100vw, 60vw"
                    priority={pos === 1}
                  />
                </div>
              ))}
            </div>

            {/* Controls overlay */}
            <div className={styles.controls}>
              <button
                className={`${styles.controlBtn} ${styles.prevBtn}`}
                onClick={prev}
                aria-label="Previous slide"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>

              <button
                className={styles.playBtn}
                onClick={togglePlay}
                aria-label={playing ? 'Pause slideshow' : 'Play slideshow'}
              >
                {playing ? (
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <rect x="6" y="4" width="4" height="16" />
                    <rect x="14" y="4" width="4" height="16" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5,3 19,12 5,21" />
                  </svg>
                )}
              </button>

              <button
                className={`${styles.controlBtn} ${styles.nextBtn}`}
                onClick={next}
                aria-label="Next slide"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          </div>

          {/* Text slide + dots */}
          <div className={styles.textWrap}>
            <div
              className={`${styles.textSlide} ${animating ? styles.textFade : ''}`}
              key={active}
            >
              <h3 className={styles.slideHeading}>{slides[active].heading}</h3>
              <p className={styles.slideBody}>{slides[active].body}</p>
              <a
                href={slides[active].ctaHref}
                className={styles.ctaBtn}
                target="_blank"
                rel="noopener noreferrer"
              >
                {slides[active].ctaLabel}
              </a>
            </div>
            <div className={styles.dots} role="tablist" aria-label="Slide indicators">
              {slides.map((_, i) => (
                <button
                  key={i}
                  className={`${styles.dot} ${i === active ? styles.dotActive : ''}`}
                  onClick={() => goTo(i)}
                  role="tab"
                  aria-selected={i === active}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}