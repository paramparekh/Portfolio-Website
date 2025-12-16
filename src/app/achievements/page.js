import { Trophy, Award, Star, BookOpen } from "lucide-react";

export default function Achievements() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            <header style={{ borderBottom: '1px solid var(--card-border)', paddingBottom: '1rem' }}>
                <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>Achievements</h1>
            </header>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>

                {/* 1. Appreciation Awards - Jul 2024 */}
                <div className="glass-panel" style={{ padding: '2rem', display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                    <div style={{
                        width: '50px', height: '50px', background: 'rgba(234, 179, 8, 0.1)', borderRadius: '50%',
                        border: '1px solid #eab308', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                    }}>
                        <Award size={24} color="#eab308" />
                    </div>
                    <div>
                        <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.3rem', color: 'var(--primary)' }}>
                            Appreciation Awards
                        </h3>
                        <p style={{ color: 'var(--foreground)', marginBottom: '0.3rem' }}>
                            "Deliver with Focus" and "Act with Humility"
                        </p>
                        <p style={{ color: 'var(--secondary)', fontSize: '0.9rem' }}>
                            GE Vernova • Jul 2024
                        </p>
                    </div>
                </div>

                {/* 2. First Rank C++ - Jan 2023 */}
                <div className="glass-panel" style={{ padding: '2rem', display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                    <div style={{
                        width: '50px', height: '50px', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '50%',
                        border: '1px solid #10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                    }}>
                        <Trophy size={24} color="#10b981" />
                    </div>
                    <div>
                        <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.3rem', color: 'var(--primary)' }}>
                            First Rank
                        </h3>
                        <p style={{ color: 'var(--foreground)', marginBottom: '0.3rem' }}>
                            Intense Immersion 1-month training program in C++
                        </p>
                        <p style={{ color: 'var(--secondary)', fontSize: '0.9rem' }}>
                            GE Vernova • Jan 2023
                        </p>
                    </div>
                </div>

                {/* 3. OEIS Contribution - Nov 2022 */}
                <div className="glass-panel" style={{ padding: '2rem', display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                    <div style={{
                        width: '50px', height: '50px', background: 'var(--accent-glow)', borderRadius: '50%',
                        border: '1px solid var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                    }}>
                        <BookOpen size={24} color="var(--accent)" />
                    </div>
                    <div>
                        <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.3rem', color: 'var(--primary)' }}>
                            Contributed to OEIS
                        </h3>
                        <p style={{ color: 'var(--foreground)', marginBottom: '0.3rem' }}>
                            Contributed two integer sequences to Online Encyclopedia of Integer Sequences
                        </p>
                        <p style={{ color: 'var(--secondary)', fontSize: '0.9rem' }}>
                            Nov 2022
                        </p>
                    </div>
                </div>

                {/* 4. Second Rank State - Jun 2019 */}
                <div className="glass-panel" style={{ padding: '2rem', display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                    <div style={{
                        width: '50px', height: '50px', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '50%',
                        border: '1px solid #3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                    }}>
                        <Star size={24} color="#3b82f6" />
                    </div>
                    <div>
                        <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.3rem', color: 'var(--primary)' }}>
                            Second Rank in State
                        </h3>
                        <p style={{ color: 'var(--foreground)', marginBottom: '0.3rem' }}>
                            GHSEB class 12th examinations, Gujarat
                        </p>
                        <p style={{ color: 'var(--secondary)', fontSize: '0.9rem' }}>
                            Jun 2019
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}
