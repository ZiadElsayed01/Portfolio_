
import { useEffect, useRef, useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const Contact = () => {
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

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ziadelsayed046@gmail.com",
      href: "mailto:ziadelsayed046@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "01226642557",
      href: "tel:01226642557"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "3 - Suez Canal Authority Housing, Hud Elders, Suez",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/ZiadElsayed01"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ziad-el-sayed-1b0939233/"
    }
  ];

  return (
    <section id="contact" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Get In Touch
          </h2>

          <div className="bg-slate-800/50 rounded-2xl p-8 backdrop-blur-sm border border-slate-700/50">
            <div className="text-center mb-8">
              <p className="text-gray-300 text-lg">
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-4">Contact Information</h3>
                {contactInfo.map((contact, index) => {
                  const IconComponent = contact.icon;
                  return (
                    <div
                      key={index}
                      className={`flex items-center space-x-4 transform transition-all duration-500 delay-${(index + 1) * 100} ${
                        isVisible
                          ? "translate-x-0 opacity-100"
                          : "translate-x-10 opacity-0"
                      }`}
                    >
                      <div className="p-3 bg-blue-500/20 rounded-lg">
                        <IconComponent className="w-5 h-5 text-blue-400" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">{contact.label}</p>
                        {contact.href ? (
                          <a
                            href={contact.href}
                            className="text-white hover:text-blue-400 transition-colors duration-200"
                          >
                            {contact.value}
                          </a>
                        ) : (
                          <p className="text-white">{contact.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-4">Follow Me</h3>
                <div className="space-y-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center space-x-4 p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-all duration-300 hover:scale-105 transform delay-${(index + 3) * 100} ${
                          isVisible
                            ? "translate-x-0 opacity-100"
                            : "translate-x-10 opacity-0"
                        }`}
                      >
                        <IconComponent className="w-6 h-6 text-blue-400" />
                        <span className="text-white font-medium">{social.label}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="text-center pt-8 border-t border-slate-700">
              <p className="text-gray-400">
                &copy; {new Date().getFullYear()} Ziad El-Sayed. Built with React and lots of ☕.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
