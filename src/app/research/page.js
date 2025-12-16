import { Microscope, Globe, Database, Code, FileText } from "lucide-react";

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
                    {['Quantum Computing', 'Cryptography'].map(tag => (
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
                <h2 style={{ fontSize: '1.8rem', fontWeight: '700' }}>Publications</h2>

                {/* Publication 1 */}
                <div className="glass-panel" style={{ padding: '2rem', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                    <div style={{
                        minWidth: '50px', height: '60px', background: '#f8fafc', borderRadius: '4px', border: '1px solid var(--card-border)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                    }}>
                        <FileText size={24} style={{ color: 'var(--secondary)' }} />
                    </div>
                    <div>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.5rem', color: 'var(--primary)' }}>
                            On the Classification of Weierstrass Elliptic Curves over <span style={{ fontFamily: 'Times New Roman, serif' }}>&#8484;<sub>n</sub></span>
                        </h3>
                        <p style={{ color: 'var(--secondary)', marginBottom: '0.8rem', fontSize: '1rem' }}>
                            Param Parekh, Paavan Parekh, Sourav Deb, Manish K Gupta
                        </p>

                        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', alignItems: 'center', marginTop: '1rem' }}>
                            <a href="https://arxiv.org/abs/2310.11768" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.95rem' }}>
                                <Globe size={16} /> ArXiv
                            </a>
                            <a href="https://guptalab.org/ecc/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.95rem' }}>
                                <Database size={16} /> Computational Data
                            </a>
                            <a href="https://github.com/guptalab/EC_Zn" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.95rem' }}>
                                <Code size={16} /> Codes
                            </a>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
}
