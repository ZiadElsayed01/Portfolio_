
import { useEffect, useRef, useState } from "react";
import { Code, Database, Globe, Smartphone, GitBranch, Wrench } from "lucide-react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      icon: Code,
      title: "Frontend Technologies",
      skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript"]
    },
    {
      icon: Globe,
      title: "Frameworks & Libraries",
      skills: ["React.js", "Next.js", "jQuery"]
    },
    {
      icon: Database,
      title: "State Management",
      skills: ["Context API", "Redux", "React Hooks"]
    },
    {
      icon: Smartphone,
      title: "Styling & UI Frameworks",
      skills: ["Bootstrap", "Tailwind CSS", "Sass", "Shadcn UI", "Material UI"]
    },
    {
      icon: GitBranch,
      title: "Version Control & Deployment",
      skills: ["Git", "GitHub", "npm", "Yarn", "Docker"]
    },
    {
      icon: Wrench,
      title: "Development Tools",
      skills: ["Visual Studio Code", "VS Code", "Postman"]
    }
  ];

  return (
    <section id="skills" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
      <div className="max-w-6xl mx-auto">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Skills & Technologies
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={index}
                  className={`bg-slate-800/50 rounded-2xl p-6 backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-blue-500/20 rounded-lg mr-4">
                      <IconComponent className="w-6 h-6 text-blue-400" />
                    </div>
                    <h3 className="text-lg font-bold text-white">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-4">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-slate-700/50 text-gray-300 text-sm rounded-full hover:bg-blue-500/20 hover:text-blue-300 transition-all duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
