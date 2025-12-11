import { Image as ImageIcon } from "lucide-react";

export default function Pics() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            <header style={{ borderBottom: '1px solid var(--card-border)', paddingBottom: '1rem' }}>
                <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>Gallery</h1>
            </header>

            <div style={{
                columns: '3 220px', columnGap: '1.5rem'
            }}>
                {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div key={item} style={{
                        breakInside: 'avoid', marginBottom: '1.5rem', padding: '0.5rem',
                        overflow: 'hidden', borderRadius: '4px', background: 'white',
                        border: '1px solid var(--card-border)', boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
                    }}>
                        <div style={{
                            width: '100%', height: `${200 + (item % 3) * 50}px`,
                            background: '#f1f5f9',
                            position: 'relative', borderRadius: '2px'
                        }}>
                            <div style={{
                                position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
                                opacity: 0.2, color: 'var(--secondary)'
                            }}>
                                <ImageIcon size={32} />
                            </div>
                        </div>
                        <div style={{ padding: '0.8rem 0.5rem 0.5rem', fontSize: '0.85rem', color: 'var(--secondary)', fontWeight: 500, textAlign: 'center' }}>
                            Caption for image {item}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
