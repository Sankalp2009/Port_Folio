import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Preloader from "@/components/Preloader";
import { ThemeProvider } from "@/hooks/use-theme";
import { lazy, Suspense } from "react";

const AboutSection = lazy(() => import("@/components/AboutSection"));
const SkillsSection = lazy(() => import("@/components/SkillsSection"));
const ProjectsSection = lazy(() => import("@/components/ProjectsSection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <ThemeProvider>
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      <main className="min-h-screen bg-background">
        <Navbar />
        <HeroSection />
        <Suspense
          fallback={
            <div className="h-40 flex items-center justify-center">
              <div className="animate-pulse text-primary/50">
                Loading section...
              </div>
            </div>
          }
        >
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
