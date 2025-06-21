
import { useState, useEffect } from "react";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 pt-28">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="block">Ziad El-Sayed</span>
            <span className="block text-3xl md:text-4xl text-blue-400 mt-4">
              Frontend Developer
            </span>
          </h1>
          
          <p
            className={`text-xl text-gray-300 mb-8 max-w-2xl mx-auto transform transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            Highly skilled and motivated Frontend Developer seeking opportunities to build
            responsive, scalable applications and contribute to team environments.
          </p>

          <div
            className={`flex justify-center space-x-6 mb-12 transform transition-all duration-1000 delay-500 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <a
              href="https://github.com/ZiadElsayed01"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800/50 rounded-full hover:bg-slate-700/50 transition-all duration-200 hover:scale-110"
            >
              <Github className="w-6 h-6 text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/ziad-el-sayed-1b0939233/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800/50 rounded-full hover:bg-slate-700/50 transition-all duration-200 hover:scale-110"
            >
              <Linkedin className="w-6 h-6 text-white" />
            </a>
            <a
              href="mailto:ziadelsayed046@gmail.com"
              className="p-3 bg-slate-800/50 rounded-full hover:bg-slate-700/50 transition-all duration-200 hover:scale-110"
            >
              <Mail className="w-6 h-6 text-white" />
            </a>
          </div>
        </div>

        <button
          onClick={scrollToAbout}
          className={`animate-bounce transform transition-all duration-1000 delay-700 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <ChevronDown className="w-8 h-8 text-blue-400 mx-auto" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
