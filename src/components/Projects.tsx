import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
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

  const projects = [
    {
      title: "Graduation Project – MIS Web Application",
      description:
        "Developed a comprehensive Management Information System (MIS) as part of my graduation project, showcasing proficiency in full-stack web development. The application comprises a robust backend and a dynamic frontend, designed for efficient data management and user interaction.",
      tech: ["Next.js", "React", "Node.js", "TypeScript"],
      githubUrl: "https://github.com/kofta999/grad-project",
      demoUrl: "https://grad-project-3nle0xg1t-kofta999s-projects.vercel.app/",
      features: [
        "Frontend: Constructed with Next.js and React, providing a responsive and user-friendly interface.",
        "Backend: Implemented using Node.js and TypeScript, ensuring scalable and maintainable server-side operations."
      ]
    },
    {
      title: "Fresh Cart – E-Commerce Platform",
      description:
        "Built a full-featured E-Commerce platform using React.js and Tailwind CSS, integrating a responsive design for the best user experience.",
      tech: ["React.js", "Tailwind CSS", "JavaScript"],
      githubUrl: "https://github.com/ZiadElsayed01/Freshcart",
      demoUrl: "https://fresh-cart-route.vercel.app/login",
      features: [
        "Responsive design optimized for all devices",
        "Modern UI with Tailwind CSS",
        "Complete shopping cart functionality"
      ]
    },
    {
      title: "Yummy – Recipe Discovery App",
      description:
        "Developed a web project to allow users to explore recipes using HTML, CSS, JavaScript, and Tailwind CSS. Integrated API for fetching dynamic content.",
      tech: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "API Integration"],
      githubUrl: "https://github.com/ZiadElsayed01/Yummy",
      demoUrl: "https://ziadelsayed01.github.io/Yummy/",
      features: [
        "Dynamic recipe exploration",
        "External API integration",
        "Responsive design"
      ]
    },
    {
      title: "Weather – Real-time Weather App",
      description:
        "Created a weather application using HTML, CSS, JavaScript, and Bootstrap, fetching data through an external API.",
      tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "API"],
      githubUrl: "https://github.com/ZiadElsayed01/Weather-API",
      demoUrl: "https://ziadelsayed01.github.io/Weather-API/",
      features: [
        "Real-time weather data",
        "Bootstrap responsive design",
        "External API integration"
      ]
    },
    {
      title: "Games – Gaming Information Platform",
      description:
        "Developed a gaming platform to provide game information using HTML, CSS, JavaScript, and Bootstrap, using external APIs.",
      tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "APIs"],
      githubUrl: "https://github.com/ZiadElsayed01/Games-API",
      demoUrl: "https://ziadelsayed01.github.io/Games-API/",
      features: [
        "Comprehensive game database",
        "External API integration",
        "User-friendly interface"
      ]
    },
    {
      title: "Daniels – Portfolio Website",
      description:
        "Showcased front-end skills by building a personal portfolio using HTML, CSS, JavaScript, and Bootstrap.",
      tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      githubUrl: "https://github.com/ZiadElsayed01/Daniels",
      demoUrl: "https://ziadelsayed01.github.io/Daniels/",
      features: [
        "Professional portfolio design",
        "Responsive layout",
        "Clean and modern interface"
      ]
    }
  ];

  return (
    <section id="projects" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`bg-slate-800/50 rounded-2xl p-6 backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-bold text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.features && (
                  <ul className="text-gray-400 text-sm mb-4 space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <span className="w-1 h-1 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        <span className="text-xs">{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="flex space-x-4 mt-auto">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    <span className="text-sm">Code</span>
                  </a>

                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-300 hover:text-green-400 transition-colors duration-200"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      <span className="text-sm">Demo</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
