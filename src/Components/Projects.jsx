import { ExternalLink, Github } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

export default function Projects() {
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

  const projects = [
    {
      title: '🛍️ Shopsy – Full-Stack E-Commerce Platform',
      description: 'A full-featured online shopping platform with real-time inventory management and analytics dashboard.',
      image: 'https://res.cloudinary.com/dn2q6aoex/image/upload/v1761562114/Screenshot_77_vqhguc.png',
      tags: ['React', 'Node.js', 'Express.Js', 'MongoDB'],
      github: 'https://github.com/Sankalp2009/Shopsy_Ecomm',
      live: 'https://shopsy-ecomm-eight.vercel.app/',
    },
    {
      title: '⚡Dhan Laxmi Electricals – Freelance Project',
      description: 'Developed a React.js business website with 6+ modular components, 15+ animations, and Integrated Google Maps API',
      image: 'https://res.cloudinary.com/dn2q6aoex/image/upload/v1761562607/Screenshot_79_imu3zy.png',
      tags: ['React.js', 'Tailwind'],
      github: 'https://github.com/Sankalp2009/Dhanlaxmi_React',
      live: 'https://www.dhanlaxmirepairsandservice.in/',
    },
    {
      title: '🍲 KindMeal – Food Recipe Web App (Clone)',
      description: 'This website gives detailed information about recipes and restaurants including their ratings, location, and dietary restrictions details.',
      image: 'https://i.ibb.co/vZp1J33/Screenshot-322.png',
      tags: ['HTML5', 'CSS3', 'JAVASCRIPT'],
      github: 'https://github.com/Sankalp2009/Kindmeal.my_Clone',
      live: 'http://harmonious-crostata-782582.netlify.app/',
    },
    {
      title: '⚡Movie Application',
      description: 'Build Movie Application with Knowledge of React and Optimized Fetch Library.',
      image: 'https://res.cloudinary.com/dn2q6aoex/image/upload/v1680706145/Screenshot_25_mdsuku.png',
      tags: ['React.js', 'swr', 'Material UI'],
      github: 'https://github.com/Sankalp2009/MovieLeo',
      live: 'https://movie-5b7g5rrae-sankalp2009.vercel.app/',
    },
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="min-h-screen py-20 px-6 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded" />
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
            A selection of my recent work showcasing diverse skills and innovative solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl overflow-hidden hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm rounded-lg text-white hover:bg-cyan-500 transition-colors"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm rounded-lg text-white hover:bg-cyan-500 transition-colors"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-lg text-cyan-400 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
