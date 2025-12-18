import { Construction } from "lucide-react";

export default function Blogs() {
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
                background: 'var(--accent-glow)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid var(--accent)'
            }}>
                <Construction size={32} color="var(--accent)" />
            </div>

            <h1 style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--primary)' }}>
                Coming Soon
            </h1>

            <p style={{ color: 'var(--secondary)', fontSize: '1.1rem', maxWidth: '400px' }}>
                I am currently working on writing some interesting blogs. Stay tuned!
            </p>
        </div>
    );
}
