'use client';

import { useState } from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import styles from './WhatWeDoSection.module.css';

interface WhatWeDoSectionProps {
  thumbnailSrc: string;
  videoUrl?: string;
}

export default function WhatWeDoSection({
  thumbnailSrc,
  videoUrl = 'https://www.youtube.com/embed/Z-EDVBEiNwQ',
}: WhatWeDoSectionProps) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.inner}>
          {/* Text (right on desktop) */}
          <div className={styles.textCol}>
            <h2 className={styles.heading}>What We Do</h2>
            <p className={styles.body}>
              We are a global network dedicated to developing collective leadership
              to ensure all children can fulfill their potential.
            </p>
            <Button href="/our-purpose" variant="outline">
              Learn more
            </Button>
          </div>
          {/* Video (left on desktop) */}
          <div className={styles.videoCol}>
            <div className={styles.videoWrapper}>
              <Image
                src={thumbnailSrc}
                alt="Map of the world on a teal background — We are a global network"
                fill
                className={styles.thumbnail}
                sizes="(max-width: 991px) 100vw, 50vw"
              />
              <button
                className={styles.playBtn}
                aria-label="Play video"
                onClick={() => setModalOpen(true)}
              >
                <svg viewBox="0 0 20 20" aria-hidden="true">
                  <polygon points="5,2 18,10 5,18" />
                </svg>
              </button>
            </div>
          </div>          
        </div>
      </div>

      {/* Video Modal */}
      {modalOpen && (
        <div
          className={styles.modalOverlay}
          role="dialog"
          aria-modal="true"
          aria-label="Video player"
          onClick={(e) => { if (e.target === e.currentTarget) setModalOpen(false); }}
        >
          <div className={styles.modalContent}>
            <button
              className={styles.modalClose}
              aria-label="Close video"
              onClick={() => setModalOpen(false)}
            >
              ✕
            </button>
            <div className={styles.iframeWrapper}>
              <iframe
                src={`${videoUrl}?autoplay=1`}
                title="What We Do video"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
