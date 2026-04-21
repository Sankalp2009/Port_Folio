import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import InteractiveLogo from "./InteractiveLogo";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Experience", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Connect", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const handleDownloadResume = useCallback(() => {
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/file/d/1AljkEB9kcxp0xfBdwkaCn02OWMWcBzPF/view?usp=sharing";
    link.download = "Sankalp_Patel_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navItems.map((item) => item.href.substring(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-luxury ${
        isScrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Interactive Logo */}
        <InteractiveLogo onClick={() => scrollToSection("#home")} />

        {/* Desktop Navigation - Pill Style */}
        <motion.div
          className="hidden md:flex items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center gap-1 glass rounded-full px-2 py-2">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`relative px-5 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                  activeSection === item.href.substring(1)
                    ? "text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {activeSection === item.href.substring(1) && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-gold rounded-full"
                    layoutId="activeNavPill"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Right side - Theme toggle & Resume button */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-gold rounded-full opacity-50 blur group-hover:opacity-75 transition-luxury" />
              <Button
                variant="default"
                className="relative bg-card hover:bg-card/80 text-foreground border border-border/50 rounded-full px-5 font-medium flex items-center gap-2"
                onClick={handleDownloadResume}
              >
                <Download size={16} />
                Resume
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Mobile - Theme toggle & Menu Button */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />

          <motion.button
            className="p-2 rounded-lg glass transition-luxury"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} className="text-primary" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden glass border-t border-border overflow-hidden mt-3 mx-6 rounded-2xl"
          >
            <motion.div
              className="p-4 flex flex-col gap-2"
              initial="closed"
              animate="open"
              variants={{
                closed: { opacity: 0 },
                open: { opacity: 1, transition: { staggerChildren: 0.07 } },
              }}
            >
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`px-4 py-3 text-left font-medium rounded-xl transition-luxury ${
                    activeSection === item.href.substring(1)
                      ? "bg-gradient-gold text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                  variants={{
                    closed: { opacity: 0, x: -20 },
                    open: { opacity: 1, x: 0 },
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  {item.name}
                </motion.button>
              ))}
              <motion.div
                variants={{
                  closed: { opacity: 0, y: 20 },
                  open: { opacity: 1, y: 0 },
                }}
                className="mt-2"
              >
                <Button
                  variant="outline"
                  className="w-full border-primary/30 rounded-xl flex items-center justify-center gap-2"
                  onClick={() => {
                    /* Handle resume download */
                  }}
                >
                  <Download size={16} />
                  Download Resume
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
