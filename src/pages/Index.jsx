import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Preloader from "@/components/Preloader";
import { ThemeProvider } from "@/hooks/use-theme";
import { lazy, Suspense, useCallback, useState } from "react";

const AboutSection = lazy(() => import("@/components/AboutSection"));
const SkillsSection = lazy(() => import("@/components/SkillsSection"));
const ProjectsSection = lazy(() => import("@/components/ProjectsSection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));
const Footer = lazy(() => import("@/components/Footer"));

const PRELOADER_SESSION_KEY = "pf_preloader_done_v1";

const Index = () => {
  const [isLoading, setIsLoading] = useState(() => {
    try {
      return sessionStorage.getItem(PRELOADER_SESSION_KEY) !== "1";
    } catch {
      return true;
    }
  });
  const handlePreloaderComplete = useCallback(() => {
    try {
      sessionStorage.setItem(PRELOADER_SESSION_KEY, "1");
    } catch {
      /* private mode */
    }
    setIsLoading(false);
  }, []);

  return (
    <ThemeProvider>
      {isLoading && <Preloader onComplete={handlePreloaderComplete} />}
      <main className="min-h-screen bg-background">
        <Navbar />
        <HeroSection />
        <Suspense fallback={<div className="min-h-[12rem]" aria-hidden />}>
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
          <Footer />
        </Suspense>
      </main>
    </ThemeProvider>
  );
};

export default Index;
