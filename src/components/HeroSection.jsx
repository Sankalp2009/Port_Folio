import sankalpPhoto from "@/assets/sankalp-photo.jpg";
import { Button } from "@/components/ui/button";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowDown, Github, Linkedin } from "lucide-react";
import { lazy, Suspense, useEffect, useRef, useState } from "react";

const Scene3D = lazy(() => import("./Scene3D"));

// Typing animation roles
const roles = [
  "Full Stack Developer",
  "React Specialist",
  "Backend Architect",
  "Problem Solver",
];

// Tech icon data
const techIcons = [
  {
    id: "html",
    name: "HTML5",
    color: "text-orange-500",
    description: "Semantic markup & accessibility",
    position: "top-[5%] -left-8 md:-left-12",
    delay: 0,
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 md:w-10 md:h-10">
        <path
          fill="currentColor"
          d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"
        />
      </svg>
    ),
  },
  {
    id: "css",
    name: "CSS3",
    color: "text-blue-500",
    description: "Modern layouts & animations",
    position: "top-[20%] -right-6 md:-right-10",
    delay: 0.2,
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 md:w-10 md:h-10">
        <path
          fill="currentColor"
          d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"
        />
      </svg>
    ),
  },
  {
    id: "js",
    name: "JavaScript",
    color: "text-yellow-500",
    description: "ES6+ & TypeScript expert",
    position: "bottom-[15%] -right-4 md:-right-8",
    delay: 0.4,
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 md:w-10 md:h-10">
        <path
          fill="currentColor"
          d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"
        />
      </svg>
    ),
  },
  {
    id: "react",
    name: "React",
    color: "text-cyan-500",
    description: "Hooks, Context & Next.js",
    position: "bottom-[30%] -left-10 md:-left-14",
    delay: 0.6,
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 md:w-10 md:h-10">
        <path
          fill="currentColor"
          d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"
        />
      </svg>
    ),
  },
  {
    id: "node",
    name: "Node.js",
    color: "text-green-500",
    description: "Backend APIs & databases",
    position: "-bottom-4 left-[20%]",
    delay: 0.8,
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 md:w-10 md:h-10">
        <path
          fill="currentColor"
          d="M11.998 0C5.366 0 0 5.367 0 12a11.992 11.992 0 0 0 8.183 11.385c.6.11.819-.26.819-.579 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 17.836 3.633 17.5 3.633 17.5c-1.087-.744.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.776.42-1.306.762-1.606-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.694.825.577C20.565 21.797 24 17.3 24 12c0-6.633-5.367-12-12.002-12z"
        />
      </svg>
    ),
  },
];

// Lightning bolt component
const LightningBolt = ({ className, delay = 0, size = "md" }) => {
  const sizeClasses = {
    sm: "w-16 h-24",
    md: "w-24 h-36",
    lg: "w-32 h-48",
  };

  return (
    <motion.div
      className={`absolute ${className}`}
      initial={{ opacity: 0, scale: 0, rotate: -20 }}
      animate={{
        opacity: [0, 1, 1, 0.8, 1],
        scale: 1,
        rotate: 0,
      }}
      transition={{
        opacity: {
          delay,
          duration: 0.5,
          times: [0, 0.2, 0.5, 0.7, 1],
          repeat: Infinity,
          repeatDelay: 3,
        },
        scale: { delay, duration: 0.5 },
        rotate: { delay, duration: 0.3 },
      }}
    >
      <motion.svg
        viewBox="0 0 100 150"
        className={`${sizeClasses[size]} drop-shadow-[0_0_20px_hsl(45,70%,55%)]`}
        animate={{
          filter: [
            "drop-shadow(0 0 20px hsl(45,70%,55%))",
            "drop-shadow(0 0 40px hsl(45,70%,55%))",
            "drop-shadow(0 0 20px hsl(45,70%,55%))",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        }}
      >
        <defs>
          <linearGradient
            id={`lightning-gradient-${delay}`}
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="hsl(45, 90%, 65%)" />
            <stop offset="50%" stopColor="hsl(45, 70%, 55%)" />
            <stop offset="100%" stopColor="hsl(35, 80%, 45%)" />
          </linearGradient>
        </defs>
        <path
          d="M60 0 L20 60 L45 60 L30 100 L50 100 L35 150 L80 70 L55 70 L75 30 L50 30 Z"
          fill={`url(#lightning-gradient-${delay})`}
          stroke="hsl(45, 90%, 70%)"
          strokeWidth="2"
        />
      </motion.svg>
    </motion.div>
  );
};

// Floating 3D shapes that react to mouse
const FloatingShape = ({ type, className, mouseX, mouseY, delay = 0 }) => {
  const offsetX = (mouseX - 0.5) * 30;
  const offsetY = (mouseY - 0.5) * 30;

  const shapeStyles = {
    cube: (
      <motion.div
        className="w-12 h-12 md:w-16 md:h-16 relative preserve-3d"
        animate={{
          rotateX: [0, 360],
          rotateY: [0, 360],
          x: offsetX,
          y: offsetY,
        }}
        transition={{
          rotateX: { duration: 20, repeat: Infinity, ease: "linear" },
          rotateY: { duration: 15, repeat: Infinity, ease: "linear" },
          x: { duration: 0.5, ease: "easeOut" },
          y: { duration: 0.5, ease: "easeOut" },
        }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute inset-0 border border-primary/30 bg-primary/5 backdrop-blur-sm"
            style={{
              transform: [
                "translateZ(24px)",
                "translateZ(-24px)",
                "rotateY(90deg) translateZ(24px)",
                "rotateY(-90deg) translateZ(24px)",
                "rotateX(90deg) translateZ(24px)",
                "rotateX(-90deg) translateZ(24px)",
              ][i],
            }}
          />
        ))}
      </motion.div>
    ),
    sphere: (
      <motion.div
        className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-gradient-gold opacity-60 blur-[2px]"
        animate={{
          scale: [1, 1.2, 1],
          x: offsetX * 0.8,
          y: offsetY * 0.8,
        }}
        transition={{
          scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          x: { duration: 0.5, ease: "easeOut" },
          y: { duration: 0.5, ease: "easeOut" },
        }}
        style={{ boxShadow: "0 0 40px hsl(45, 70%, 55%, 0.5)" }}
      />
    ),
    pyramid: (
      <motion.div
        className="relative"
        animate={{
          rotateY: [0, 360],
          x: offsetX * 1.2,
          y: offsetY * 1.2,
        }}
        transition={{
          rotateY: { duration: 12, repeat: Infinity, ease: "linear" },
          x: { duration: 0.5, ease: "easeOut" },
          y: { duration: 0.5, ease: "easeOut" },
        }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          className="drop-shadow-[0_0_15px_hsl(45,70%,55%,0.5)]"
        >
          <defs>
            <linearGradient
              id="pyramid-grad"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop
                offset="0%"
                stopColor="hsl(45, 70%, 55%)"
                stopOpacity="0.8"
              />
              <stop
                offset="100%"
                stopColor="hsl(35, 80%, 45%)"
                stopOpacity="0.4"
              />
            </linearGradient>
          </defs>
          <polygon
            points="25,5 45,45 5,45"
            fill="url(#pyramid-grad)"
            stroke="hsl(45, 90%, 70%)"
            strokeWidth="1"
          />
        </svg>
      </motion.div>
    ),
  };

  return (
    <motion.div
      className={`absolute ${className}`}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.8, ease: "easeOut" }}
    >
      {shapeStyles[type]}
    </motion.div>
  );
};

// Interactive floating tech icon component
const FloatingTechIcon = ({ tech, duration = 4 }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`absolute ${tech.position} z-20`}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -15, 0],
      }}
      transition={{
        opacity: { delay: tech.delay + 0.5, duration: 0.5 },
        scale: { delay: tech.delay + 0.5, duration: 0.5 },
        y: {
          delay: tech.delay + 1,
          duration,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className="glass-gold rounded-xl shadow-gold cursor-pointer overflow-hidden"
        animate={{
          scale: isHovered ? 1.1 : 1,
          boxShadow: isHovered
            ? "0 0 60px hsl(45, 70%, 55%, 0.5)"
            : "0 0 40px hsl(45, 70%, 55%, 0.3)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <motion.div className="p-3 md:p-4">
          <div className="flex items-center gap-3">
            <div className={tech.color}>{tech.icon}</div>
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, width: 0, x: -10 }}
                  animate={{ opacity: 1, width: "auto", x: 0 }}
                  exit={{ opacity: 0, width: 0, x: -10 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden whitespace-nowrap"
                >
                  <p className="text-foreground font-semibold text-sm">
                    {tech.name}
                  </p>
                  <p className="text-muted-foreground text-xs">
                    {tech.description}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

// Typing animation component
const TypingAnimation = ({ words }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentWord.length) {
            setDisplayText(currentWord.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex, words]);

  return (
    <span className="text-gradient">
      {displayText}
      <motion.span
        className="inline-block w-1 h-[1em] bg-primary ml-1 align-middle"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
      />
    </span>
  );
};

const HeroSection = () => {
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const [loadScene3D, setLoadScene3D] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    const enable = () => setLoadScene3D(true);
    if (typeof window.requestIdleCallback === "function") {
      const id = window.requestIdleCallback(enable, { timeout: 2200 });
      return () => window.cancelIdleCallback(id);
    }
    const t = window.setTimeout(enable, 150);
    return () => window.clearTimeout(t);
  }, []);

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero"
    >
      {loadScene3D && (
        <Suspense fallback={null}>
          <Scene3D />
        </Suspense>
      )}

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/20 to-background pointer-events-none" />
      <motion.div
        className="absolute top-1/3 right-1/4 w-[600px] h-[600px] rounded-full blur-[150px] animate-pulse-glow"
        style={{
          background:
            "radial-gradient(circle, hsl(45, 70%, 55%, 0.12) 0%, transparent 70%)",
        }}
      />

      {/* Lightning bolts */}
      <LightningBolt
        className="top-[10%] right-[8%] hidden lg:block"
        delay={0.5}
        size="lg"
      />
      <LightningBolt
        className="top-[25%] left-[5%] hidden lg:block"
        delay={1.2}
        size="md"
      />
      <LightningBolt
        className="bottom-[20%] right-[5%] hidden md:block"
        delay={0.8}
        size="sm"
      />

      {/* Floating 3D shapes */}
      <FloatingShape
        type="cube"
        className="top-[15%] left-[10%] hidden lg:block"
        mouseX={mousePosition.x}
        mouseY={mousePosition.y}
        delay={0.5}
      />
      <FloatingShape
        type="sphere"
        className="top-[60%] left-[8%] hidden lg:block"
        mouseX={mousePosition.x}
        mouseY={mousePosition.y}
        delay={0.8}
      />
      <FloatingShape
        type="pyramid"
        className="top-[35%] right-[5%] hidden lg:block"
        mouseX={mousePosition.x}
        mouseY={mousePosition.y}
        delay={1.1}
      />
      <FloatingShape
        type="sphere"
        className="bottom-[25%] left-[15%] hidden md:block"
        mouseX={mousePosition.x}
        mouseY={mousePosition.y}
        delay={1.4}
      />
      <FloatingShape
        type="cube"
        className="bottom-[15%] right-[12%] hidden lg:block"
        mouseX={mousePosition.x}
        mouseY={mousePosition.y}
        delay={1.7}
      />

      {/* Decorative rings */}
      <motion.div
        className="absolute right-[15%] top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-primary/10"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute right-[12%] top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-primary/5"
        animate={{ rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        style={{ y, opacity, scale }}
        className="container mx-auto px-6 pt-24 pb-12 relative z-10"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1"
          >
            <motion.p
              variants={itemVariants}
              className="text-primary font-medium text-lg mb-4 tracking-wide"
            >
              Hey, I am{" "}
              <span className="text-gradient font-semibold">Sankalp</span>
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="font-playfair text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-[1.1] min-h-[2.4em]"
            >
              <TypingAnimation words={roles} />
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-muted-foreground text-lg md:text-xl max-w-lg mb-10 font-jakarta leading-relaxed"
            >
              I specialize in building scalable web applications that blend
              beautiful design with powerful functionality.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 mb-12"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-gold rounded-full opacity-70 blur group-hover:opacity-100 transition-luxury" />
                <Button
                  size="lg"
                  className="relative bg-gradient-gold text-primary-foreground hover:opacity-90 transition-luxury text-base px-8 py-6 font-semibold rounded-full"
                  onClick={() =>
                    document
                      .querySelector("#contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Hire me
                </Button>
              </motion.div>

              {[
                {
                  icon: Github,
                  href: "https://github.com/Sankalp2009",
                  label: "GitHub",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/sankalp-patel-fs-dev/",
                  label: "LinkedIn",
                },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-full glass hover:bg-primary/10 transition-luxury border border-border/50"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={label}
                >
                  <Icon
                    size={24}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  />
                </motion.a>
              ))}
            </motion.div>

            {/* Testimonial Card */}
            <motion.div variants={itemVariants} className="max-w-md">
              <motion.div
                className="glass rounded-2xl p-6 relative overflow-hidden"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="absolute top-4 left-4 text-primary text-4xl font-playfair opacity-30">
                  "
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 pl-6 italic">
                  Working with Sankalp was an incredible experience. He
                  delivered exceptional results that exceeded our expectations
                  with remarkable attention to detail.
                </p>
                <div className="flex items-center gap-3 pl-6">
                  <div>
                    <p className="text-foreground font-medium text-sm">
                      Bharat Choudhary
                    </p>
                    <p className="text-muted-foreground text-xs">
                      Business Owner
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile with floating icons */}
          <motion.div
            className="order-1 lg:order-2 relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-gold opacity-20 blur-[100px] scale-125" />

              <motion.div
                className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden ring-4 ring-primary/20"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                <motion.img
                  src={sankalpPhoto}
                  alt="Sankalp Patel"
                  className="w-full h-full object-cover"
                  decoding="async"
                  fetchPriority="high"
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
              </motion.div>

              {/* Floating Tech Icons */}
              {techIcons.map((tech) => (
                <FloatingTechIcon
                  key={tech.id}
                  tech={tech}
                  duration={3.5 + tech.delay}
                />
              ))}

              {/* Animated rings */}
              <motion.div
                className="absolute -inset-4 rounded-full border border-primary/20 pointer-events-none"
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.1, 0.3] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -inset-8 rounded-full border border-primary/10 pointer-events-none"
                animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.1, 0.2] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Social links removed - moved to next to Hire Me button */}

        <motion.button
          onClick={scrollToAbout}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          whileHover={{ scale: 1.1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 p-3 rounded-full glass-gold transition-luxury"
          aria-label="Scroll to about section"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={22} className="text-primary" />
          </motion.div>
        </motion.button>
      </motion.div>
    </section>
  );
};

export default HeroSection;
