import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useTheme } from "./hooks/useTheme";
import HeroSection from "./sections/HeroSection";
import KitchenOverview from "./sections/KitchenOverview";
import ProblemSection from "./sections/ProblemSection";
import FeaturesSection from "./sections/FeaturesSection";
import AppShowcase from "./sections/AppShowcase";
import DownloadSection from "./sections/DownloadSection";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import FAQSection from "./sections/FAQSection";

function HomePage() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen overflow-hidden bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      <main>
        <HeroSection />
        <KitchenOverview />
        <ProblemSection />
        <AppShowcase theme={theme} />
        
        <FeaturesSection />
        <FAQSection />
        <DownloadSection />
        
      </main>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
