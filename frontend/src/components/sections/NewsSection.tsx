import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import type { NewsCard } from '@/types';
import styles from './NewsSection.module.css';

interface NewsSectionProps {
  cards: NewsCard[];
}

export default function NewsSection({ cards }: NewsSectionProps) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>News &amp; Stories</h2>

        <div className={styles.grid}>
          {cards.map((card) => (
            <article key={card.id} className={styles.card}>
              <Link href={card.href} className={styles.cardImageLink} tabIndex={-1}>
                <div className={styles.cardImageWrapper}>
                  <Image
                    src={card.imageSrc}
                    alt={card.imageAlt}
                    fill
                    className={styles.cardImage}
                    sizes="(max-width: 575px) 100vw, (max-width: 991px) 50vw, 25vw"
                  />
                </div>
              </Link>
              <div className={styles.cardBody}>
                {card.category && (
                  <p className={styles.cardCategory}>{card.category}</p>
                )}
                <h3 className={styles.cardTitle}>
                  <Link href={card.href} className={styles.cardTitleLink}>
                    {card.title}
                  </Link>
                </h3>
                {card.date && (
                  <time className={styles.cardDate} dateTime={card.date}>
                    {new Date(card.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className={styles.seeAll}>
          <Button href="/news" variant="secondary">
            See All
          </Button>
        </div>
      </div>
    </section>
  );
}
