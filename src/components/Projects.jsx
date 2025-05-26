import { FiGithub, FiExternalLink } from 'react-icons/fi'

const projects = [
  {
    title: "Ahadu Amharic Dictionary",
    description: "it focuses on providing clear Amharic-to-Amharic definitions. It also includes translation features for Amharic to English, Amharic to Ge’ez, and vice versa. The site supports a multilingual interface, allowing users to navigate in different languages. Additional features include Amharic riddles, proverbs, word games, and a smart spell checker that suggests corrections for misspelled Amharic words. The platform is designed to make learning and interacting with the Amharic language both practical and engaging.",
    image: "/images/ahadu.png",
    tech: ["HTML", "CSS", "JavaScript","PHP","MySQL", "SQLite"],
    
  },
  {
    title: "LiveScribe Online Editor",
    description: "LiveScribe Online Editor is a lightweight, modern web-based code editor that lets you write and preview HTML, CSS, and JavaScript in real time. It’s designed for quick testing, learning, and building small web projects with an instant visual output.",
    image: "/images/livescribe.png",
    tech: ["HTML", "CSS", "JavaScript"],
 
  },
  
  {
    "title": "Employee Payroll Management System",
    "description": "A comprehensive Java-based payroll management system that automates employee salary processing, attendance tracking, and payslip generation. The system features a modern JavaFX GUI interface, secure user authentication, and robust database integration. It handles complex payroll calculations including tax deductions, generates PDF payslips, and maintains detailed employee and salary records.",
    "image": "/images/payroll.jpg",
    "tech": ["Java", "JavaFX","MySQL","Maven"],  
    "github": "https://github.com/yared81/Employee-Payroll-Management-System",
    
}
  
  ,
  {
    title: "FC Barcelona Store",
    description: "FC Barcelona Store is a simplified clone of the official FC Barcelona store website. It recreates the look and feel of the original site, focusing on core features like product listings, categories, and a clean, responsive design.",
    image: "/images/fcb_store.png",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/yared81/barca-store-et",
    live: "https://yared81.github.io/barca-store-et/"
  },
  {
    title: "Damena-Ethiopian Weather App",
    description: "Damena is a weather application that displays real-time weather information for major Ethiopian cities. It features a clean, user-friendly interface with localized details, making it easy for users to check conditions across the country. The app combines visual appeal with practical functionality.",
    image: "/images/damena.png",
    tech: ["React", "OpenWeather API", "Tailwind CSS"],
    github: "https://github.com/yared81/damena-weather-app",
     
  }, 
  {
    title: "BIT CDC Website",
    description: "A full-stack career platform built for Bahir Dar University students, specifically for the Career Development Center at Bahir Dar Institute of Technology. It helps students access job opportunities, resources, and events. The site features a responsive React UI, with backend plans for authentication, job postings, and student profile management.",
    image: "/images/bit_cdc.jpg",
    tech: ["React", "Tailwind CSS","Node.js","Express.js",  "MongoDB", "REST API " ],    
  },
  {
    title: "Amazon Clone",
    description: "Front end of amazon clone",
    image: "/images/amazon.png",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/yared81/Amazon-clone",
    live: "https://yared81.github.io/Amazon-clone/"
  },
  
  {
    title: "Tic-Tac-To Game",
    description: "Tic-Tac-To Game is an interactive version of the classic Tic-Tac-Toe game. It features a clean, responsive design and smooth gameplay, making it fun and easy to play on any device.",
    image: "/images/tictoctoe.png",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/yared81/Tic-Tac-Toe",
    live: "https://yared81.github.io/Tic-Tac-Toe/"
  },
  {
  title: "Clock",
    description: "This offers a set of essential timekeeping tools, including a world clock that shows the current time in various cities around the globe. It also features a stopwatch for precise timing and a timer for countdowns. All these functions are integrated into a clean, user-friendly interface for easy access and reliable performance.",
    image: "/images/clock.png",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/yared81/StopWatch",
    live: "https://yared81.github.io/StopWatch/"
  }
]


function Projects() {
  return (
    <section id="projects" className="py-20 bg-primary">
      <h2 className="section-title text-center text-light">Some of My Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="project-card group bg-dark rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="relative overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light hover:text-secondary transition-colors transform hover:scale-110"
                >
                  <FiGithub size={24} />
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light hover:text-secondary transition-colors transform hover:scale-110"
                >
                  <FiExternalLink size={24} />
                </a>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-light">{project.title}</h3>
              <p className="text-tertiary mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-sm bg-primary text-secondary rounded-full border border-secondary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects 