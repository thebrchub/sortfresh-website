import Navbar from "./Navbar";
import { useTheme } from "../hooks/useTheme";
import Footer from "./Footer";

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      <main className="min-h-screen px-5 pb-20 pt-32 sm:px-10 lg:px-14">
        <div className="mx-auto max-w-3xl">
          {children}
        </div>
      </main>

      <Footer />
    </div>
  );
}