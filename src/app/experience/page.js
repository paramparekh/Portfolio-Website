import { Trophy, Users, BookOpen } from "lucide-react";
import Image from "next/image";

export default function Experience() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            <header style={{ borderBottom: '1px solid var(--card-border)', paddingBottom: '1rem' }}>
                <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>Experience</h1>
            </header>

            {/* 1. Job 1 - Aug 2023 to July 2025 (GE Vernova SW I) */}
            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(150px, auto) 1fr', gap: '2rem' }}>
                {/* Left Col: Logo & Date */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ width: '70px', height: '70px', position: 'relative', flexShrink: 0 }}>
                        <Image src="/GEVernova.png" alt="GE Vernova" fill style={{ objectFit: 'contain' }} />
                    </div>
                    <div style={{ color: 'var(--secondary)', fontSize: '0.85rem', fontWeight: '500', textAlign: 'center' }}>
                        Aug 2023 <br /> -- <br /> July 2025
                    </div>
                </div>

                {/* Right Col: Content */}
                <div>
                    <h2 style={{ fontSize: '1.4rem', fontWeight: '700', color: 'var(--primary)', marginBottom: '0.2rem' }}>Software Engineer I</h2>
                    <h3 style={{ fontSize: '1.1rem', color: 'var(--accent)', fontFamily: 'var(--font-sans)', marginBottom: '1rem' }}>GE Vernova</h3>

                    <ul style={{
                        display: 'flex', flexDirection: 'column', gap: '0.5rem',
                        color: 'var(--foreground)', lineHeight: '1.6', paddingLeft: '1rem'
                    }}>

                        <li>Contributed to 2025 release: centralized SIM deployment via Configuration Hub – designed system, developed backend APIs (product details, error codes, digital signature validation), authored documentation, and presented to cross-functional teams.</li>
                        <li>Worked on iFIX modernization to enable configuration without startup; co-initiated a GenAI-powered iFIX help bot for contextual query support.</li>
                        <li>Automated NLS (native language support) builds using PowerShell scripts, reducing build times and streamlining multilingual build generation.</li>
                        <li>Engaged in leadership connect events with GE Vernova VPs and program managers.</li>
                    </ul>
                </div>
            </div>

            {/* 2. Job 2 - Jan 2023 to Aug 2023 (GE Vernova Intern) */}
            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(150px, auto) 1fr', gap: '2rem' }}>
                {/* Left Col: Logo & Date */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ width: '70px', height: '70px', position: 'relative', flexShrink: 0 }}>
                        <Image src="/GEVernova.png" alt="GE Vernova" fill style={{ objectFit: 'contain' }} />
                    </div>
                    <div style={{ color: 'var(--secondary)', fontSize: '0.85rem', fontWeight: '500', textAlign: 'center' }}>
                        Jan 2023 <br /> -- <br /> Aug 2023
                    </div>
                </div>

                {/* Right Col: Content */}
                <div>
                    <h2 style={{ fontSize: '1.4rem', fontWeight: '700', color: 'var(--primary)', marginBottom: '0.2rem' }}>Digital Technology Intern</h2>
                    <h3 style={{ fontSize: '1.1rem', color: 'var(--accent)', fontFamily: 'var(--font-sans)', marginBottom: '1rem' }}>GE Vernova</h3>

                    <ul style={{
                        display: 'flex', flexDirection: 'column', gap: '0.5rem',
                        color: 'var(--foreground)', lineHeight: '1.6', paddingLeft: '1rem'
                    }}>
                        <li>Completed C++ training (ranked 1st) and began contributing to Proficy HMI/SCADA development.</li>
                        <li>Developed APIs and resolved installer-related user stories/bugs for the Central Registration of Proficy SCADA products feature.</li>
                        <li>
                            Report: <a href="https://drive.google.com/file/d/1vKn7fDNwnSxgkex7nHWRGwxBRxTG3gFd/view?usp=sharing" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', color: 'var(--accent)' }}>Modern, industrial-strength HMI/SCADA from GE Digital</a>
                            , Certificate: <a href="https://drive.google.com/file/d/1OuGoRGdRgbkPFfEM4keVC7YiMpFj63zX/view?usp=sharing" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', color: 'var(--accent)' }}>link</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div style={{ height: '1px', background: 'var(--card-border)', margin: '1rem 0' }} />

            <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: 'var(--secondary)', marginBottom: '1rem' }}>Conferences & Hackathons</h3>

            {/* 3. MIT Hackathon - Jan 2026 */}
            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(150px, auto) 1fr', gap: '2rem' }}>
                {/* Left Col: Icon & Date */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ width: '50px', height: '50px', background: 'rgba(245, 158, 11, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#f59e0b', border: '1px solid #f59e0b', flexShrink: 0 }}>
                        <Trophy size={24} />
                    </div>
                    <div style={{ color: 'var(--secondary)', fontSize: '0.85rem', fontWeight: '500', textAlign: 'center' }}>
                        Jan 2026
                    </div>
                </div>

                {/* Right Col: Content */}
                <div>
                    <h2 style={{ fontSize: '1.4rem', fontWeight: '700', color: 'var(--primary)', marginBottom: '0.2rem' }}>MIT Quantum Hackathon</h2>
                    <h3 style={{ fontSize: '1.1rem', color: 'var(--accent)', fontFamily: 'var(--font-sans)' }}>Confirmed Participant • iQuHack 2026</h3>
                </div>
            </div>

            {/* 4. Conference - Mar 2025 */}
            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(150px, auto) 1fr', gap: '2rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ width: '50px', height: '50px', background: 'var(--accent-glow)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)', border: '1px solid var(--accent)', flexShrink: 0 }}>
                        <Users size={24} />
                    </div>
                    <div style={{ color: 'var(--secondary)', fontSize: '0.85rem', fontWeight: '500', textAlign: 'center' }}>
                        March 2025
                    </div>
                </div>

                <div>
                    <h2 style={{ fontSize: '1.4rem', fontWeight: '700', color: 'var(--primary)', marginBottom: '0.2rem' }}>
                        <a href="https://drive.google.com/file/d/1NUUI-OmM74077vQQEa2XPnE4RzoTU8eN/view?usp=drive_link" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>
                            Theory and Practice of Multiparty Computation
                        </a>
                    </h2>
                    <h3 style={{ fontSize: '1.1rem', color: 'var(--accent)', fontFamily: 'var(--font-sans)' }}>Attended Conference</h3>
                </div>
            </div>

            {/* 5. Seminar - Mar 2024 */}
            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(150px, auto) 1fr', gap: '2rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ width: '50px', height: '50px', background: 'rgba(15, 23, 42, 0.05)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--secondary)', border: '1px solid var(--card-border)', flexShrink: 0 }}>
                        <BookOpen size={24} />
                    </div>
                    <div style={{ color: 'var(--secondary)', fontSize: '0.85rem', fontWeight: '500', textAlign: 'center' }}>
                        Mar 2024
                    </div>
                </div>

                <div>
                    <h2 style={{ fontSize: '1.4rem', fontWeight: '700', color: 'var(--primary)', marginBottom: '0.2rem' }}>The second International Coding theory Seminar</h2>
                    <h3 style={{ fontSize: '1.1rem', color: 'var(--accent)', fontFamily: 'var(--font-sans)' }}>Attended Seminar</h3>
                </div>
            </div>

            {/* 6. Conference - Dec 2023 */}
            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(150px, auto) 1fr', gap: '2rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ width: '50px', height: '50px', background: 'var(--accent-glow)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)', border: '1px solid var(--accent)', flexShrink: 0 }}>
                        <Users size={24} />
                    </div>
                    <div style={{ color: 'var(--secondary)', fontSize: '0.85rem', fontWeight: '500', textAlign: 'center' }}>
                        Dec 2023
                    </div>
                </div>

                <div>
                    <h2 style={{ fontSize: '1.4rem', fontWeight: '700', color: 'var(--primary)', marginBottom: '0.2rem' }}>
                        <a href="https://drive.google.com/file/d/1-daaR2Wphupc_Ojjw-1FY8YxtsBIwxkC/view?usp=sharing" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>
                            International Conference on Algebraic Geometry, Coding Theory and Combinatorics
                        </a>
                    </h2>
                    <h3 style={{ fontSize: '1.1rem', color: 'var(--accent)', fontFamily: 'var(--font-sans)' }}>Attended Conference</h3>
                </div>
            </div>
        </div>
    );
}
