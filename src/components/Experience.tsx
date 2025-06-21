
import { useEffect, useRef, useState } from "react";
import { Calendar, MapPin, Users } from "lucide-react";

const Experience = () => {
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

  const experiences = [
    {
      title: "Full Stack Developer Intern – Route Academy Diploma",
      duration: "March 2024 – April 2025",
      achievements: [
        "Mastered core full stack technologies including Node.js, Express.js, MongoDB, HTML, CSS, JavaScript, and React.",
        "Built and integrated RESTful APIs with frontend layers to ensure seamless data flow and responsive user experiences.",
        "Developed responsive web applications using React and Bootstrap, implementing scalable and cross-browser compatible UI.",
        "Simulated real-world team collaboration through Git-based version control, working in agile environments."
      ]
    },
    {
      title: "React.js Front-End Developer Intern – Digital Egyptian Pioneer (DEPI)",
      duration: "April 2024 – October 2024",
      achievements: [
        "Developed 10+ reusable, modular React components, improving maintainability and reducing code duplication by 30%.",
        "Managed state effectively using React Hooks and Context API, improving user experience and data flow for a Single Page Application (SPA).",
        "Integrated RESTful APIs with Axios to fetch and display dynamic data, boosting API response times by 15%.",
        "Enhanced web application performance by 20% through code optimization and efficient rendering techniques."
      ]
    },
    {
      title: "Frontend Developer Intern – ITI",
      duration: "August 2023 – September 2023",
      achievements: [
        "Applied HTML, CSS, JavaScript, and jQuery to build visually appealing, responsive web pages with cross browser compatibility.",
        "Followed web accessibility standards (WCAG) to ensure usability for individuals with disabilities, increasing user engagement by 15%.",
        "Developed fully responsive web designs that adapted seamlessly to various devices and screen sizes, enhancing mobile user experience."
      ]
    }
  ];

  const leadership = {
    title: "Google Developer Student Club (GDSC) – Front-End Lead",
    duration: "February 2023 – May 2023",
    achievements: [
      "Directed a team of 5 students in planning and executing front-end projects, ensuring the prompt completion of tasks and adherence to project timelines.",
      "Conducted 4+ workshops on HTML, CSS, JavaScript, and modern frameworks like React.js, enhancing technical ability of peers."
    ]
  };

  return (
    <section id="experience" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
      <div className="max-w-6xl mx-auto">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Experience
          </h2>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`bg-slate-800/50 rounded-2xl p-8 backdrop-blur-sm border border-slate-700/50 transform transition-all duration-1000 delay-${(index + 1) * 200} ${
                  isVisible
                    ? "translate-x-0 opacity-100"
                    : "translate-x-10 opacity-0"
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <h3 className="text-xl font-bold text-white mb-2 md:mb-0">
                    {exp.title}
                  </h3>
                  <div className="flex items-center text-blue-400">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">{exp.duration}</span>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-start text-gray-300">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Leadership Experience */}
            <div
              className={`bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-2xl p-8 backdrop-blur-sm border border-blue-500/30 transform transition-all duration-1000 delay-800 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
            >
              <div className="flex items-center mb-4">
                <Users className="w-6 h-6 text-blue-400 mr-3" />
                <h3 className="text-2xl font-bold text-white">Leadership Experience</h3>
              </div>
              
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <h4 className="text-xl font-semibold text-white mb-2 md:mb-0">
                  {leadership.title}
                </h4>
                <div className="flex items-center text-blue-400">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="text-sm">{leadership.duration}</span>
                </div>
              </div>
              
              <ul className="space-y-3">
                {leadership.achievements.map((achievement, achIndex) => (
                  <li key={achIndex} className="flex items-start text-gray-300">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
