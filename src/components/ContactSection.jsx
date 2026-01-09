import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState, useRef } from 'react';
import { toast } from 'sonner';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const ContactSection = () => {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSending, setIsSending] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['-15%', '15%']);
  const formY = useTransform(scrollYProgress, [0, 1], ['5%', '-5%']);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast.success("Message sent successfully! I will get back to you soon.");
    setFormData({ name: '', email: '', message: '' });
    setIsSending(false);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section ref={sectionRef} id="contact" className="py-28 md:py-36 relative overflow-hidden">
      {/* Parallax background decoration */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[200px]" />
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
            Get in Touch
          </motion.span>
          <h2 className="font-playfair text-4xl md:text-6xl font-bold mb-8">
            Let us Work{' '}
            <span className="text-gradient">Together</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-jakarta">
            Have a project in mind? I would love to hear about it. Send me a message and 
            let us create something amazing together.
          </p>
        </motion.div>

        <motion.div style={{ y: formY }} className="grid lg:grid-cols-2 gap-14 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="p-10 md:p-12 rounded-3xl bg-gradient-card border border-border/50 shadow-elevated relative overflow-hidden"
          >
            {/* Gold accent line */}
            <div className="absolute top-0 left-10 right-10 h-px bg-gradient-gold opacity-50" />
            
            {/* Background decoration */}
            <motion.div
              className="absolute -bottom-32 -right-32 w-64 h-64 rounded-full blur-[100px]"
              style={{ background: 'radial-gradient(circle, hsl(45, 70%, 55%, 0.1) 0%, transparent 70%)' }}
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 10, repeat: Infinity }}
            />
            
            <h3 className="font-playfair text-2xl font-bold mb-8 relative z-10">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-7 relative z-10">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
              >
                <label htmlFor="name" className="block text-sm font-medium mb-3 font-jakarta">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="h-14 rounded-xl bg-secondary/50 border-border/50 focus:border-primary transition-luxury font-jakarta"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <label htmlFor="email" className="block text-sm font-medium mb-3 font-jakarta">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="h-14 rounded-xl bg-secondary/50 border-border/50 focus:border-primary transition-luxury font-jakarta"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                <label htmlFor="message" className="block text-sm font-medium mb-3 font-jakarta">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                  rows={5}
                  className="rounded-xl bg-secondary/50 border-border/50 focus:border-primary transition-luxury resize-none font-jakarta"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-gold rounded-xl opacity-70 blur group-hover:opacity-100 transition-luxury" />
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSending}
                  className="relative w-full bg-gradient-gold text-primary-foreground hover:opacity-90 transition-luxury h-14 rounded-xl text-base font-semibold"
                >
                  <motion.span
                    className="flex items-center justify-center gap-2"
                    animate={isSending ? { opacity: 0 } : { opacity: 1 }}
                  >
                    Send Message
                    <Send size={18} />
                  </motion.span>
                  {isSending && (
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <motion.div
                        className="w-6 h-6 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      />
                    </motion.div>
                  )}
                </Button>
              </motion.div>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="flex flex-col justify-between"
          >
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {[
                { icon: Mail, label: 'Email', value: 'sankalppatel38@example.com', href: 'mailto:sankalppatel38@example.com' },
                { icon: Phone, label: 'Phone', value: '+91 8827668573', href: 'tel:+918827668573' },
                { icon: MapPin, label: 'Location', value: 'Katni, In', href: '#' },
              ].map((contact) => (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  variants={itemVariants}
                  whileHover={{ x: 15, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-6 p-7 rounded-2xl bg-gradient-card border border-border/50 shadow-card hover:shadow-elevated hover:border-primary/30 transition-luxury group"
                >
                  <motion.div
                    className="w-16 h-16 rounded-xl bg-gradient-gold flex items-center justify-center shadow-gold"
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <contact.icon size={26} className="text-primary-foreground" />
                  </motion.div>
                  <div>
                    <p className="text-sm text-muted-foreground font-jakarta">{contact.label}</p>
                    <p className="font-semibold font-jakarta group-hover:text-primary transition-luxury">{contact.value}</p>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-12 p-8 rounded-2xl bg-gradient-card border border-border/50"
            >
              <h4 className="font-playfair font-semibold mb-5">Connect with me</h4>
              <div className="flex gap-4">
                {[
                  { icon: Github, href: 'https://github.com', label: 'GitHub' },
                  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                ].map(({ icon: Icon, href, label }, index) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-5 rounded-xl glass-gold hover:bg-primary/20 transition-luxury shadow-soft"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.2, y: -8, rotate: 10, boxShadow: '0 0 30px hsl(45 70% 55% / 0.4)' }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={label}
                  >
                    <Icon size={24} className="text-primary" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;