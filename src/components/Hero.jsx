import React from 'react';

const Hero = () => {
  const techStack = ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'];
  
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* Tech Stack Tags */}
        <div className="flex flex-wrap justify-center gap-3 mb-8 animate-fadeIn">
          {techStack.map((tech, index) => (
            <span 
              key={index}
              className="px-4 py-1.5 bg-white/5 backdrop-blur-sm rounded-full text-indigo-300 text-sm border border-white/10 hover:border-indigo-500/50 transition-all duration-300 hover:scale-105 cursor-default"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Main Content */}
        <div className="text-center">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-indigo-600/10 border border-indigo-500/30">
            <span className="text-indigo-300 text-xs font-mono">B.E. CSE (Hons) • CGPA 9.4</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Madhumitha{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Venkatesan
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-indigo-300 mb-4">
            MERN Stack Developer
          </h2>
          
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-6 leading-relaxed">
            Computer Science Engineer specializing in building exceptional digital experiences. 
            Passionate about creating scalable web applications with modern technologies.
          </p>

          {/* Stats */}
          <div className="flex justify-center gap-8 mb-10">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">4+</div>
              <div className="text-xs text-gray-500">PROJECTS</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">3</div>
              <div className="text-xs text-gray-500">INTERNSHIPS</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">98%</div>
              <div className="text-xs text-gray-500">HSC SCORE</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={scrollToContact}
              className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white font-medium rounded-lg transition-all duration-300 shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/40"
            >
              Hire Me
            </button>
            <a 
              href="#projects" 
              className="px-6 py-3 border border-gray-600 hover:border-indigo-400 text-gray-300 hover:text-indigo-300 font-medium rounded-lg transition-all duration-300"
            >
              View Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;