import { ArrowUpRight, Mail, FileText } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="about-page">
      <header className="page-intro">
        <p className="eyebrow">About me</p>
        <h1>Param Parekh</h1>
        <p className="intro-subtitle">Computer Science · Stony Brook University</p>
      </header>
      <section className="about-hero" aria-label="Biography">
        <div className="biography">
          <p>I am pursuing a Master&apos;s in Computer Science at Stony Brook University, New York, USA. My research interests lie in quantum cryptography, AI generated content detection (i.e., cryptographic watermarking schemes) and quantum error correction.</p>
          <p>I am currently working on my thesis under the supervision of Prof. Supartha Podder, and actively looking for PhD opportunities.</p>
          <div className="profile-actions">
            <details className="contact-menu">
              <summary className="button button-primary">Contact Me <Mail size={17} aria-hidden="true" /></summary>
              <div className="contact-options">
                <a href="mailto:param.parekh@stonybrook.edu"><span>University</span>param.parekh@stonybrook.edu</a>
                <a href="mailto:paramparekh4u@gmail.com"><span>Personal</span>paramparekh4u@gmail.com</a>
              </div>
            </details>
            <a className="button button-secondary" href="https://drive.google.com/file/d/195dURLbxLsJsv7WQgd94mgMJuWMuxE1k/view?usp=sharing" target="_blank" rel="noopener noreferrer">View Resume <FileText size={17} aria-hidden="true" /></a>
          </div>
        </div>
        <figure className="profile-portrait">
          <Image src="/profile.jpg" alt="Param Parekh" width={260} height={310} priority />
          <figcaption>Stony Brook, New York</figcaption>
        </figure>
      </section>
      <section className="research-overview" aria-labelledby="research-heading">
        <p className="eyebrow" id="research-heading">Research interests</p>
        <ul>
          <li>Quantum cryptography</li>
          <li>AI generated content detection</li>
          <li>Quantum error correction</li>
          <li>Artificial intelligence</li>
        </ul>
      </section>
      <div className="social-links" aria-label="Academic and social profiles">
        {[
          { name: "LinkedIn", url: "https://www.linkedin.com/in/param-parekh-2a990a1b7/" },
          { name: "Google Scholar", url: "https://scholar.google.com/citations?hl=en&user=gFLDXv8AAAAJ" },
          { name: "Twitter", url: "https://x.com/ParamParam98832" },
        ].map((social) => (
          <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="social-link">{social.name} <ArrowUpRight size={15} aria-hidden="true" /></a>
        ))}
      </div>
    </div>
  );
}
