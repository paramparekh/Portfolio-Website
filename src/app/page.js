import { ArrowRight, Mail, FileText, Linkedin } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
      {/* Hero Section */}
      <section style={{
        padding: '3rem 0', display: 'flex', alignItems: 'center', gap: '3rem',
        flexWrap: 'wrap-reverse', borderBottom: '1px solid var(--card-border)'
      }}>
        <div style={{ flex: 1, minWidth: '300px' }}>
          <h1 style={{ fontSize: '3.5rem', fontWeight: '700', marginBottom: '1rem', lineHeight: 1.1 }}>
            Param Parekh
          </h1>

          <p style={{ color: 'var(--foreground)', lineHeight: '1.8', marginBottom: '2.5rem', fontSize: '1.1rem', maxWidth: '600px' }}>
            I am a Graduate Student in Computer Science Department at Stony Brook University, New York, USA. My research interests include Quantum Computing and Cryptography. I am currently exploring quantum optimization and quantum cryptography.
            I also enjoy building software products and actively looking for summer internships in Software Development, Quantum Computing, and Cryptography.
          </p>

          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="mailto:param.parekh@stonybrook.edu" style={{ textDecoration: 'none' }}>
              <button style={{
                background: 'var(--primary)', border: 'none', padding: '0.8rem 1.8rem',
                borderRadius: '4px', color: 'white', fontWeight: '500', cursor: 'pointer',
                display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '1rem'
              }}>
                Contact Me <Mail size={16} />
              </button>
            </a>
            <a href="https://drive.google.com/file/d/1-G8cx2lqUHYFwEar6Kvb4CFS9YGiMthb/view?usp=sharing" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <button style={{
                background: 'transparent', border: '1px solid var(--card-border)',
                padding: '0.8rem 1.8rem', borderRadius: '4px', color: 'var(--foreground)',
                fontWeight: '500', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.6rem'
              }}>
                View Resume <FileText size={16} />
              </button>
            </a>
          </div>
        </div>

        {/* Profile Image Area */}
        {/* Profile Image Area */}
        <div style={{
          width: '280px', height: '280px', borderRadius: '50%',
          border: '4px solid white',
          boxShadow: '0 10px 25px rgba(14, 116, 144, 0.15)', /* Teal shadow match */
          display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto',
          position: 'relative', overflow: 'hidden'
        }}>
          <img
            src={`/profile.jpg?v=${new Date().getTime()}`}
            alt="Param Parekh"
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          />
        </div>
      </section>

      {/* Social Links - Clean List */}
      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
        {[
          { name: 'GitHub', url: 'https://github.com/paramparekh' },
          { name: 'LinkedIn', url: 'https://www.linkedin.com/in/param-parekh-2a990a1b7/' },
          { name: 'Google Scholar', url: 'https://scholar.google.com/citations?hl=en&user=gFLDXv8AAAAJ' },
          { name: 'Twitter', url: 'https://x.com/ParamParam98832' }
        ].map((social) => (
          <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="social-link">
            {social.name} <ArrowRight size={14} />
          </a>
        ))}
      </div>
    </div>
  );
}
