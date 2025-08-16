import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { SiHtml5, SiCss3, SiJavascript, SiPhp, SiMysql, SiSqlite, SiReact, SiTailwindcss, SiNodedotjs, SiExpress, SiMongodb, SiChartdotjs, SiAmazonaws } from 'react-icons/si'
import { FaJava, FaTools, FaFileExcel, FaFilePdf } from 'react-icons/fa'
import { motion } from 'framer-motion'

const techIcons = {
  HTML: <SiHtml5 className="text-orange-500" />,
  CSS: <SiCss3 className="text-blue-500" />,
  JavaScript: <SiJavascript className="text-yellow-400" />,
  PHP: <SiPhp className="text-indigo-500" />,
  MySQL: <SiMysql className="text-blue-700" />,
  SQLite: <SiSqlite className="text-gray-500" />,
  Java: <FaJava className="text-red-500" />,
  JavaFX: <FaJava className="text-blue-400" />,
  Maven: <FaTools className="text-orange-400" />,
  React: <SiReact className="text-cyan-400" />,
  'Tailwind CSS': <SiTailwindcss className="text-cyan-500" />,
  'Node.js': <SiNodedotjs className="text-green-600" />,
  'Express.js': <SiExpress className="text-gray-700" />,
  MongoDB: <SiMongodb className="text-green-700" />,
  'Chart.js': <SiChartdotjs className="text-pink-500" />,
  'SheetJS (xlsx)': <FaFileExcel className="text-green-600" />,
  jsPDF: <FaFilePdf className="text-red-600" />,
  'REST API ': <SiAmazonaws className="text-yellow-500" />,
}

const projects = [
  {
    title: "Ahadu Amharic Dictionary",
    description: "it focuses on providing clear Amharic-to-Amharic definitions. It also includes translation features for Amharic to English, Amharic to Ge'ez, and vice versa. The site supports a multilingual interface, allowing users to navigate in different languages. Additional features include Amharic riddles, proverbs, word games, and a smart spell checker that suggests corrections for misspelled Amharic words. The platform is designed to make learning and interacting with the Amharic language both practical and engaging.",
    image: "/images/ahadu.png",
    tech: ["HTML", "CSS", "JavaScript","PHP","MySQL", "SQLite"],
    
  },{
    title: "Kener Ideas Cloud",
    description: "Kener Ideas Cloud is an interactive idea board built with React and Supabase. It allows users to submit, explore, and vote on ideas displayed in a dynamic word cloud interface. Each idea node supports nested sub-ideas, like buttons, reply counters, and image previews. The canvas is zoomable and pannable, using React Konva for rich visual interaction. ",
    image: "/images/kic.png",
    tech: ["React", "JavaScript", "React Konva", "Supabase","PostgreSQL", "CSS"],    
    
  },
  {
    title: "LiveScribe Online Editor",
    description: "LiveScribe Online Editor is a lightweight, modern web-based code editor that lets you write and preview HTML, CSS, and JavaScript in real time. It's designed for quick testing, learning, and building small web projects with an instant visual output.",
    image: "/images/livescribe.png",
    tech: ["HTML", "CSS", "JavaScript"],
 
  },
  {
  title: "SmartDoc AI - Enterprise Document Intelligence Platform",
  description: "SmartDoc AI is a cutting-edge RAG (Retrieval-Augmented Generation) system that transforms document chaos into actionable intelligence. Built with Streamlit, LangChain, and Groq, it provides instant, accurate answers from any document type including PDFs, Word documents, Excel spreadsheets, and text files. Features include intelligent search & retrieval, lightning-fast processing powered by Groq's inference engine, context-aware AI that maintains conversation memory, and enterprise-grade accuracy with advanced RAG technology.",
  image: "/images/smartdoc-ai.png",
  tech: ["Python", "Streamlit", "LangChain", "Groq API", "Hugging Face", "ChromaDB", "RAG", "AI/ML", "Vector Embeddings", "Document Processing"]
},{
  title: "TruckLink - African Logistics Management Platform",
  description: "TruckLink is a comprehensive logistics management system designed for African markets, connecting drivers and logistics managers through an intuitive platform. Built with React, TypeScript, and Tailwind CSS, it provides real-time job tracking, payment management, maintenance reporting, and analytics dashboards. Features include role-based access control (Driver/Manager), African-themed design with black, yellow, and white color scheme, responsive dashboard layouts, and local storage-based data persistence.",
  image: "/TruckLink_Logo.png",
  tech: ["React", "TypeScript","Tailwind CSS"]
},
  {
    title: "Employee Payroll Management System",
    description: "A comprehensive Java-based payroll management system that automates employee salary processing, attendance tracking, and payslip generation. The system features a modern JavaFX GUI interface, secure user authentication, and robust database integration. It handles complex payroll calculations including tax deductions, generates PDF payslips, and maintains detailed employee and salary records.",
    image: "/images/payroll.jpg",
    tech: ["Java", "JavaFX","MySQL","Maven"],  
    github: "https://github.com/yared81/Employee-Payroll-Management-System",
    
}
   
  ,
  {
    title: "Hasset- Personal Budgeting Calculator",
    description: "Hasset Budget App is a modern, user-friendly personal budgeting calculator. It helps you track your income, expenses, budgets, reminders, and savings goals—all in one place. The app features dynamic charts, category budgets, bill reminders, and export options, all wrapped in a clean, responsive design.",
    image: "/images/hasset.png",
    tech: ["HTML", "CSS", "JavaScript", "Chart.js", "SheetJS (xlsx)", "jsPDF"],
    github: "https://github.com/yared81/barca-store-et",
    live: "https://yared81.github.io/barca-store-et/"
  }, 
   
     
  {
    title: "FC Barcelona Store",
    description: "FC Barcelona Store is a simplified clone of the official FC Barcelona store website. It recreates the look and feel of the original site, focusing on core features like product listings, categories, and a clean, responsive design.",
    image: "/images/fcb_store.png",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/yared81/Hasset-budget-app",
    live: "https://yared81.github.io/Hasset-budget-app/"
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
]


function Projects() {
  return (
    <section id="projects" className="py-20 bg-white/90 text-black font-bold dark:bg-neutral-900/90 dark:text-white">
      <h2 className="section-title text-center">Some of My Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card group bg-white/80 dark:bg-neutral-900/80 backdrop-blur-lg rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 border border-white/10 hover:border-secondary/40"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(6,182,212,0.25)' }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="relative overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-900 dark:text-neutral-100 hover:text-secondary transition-colors transform hover:scale-110"
                  >
                    <FiGithub size={24} />
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-900 dark:text-neutral-100 hover:text-secondary transition-colors transform hover:scale-110"
                  >
                    <FiExternalLink size={24} />
                  </a>
                )}
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-neutral-900 dark:text-neutral-100 drop-shadow-lg">{project.title}</h3>
              <p className="mb-4 min-h-[72px] text-tertiary dark:text-neutral-300">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="flex items-center gap-1 px-3 py-1 text-sm bg-primary/80 text-secondary rounded-full border border-secondary/20 shadow-sm backdrop-blur-md"
                  >
                    {techIcons[tech] || null}
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects 