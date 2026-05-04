import React from 'react';

const Certifications = () => {
  const certifications = [
    {
      name: "IBM Web Development Fundamentals",
      issuer: "IBM",
      date: "Oct 2025",
      credentialId: "5b4d2aab-7c90-46a1-a43e-b103cf0e6742",
      link: "#"
    },
    {
      name: "A Taste of Agile",
      issuer: "IBM SkillsBuild",
      date: "07 Nov 2025",
      learningHours: "3 hours",
      credentialId: "Adobe Learning Manager",
      link: "#"
    },
    {
      name: "IBM Data Fundamentals",
      issuer: "IBM",
      date: "Oct 2025",
      credentialId: "c94be63a-4a38-4449-bb38-89a8b069efac",
      skills: ["Data Analysis", "Data Cleaning", "Data Fundamentals"],
      link: "#"
    }
  ];

  const workshops = [
    {
      name: "AI, ML, Deep Learning & Data Science Workshop",
      organizer: "GUVI + HCL + IIT Madras",
      date: "2025",
      keyTakeaways: [
        "Control your brain to store data, not dump data",
        "Being observant is more important than being idle",
        "Self-discipline is the most important skill",
        "Follow STAR method (Situation, Task, Action, Result)"
      ]
    }
  ];

  return (
    <section id="certifications" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-indigo-400 text-sm font-mono mb-2 block">LEARNING JOURNEY</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Certifications & Workshops</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            IBM certified professional with continuous learning mindset
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-[#111317] rounded-xl p-5 border border-white/10 hover:border-indigo-500/30 transition-all duration-300">
              <div className="flex items-start gap-3">
                <span className="text-3xl">📜</span>
                <div className="flex-1">
                  <h3 className="font-bold text-white">{cert.name}</h3>
                  <p className="text-indigo-400 text-sm">{cert.issuer}</p>
                  <p className="text-gray-500 text-xs mt-1">{cert.date}</p>
                  {cert.learningHours && (
                    <p className="text-gray-500 text-xs">⏱️ {cert.learningHours}</p>
                  )}
                  {cert.skills && (
                    <div className="flex flex-wrap gap-1 mt-2">
                      {cert.skills.map((skill, i) => (
                        <span key={i} className="text-xs bg-white/5 px-2 py-0.5 rounded text-gray-400">{skill}</span>
                      ))}
                    </div>
                  )}
                  <p className="text-gray-600 text-xs mt-2 font-mono">ID: {cert.credentialId}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Workshop Section */}
        {workshops.map((workshop, index) => (
          <div key={index} className="bg-gradient-to-r from-emerald-600/10 to-teal-600/10 rounded-xl p-6 border border-white/10">
            <h3 className="text-xl font-bold text-white mb-3">🎓 {workshop.name}</h3>
            <p className="text-gray-400 mb-4">{workshop.organizer} | {workshop.date}</p>
            <h4 className="text-indigo-400 text-sm font-semibold mb-2">Key Takeaways:</h4>
            <ul className="space-y-2">
              {workshop.keyTakeaways.map((takeaway, i) => (
                <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                  <span className="text-indigo-400">💡</span>
                  {takeaway}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;