import { FiGithub, FiExternalLink } from 'react-icons/fi'

const projects = [
  {
    title: "Ahadu Amharic Dictionary",
    description: "This is a digital Amharic dictionary website that focuses primarily on providing clear Amharic-to-Amharic definitions. It also includes a translation feature that supports Amharic to English, Amharic to Ge’ez, and vice versa. In addition, the site offers a multilingual interface, allowing users to navigate and use the platform in different languages. Other features include Amharic riddles, proverbs, word games, and a smart spell checker that suggests correct spellings for misspelled Amharic words. The goal is to make learning and engaging with Amharic both useful and enjoyable.",
    image: "/images/ahadu.png",
    tech: ["HTML", "CSS", "JavaScript"],
    
  },
  {
    title: "LiveScribe Online Editor",
    description: "A modern, lightweight code editor that provides real-time preview of HTML, CSS, and JavaScript code.",
    image: "/images/livescribe.png",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/yared81/live-scribe",
    live: "https://yared81.github.io/live-scribe/"
  },
  {
    title: "FC Barcelona Store",
    description: "A simplified clone of the FC Barcelona official store website",
    image: "/images/fcb_store.png",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/yared81/barca-store-et",
    live: "https://yared81.github.io/barca-store-et/"
  },
  {
    title: "Damena-Ethiopian Weather App",
    description: "A beautiful weather application featuring major Ethiopian cities.",
    image: "/images/damena.png",
    tech: ["React", "OpenWeather API", "Tailwind CSS"],
    github: "https://github.com/yared81/damena-weather-app",
     
  },
  {
    title: "Tic-Tac-To Game",
    description: "An interactive Tic-Tac-Toe game featuring a clean and responsive design, offering smooth gameplay.",
    image: "/images/tictoctoe.png",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/yared81/Tic-Tac-Toe",
    live: "https://yared81.github.io/Tic-Tac-Toe/"
  },
  {
  title: "Clock",
    description: "Includes functions of a world clock with cities, Stopwatch and Timer.",
    image: "/images/clock.png",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/yared81/StopWatch",
    live: "https://yared81.github.io/StopWatch/"
  }
]


function Projects() {
  return (
    <section id="projects" className="py-20 bg-primary">
      <h2 className="section-title text-center text-light">Featured Projects</h2>
      
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