import React from 'react';

const Forex: React.FC = () => {
    return (
        <div
            style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '60vh',
            background: 'linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)',
            borderRadius: '24px',
            boxShadow: '0 8px 32px rgba(25,118,210,0.10)',
            margin: '4rem auto',
            maxWidth: '500px',
            padding: '3rem 2rem',
            position: 'relative',
            overflow: 'hidden'
            }}
        >
            {/* Animated floating circles */}
            <div style={{
            position: 'absolute',
            top: '-40px',
            left: '-40px',
            width: '100px',
            height: '100px',
            background: 'rgba(25,118,210,0.12)',
            borderRadius: '50%',
            animation: 'float1 6s ease-in-out infinite alternate'
            }} />
            <div style={{
            position: 'absolute',
            bottom: '-30px',
            right: '-30px',
            width: '70px',
            height: '70px',
            background: 'rgba(25,118,210,0.10)',
            borderRadius: '50%',
            animation: 'float2 7s ease-in-out infinite alternate'
            }} />
            <svg width="72" height="72" viewBox="0 0 24 24" fill="none" style={{
            marginBottom: '1.5rem',
            animation: 'spin 3s linear infinite'
            }}>
            <path d="M2 16l20-5-20-5v4l15 1-15 1v4z" fill="#1976d2"/>
            <circle cx="20" cy="11" r="1.5" fill="#1976d2"/>
            </svg>
            <h1 style={{
            color: '#1976d2',
            fontWeight: 800,
            marginBottom: '0.5rem',
            fontSize: '2.2rem',
            letterSpacing: '0.02em',
            textShadow: '0 2px 8px rgba(25,118,210,0.08)'
            }}>
            Forex Services
            </h1>
            <p style={{
            color: '#333',
            fontSize: '1.15rem',
            marginBottom: '1.5rem',
            textAlign: 'center',
            opacity: 0.9
            }}>
            Coming soon in this portal.
            </p>
            <span style={{
            background: 'linear-gradient(90deg, #1976d2 60%, #42a5f5 100%)',
            color: '#fff',
            padding: '0.6rem 1.8rem',
            borderRadius: '999px',
            fontWeight: 600,
            fontSize: '1.05rem',
            letterSpacing: '0.04em',
            boxShadow: '0 2px 12px rgba(25, 118, 210, 0.16)',
            animation: 'pulse 2s infinite'
            }}>
            Stay tuned!
            </span>
            <style>
            {`
            @keyframes spin {
                0% { transform: rotate(0deg);}
                100% { transform: rotate(360deg);}
            }
            @keyframes pulse {
                0% { box-shadow: 0 0 0 0 rgba(25,118,210,0.18);}
                70% { box-shadow: 0 0 0 12px rgba(25,118,210,0);}
                100% { box-shadow: 0 0 0 0 rgba(25,118,210,0);}
            }
            @keyframes float1 {
                0% { transform: translateY(0);}
                100% { transform: translateY(30px);}
            }
            @keyframes float2 {
                0% { transform: translateY(0);}
                100% { transform: translateY(-20px);}
            }
            `}
            </style>
        </div>
    );
};

export default Forex;