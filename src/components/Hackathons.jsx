import React from 'react';

const Hackathons = () => {
  const hackathons = [
    {
      name: "GET IT DONE Hackathon",
      organizer: "Gidy CStream Inc.",
      project: "EDULIFE - The Educational Life",
      role: "Frontend Developer (Team Lead)",
      description: "Built an educational platform helping students balance academic and personal lives. Features include courses in trending technologies, emotional support activities (yoga, breathing exercises), career guidance, and scholarship information for women.",
      result: "Successful Project Completion",
      date: "2024",
      tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      highlights: ["Toll-free student support", "Scholarship database", "Emotional wellness features"]
    },
    {
      name: "Agentic AI Hackathon",
      organizer: "Gidy CStream Inc.",
      project: "AI Workflow Optimization Agent",
      role: "Frontend Developer",
      description: "Built an Agentic AI system to optimize workflow processes. Developed interactive dashboard for monitoring AI agents and their decision-making processes.",
      result: "Successful Project Completion",
      date: "2024",
      tech: ["React.js", "AI Integration", "Dashboard UI", "REST APIs"],
      highlights: ["Agent monitoring", "Workflow visualization", "Real-time updates"]
    }
  ];

  return (
    <section id="hackathons" className="py-20 bg-black/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-indigo-400 text-sm font-mono mb-2 block">COMPETITIONS</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Hackathons & Events</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Building innovative solutions under pressure and leading technical events
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {hackathons.map((hack, index) => (
            <div key={index} className="bg-[#111317] rounded-xl p-5 border border-white/10 hover:border-indigo-500/30 transition-all duration-300">
              <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
                <h3 className="font-bold text-white">{hack.name}</h3>
                <span className="text-xs text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded">{hack.organizer}</span>
              </div>
              <p className="text-indigo-300 text-sm mb-1">Project: {hack.project}</p>
              <p className="text-gray-400 text-xs mb-2">Role: {hack.role}</p>
              <p className="text-gray-400 text-sm mb-3">{hack.description}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {hack.tech.map((t, i) => (
                  <span key={i} className="text-xs bg-white/5 px-2 py-1 rounded text-gray-300">{t}</span>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {hack.highlights.map((h, i) => (
                  <span key={i} className="text-xs bg-indigo-600/20 text-indigo-300 px-2 py-1 rounded">✨ {h}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Google Student Ambassador Section */}
        <div className="mt-10 bg-gradient-to-r from-indigo-600/10 to-purple-600/10 rounded-xl p-6 border border-white/10">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl">🌟</span>
            <h3 className="text-xl font-bold text-white">Google Student Ambassador</h3>
          </div>
          <p className="text-gray-300 mb-3">Represented Google at college level and successfully conducted <span className="text-indigo-400">"Gemini Tales"</span> competition with 50+ participants. Distributed prizes to top 3 winners.</p>
          <div className="flex gap-3 mt-3">
            <span className="text-xs bg-blue-600/20 text-blue-300 px-2 py-1 rounded">Leadership</span>
            <span className="text-xs bg-blue-600/20 text-blue-300 px-2 py-1 rounded">Event Management</span>
            <span className="text-xs bg-blue-600/20 text-blue-300 px-2 py-1 rounded">Community Building</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hackathons;