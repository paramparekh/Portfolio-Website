import { ArrowUpRight, Calendar } from "lucide-react";

export default function Blogs() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            <header style={{ borderBottom: '1px solid var(--card-border)', paddingBottom: '1rem' }}>
                <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>Writing</h1>
            </header>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
                {[1, 2, 3].map((item) => (
                    <article key={item} style={{
                        padding: '2rem', display: 'flex', flexDirection: 'column',
                        transition: 'transform 0.2s ease', cursor: 'pointer',
                        border: '1px solid var(--card-border)', borderRadius: '8px', background: 'white'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--secondary)', fontSize: '0.85rem', marginBottom: '0.8rem', fontFamily: 'var(--font-sans)', fontWeight: 500 }}>
                            <Calendar size={14} /> <span>October {10 + item}, 2024</span>
                            <span>•</span>
                            <span>5 min read</span>
                        </div>

                        <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem', lineHeight: '1.3', color: 'var(--primary)' }}>
                            The Future of Web Development with Next.js 15
                        </h2>

                        <p style={{ color: 'var(--foreground)', lineHeight: '1.7', marginBottom: '1.5rem', flex: 1, maxWidth: '800px' }}>
                            Exploring the new features and paradigms introduced in the latest version of Next.js, including Server Actions and Partial Prerendering. We discuss how these changes impact developer experience and performance.
                        </p>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent)', fontWeight: '600', fontSize: '0.95rem' }}>
                            Read Article <ArrowUpRight size={16} />
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}
