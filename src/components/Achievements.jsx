import React from 'react';

const Achievements = () => {
  const achievements = [
    {
      category: "🏆 Sports",
      title: "District Level Throwball Player",
      description: "Represented district at throwball championships",
      year: "2022-2024"
    },
    {
      category: "👑 Leadership",
      title: "School Pupil Leader",
      description: "Served as Pupil Leader from LKG to 12th standard - 14 years of leadership",
      year: "2008-2022"
    },
    {
      category: "🌟 Google",
      title: "Google Student Ambassador",
      description: "Conducted Gemini Tales competition with 50+ participants",
      year: "2025"
    },
    {
      category: "📚 Academic",
      title: "HSC - 98%",
      description: "Outstanding performance in 12th standard board exams",
      year: "2022"
    },
    {
      category: "📚 Academic",
      title: "SSLC - 97%",
      description: "Excellent academic achievement in 10th standard",
      year: "2020"
    },
    {
      category: "💻 Technical",
      title: "IBM Certified Professional",
      description: "Web Development Fundamentals, Agile, Data Fundamentals",
      year: "2025"
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-black/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-indigo-400 text-sm font-mono mb-2 block">RECOGNITIONS</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Achievements</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Academic excellence, leadership, and technical recognitions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((ach, index) => (
            <div key={index} className="bg-[#111317] rounded-xl p-4 border border-white/10 hover:border-indigo-500/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl text-indigo-400">{ach.category}</span>
                <h3 className="font-bold text-white">{ach.title}</h3>
              </div>
              <p className="text-gray-400 text-sm">{ach.description}</p>
              <p className="text-indigo-400 text-xs mt-2">{ach.year}</p>
            </div>
          ))}
        </div>

        {/* GitHub Repositories */}
        <div className="mt-10 bg-[#111317] rounded-xl p-6 border border-white/10">
          <h3 className="text-lg font-bold text-white mb-3">📂 Key GitHub Repositories</h3>
          <div className="grid md:grid-cols-2 gap-3">
            <a href="https://github.com/HerMadhumithav5/Vigil-gi-Final.git" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-indigo-400 text-sm">
              <span>🔬</span> VIGIL-GI - Final Year Project
            </a>
            <a href="https://github.com/HerMadhumithav5/EDULIFE-THE-EDUCATIONAL-LIFE.git" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-indigo-400 text-sm">
              <span>📚</span> EDULIFE - Educational Platform
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;