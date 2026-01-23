import { Trophy, Award, Star, BookOpen, Crown } from "lucide-react";

export default function Achievements() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            <header style={{ borderBottom: '1px solid var(--card-border)', paddingBottom: '1rem' }}>
                <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>Achievements</h1>
            </header>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '1.5rem' }}>



                {/* 2. Appreciation Awards - Jul 2024 */}
                <div className="glass-panel" style={{ padding: '1.5rem', display: 'flex', gap: '1.2rem', alignItems: 'center' }}>
                    <div style={{
                        width: '50px', height: '50px', background: 'rgba(234, 179, 8, 0.1)', borderRadius: '50%',
                        border: '1px solid #eab308', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                    }}>
                        <Award size={24} color="#eab308" />
                    </div>
                    <div>
                        <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.2rem', color: 'var(--primary)' }}>
                            GE Vernova Awards
                        </h3>
                        <p style={{ color: 'var(--foreground)', marginBottom: '0.2rem', fontSize: '1rem' }}>
                            "Deliver with Focus" and "Act with Humility"
                        </p>
                        <p style={{ color: 'var(--secondary)', fontSize: '0.9rem' }}>
                            Jul 2024
                        </p>
                    </div>
                </div>

                {/* 3. First Rank C++ - Jan 2023 */}
                <div className="glass-panel" style={{ padding: '1.5rem', display: 'flex', gap: '1.2rem', alignItems: 'center' }}>
                    <div style={{
                        width: '50px', height: '50px', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '50%',
                        border: '1px solid #10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                    }}>
                        <Crown size={24} color="#10b981" />
                    </div>
                    <div>
                        <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.2rem', color: 'var(--primary)' }}>
                            First Rank
                        </h3>
                        <p style={{ color: 'var(--foreground)', marginBottom: '0.2rem', fontSize: '1rem' }}>
                            1-month C++ Training Program, GE Vernova
                        </p>
                        <p style={{ color: 'var(--secondary)', fontSize: '0.9rem' }}>
                            Jan 2023
                        </p>
                    </div>
                </div>

                {/* 4. Second Rank State - Jun 2019 */}
                <div className="glass-panel" style={{ padding: '1.5rem', display: 'flex', gap: '1.2rem', alignItems: 'center' }}>
                    <div style={{
                        width: '50px', height: '50px', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '50%',
                        border: '1px solid #3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                    }}>
                        <Star size={24} color="#3b82f6" />
                    </div>
                    <div>
                        <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.2rem', color: 'var(--primary)' }}>
                            Second Rank in State
                        </h3>
                        <p style={{ color: 'var(--foreground)', marginBottom: '0.2rem', fontSize: '1rem' }}>
                            GHSEB Class 12th Examinations
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
