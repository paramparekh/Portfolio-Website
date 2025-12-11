import { Github, ExternalLink, Code } from "lucide-react";

export default function Projects() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            <header style={{ borderBottom: '1px solid var(--card-border)', paddingBottom: '1rem' }}>
                <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>Projects</h1>
            </header>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}>
                {[1, 2, 3].map((item) => (
                    <div key={item} className="glass-panel" style={{
                        padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column',
                        transition: 'transform 0.2s ease', background: 'white'
                    }}>
                        <div style={{
                            height: '140px', background: '#f8fafc',
                            display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid var(--card-border)'
                        }}>
                            <Code size={32} style={{ opacity: 0.2, color: 'var(--primary)' }} />
                        </div>

                        <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                            <h2 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.5rem', color: 'var(--primary)' }}>Project Name {item}</h2>
                            <p style={{ color: 'var(--secondary)', fontSize: '0.95rem', lineHeight: '1.6', flex: 1 }}>
                                A modern web application built with Next.js and Cloudflare. Features real-time data synchronization and responsive UI.
                            </p>

                            <div style={{ display: 'flex', gap: '0.5rem', margin: '1rem 0', flexWrap: 'wrap' }}>
                                {['Next.js', 'React', 'Node.js'].map(tag => (
                                    <span key={tag} style={{
                                        fontSize: '0.8rem', padding: '0.2rem 0.6rem', borderRadius: '4px',
                                        background: '#f1f5f9', color: '#475569', fontWeight: '500', border: '1px solid #e2e8f0'
                                    }}>
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--card-border)' }}>
                                <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem', fontWeight: '500', color: 'var(--primary)' }}>
                                    <Github size={16} /> Code
                                </a>
                                <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem', fontWeight: '500', color: 'var(--accent)' }}>
                                    <ExternalLink size={16} /> Live Demo
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
