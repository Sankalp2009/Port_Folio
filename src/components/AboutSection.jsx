import { motion, useScroll, useTransform } from 'framer-motion';
import { Code2, Palette, Rocket, Zap } from 'lucide-react';
import { useRef } from 'react';

const highlights = [
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable code that stands the test of time.',
  },
  {
    icon: Palette,
    title: 'Design Focus',
    description: 'Crafting beautiful interfaces that users love to interact with.',
  },
  {
    icon: Rocket,
    title: 'Fast Delivery',
    description: 'Shipping quality products on time without compromising standards.',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Optimizing every aspect for blazing-fast user experiences.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, rotateX: -15 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const AboutSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['5%', '-5%']);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return (
    <section ref={sectionRef} id="about" className="py-28 md:py-36 relative overflow-hidden">
      {/* Parallax background decoration */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      </motion.div>

      <motion.div style={{ y: contentY }} className="container mx-auto px-6 relative z-10">
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
            About Me
          </motion.span>
          <h2 className="font-playfair text-4xl md:text-6xl font-bold mb-8">
            Passionate About Building{' '}
            <span className="text-gradient">Digital Experiences</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-jakarta leading-relaxed">
            With years of experience in full-stack development, I bring ideas to life through 
            elegant code and thoughtful design. I believe in the power of technology to solve 
            real-world problems and create meaningful impact.
          </p>
        </motion.div>

        <motion.div
          style={{ scale }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 perspective"
        >
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02, rotateY: 5 }}
              className="group p-8 rounded-2xl bg-gradient-card border border-border/50 shadow-card hover:shadow-elevated hover:border-primary/30 transition-luxury preserve-3d cursor-default"
            >
              <motion.div
                className="w-16 h-16 rounded-xl bg-gradient-gold flex items-center justify-center mb-6 shadow-gold"
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <item.icon size={28} className="text-primary-foreground" />
              </motion.div>
              <h3 className="font-playfair text-xl font-semibold mb-4 group-hover:text-primary transition-luxury">
                {item.title}
              </h3>
              <p className="text-muted-foreground font-jakarta">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: '-50px' }}
          className="mt-20 p-10 md:p-14 rounded-3xl bg-gradient-card border border-border/50 shadow-elevated relative overflow-hidden"
        >
          {/* Gold accent line */}
          <div className="absolute top-0 left-10 right-10 h-px bg-gradient-gold opacity-50" />
          
          {/* Parallax background decoration */}
          <motion.div
            className="absolute -top-32 -right-32 w-96 h-96 rounded-full blur-[120px]"
            style={{ background: 'radial-gradient(circle, hsl(45, 70%, 55%, 0.1) 0%, transparent 70%)' }}
            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          />
          
          <div className="grid md:grid-cols-2 gap-14 items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
                My Journey
              </h3>
              <p className="text-muted-foreground mb-5 font-jakarta leading-relaxed">
                I started my journey in web development with a curiosity for how things work 
                on the internet. Over the years, this curiosity evolved into a passion for 
                creating seamless digital experiences.
              </p>
              <p className="text-muted-foreground font-jakarta leading-relaxed">
                Today, I work with modern technologies like React, Node.js, TypeScript, and 
                cloud services to build applications that make a difference. When I am not 
                coding, you will find me exploring new technologies or contributing to 
                open-source projects.
              </p>
            </motion.div>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { value: '2+', label: 'Years Experience' },
                { value: '5+', label: 'Projects Completed' },
                { value: '3+', label: 'Happy Clients' },
                { value: '100%', label: 'Dedication' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  whileHover={{ scale: 1.08, y: -5 }}
                  className="text-center p-7 rounded-2xl bg-secondary/50 border border-border/30 hover:border-primary/30 transition-luxury cursor-default"
                >
                  <motion.div
                    className="font-playfair text-4xl md:text-5xl font-bold text-gradient mb-3"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1, type: 'spring' }}
                    viewport={{ once: true }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm text-muted-foreground font-jakarta">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;