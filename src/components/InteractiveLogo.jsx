import { motion } from 'framer-motion';
import { useState } from 'react';

const InteractiveLogo = ({ onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const letterVariants = {
    initial: { y: 0 },
    hover: (i) => ({
      y: [-5, 5, -3, 0],
      transition: {
        delay: i * 0.05,
        duration: 0.4,
        ease: 'easeOut',
      },
    }),
  };

  const letters = 'sankalp'.split('');

  return (
    <motion.a
      href="#home"
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      className="flex items-center gap-1 cursor-pointer group"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileTap={{ scale: 0.95 }}
    >
      {/* Animated S logo mark */}
      <motion.div
        className="relative w-10 h-10 flex items-center justify-center"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        {/* Outer ring */}
        <motion.div
          className="absolute inset-0 rounded-lg border-2 border-primary/50"
          animate={{
            rotate: isHovered ? 45 : 0,
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Inner gradient background */}
        <motion.div
          className="absolute inset-1 rounded-md bg-gradient-gold"
          animate={{
            scale: isHovered ? 0.9 : 0.85,
          }}
          transition={{ duration: 0.3 }}
        />
        
        {/* S letter */}
        <motion.span
          className="relative z-10 font-playfair text-xl font-bold text-primary-foreground"
          animate={{
            scale: isHovered ? 1.2 : 1,
          }}
          transition={{ duration: 0.3, type: 'spring', stiffness: 300 }}
        >
          S
        </motion.span>

        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 rounded-lg bg-primary/30 blur-xl"
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1.5 : 1,
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* Text part */}
      <div className="font-playfair text-xl font-bold flex overflow-hidden">
        {letters.map((letter, i) => (
          <motion.span
            key={i}
            className="text-foreground inline-block"
            custom={i}
            variants={letterVariants}
            initial="initial"
            animate={isHovered ? 'hover' : 'initial'}
          >
            {letter}
          </motion.span>
        ))}
        <motion.span
          className="text-primary inline-block"
          animate={{
            scale: isHovered ? [1, 1.5, 1] : 1,
            rotate: isHovered ? [0, 360] : 0,
          }}
          transition={{ duration: 0.5 }}
        >
          .
        </motion.span>
      </div>
    </motion.a>
  );
};

export default InteractiveLogo;