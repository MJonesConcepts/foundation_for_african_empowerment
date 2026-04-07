import Link from 'next/link';

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '3rem 1.5rem',
        fontFamily: 'var(--ff-heading)',
      }}
    >
      <p style={{ color: 'var(--tfa-teal)', fontWeight: 700, fontSize: '1rem', marginBottom: '0.5rem' }}>
        404
      </p>
      <h1 style={{ fontWeight: 900, fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1rem' }}>
        Page not found
      </h1>
      <p style={{ color: '#666', maxWidth: 400, marginBottom: '2rem', fontFamily: 'var(--ff-body)' }}>
        The page you're looking for doesn't exist or may have moved.
      </p>
      <Link
        href="/"
        style={{
          background: 'var(--tfa-teal)',
          color: '#fff',
          padding: '10px 28px',
          borderRadius: '4px',
          fontWeight: 700,
          fontSize: '0.9rem',
          textDecoration: 'none',
        }}
      >
        Back to Home
      </Link>
    </div>
  );
}
