import { ArrowRight, Mail, FileText, Linkedin } from "lucide-react";

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
          <h2 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-sans)', fontWeight: '400', color: 'var(--secondary)', marginBottom: '1.5rem' }}>
            Researcher & Developer
          </h2>
          <p style={{ color: 'var(--foreground)', lineHeight: '1.8', marginBottom: '2.5rem', fontSize: '1.1rem', maxWidth: '600px' }}>
            I specialize in advanced computing systems and web technologies. My work bridges the gap between theoretical research and practical application, with a focus on scalable architecture and human-computer interaction.
          </p>

          <div style={{ display: 'flex', gap: '1rem' }}>
            <button style={{
              background: 'var(--primary)', border: 'none', padding: '0.8rem 1.8rem',
              borderRadius: '4px', color: 'white', fontWeight: '500', cursor: 'pointer',
              display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '1rem'
            }}>
              Contact Me <Mail size={16} />
            </button>
            <button style={{
              background: 'transparent', border: '1px solid var(--card-border)',
              padding: '0.8rem 1.8rem', borderRadius: '4px', color: 'var(--foreground)',
              fontWeight: '500', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.6rem'
            }}>
              View CV <FileText size={16} />
            </button>
          </div>
        </div>

        {/* Profile Image Area */}
        <div style={{
          width: '250px', height: '250px', borderRadius: '50%',
          background: 'linear-gradient(135deg, #e0f2fe 0%, #f0f9ff 100%)',
          border: '4px solid white',
          boxShadow: '0 10px 25px rgba(2, 132, 199, 0.1)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto',
          position: 'relative', overflow: 'hidden'
        }}>
          <span style={{ fontSize: '6rem', color: 'var(--accent)', fontFamily: 'var(--font-serif)' }}>P</span>
        </div>
      </section>

      {/* Social Links - Clean List */}
      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
        {['GitHub', 'LinkedIn', 'Google Scholar', 'Twitter'].map((social) => (
          <a key={social} href="#" className="social-link">
            {social} <ArrowRight size={14} />
          </a>
        ))}
      </div>
    </div>
  );
}
