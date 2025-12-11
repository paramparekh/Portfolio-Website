import { Microscope, FileText, BookOpen } from "lucide-react";

export default function Research() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            <header style={{ borderBottom: '1px solid var(--card-border)', paddingBottom: '1rem' }}>
                <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>Research</h1>
            </header>

            <section>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.8rem', fontWeight: '600' }}>
                    <Microscope size={24} color="var(--accent)" /> Research Interests
                </h2>
                <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
                    {['Artificial Intelligence', 'Human-Computer Interaction', 'Distributed Systems'].map(tag => (
                        <span key={tag} style={{
                            fontSize: '1rem', padding: '0.6rem 1.2rem', borderRadius: '2rem',
                            background: 'white', border: '1px solid var(--card-border)', color: 'var(--foreground)',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
                        }}>
                            {tag}
                        </span>
                    ))}
                </div>
            </section>

            <section style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <h2 style={{ fontSize: '1.8rem', fontWeight: '700' }}>Selected Publications</h2>
                {[1, 2].map(item => (
                    <div key={item} className="glass-panel" style={{ padding: '2rem', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                        <div style={{
                            minWidth: '50px', height: '60px', background: '#f8fafc', borderRadius: '4px', border: '1px solid var(--card-border)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                        }}>
                            <FileText size={24} style={{ color: 'var(--secondary)' }} />
                        </div>
                        <div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.5rem', color: 'var(--primary)' }}>
                                Advanced Algorithms for Data Processing in Distributed Environments
                            </h3>
                            <p style={{ color: 'var(--secondary)', marginBottom: '0.8rem', fontSize: '0.95rem', fontStyle: 'italic' }}>
                                Published in <strong>Journal of Computer Science</strong>, 2024
                            </p>
                            <p style={{ color: 'var(--foreground)', lineHeight: '1.7', marginBottom: '1rem' }}>
                                This paper explores novel approaches to optimize data processing pipelines using distributed computing techniques. We propose a new consensus algorithm that reduces latency by 15%.
                            </p>
                            <a href="#" style={{ color: 'var(--accent)', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem' }}>
                                <BookOpen size={16} /> Read Paper
                            </a>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
}
