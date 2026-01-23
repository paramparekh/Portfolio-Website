import { Trophy, Users, BookOpen, Code, Terminal, Layers } from "lucide-react";
import Image from "next/image";

export default function Experience() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            <header style={{ borderBottom: '1px solid var(--card-border)', paddingBottom: '1rem' }}>
                <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>Experience</h1>
            </header>

            {/* 1. Job 1 - Aug 2023 to July 2025 (GE Vernova SW I) */}
            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(120px, auto) 1fr', gap: '1.5rem' }}>
                {/* Left Col: Logo & Date */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ width: '70px', height: '70px', position: 'relative', flexShrink: 0 }}>
                        <Image src="/GEVernova.png" alt="GE Vernova" fill style={{ objectFit: 'contain' }} />
                    </div>
                    <div style={{ color: 'var(--secondary)', fontSize: '0.9rem', fontWeight: '500', textAlign: 'center' }}>
                        Aug 2023 <br /> -- <br /> July 2025
                    </div>
                </div>

                {/* Right Col: Content */}
                <div>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--primary)', marginBottom: '0.2rem' }}>Software Engineer</h2>
                    <h3 style={{ fontSize: '1.2rem', color: 'var(--accent)', fontFamily: 'var(--font-sans)', marginBottom: '0.8rem' }}>GE Vernova</h3>

                    <ul style={{
                        display: 'flex', flexDirection: 'column', gap: '0.6rem',
                        color: 'var(--foreground)', lineHeight: '1.6', paddingLeft: '1rem', fontSize: '1rem'
                    }}>

                        <li>Worked on NLS (native language support) automation that focuses on streamlining the generation of multilingual builds. Developed PowerShell scripts which significantly reduced build times and improved the process.</li>
                        <li>Worked on the 2025 release feature: centralized SIM (Software Improvement Modules) deployment through Configuration Hub. Contributions include system design, backend development, and documenting feature functionalities.</li>
                        <li>Implemented APIs to gather available product details from registered nodes for SIM installation, fetch custom error codes from various products for improved troubleshooting, and validate digital signatures before transferring them to the target deployment location.</li>
                        <li>Presented the feature to internal employees from various departments within the company.</li>
                        <li>Worked on the iFIX (HMI/SCADA solution under Proficy suite of products) modernization feature.</li>
                    </ul>
                </div>
            </div>

            {/* 2. Job 2 - Jan 2023 to Jul 2023 (GE Vernova Intern) */}
            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(120px, auto) 1fr', gap: '1.5rem' }}>
                {/* Left Col: Logo & Date */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ width: '70px', height: '70px', position: 'relative', flexShrink: 0 }}>
                        <Image src="/GEVernova.png" alt="GE Vernova" fill style={{ objectFit: 'contain' }} />
                    </div>
                    <div style={{ color: 'var(--secondary)', fontSize: '0.9rem', fontWeight: '500', textAlign: 'center' }}>
                        Jan 2023 <br /> -- <br /> Jul 2023
                    </div>
                </div>

                {/* Right Col: Content */}
                <div>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--primary)', marginBottom: '0.2rem' }}>Digital Technology Intern</h2>
                    <h3 style={{ fontSize: '1.2rem', color: 'var(--accent)', fontFamily: 'var(--font-sans)', marginBottom: '0.8rem' }}>GE Vernova</h3>

                    <ul style={{
                        display: 'flex', flexDirection: 'column', gap: '0.6rem',
                        color: 'var(--foreground)', lineHeight: '1.6', paddingLeft: '1rem', fontSize: '1rem'
                    }}>
                        <li>Completed a comprehensive training program focused on system design principles in C++, ranking first in the training.</li>
                        <li>Contributed to a scrum team on the "Central registration of Proficy SCADA products to Configuration Hub" feature.</li>
                        <li>Implemented APIs for the feature functionalities and addressed user stories/bugs related to product installers.</li>
                        <li>
                            Report: <a href="https://drive.google.com/file/d/1vKn7fDNwnSxgkex7nHWRGwxBRxTG3gFd/view?usp=sharing" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', color: 'var(--accent)' }}>Modern, industrial-strength HMI/SCADA from GE Digital</a>
                            , Certificate: <a href="https://drive.google.com/file/d/1OuGoRGdRgbkPFfEM4keVC7YiMpFj63zX/view?usp=sharing" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', color: 'var(--accent)' }}>link</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div style={{ height: '1px', background: 'var(--card-border)', margin: '1rem 0' }} />

            {/* Technical Skills Section */}
            <h3 style={{ fontSize: '1.8rem', fontWeight: '600', color: 'var(--secondary)', marginBottom: '1rem' }}>Technical Skills</h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                {/* Languages */}
                <div className="glass-panel" style={{ padding: '1.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem' }}>
                        <Code size={20} color="var(--primary)" />
                        <h4 style={{ fontSize: '1.1rem', fontWeight: '600' }}>Programming Languages</h4>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                        {['C', 'C++', 'Python', 'Qiskit', 'SQL', 'Matlab', 'HTML', 'CSS', 'Javascript', 'GO'].map(skill => (
                            <span key={skill} style={{
                                background: 'rgba(14, 116, 144, 0.1)', color: 'var(--primary)',
                                padding: '0.3rem 0.6rem', borderRadius: '4px', fontSize: '0.9rem', fontWeight: '500'
                            }}>
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Tools */}
                <div className="glass-panel" style={{ padding: '1.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem' }}>
                        <Terminal size={20} color="var(--accent)" />
                        <h4 style={{ fontSize: '1.1rem', fontWeight: '600' }}>Tools & Frameworks</h4>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                        {['Visual Studio', 'VS Code', 'PostgreSQL', 'Matlab & Simulink', 'Arduino IDE', 'Install Shield', 'Angular'].map(skill => (
                            <span key={skill} style={{
                                background: 'rgba(37, 99, 235, 0.1)', color: 'var(--accent)',
                                padding: '0.3rem 0.6rem', borderRadius: '4px', fontSize: '0.9rem', fontWeight: '500'
                            }}>
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                {/* OS */}
                <div className="glass-panel" style={{ padding: '1.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem' }}>
                        <Layers size={20} color="var(--highlight)" />
                        <h4 style={{ fontSize: '1.1rem', fontWeight: '600' }}>Operating Systems</h4>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                        {['Windows', 'Linux'].map(skill => (
                            <span key={skill} style={{
                                background: 'rgba(245, 158, 11, 0.1)', color: '#d97706',
                                padding: '0.3rem 0.6rem', borderRadius: '4px', fontSize: '0.9rem', fontWeight: '500'
                            }}>
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>


            <div style={{ height: '1px', background: 'var(--card-border)', margin: '1rem 0' }} />

            <h3 style={{ fontSize: '1.8rem', fontWeight: '600', color: 'var(--secondary)', marginBottom: '1rem' }}>Conferences & Hackathons</h3>

            {/* 3. MIT Hackathon - Jan 2026 */}
            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(120px, auto) 1fr', gap: '1.5rem' }}>
                {/* Left Col: Icon & Date */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ width: '50px', height: '50px', background: 'rgba(245, 158, 11, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#f59e0b', border: '1px solid #f59e0b', flexShrink: 0 }}>
                        <Trophy size={24} />
                    </div>
                    <div style={{ color: 'var(--secondary)', fontSize: '0.9rem', fontWeight: '500', textAlign: 'center' }}>
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
            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(120px, auto) 1fr', gap: '1.5rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ width: '50px', height: '50px', background: 'var(--accent-glow)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)', border: '1px solid var(--accent)', flexShrink: 0 }}>
                        <Users size={24} />
                    </div>
                    <div style={{ color: 'var(--secondary)', fontSize: '0.9rem', fontWeight: '500', textAlign: 'center' }}>
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
            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(120px, auto) 1fr', gap: '1.5rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ width: '50px', height: '50px', background: 'rgba(15, 13, 42, 0.05)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--secondary)', border: '1px solid var(--card-border)', flexShrink: 0 }}>
                        <BookOpen size={24} />
                    </div>
                    <div style={{ color: 'var(--secondary)', fontSize: '0.9rem', fontWeight: '500', textAlign: 'center' }}>
                        Mar 2024
                    </div>
                </div>

                <div>
                    <h2 style={{ fontSize: '1.4rem', fontWeight: '700', color: 'var(--primary)', marginBottom: '0.2rem' }}>The second International Coding theory Seminar</h2>
                    <h3 style={{ fontSize: '1.1rem', color: 'var(--accent)', fontFamily: 'var(--font-sans)' }}>Attended Seminar</h3>
                </div>
            </div>

            {/* 6. Conference - Dec 2023 */}
            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(120px, auto) 1fr', gap: '1.5rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ width: '50px', height: '50px', background: 'var(--accent-glow)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)', border: '1px solid var(--accent)', flexShrink: 0 }}>
                        <Users size={24} />
                    </div>
                    <div style={{ color: 'var(--secondary)', fontSize: '0.9rem', fontWeight: '500', textAlign: 'center' }}>
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
