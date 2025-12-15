import Navbar from "@/components/Navbar";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";

export const metadata = {
  title: "Param Parekh | Researcher",
  description: "Academic Portfolio of Param Parekh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Navbar />
          <main className="container" style={{ paddingTop: '7.5rem', paddingBottom: '4rem' }}>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
