import { Github, ExternalLink, Code, Layers, Database, Lock, Radio, Globe } from "lucide-react";

export default function Projects() {
    const projects = [
        {
            title: "Quantum Cryptography: Security Reductions in Quantum World",
            description: "Conducted a literature review on the security of classical cryptographic primitives (GGM PRF, Naor-Reingold PRF, LWE-based PRFs) under quantum queries. Studied the collapse-binding property to restore security for commitment schemes against quantum attackers.",
            tags: ["Quantum Cryptography", "Security Reductions", "PRF", "LWE"],
            icon: Lock,
            date: "Sep 2025"
        },
        {
            title: "Implementation of Quantum Algorithms on IBM Qiskit",
            description: "Implemented standard quantum algorithms including Quantum Teleportation, Deutsch-Jozsa Algorithm, Grover’s Search, Quantum Random Number Generation, and QKD protocols using IBM Qiskit framework.",
            tags: ["IBM Qiskit", "Quantum Algorithms", "Python", "QKD"],
            icon: Code,
            date: "Nov 2025"
        },
        {
            title: "Detection and Tracking of Accidents using Sequential Estimation Techniques",
            description: "Developed a system for real-time accident detection and tracking using ARMA/ARIMA modeling and statistical tests (SPRT, CUSUM, Page-Hinkley) to monitor traffic speed patterns effectively.",
            tags: ["ARMA/ARIMA", "Statistical Tests", "Python", "Real-time Monitoring"],
            icon: Layers,
            date: "Sept 2025",
            link: "https://github.com/paramparekh/AccidentDetectionSystem"
        },
        {
            title: "Maximal Ratio Combining (MRC) in SIMO Wireless Communication System",
            description: "Performed literature review and simulation of MRC techniques using Matlab & Simulink to maximize SNR and mitigate channel fading effects in SIMO systems.",
            tags: ["Matlab", "Simulink", "Wireless Comm", "SIMO", "MRC"],
            icon: Radio,
            date: "Nov 2021",
            link: "https://drive.google.com/file/d/1hDWT8eKCbaQGW5zktrF4ZgxjPVvv9PuO/view"
        },
        {
            title: "IoT Enabled Sensor System for Agriculture Applications",
            description: "Developed a field water level monitoring system using soil moisture sensors, Arduino Uno, ESP01, and MongoDB. Completed as a Summer Internship under TiH-IoT CHANAKYA Fellowship, IIT-Bombay.",
            tags: ["IoT", "Arduino", "ESP01", "MongoDB", "Sensors"],
            icon: Database,
            date: "Apr 2022 – Jun 2022",
            link: "https://github.com/ParamsSMI/Karyashala_workshop_day6"
        },
        {
            title: "Group Chat Application",
            description: "Built a C++ group chat application using socket programming and thread pools. Features included real-time multi-user conversations and direct private messaging functionality.",
            tags: ["C++", "Socket Programming", "Multi-threading", "Networking"],
            icon: Code,
            date: "Jan 2023",
            link: "https://github.com/ParamsSMI/Group-Chat-App-in-Cpp"
        }
    ];

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            <header style={{ borderBottom: '1px solid var(--card-border)', paddingBottom: '1rem' }}>
                <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>Projects</h1>
            </header>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
                {projects.map((project, index) => {
                    const Icon = project.icon;
                    return (
                        <div key={index} className="glass-panel" style={{
                            padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column',
                            transition: 'transform 0.2s ease', background: 'var(--card-bg)'
                        }}>
                            <div style={{
                                height: '100px', background: 'var(--accent-glow)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid var(--card-border)',
                                position: 'relative'
                            }}>
                                <Icon size={32} style={{ opacity: 0.8, color: 'var(--accent)' }} />
                                {project.link && (
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" style={{
                                        position: 'absolute', top: '10px', right: '10px',
                                        background: 'rgba(255,255,255,0.2)', padding: '6px', borderRadius: '50%',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        transition: 'background 0.2s', backdropFilter: 'blur(4px)'
                                    }} title="View Project">
                                        <Globe size={18} color="var(--accent)" />
                                    </a>
                                )}
                            </div>

                            <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.6rem' }}>
                                    <h2 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--primary)', lineHeight: '1.3' }}>
                                        {project.title}
                                    </h2>
                                </div>
                                <div style={{ fontSize: '0.85rem', color: 'var(--secondary)', marginBottom: '0.8rem', fontWeight: '500' }}>
                                    {project.date}
                                </div>

                                <p style={{ color: 'var(--foreground)', fontSize: '0.95rem', lineHeight: '1.6', flex: 1, marginBottom: '1.2rem' }}>
                                    {project.description}
                                </p>

                                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: 'auto' }}>
                                    {project.tags.map(tag => (
                                        <span key={tag} style={{
                                            fontSize: '0.8rem', padding: '0.25rem 0.6rem', borderRadius: '4px',
                                            background: 'var(--background)', color: 'var(--secondary)', fontWeight: '500', border: '1px solid var(--card-border)'
                                        }}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
