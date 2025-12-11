import { GraduationCap, Calendar } from "lucide-react";

export default function Education() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            <header style={{ borderBottom: '1px solid var(--card-border)', paddingBottom: '1rem' }}>
                <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>Education</h1>
            </header>

            {/* Education Item 1 */}
            {[1, 2].map((item) => (
                <div key={item} style={{ paddingLeft: '1.5rem', borderLeft: '2px solid var(--card-border)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '0.5rem' }}>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: '700' }}>University Name</h2>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--secondary)', fontSize: '0.95rem', fontFamily: 'var(--font-sans)' }}>
                            <Calendar size={16} />
                            <span>2020 - 2024</span>
                        </div>
                    </div>

                    <h3 style={{ color: 'var(--accent)', fontSize: '1.1rem', marginBottom: '1rem', fontWeight: '500', fontFamily: 'var(--font-sans)' }}>
                        Bachelor of Science in Computer Science
                    </h3>

                    <p style={{ color: 'var(--secondary)', lineHeight: '1.7' }}>
                        Relevant Coursework: Data Structures, Algorithms, Artificial Intelligence, Web Development.
                        <br />
                        <strong>Awards:</strong> Dean's List (2021, 2022), Outstanding Scholar Award.
                    </p>
                </div>
            ))}
        </div>
    );
}
