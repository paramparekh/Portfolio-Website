import { Trophy } from "lucide-react";

export default function Achievements() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            <header style={{ borderBottom: '1px solid var(--card-border)', paddingBottom: '1rem' }}>
                <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>Achievements</h1>
            </header>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                {[1, 2, 3].map((item) => (
                    <div key={item} className="glass-panel" style={{ padding: '2rem', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                        <div style={{
                            width: '50px', height: '50px', borderRadius: '50%', background: '#fffff0', border: '1px solid #fef3c7', color: '#d97706',
                            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                        }}>
                            <Trophy size={24} />
                        </div>

                        <div>
                            <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.2rem', color: 'var(--primary)' }}>Hackathon Winner</h3>
                            <p style={{ color: 'var(--secondary)', fontSize: '0.9rem', fontFamily: 'var(--font-sans)' }}>First Place • National Tech Summit 2023</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
