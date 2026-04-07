import Button from '@/components/ui/Button';
import styles from './WhereSection.module.css';

export default function WhereSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.inner}>
          {/* Left: title */}
          <div className={styles.titleCol}>
            <h2 className={styles.title}>
              Where We've Helped
            </h2>
          </div>

          {/* Right: intro + map */}
          <div className={styles.contentCol}>
            <p className={styles.intro}>
              Teach For All&rsquo;s global network spans six continents, with
              independent partner organizations in 63 countries. Explore the map
              below to learn more about our diverse network.
            </p>

            {/*
              MAP INTEGRATION POINT
              Replace this placeholder with your map component.
              Options: amCharts 5, react-simple-maps, Mapbox GL JS
            */}
            <div className={styles.mapPlaceholder} role="img" aria-label="Interactive world map showing 63 partner countries">
              <span className={styles.mapIcon} aria-hidden="true">🗺️</span>
              <p className={styles.mapTitle}>Interactive World Map</p>
              <p className={styles.mapSubtitle}>63 partner countries · 6 continents</p>
              <p className={styles.mapNote}>Integrate amCharts 5 or react-simple-maps here</p>
            </div>

            <div className={styles.cta}>
              <Button href="/our-network" variant="outline">
                Explore the Network
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
