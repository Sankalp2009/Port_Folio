import { useEffect, useState, useRef } from 'react';

export default function Skills() {
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

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 100 },
        { name: 'Tailwind CSS', level: 100 },
        { name: 'Chakra UI', level: 100 },
        { name: 'Next.js', level: 100 },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 100 },
        { name: 'Express', level: 100 },
        { name: 'MongoDB & Mongoose', level: 100 },
        { name: 'REST APIs', level: 100 },
      ],
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', level: 100 },
         { name: 'Postman', level: 100 },
        { name: 'Software Debugging', level: 100 },
        { name: 'Testing', level: 100 },
      ],
    },
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="min-h-screen flex items-center py-20 px-6 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-slate-950" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded" />
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
            Expertise in modern web technologies and frameworks, continuously learning and adapting to industry standards.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${categoryIndex * 200}ms` }}
            >
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 h-full hover:border-cyan-400/50 transition-all">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <div className="w-2 h-8 bg-gradient-to-b from-cyan-400 to-blue-500 rounded" />
                  {category.title}
                </h3>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-300 font-medium">{skill.name}</span>
                        {/* <span className="text-cyan-400">{skill.level}%</span> */}
                      </div>
                      <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-1500 ease-out ${
                            isVisible ? 'w-full' : 'w-0'
                          }`}
                          style={{
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${categoryIndex * 200 + skillIndex * 100}ms`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-12 text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="inline-flex flex-wrap gap-3 justify-center">
            {['JavaScript (ES6+)', 'Authentication & Authorization', 'Payment Gateway Integration', 'Redis', 'CI/CD', 'Figma'].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-300 text-sm hover:border-cyan-400 hover:text-cyan-400 transition-all cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
