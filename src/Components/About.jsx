import { Code2, Rocket, Users, Award } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen flex items-center py-20 px-6 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className={`space-y-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="relative">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 to-blue-500 rounded" />
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  I'm a passionate full-stack developer with a keen eye for design and a love for creating
                  seamless digital experiences and I've been hooked ever since.
                </p>
                <p>
                  Specializing in modern JavaScript frameworks and cloud technologies, I build scalable
                  applications that solve real-world problems. I believe in writing clean, maintainable
                  code and staying up-to-date with the latest industry trends.
                </p>
                <p>
                  When I'm not coding, you'll find me contributing to open-source projects, mentoring
                  junior developers, or exploring new technologies. I'm always excited to collaborate
                  on innovative projects.
                </p>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-2xl opacity-20" />
              <img
                src="https://res.cloudinary.com/dn2q6aoex/image/upload/v1759602590/wallpaper_alewwv.jpg"
                alt="Working"
                className="relative rounded-2xl shadow-2xl w-full h-96 object-cover border border-slate-800"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
