import React, { useState } from 'react';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      name: "EDULIFE - The Educational Life",
      description: "MY VERY FIRST PROJECT - Educational platform helping students balance academic and personal lives. Features include courses in trending technologies, emotional support activities (yoga, breathing exercises), career guidance, and scholarship information for women. Includes toll-free student support system.",
      tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      category: "frontend",
      github: "https://github.com/HerMadhumithav5/EDULIFE-THE-EDUCATIONAL-LIFE.git",
      demo: "#",
      order: 1,
      isFirstProject: true,
      highlights: ["Toll-free support", "Scholarship database", "Emotional wellness", "Career guidance"]
    },
    {
      id: 2,
      name: "BeautyVault",
      description: "E-commerce platform for beauty products with cart management, product filtering, wishlist functionality, and global state management using React Context API.",
      tech: ["React.js", "Tailwind CSS", "Context API", "JavaScript"],
      category: "frontend",
      github: "https://github.com/HerMadhumithav5/BeautyVaultz-A-React-App-Ecommerce.git",
      demo: "https://beautyvaultzreactapp.vercel.app/",
      order: 2
    },
    {
      id: 3,
      name: "WeatherNow",
      description: "Real-time weather application providing current conditions, 5-day forecast, using OpenWeatherMap API with geolocation support.",
      tech: ["React.js", "Tailwind CSS", "REST API", "OpenWeatherMap"],
      category: "frontend",
      github: "https://github.com/HerMadhumithav5/WeatherNow---React.git",
      demo: "https://hermadhumithav5.github.io/WeatherNow---React/",
      order: 3
    },
    {
      id: 4,
      name: "Job Application Tracker",
      description: "MERN stack application to track job applications with JWT authentication, full CRUD operations, status tracking (Applied → Interview → Offer → Rejected), and dashboard analytics.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS"],
      category: "mern",
      github: "#",
      demo: "#",
      order: 4
    },
    {
      id: 5,
      name: "VIGIL-GI",
      description: "FINAL YEAR PROJECT - Vision Integrated Agentic Framework for Confidence-driven Gastrointestinal Carcinoma Detection. AI-powered clinical decision system using EfficientNet-B5 with MC Dropout uncertainty quantification achieving 94.3% validation accuracy.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Python", "TensorFlow", "EfficientNet-B5"],
      category: "ai",
      github: "https://github.com/HerMadhumithav5/Vigil-gi-Final.git",
      demo: "#",
      order: 5,
      detailedInfo: {
        accuracy: "94.3%",
        confidence: "72% HIGH, 20% MEDIUM, 8% LOW",
        inferenceTime: "1-2 seconds"
      }
    }
  ];

  const sortedProjects = [...projects].sort((a, b) => a.order - b.order);

  const filters = [
    { name: 'All', value: 'all' },
    { name: 'MERN Stack', value: 'mern' },
    { name: 'Frontend', value: 'frontend' },
    { name: 'AI/ML', value: 'ai' }
  ];

  const filteredProjects = filter === 'all' 
    ? sortedProjects 
    : sortedProjects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 bg-black/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-indigo-400 text-sm font-mono mb-2 block">MY PROJECTS</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Project Portfolio</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A journey from my first project to current research work
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                filter === f.value
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20'
                  : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {f.name}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group bg-[#111317] rounded-xl border border-white/10 overflow-hidden hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-1">
              <div className="p-6">
                {project.isFirstProject && (
                  <span className="inline-block mb-3 px-2 py-1 bg-emerald-600/20 text-emerald-400 text-xs font-semibold rounded">
                    🚀 MY FIRST PROJECT
                  </span>
                )}
                {project.name === "VIGIL-GI" && (
                  <span className="inline-block mb-3 ml-2 px-2 py-1 bg-purple-600/20 text-purple-400 text-xs font-semibold rounded">
                    🎓 FINAL YEAR PROJECT
                  </span>
                )}
                
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                  {project.name}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {project.name === "VIGIL-GI" && project.detailedInfo && (
                  <div className="mb-4 p-3 bg-indigo-600/10 rounded-lg border border-indigo-500/20">
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div>
                        <p className="text-indigo-400 text-lg font-bold">{project.detailedInfo.accuracy}</p>
                        <p className="text-gray-500 text-xs">Accuracy</p>
                      </div>
                      <div>
                        <p className="text-indigo-400 text-lg font-bold">72%</p>
                        <p className="text-gray-500 text-xs">High Confidence</p>
                      </div>
                      <div>
                        <p className="text-indigo-400 text-lg font-bold">1-2s</p>
                        <p className="text-gray-500 text-xs">Inference</p>
                      </div>
                    </div>
                  </div>
                )}
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs bg-white/5 px-2 py-1 rounded text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>

                {project.highlights && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.highlights.map((highlight, i) => (
                      <span key={i} className="text-xs bg-emerald-600/20 text-emerald-400 px-2 py-1 rounded">
                        ✨ {highlight}
                      </span>
                    ))}
                  </div>
                )}
                
                <div className="flex gap-4">
                  {project.github && project.github !== '#' && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 text-sm transition-colors">
                      GitHub →
                    </a>
                  )}
                  {project.demo && project.demo !== '#' && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 text-sm transition-colors">
                      Live Demo →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;