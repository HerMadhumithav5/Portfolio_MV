import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "MERN Stack Developer Intern",
      company: "Inetz Technologies",
      period: "Dec 2025 - Mar 2026",
      description: "Developed responsive React components and integrated REST APIs for client management dashboard. Collaborated with cross-functional teams to deliver features on time.",
      technologies: ["React", "Node.js", "Express", "MongoDB"]
    },
    {
      title: "Full Stack Developer Intern",
      company: "Conprg Technologies",
      period: "Jul 2025 - Aug 2025",
      description: "Integrated frontend modules with backend services and performed API testing using Postman. Improved application performance by optimizing database queries.",
      technologies: ["React", "Node.js", "Postman", "REST APIs"]
    },
    {
      title: "Frontend Developer Intern",
      company: "Empower Guiding Centre",
      period: "Feb 2024 - Mar 2024",
      description: "Built responsive UI with form validation and interactive features for educational guidance platform.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"]
    }
  ];

  const education = {
    degree: "B.E. Computer Science and Engineering (Hons)",
    institution: "Sri Muthukumaran Institute of Technology, Chennai",
    cgpa: "9.4 / 10",
    year: "Expected May 2026",
    achievements: [
      "HSC (12th): 98%",
      "SSLC (10th): 97%",
      "District Level Throwball Player",
      "School Pupil Leader (LKG - 12th)"
    ]
  };

  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-indigo-400 text-sm font-mono mb-2 block">MY JOURNEY</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Experience & Education</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My professional journey and academic background
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Experience Column */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-indigo-500 rounded-full"></span>
              Work Experience
            </h3>
            <div className="space-y-4">
              {experiences.map((exp, index) => (
                <div key={index} className="bg-[#111317] rounded-xl p-5 border border-white/10 hover:border-indigo-500/30 transition-all duration-300">
                  <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
                    <h4 className="font-bold text-white">{exp.title}</h4>
                    <span className="text-indigo-400 text-xs font-mono">{exp.period}</span>
                  </div>
                  <p className="text-indigo-300 text-sm mb-2">{exp.company}</p>
                  <p className="text-gray-400 text-sm mb-3">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span key={i} className="text-xs bg-white/5 px-2 py-1 rounded text-gray-400">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-indigo-500 rounded-full"></span>
              Education
            </h3>
            <div className="bg-[#111317] rounded-xl p-5 border border-white/10 mb-4">
              <h4 className="font-bold text-white mb-1">{education.degree}</h4>
              <p className="text-indigo-300 text-sm mb-2">{education.institution}</p>
              <p className="text-2xl font-bold text-indigo-400 mb-3">{education.cgpa}</p>
              <p className="text-gray-500 text-xs">{education.year}</p>
            </div>

            <div className="bg-[#111317] rounded-xl p-5 border border-white/10">
              <h4 className="font-bold text-white mb-3">Achievements</h4>
              <div className="space-y-2">
                {education.achievements.map((achievement, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-400 text-sm">
                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                    {achievement}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;