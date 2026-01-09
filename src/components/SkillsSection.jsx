import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', icon: '⚛️'},
      { name: 'TypeScript', icon: '📘'},
      { name: 'Next.js', icon: '▲'},
      { name: 'Tailwind CSS', icon: '🎨'},
      { name: 'Three.js', icon: '🎮'},
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', icon: '🟢'},
      { name: 'Python', icon: '🐍'},
      { name: 'PostgreSQL', icon: '🐘'},
      { name: 'MongoDB', icon: '🍃'},
      { name: 'GraphQL', icon: '◈'},
    ],
  },
  {
    category: 'Tools & Cloud',
    items: [
      { name: 'Git', icon: '📦'},
      { name: 'Docker', icon: '🐳'},
      { name: 'AWS', icon: '☁️'},
      { name: 'Figma', icon: '🎯'},
      { name: 'CI/CD', icon: '🔄'},
    ],
  },
];

const additionalSkills = ['Redux', 'Prisma', 'Redis', 'Firebase', 'Vercel', 'Stripe', 'Socket.io', 'Jest'];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const SkillsSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['-15%', '15%']);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [5, 0, -5]);

  return (
    <section ref={sectionRef} id="skills" className="py-28 md:py-36 relative overflow-hidden">
      {/* Parallax background decoration */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[120px]" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-20"
        >
          <motion.span
            className="inline-block px-5 py-2.5 rounded-full glass-gold text-primary text-sm font-medium tracking-wider uppercase mb-6"
            whileHover={{ scale: 1.05 }}
          >
            Skills & Expertise
          </motion.span>
          <h2 className="font-playfair text-4xl md:text-6xl font-bold mb-8">
            Technologies I{' '}
            <span className="text-gradient">Work With</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-jakarta">
            I stay up-to-date with the latest technologies to deliver cutting-edge solutions.
          </p>
        </motion.div>

        {/* Hexagonal/Orbital Skills Display */}
        <motion.div
          style={{ rotateX }}
          className="perspective preserve-3d"
        >
          {skills.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: categoryIndex * 0.15 }}
              viewport={{ once: true }}
              className="mb-16 last:mb-0"
            >
              <motion.h3
                className="font-playfair text-2xl md:text-3xl font-semibold mb-10 text-center"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-gradient">{category.category}</span>
              </motion.h3>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap justify-center gap-6"
              >
                {category.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.1, 
                      y: -10,
                      rotateY: 10,
                      rotateX: -5,
                    }}
                    className="group relative"
                  >
                    {/* Hexagonal shape container */}
                    <div className="relative w-28 h-32 md:w-32 md:h-36">
                      {/* Glow effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-gold opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-40"
                      />
                      
                      {/* Hexagon SVG background */}
                      <svg
                        viewBox="0 0 100 115"
                        className="absolute inset-0 w-full h-full"
                      >
                        <defs>
                          <linearGradient id={`hex-gradient-${skillIndex}-${categoryIndex}`} x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="hsl(220, 25%, 12%)" />
                            <stop offset="100%" stopColor="hsl(220, 25%, 8%)" />
                          </linearGradient>
                          <linearGradient id={`hex-stroke-${skillIndex}-${categoryIndex}`} x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="hsl(45, 70%, 55%)" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="hsl(45, 70%, 55%)" stopOpacity="0.1" />
                          </linearGradient>
                        </defs>
                        <motion.polygon
                          points="50,2 95,28 95,87 50,113 5,87 5,28"
                          fill={`url(#hex-gradient-${skillIndex}-${categoryIndex})`}
                          stroke={`url(#hex-stroke-${skillIndex}-${categoryIndex})`}
                          strokeWidth="2"
                          className="transition-all duration-500 group-hover:stroke-primary"
                          initial={{ strokeOpacity: 0.3 }}
                          whileHover={{ strokeOpacity: 1 }}
                        />
                      </svg>

                      {/* Content */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                        <motion.span 
                          className="text-2xl md:text-3xl mb-2"
                          animate={{ rotate: [0, 5, -5, 0] }}
                          transition={{ duration: 3, repeat: Infinity, delay: skillIndex * 0.2 }}
                        >
                          {skill.icon}
                        </motion.span>
                        <span className="font-jakarta font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
                          {skill.name}
                        </span>
                        
                      </div>

                      {/* Floating particles on hover */}
                      <motion.div
                        className="absolute -top-2 -right-2 w-2 h-2 rounded-full bg-primary opacity-0 group-hover:opacity-100"
                        animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <motion.div
                        className="absolute -bottom-2 -left-2 w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100"
                        animate={{ y: [0, 10, 0], x: [0, -5, 0] }}
                        transition={{ duration: 2.5, repeat: Infinity }}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills - Floating Tags */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-muted-foreground mb-10 font-jakarta">Also experienced with</p>
          <motion.div
            className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {additionalSkills.map((tech, index) => (
              <motion.span
                key={tech}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.15, 
                  y: -8,
                  boxShadow: '0 0 30px hsl(45, 70%, 55%, 0.4)',
                }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-full glass-gold text-sm font-medium font-jakarta cursor-pointer transition-luxury relative overflow-hidden group"
              >
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                />
                <span className="relative z-10">{tech}</span>
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Decorative orbiting elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none hidden lg:block">
          <motion.div
            className="absolute top-0 left-1/2 w-3 h-3 rounded-full bg-primary/50"
            animate={{ 
              rotate: 360,
            }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            style={{ transformOrigin: '0 300px' }}
          />
          <motion.div
            className="absolute top-1/4 left-0 w-2 h-2 rounded-full bg-primary/30"
            animate={{ 
              rotate: -360,
            }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            style={{ transformOrigin: '300px 225px' }}
          />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;