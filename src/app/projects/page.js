import PageHeader from "@/components/PageHeader";
import { Code, Layers, Database, Lock, Radio, ArrowUpRight } from "lucide-react";

export default function Projects() {
    const projects = [
        {
            title: "qLDPC CoDesign Explorer",
            description: [
                "Developed an interactive research platform for exploring quantum low-density parity-check error-correction workflows.",
                "Designed an end-to-end experience spanning experiment configuration, error injection, syndrome observation, and decoding.",
                "Applied HCI principles to make complex QEC concepts understandable and inspectable."
            ],
            tags: ["Quantum Error Correction", "qLDPC", "HCI"],
            icon: Layers,
            date: "Sept 2026",
            link: "https://github.com/paramparekh/qldpc-codesign-explorer"
        },
        {
            title: "Pseudorandom Unitaries",
            description: [
                "Conducted a literature review on Pseudorandom Unitaries (PRUs) as part of a cryptography course, studying efficient quantum circuits that are computationally indistinguishable from Haar-random unitaries.",
                "Learned the PFC construction of PRU and how to prove its existence based on standard cryptographic assumptions via the path-recording oracle technique."
            ],
            tags: ["Quantum Cryptography", "PRU", "Quantum Computing", "Cryptography"],
            icon: Lock,
            date: "March 2026",
            links: [
                { label: "Report", url: "https://drive.google.com/file/d/1Yh8kDL3mxNtUWQXDJnLmhS9AOsZtSu4u/view?usp=sharing" },
                { label: "Slides", url: "https://pseudo-random-unitaries.vercel.app/" }
            ]
        },
        {
            title: "LLM Text Watermarking",
            description: [
                "Implemented two cryptographic indistinguishability-based LLM text watermarking schemes, Undetectable Watermarking and Pseudorandom Codes (PRC), on Mistral-7B using multinomial sampling.",
                "Conducted empirical evaluation of watermark detection, analyzing detection accuracy, text quality preservation, and robustness; evaluated impact across downstream tasks including machine translation, code generation, and summarization.",
                "Provided one of the first empirical evaluations of PRC-based watermarking for LLM-generated text and performed rigorous cryptographic comparison analysis of multiple PRC constructions, assessing indistinguishability and adversarial resistance."
            ],
            tags: ["AI Safety", "NLP", "Cryptography"],
            icon: Lock,
            date: "Jan 2026 – Present",
            teamSize: 2,
            link: "https://github.com/paavanmparekh/LLM-Text-Watermarking"
        },
        {
            title: "Circuit Fingerprint Challenge: MIT iQuHACK'26",
            description: "Worked on a predictive modeling challenge to estimate cost–accuracy tradeoffs for quantum circuit simulation. Extracted structural and performance features from OpenQASM circuits and built models to predict the minimum approximation threshold needed to achieve target fidelity and the expected runtime, enabling smarter configuration choices before simulation.",
            tags: ["Quantum Simulation", "Predictive Modeling", "OpenQASM", "MIT iQuHACK"],
            icon: Layers,
            date: "Jan 2026",
            link: "https://github.com/paramparekh/iQuHack26-QuantumRings"
        },
        {
            title: "Quantum Cryptography: Security Reductions in Quantum World",
            description: "Conducted a literature review on the security of classical cryptographic primitives (GGM PRF, Naor-Reingold PRF, LWE-based PRFs) under quantum queries. Studied the collapse-binding property to restore security for commitment schemes against quantum attackers.",
            tags: ["Quantum Cryptography", "Security Reductions", "PRF", "LWE"],
            icon: Lock,
            date: "Sep 2025",
            link: "https://drive.google.com/file/d/1cBlfvWmeRy80NDj3aPdNodwX2itNVjhS/view?usp=sharing"
        },
        {
            title: "Implementation of Quantum Algorithms on IBM Qiskit",
            description: "Implemented standard quantum algorithms including Deutsch-Jozsa Algorithm, Grover's Search, Quantum Random Number Generation, and QKD protocols using IBM Qiskit framework.",
            tags: ["IBM Qiskit", "Quantum Algorithms", "Python", "QKD"],
            icon: Code,
            date: "Nov 2025",
            link: "https://github.com/paramparekh/Foundational-QuantumAlgorithms-Qiskit.git"
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
        <div className="page-stack">
            <PageHeader title="Projects" description="Selected work across quantum computing, cryptography, AI, and software engineering." />
            <div className="project-list">
                {projects.map((project) => {
                    const Icon = project.icon;
                    const links = project.links || [{ label: "View project", url: project.link }];
                    return (
                        <article key={project.title} className="project-card">
                            <div className="project-heading">
                                <div className="project-icon"><Icon size={22} aria-hidden="true" /></div>
                                <div>
                                    <p className="project-date">{project.date}{project.teamSize && ` | Team of ${project.teamSize}`}</p>
                                    <h2>{project.title}</h2>
                                </div>
                            </div>
                            <div className="project-description">
                                {Array.isArray(project.description) ? (
                                    <ul>{project.description.map(item => <li key={item}>{item}</li>)}</ul>
                                ) : <p>{project.description}</p>}
                            </div>
                            <div className="project-footer">
                                <div className="tag-list">{project.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div>
                                <div className="project-links">{links.map(link => (
                                    <a href={link.url} key={link.label} target="_blank" rel="noopener noreferrer" aria-label={`${link.label}: ${project.title}`}>{link.label} <ArrowUpRight size={16} aria-hidden="true" /></a>
                                ))}</div>
                            </div>
                        </article>
                    );
                })}
            </div>
        </div>
    );
}
