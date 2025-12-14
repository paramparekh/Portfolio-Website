import { Image as ImageIcon } from "lucide-react";

export default function Pics() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            <header style={{ borderBottom: '1px solid var(--card-border)', paddingBottom: '1rem' }}>
                <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>Gallery</h1>
            </header>

            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '2rem',
                maxWidth: '800px',
                margin: '0 auto'
            }}>
                {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div key={item} style={{
                        overflow: 'hidden', borderRadius: '8px',
                        background: 'var(--card-bg)',
                        border: '1px solid var(--card-border)',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                        transition: 'transform 0.2s',
                    }}>
                        <div style={{
                            width: '100%',
                            aspectRatio: '16/9',
                            background: 'rgba(148, 163, 184, 0.1)', /* Subtle dark placeholder */
                            position: 'relative',
                        }}>
                            <div style={{
                                position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
                                opacity: 0.2, color: 'var(--secondary)'
                            }}>
                                <ImageIcon size={48} />
                            </div>
                        </div>
                        <div style={{ padding: '1rem', fontSize: '0.9rem', color: 'var(--secondary)', fontWeight: 500, textAlign: 'center' }}>
                            Caption for image {item}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
