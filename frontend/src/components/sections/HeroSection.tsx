
import styles from './HeroSection.module.css';

interface HeroSectionProps {
  headline: string;
}

export default function HeroSection({ headline }: HeroSectionProps) {
  return (
    <section className={styles.hero}>
      <video
        autoPlay
        muted
        loop
        playsInline
        className={styles.heroVideo}
      >
        <source src="/media/hero/hero-video.mp4" type="video/mp4" />
      </video>
      <div className={styles.overlay} aria-hidden="true" />
      <div className={styles.caption}>
        <h1
          className={styles.headline}
          dangerouslySetInnerHTML={{ __html: headline }}
        />
      </div>
    </section>
  );
}