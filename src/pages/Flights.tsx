import React from 'react';

const Flights: React.FC = () => {
    return (
        <div
            style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '60vh',
            background: 'linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)',
            borderRadius: '16px',
            boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
            margin: '4rem auto',
            maxWidth: '500px',
            padding: '3rem 2rem'
            }}
        >
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" style={{ marginBottom: '1.5rem' }}>
            <path d="M2 16l20-5-20-5v4l15 1-15 1v4z" fill="#1976d2"/>
            <circle cx="20" cy="11" r="1.5" fill="#1976d2"/>
            </svg>
            <h1 style={{ color: '#1976d2', fontWeight: 700, marginBottom: '0.5rem' }}>Flights Services</h1>
            <p style={{ color: '#333', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
            Coming soon in this portal.
            </p>
            <span style={{
            background: '#1976d2',
            color: '#fff',
            padding: '0.5rem 1.5rem',
            borderRadius: '999px',
            fontWeight: 500,
            fontSize: '0.95rem',
            letterSpacing: '0.03em',
            boxShadow: '0 2px 8px rgba(25, 118, 210, 0.12)'
            }}>
            Stay tuned!
            </span>
        </div>
    );
};

export default Flights;