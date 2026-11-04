import PageHeader from "@/components/PageHeader";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

export default function Education() {
    return (
        <div className="page-stack">
            <PageHeader title="Education" description="Academic background in Information and Communication Technology." />

            {/* Education Item 1 */}
            <div className="education-entry">
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
                    <strong>GPA:</strong> 3.95/4
                </p>
            </div>

            {/* Education Item 2 */}
            <div className="education-entry">
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
                    <strong>GPA:</strong> 8.6/10
                </p>
            </div>
        </div>
    );
}
