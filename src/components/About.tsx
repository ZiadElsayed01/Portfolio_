
import { useEffect, useRef, useState } from "react";
import { GraduationCap, MapPin, Phone, Mail } from "lucide-react";

const About = () => {
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

  return (
    <section id="about" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm a passionate Frontend Developer with a strong foundation in modern web technologies. 
                Currently pursuing my Bachelor's degree in Computer Science at Suez Canal University, 
                I combine academic knowledge with hands-on experience gained through internships and personal projects.
              </p>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                My expertise spans across React, JavaScript, TypeScript, and various modern frameworks. 
                I'm particularly interested in creating seamless user experiences and building scalable, 
                maintainable applications that solve real-world problems.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-8 backdrop-blur-sm border border-slate-700/50">
              <div className="flex items-center mb-6">
                <GraduationCap className="w-8 h-8 text-blue-400 mr-4" />
                <h3 className="text-2xl font-bold text-white">Education</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-semibold text-white">
                    Bachelor of Engineering – Computer Science
                  </h4>
                  <p className="text-blue-400 font-medium">
                    Suez Canal University (SCU), Ismailia
                  </p>
                  <p className="text-gray-400">CGPA: 3.3</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
