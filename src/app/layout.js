import Navbar from "@/components/Navbar";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";

export const metadata = {
  title: "Param Parekh",
  description: "Param Parekh — Master's student at Stony Brook University researching quantum cryptography, AI generated content detection, and quantum error correction.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <a className="skip-link" href="#main-content">Skip to content</a>
          <div className="site-layout">
            <Navbar />
            <main className="container" id="main-content">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
