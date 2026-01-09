import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsExiting(true);
            setTimeout(onComplete, 800);
          }, 300);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  const letterVariants = {
    initial: { y: 50, opacity: 0 },
    animate: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  const letters = 'SANKALP'.split('');

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
          exit={{
            clipPath: 'circle(0% at 50% 50%)',
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
          }}
        >
          {/* Background decorations */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full blur-[150px]"
            style={{ background: 'radial-gradient(circle, hsl(45, 70%, 55%, 0.15) 0%, transparent 70%)' }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full blur-[120px]"
            style={{ background: 'radial-gradient(circle, hsl(45, 70%, 55%, 0.1) 0%, transparent 70%)' }}
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />

          {/* Logo animation */}
          <div className="relative mb-12">
            {/* Rotating rings */}
            <motion.div
              className="absolute -inset-8 border border-primary/20 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="absolute -inset-16 border border-primary/10 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
            />

            {/* Logo mark */}
            <motion.div
              className="w-24 h-24 rounded-2xl bg-gradient-gold flex items-center justify-center shadow-gold"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.span
                className="font-playfair text-5xl font-bold text-primary-foreground"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                S
              </motion.span>
            </motion.div>
          </div>

          {/* Name letters */}
          <div className="flex gap-2 mb-8">
            {letters.map((letter, i) => (
              <motion.span
                key={i}
                className="font-playfair text-4xl md:text-5xl font-bold text-gradient"
                custom={i}
                variants={letterVariants}
                initial="initial"
                animate="animate"
              >
                {letter}
              </motion.span>
            ))}
          </div>

          {/* Progress bar */}
          <div className="w-48 h-1 bg-secondary rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-gold rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Loading text */}
          <motion.p
            className="mt-4 text-muted-foreground text-sm font-jakarta"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {progress < 100 ? 'Loading experience...' : 'Welcome!'}
          </motion.p>

          {/* Floating particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-primary/50"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 3) * 20}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 2 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;