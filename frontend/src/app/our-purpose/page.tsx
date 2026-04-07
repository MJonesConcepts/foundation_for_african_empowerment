import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Purpose',
  description:
    'The Teach For All network is developing collective leadership to ensure all children can fulfill their potential.',
};

export default function OurPurposePage() {
  return (
    <div style={{ padding: '4rem 1.5rem', maxWidth: 800, margin: '0 auto' }}>
      <h1 style={{ fontFamily: 'var(--ff-heading)', fontWeight: 900, fontSize: '2.5rem', marginBottom: '1.5rem' }}>
        Our Purpose
      </h1>
      <p style={{ fontSize: '1.1rem', lineHeight: 1.75, color: '#555' }}>
        This is a template page. Replace this content with your real page sections and components.
        The header and footer are automatically inherited from the root layout.
      </p>
    </div>
  );
}
