import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      name: "Frontend Development",
      icon: "🎨",
      skills: ["React.js", "JavaScript ES6+", "HTML5/CSS3", "Tailwind CSS", "Responsive Design"]
    },
    {
      name: "Backend Development",
      icon: "⚙️",
      skills: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"]
    },
    {
      name: "Database",
      icon: "🗄️",
      skills: ["MongoDB", "MySQL", "Mongoose"]
    },
    {
      name: "Tools & DevOps",
      icon: "🛠️",
      skills: ["Git/GitHub", "Postman", "Vercel", "Netlify", "VS Code"]
    }
  ];

  const softSkills = [
    "Problem Solving", "Communication", "Team Collaboration", 
    "Time Management", "Adaptability", "Leadership"
  ];

  return (
    <section id="skills" className="py-20 bg-black/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-indigo-400 text-sm font-mono mb-2 block">EXPERTISE</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Technical Skills</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I work with to build amazing applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-[#111317] rounded-xl p-6 border border-white/10 hover:border-indigo-500/30 transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-lg font-semibold text-white">{category.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1.5 bg-white/5 rounded-lg text-gray-300 text-sm hover:bg-indigo-600/20 hover:text-indigo-300 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="bg-gradient-to-r from-indigo-600/10 to-purple-600/10 rounded-xl p-6 border border-white/10">
          <h3 className="text-lg font-semibold text-white mb-4 text-center">Soft Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {softSkills.map((skill, i) => (
              <span 
                key={i}
                className="px-4 py-2 bg-white/5 rounded-full text-gray-300 text-sm hover:bg-indigo-600/20 hover:text-indigo-300 transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;