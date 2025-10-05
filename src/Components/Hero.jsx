import { Github, Linkedin, ArrowDown, Download } from 'lucide-react';
import { useEffect, useState, useCallback, memo, useMemo } from 'react';

const FloatingParticle = memo(({ style }) => (
  <div className="absolute bg-cyan-400/20 rounded-full animate-float" style={style} />
));

FloatingParticle.displayName = 'FloatingParticle';

function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContact = useCallback(() => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const scrollToAbout = useCallback(() => {
    const element = document.getElementById('about');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const handleDownloadResume = useCallback(() => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/uc?export=download&id=1nG-WuMZcYLKbbO_htiwMn6lNmC3_A5C6';
    link.download = 'Sankalp_Patel_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  const particles = useMemo(() =>
    [...Array(30)].map((_, i) => ({
      key: i,
      style: {
        width: Math.random() * 4 + 2 + 'px',
        height: Math.random() * 4 + 2 + 'px',
        left: Math.random() * 100 + '%',
        top: Math.random() * 100 + '%',
        animationDelay: Math.random() * 5 + 's',
        animationDuration: Math.random() * 10 + 10 + 's',
      }
    })), []
  );

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-slate-950 to-blue-500/10" />

      <div className="absolute inset-0 overflow-hidden">
        {particles.map(particle => (
          <FloatingParticle key={particle.key} style={particle.style} />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="space-y-2">
              <p className="text-cyan-400 text-lg font-medium">Hello, I'm</p>
              <h1 className="text-5xl md:text-7xl font-bold text-white">
                Sankalp Patel
              </h1>
              <div className="flex items-center gap-3">
                <div className="h-1 w-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded" />
                <p className="text-xl md:text-2xl text-slate-300">Full Stack Developer</p>
              </div>
            </div>

            <p className="text-slate-400 text-lg leading-relaxed">
              Crafting elegant solutions and building innovative web applications with modern technologies.
              Passionate about clean code and exceptional user experiences.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={scrollToContact}
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-500/50 transition-all hover:scale-105"
              >
                Get In Touch
              </button>
              <button
                onClick={handleDownloadResume}
                className="px-8 py-3 border border-slate-700 text-white rounded-lg font-medium hover:border-cyan-400 hover:text-cyan-400 transition-all flex items-center gap-2"
              >
                <Download size={18} />
                <span>Download Resume</span>
              </button>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/Sankalp2009"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-lg bg-slate-800 text-slate-400 hover:text-cyan-400 hover:bg-slate-700 transition-all hover:scale-110"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/sankalp-patel-fs-dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-lg bg-slate-800 text-slate-400 hover:text-cyan-400 hover:bg-slate-700 transition-all hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
          
            </div>
          </div>

          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-3xl opacity-30 animate-pulse" />
              <div className="relative aspect-square rounded-full overflow-hidden border-4 border-slate-700/50 shadow-2xl shadow-cyan-500/20">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10" />
                <img
                  src="https://res.cloudinary.com/dn2q6aoex/image/upload/v1759600786/Photo2_w4qlh8.jpg"
                  alt="Sankalp Patel"
                  loading="eager"
                  decoding="async"
                  className="w-full h-full object-cover object-center scale-110 hover:scale-115 transition-transform duration-700"
                  style={{ objectPosition: 'center 40%' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-cyan-500/5" />
              </div>
              <div className="absolute -z-10 inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-2xl opacity-20 animate-spin-slow" />
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 hover:text-cyan-400 transition-colors animate-bounce"
        aria-label="Scroll to about section"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
}

export default memo(Hero);
