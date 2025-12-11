import { Briefcase, Calendar } from "lucide-react";

export default function Experience() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            <header style={{ borderBottom: '1px solid var(--card-border)', paddingBottom: '1rem' }}>
                <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>Experience</h1>
            </header>

            {[1, 2].map((item) => (
                <div key={item} style={{ display: 'grid', gridTemplateColumns: '150px 1fr', gap: '2rem' }}>
                    {/* Date Column */}
                    <div style={{ color: 'var(--secondary)', fontSize: '0.9rem', fontWeight: '500', paddingTop: '0.3rem' }}>
                        Jan 2023 - Present
                    </div>

                    {/* Content Column */}
                    <div>
                        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', color: 'var(--primary)' }}>Senior Developer</h2>
                        <h3 style={{ fontSize: '1.1rem', color: 'var(--accent)', marginBottom: '1rem', fontFamily: 'var(--font-sans)' }}>Tech Company Inc.</h3>

                        <ul style={{
                            display: 'flex', flexDirection: 'column', gap: '0.5rem',
                            color: 'var(--foreground)', lineHeight: '1.6', paddingLeft: '1rem'
                        }}>
                            <li>Led development of key features using Next.js and React, resulting in a 20% increase in user engagement.</li>
                            <li>Optimized application performance improving load times by 40% through code splitting and image optimization.</li>
                            <li>Collaborated with cross-functional teams to deliver high-quality software solutions on time.</li>
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
}
