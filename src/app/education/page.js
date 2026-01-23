import { GraduationCap, Calendar, MapPin } from "lucide-react";

export default function Education() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            <header style={{ borderBottom: '1px solid var(--card-border)', paddingBottom: '1rem' }}>
                <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>Education</h1>
            </header>

            {/* Education Item 1 */}
            <div style={{ paddingLeft: '1.5rem', borderLeft: '2px solid var(--card-border)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '0.5rem' }}>
                    <div>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: '700' }}>Stony Brook University</h2>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--secondary)', fontSize: '0.95rem', marginTop: '0.2rem' }}>
                            <MapPin size={16} />
                            <span>Stony Brook, New York, USA</span>
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--secondary)', fontSize: '0.95rem', fontFamily: 'var(--font-sans)', marginTop: '0.3rem' }}>
                        <Calendar size={16} />
                        <span>2025 - 2027</span>
                    </div>
                </div>

                <h3 style={{ color: 'var(--accent)', fontSize: '1.2rem', marginBottom: '0.8rem', fontWeight: '500', fontFamily: 'var(--font-sans)' }}>
                    Master of Science in Computer Science
                </h3>

                <p style={{ color: 'var(--foreground)', lineHeight: '1.6', fontSize: '1rem' }}>
                    <strong>GPA:</strong> 3.89/4 <br />
                    Relevant Coursework: Quantum Computing, Systems Security, Data Science Fundamentals
                </p>
            </div>

            {/* Education Item 2 */}
            <div style={{ paddingLeft: '1.5rem', borderLeft: '2px solid var(--card-border)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '0.5rem' }}>
                    <div>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: '700' }}>Dhirubhai Ambani University</h2>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--secondary)', fontSize: '0.95rem', marginTop: '0.2rem' }}>
                            <MapPin size={16} />
                            <span>Gujarat, India</span>
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--secondary)', fontSize: '0.95rem', fontFamily: 'var(--font-sans)', marginTop: '0.3rem' }}>
                        <Calendar size={16} />
                        <span>2019 - 2023</span>
                    </div>
                </div>

                <h3 style={{ color: 'var(--accent)', fontSize: '1.2rem', marginBottom: '0.8rem', fontWeight: '500', fontFamily: 'var(--font-sans)' }}>
                    Bachelor of Technology in Information and Communication Technology
                </h3>

                <p style={{ color: 'var(--foreground)', lineHeight: '1.6', fontSize: '1rem' }}>
                    <strong>GPA:</strong> 8.6/10 <br />
                    Relevant Coursework: Data Structures & Algorithms, Operating Systems, Database Management Systems, Computer Networks
                </p>
            </div>
        </div>
    );
}
