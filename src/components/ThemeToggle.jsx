import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/hooks/use-theme';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-14 h-8 rounded-full glass-gold p-1 cursor-pointer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      {/* Background track */}
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{
          background: isDark
            ? 'linear-gradient(135deg, hsl(220, 30%, 15%) 0%, hsl(220, 30%, 10%) 100%)'
            : 'linear-gradient(135deg, hsl(45, 70%, 55%) 0%, hsl(35, 80%, 45%) 100%)',
        }}
        transition={{ duration: 0.5 }}
      />

      {/* Toggle knob */}
      <motion.div
        className="relative w-6 h-6 rounded-full flex items-center justify-center shadow-lg"
        animate={{
          x: isDark ? 0 : 24,
          backgroundColor: isDark ? 'hsl(220, 25%, 20%)' : 'hsl(45, 100%, 98%)',
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      >
        <motion.div
          initial={false}
          animate={{ rotate: isDark ? 0 : 360 }}
          transition={{ duration: 0.5 }}
        >
          {isDark ? (
            <Moon size={14} className="text-primary" />
          ) : (
            <Sun size={14} className="text-amber-500" />
          )}
        </motion.div>
      </motion.div>

      {/* Stars/rays decoration */}
      {isDark && (
        <>
          <motion.div
            className="absolute top-1.5 right-3 w-1 h-1 rounded-full bg-primary/60"
            animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1, 0.8] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-2 right-4 w-0.5 h-0.5 rounded-full bg-primary/40"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
          />
        </>
      )}
    </motion.button>
  );
};

export default ThemeToggle;