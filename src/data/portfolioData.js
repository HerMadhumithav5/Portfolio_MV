// All portfolio data in one place - easy to modify
export const portfolioData = {
  // Personal Info
  name: "Madhumitha V",
  role: "MERN Stack Developer",
  location: "Chennai",
  email: "madhujune2306@gmail.com",
  phone: "+91 7200959061",
  
  // Social Links
  github: "https://github.com/HerMadhumithav5",
  linkedin: "https://www.linkedin.com/in/madhumitha-venkatesan-a886532a5/",
  
  // About / Summary
  summary: "Computer Science Engineer with 9.4 CGPA, specializing in MERN stack development. Built user-friendly, cross-browser compatible applications with React.js, Node.js, and MongoDB.",
  
  // Achievements
  achievements: [
    "🏆 District Level Throwball Player",
    "👑 School Pupil Leader (LKG - 12th)",
    "📚 HSC: 98% | SSLC: 97%",
    "⭐ CGPA: 9.4/10"
  ],
  
  // Projects
  projects: [
    {
      name: "Job Application Tracker",
      description: "Personal dashboard to log and track job applications. Features JWT authentication, CRUD operations, and status tracking (Applied → Interview → Offer → Rejected).",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
      github: "#",
      demo: "#",
      isMain: true
    },
    {
      name: "VIGIL-GI",
      description: "AI-powered Gastrointestinal Cancer Detection System using EfficientNet-B5 achieving 99.64% accuracy on Kvasir dataset.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "TensorFlow"],
      github: "#",
      demo: "#"
    },
    {
      name: "BeautyVault - E-commerce",
      description: "Responsive beauty product platform with cart management and global state using React Context API.",
      tech: ["React.js", "Tailwind CSS", "Context API"],
      demo: "https://beautyvaultzreactapp.vercel.app/",
      github: "https://github.com/HerMadhumithav5/BeautyVaultz-A-React-App-Ecommerce.git"
    },
    {
      name: "WeatherNow",
      description: "Real-time weather app providing current conditions and 5-day forecast using OpenWeatherMap API.",
      tech: ["React", "Tailwind CSS", "REST API"],
      demo: "https://hermadhumithav5.github.io/WeatherNow---React/",
      github: "https://github.com/HerMadhumithav5/WeatherNow---React.git"
    }
  ],
  
  // Experience
  experiences: [
    {
      title: "MERN Stack Developer Intern",
      company: "Inetz Technologies",
      period: "Dec 2025 — Mar 2026",
      description: "Developed responsive React components and integrated REST APIs for client management dashboard."
    },
    {
      title: "Full Stack Developer Intern",
      company: "Conprg Technologies",
      period: "Jul 2025 — Aug 2025",
      description: "Integrated frontend modules with backend services and performed API testing using Postman."
    },
    {
      title: "Frontend Developer Intern",
      company: "Empower Guiding Centre",
      period: "Feb 2024 — Mar 2024",
      description: "Built responsive UI with form validation and interactive features for educational platform."
    }
  ],
  
  // Skills
  skills: {
    Frontend: ["React.js", "JavaScript ES6+", "HTML5/CSS3", "Tailwind CSS"],
    Backend: ["Node.js", "Express.js", "REST APIs", "JWT"],
    Database: ["MongoDB", "MySQL"],
    Tools: ["Git/GitHub", "Postman", "Vercel", "VS Code"]
  },
  
  // Education
  education: {
    degree: "B.E. Computer Science and Engineering (Hons)",
    college: "Sri Muthukumaran Institute of Technology, Chennai",
    cgpa: "9.4 / 10",
    year: "Expected May 2026"
  },
  
  // Soft Skills
  softSkills: ["Problem-solving", "Communication", "Team Collaboration", "Time Management", "Adaptability"]
};