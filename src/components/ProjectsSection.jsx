import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { optimizeCloudinaryUrl } from '@/lib/images';
import { useRef } from 'react';

const projects = [
  {
    title: 'Slyvarae E-Commerce',
    description: 'A full-featured online shopping platform with real-time inventory management and analytics dashboard.',
    image: 'https://res.cloudinary.com/dn2q6aoex/image/upload/v1775755243/Img1_qctnvl.png',
    tags: ["React", "Node.js", "Express.js", "MongoDB"],
    liveUrl: 'https://slyvarae-ecomm-eight.vercel.app/',
    githubUrl: 'https://github.com/Sankalp2009/Slyvarae_Ecomm',
    featured: true,
  },
  {
    title: 'DhanLaxmi Electricals',
    description: 'Developed a React.js business website with 6+ modular components, 15+ animations, and integrated Google Maps API.',
    image: 'https://res.cloudinary.com/dn2q6aoex/image/upload/v1761562607/Screenshot_79_imu3zy.png',
    tags: ["React.js", "Tailwind CSS"],
    liveUrl: 'https://www.dhanlaxmirepairsandservice.in/',
    githubUrl: 'https://github.com/Sankalp2009/Dhanlaxmi_React',
    featured: true,
  },
  {
    title: 'KindMeal',
    description: 'A recipe and restaurant discovery platform with detailed ratings, location info, and dietary restrictions.',
    image: 'https://i.ibb.co/vZp1J33/Screenshot-322.png',
     tags: ["HTML5", "CSS3", "JavaScript"],
    liveUrl: 'http://harmonious-crostata-782582.netlify.app/',
    githubUrl: 'https://github.com/Sankalp2009/Kindmeal.my_Clone',
    featured: true,
  },
  {
    title: 'MovieLeo',
    description: 'Build Movie Application with Knowledge of React and Optimized Fetch Library.',
    image: 'https://res.cloudinary.com/dn2q6aoex/image/upload/v1680706145/Screenshot_25_mdsuku.png',
    tags: ["React.js", "SWR", "Material UI"],
    liveUrl: 'https://movie-5b7g5rrae-sankalp2009.vercel.app/',
    githubUrl: 'https://github.com/Sankalp2009/MovieLeo',
    featured: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, rotateX: -10 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const ProjectsSection = () => {
  const sectionRef = useRef(null);
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);
  const cardsY = useTransform(scrollYProgress, [0, 1], ['3%', '-3%']);

  return (
    <section ref={sectionRef} id="projects" className="py-28 md:py-36 relative overflow-hidden">
      {/* Parallax background decoration */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-dark" />
        <div className="absolute top-1/3 -right-48 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
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
            Portfolio
          </motion.span>
          <h2 className="font-playfair text-4xl md:text-6xl font-bold mb-8">
            Featured{' '}
            <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-jakarta">
            A selection of projects I have worked on, showcasing my expertise in building 
            full-stack applications.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          style={{ y: cardsY }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 perspective"
        >
          {featuredProjects.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover={{ y: -15, rotateY: 5, scale: 1.02 }}
              className="group rounded-3xl bg-gradient-card border border-border/50 shadow-card overflow-hidden hover:shadow-elevated hover:border-primary/30 transition-luxury preserve-3d"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <motion.img
                  src={optimizeCloudinaryUrl(project.image)}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                />
                {/* Gold overlay on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"
                  initial={{ opacity: 0.6 }}
                  whileHover={{ opacity: 0.9 }}
                  transition={{ duration: 0.4 }}
                />
                <motion.div
                  className="absolute inset-0 flex items-end p-6"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex gap-3">
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full glass-gold hover:bg-primary/30 transition-luxury"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink size={18} className="text-primary" />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full glass-gold hover:bg-primary/30 transition-luxury"
                      whileHover={{ scale: 1.2, rotate: -10 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github size={18} className="text-primary" />
                    </motion.a>
                  </div>
                </motion.div>
              </div>
              <div className="p-7">
                <motion.h3
                  className="font-playfair text-xl font-semibold mb-3 group-hover:text-primary transition-luxury"
                >
                  {project.title}
                </motion.h3>
                <p className="text-muted-foreground text-sm mb-5 line-clamp-2 font-jakarta">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tag}
                      className="px-3 py-1.5 rounded-full bg-secondary/50 text-xs font-medium font-jakarta border border-border/30"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: tagIndex * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1, borderColor: 'hsl(var(--primary) / 0.5)' }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="rounded-3xl bg-gradient-card border border-border/50 shadow-elevated p-10 md:p-12 relative overflow-hidden"
        >
          {/* Gold accent line */}
          <div className="absolute top-0 left-10 right-10 h-px bg-gradient-gold opacity-30" />
          
          <h3 className="font-playfair text-2xl font-bold mb-10">Other Projects</h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {otherProjects.map((project) => (
              <motion.div
                key={project.title}
                variants={cardVariants}
                whileHover={{ scale: 1.05, x: 10 }}
                className="group p-6 rounded-2xl bg-secondary/30 hover:bg-secondary/50 border border-transparent hover:border-primary/20 transition-luxury cursor-pointer"
              >
                <motion.h4
                  className="font-playfair font-semibold mb-3 flex items-center gap-2 group-hover:text-primary transition-luxury"
                >
                  {project.title}
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="inline-block"
                  >
                    <ArrowRight size={16} className="text-primary" />
                  </motion.span>
                </motion.h4>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2 font-jakarta">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <motion.span
                      key={tag}
                      className="px-2.5 py-1 rounded-full bg-background/50 text-xs font-jakarta"
                      whileHover={{ scale: 1.1 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            className="inline-block relative group"
          >
            <div className="absolute -inset-1 bg-gradient-gold rounded-xl opacity-30 blur group-hover:opacity-50 transition-luxury" />
            <Button
              size="lg"
              variant="outline"
              className="relative border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-luxury font-medium"
            >
              View All Projects
              <motion.span
                className="ml-2 inline-block"
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
              >
                <ArrowRight size={18} className="text-primary" />
              </motion.span>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
