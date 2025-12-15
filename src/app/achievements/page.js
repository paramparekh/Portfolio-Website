import { Trophy } from "lucide-react";

export default function Achievements() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            <header style={{ borderBottom: '1px solid var(--card-border)', paddingBottom: '1rem' }}>
                <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>Achievements</h1>
            </header>

            <p style={{ color: 'var(--secondary)' }}>
                All achievements and conference participations have been moved to the <a href="/experience" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>Experience</a> page timeline.
            </p>
        </div>
    );
}
