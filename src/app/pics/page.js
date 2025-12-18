import { Camera } from "lucide-react";

export default function Pics() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '60vh',
            gap: '1.2rem',
            textAlign: 'center'
        }}>
            <div style={{
                width: '70px', height: '70px',
                background: 'rgba(245, 158, 11, 0.1)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid #f59e0b'
            }}>
                <Camera size={32} color="#f59e0b" />
            </div>

            <h1 style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--primary)' }}>
                Coming Soon
            </h1>

            <p style={{ color: 'var(--secondary)', fontSize: '1.1rem', maxWidth: '400px' }}>
                A gallery of my moments and photography will be available here soon.
            </p>
        </div>
    );
}
