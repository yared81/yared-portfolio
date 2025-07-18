import { FiDownload } from 'react-icons/fi'
import { motion } from 'framer-motion'
import Marquee from 'react-fast-marquee'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaMobileAlt, FaPython, FaJava, FaDatabase, FaBug, FaHashtag, FaCode, FaTools } from 'react-icons/fa'
import { SiTailwindcss, SiMongodb, SiPostgresql, SiSqlite } from 'react-icons/si'
 
const skillIcons = {
  HTML: <FaHtml5 className="text-orange-500 text-2xl" />,
  CSS: <FaCss3Alt className="text-blue-500 text-2xl" />,
  'JavaScript': <FaJs className="text-yellow-400 text-2xl" />,
  'JavaScript (ES6+)': <FaJs className="text-yellow-400 text-2xl" />,
  Python: <FaPython className="text-blue-400 text-2xl" />,
  Java: <FaJava className="text-red-500 text-2xl" />,
  'C++': <FaCode className="text-indigo-400 text-2xl" />,
  'C#': <FaHashtag className="text-green-500 text-2xl" />,
  SQL: <FaDatabase className="text-blue-700 text-2xl" />,
  React: <FaReact className="text-cyan-400 text-2xl" />,
  'Node.js': <FaNodeJs className="text-green-600 text-2xl" />,
  'Tailwind CSS': <SiTailwindcss className="text-cyan-500 text-2xl" />,
  Git: <FaGitAlt className="text-orange-600 text-2xl" />,
  Debugging: <FaBug className="text-pink-500 text-2xl" />,
  'Responsive Design': <FaMobileAlt className="text-pink-400 text-2xl" />,
  'REST APIs': <FaCode className="text-green-400 text-2xl" />,
  MongoDB: <SiMongodb className="text-green-700 text-2xl" />,
  PostgreSQL: <SiPostgresql className="text-blue-500 text-2xl" />,
  SQLite: <SiSqlite className="text-gray-500 text-2xl" />
}
const skills = [
  "JavaScript",
  "Python",
  "Java",
  "C++",
  "C#",
  "SQL",

  "HTML",
  "CSS",
  "React",
  "Node.js",
  "REST APIs",

  "Git",
  "Debugging",

  "Responsive Design",
  "MongoDB",
  "PostgreSQL",
  "SQLite"
];


function SkillsMarquee({ theme }) {
  return (
    <section className="relative w-full py-10 overflow-hidden bg-white/90 text-neutral-900 dark:bg-neutral-900/90 dark:text-neutral-100">
      <div className="absolute inset-0 z-0 bg-white/70 dark:bg-neutral-900/70" />
      <motion.div
        className="absolute -top-16 left-1/2 -translate-x-1/2 w-[90vw] h-[30vw] rounded-full blur-3xl z-0 animate-pulse bg-cyan-400/20 dark:bg-cyan-600/20"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 14, ease: 'easeInOut' }}
      />
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
        <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center drop-shadow-lg">Skills & Technologies</h3>
        <Marquee
          gradient={true}
          gradientColor={theme === 'dark' ? [24,24,27] : [248,250,252]}
          speed={40}
          pauseOnHover={true}
          className="rounded-xl glass py-4 px-2 shadow-lg border border-white/10"
        >
          {skills.map((skill, idx) => (
            <div key={idx} className="flex items-center gap-2 mx-8">
              <span>{skillIcons[skill] || <FaTools className="text-gray-400 text-2xl" />}</span>
              <span className="font-semibold text-lg tracking-wide whitespace-nowrap">{skill}</span>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  )
}

function About({ theme }) {
  const stats = [
    { number: "4+", label: "Years Experience" },
    { number: "30+", label: "Projects Completed" }
  ]

  const handleDownloadCV = () => {     
    window.open('/files/CV_Yared_Azene.pdf', '_blank')
  }

  return (
    <section id="about" className="relative w-full py-24 overflow-hidden bg-white/90 text-neutral-900 dark:bg-neutral-900/90 dark:text-neutral-100" data-aos="fade-up">
      <div className="absolute inset-0 z-0 bg-white/70 dark:bg-neutral-900/70" />
      <motion.div
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[80vw] h-[40vw] rounded-full blur-3xl z-0 animate-pulse bg-cyan-400/20 dark:bg-cyan-600/20"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 12, ease: 'easeInOut' }}
      />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 w-full max-w-6xl mx-auto px-6 py-16 glass shadow-2xl bg-white/80 dark:bg-neutral-900/80"
      >
        <div className="w-full">
          <h2 className="section-title text-center">About Me</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Stats */}
            <div className="space-y-8">
            <div className="flex justify-center mb-2">
                <img
                  src="/images/Yared_Photo.jpg"
                  alt="Yared Mehari"
                  className="rounded-full w-60 h-60 object-cover border-4 shadow-2xl border-cyan-400 bg-white/60 dark:bg-neutral-900/60"
                />
              </div>
              {/* Stats Box */}
              <div className="p-4 rounded-2xl shadow-lg border border-white/10 bg-white/70 dark:bg-neutral-900/70">
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center p-4">
                      <div className="text-4xl font-extrabold mb-2 drop-shadow-lg text-cyan-500 dark:text-cyan-400">{stat.number}</div>
                      <div className="text-base font-semibold text-neutral-700 dark:text-neutral-300">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Download CV Button */}
              <div className="flex justify-center">
                <button
                  onClick={handleDownloadCV}
                  className="w-full max-w-xs rounded-lg py-3 px-6 flex items-center justify-center space-x-2 transition-all duration-300 group btn-glow hover-underline text-lg font-semibold bg-cyan-500 dark:bg-cyan-400 text-white"
                >
                  <FiDownload className="group-hover:animate-bounce" />
                  <span>Download CV</span>
                </button>
              </div>
            </div>
            {/* Right Column - About Text */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold mb-2">Software Developer</h3>
                <p className="text-lg text-neutral-700 dark:text-neutral-300">
                Hello! I'm a dedicated Software Engineer who enjoys building clean, efficient, and user-friendly software. My journey began with a strong curiosity about how digital tools are made, which pushed me to explore programming and software development deeply.
                </p>
                <p className="text-lg text-neutral-700 dark:text-neutral-300">
                I focus on creating reliable and well-structured applications that solve real-world problems. Whether it's a website, desktop tool, or mobile app, I aim to make software that's not just functional but also enjoyable to use.
                </p> 
                <p className="text-lg text-neutral-700 dark:text-neutral-300">
                When I'm not coding, I spend time learning new skills, exploring technologies, or improving my knowledge through reading and practice. I believe that a good developer never stops learning and that mindset keeps me growing every day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export { About, SkillsMarquee } 