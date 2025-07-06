import { FiDownload } from 'react-icons/fi'
import { motion } from 'framer-motion'
import Marquee from 'react-fast-marquee'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaMobileAlt } from 'react-icons/fa'
import { SiTailwindcss } from 'react-icons/si'

const skillIcons = {
  HTML: <FaHtml5 className="text-orange-500 text-2xl" />,
  CSS: <FaCss3Alt className="text-blue-500 text-2xl" />,
  'JavaScript (ES6+)': <FaJs className="text-yellow-400 text-2xl" />,
  React: <FaReact className="text-cyan-400 text-2xl" />,
  'Node.js': <FaNodeJs className="text-green-600 text-2xl" />,
  'Tailwind CSS': <SiTailwindcss className="text-cyan-500 text-2xl" />,
  Git: <FaGitAlt className="text-orange-600 text-2xl" />,
  'Responsive Design': <FaMobileAlt className="text-pink-400 text-2xl" />,
  'REST APIs': <FaJs className="text-green-400 text-2xl" />,
}

const skills = [
  "HTML",
  "CSS",
  "JavaScript (ES6+)",
  "React",
  "Node.js",
  "Tailwind CSS",
  "Git",
  "Responsive Design",
  "REST APIs"
]

function SkillsMarquee({ theme }) {
  return (
    <section className="relative w-full py-10 overflow-hidden"
      style={{
        background: 'linear-gradient(90deg, var(--primary), var(--background), var(--secondary))',
        color: 'var(--text)',
        transition: 'background 0.5s, color 0.5s',
      }}
    >
      <motion.div
        className="absolute -top-16 left-1/2 -translate-x-1/2 w-[90vw] h-[30vw] rounded-full blur-3xl z-0 animate-pulse"
        style={{ background: 'var(--secondary, #06b6d4)', opacity: 0.2 }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 14, ease: 'easeInOut' }}
      />
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
        <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center drop-shadow-lg" style={{ color: 'var(--text)' }}>Skills & Technologies</h3>
        <Marquee
          gradient={true}
          gradientColor={theme === 'dark' ? [24,24,27] : [248,250,252]}
          speed={40}
          pauseOnHover={true}
          className="rounded-xl glass py-4 px-2 shadow-lg border border-white/10"
        >
          {skills.map((skill, idx) => (
            <div key={idx} className="flex items-center gap-2 mx-8">
              <span>{skillIcons[skill]}</span>
              <span className="font-semibold text-lg tracking-wide whitespace-nowrap" style={{ color: 'var(--text)' }}>{skill}</span>
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
    <section id="about" className="relative w-full py-24 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, var(--background), var(--primary), var(--secondary))',
        color: 'var(--text)',
        transition: 'background 0.5s, color 0.5s',
      }}
      data-aos="fade-up"
    >
      {/* Animated background blob */}
      <motion.div
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[80vw] h-[40vw] rounded-full blur-3xl z-0 animate-pulse"
        style={{ background: 'var(--secondary, #06b6d4)', opacity: 0.2 }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 12, ease: 'easeInOut' }}
      />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 w-full max-w-6xl mx-auto px-6 py-16 glass shadow-2xl"
        style={{ background: 'var(--glass-bg)', color: 'var(--text)' }}
      >
        <div className="w-full">
          <h2 className="section-title text-center" style={{ color: 'var(--text)' }}>About Me</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Stats */}
            <div className="space-y-8">
              {/* Stats Box */}
              <div className="p-8 rounded-2xl shadow-lg border border-white/10"
                style={{ background: 'var(--glass-bg)', color: 'var(--text)' }}
              >
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center p-4">
                      <div className="text-4xl font-extrabold mb-2 drop-shadow-lg" style={{ color: 'var(--secondary)' }}>{stat.number}</div>
                      <div className="text-base font-semibold" style={{ color: 'var(--tertiary)' }}>{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Download CV Button */}
              <div className="flex justify-center">
                <button
                  onClick={handleDownloadCV}
                  className="w-full max-w-xs rounded-lg py-3 px-6 flex items-center justify-center space-x-2 transition-all duration-300 group btn-glow hover-underline text-lg font-semibold"
                  style={{ background: 'var(--secondary)', color: 'var(--primary)' }}
                >
                  <FiDownload className="group-hover:animate-bounce" />
                  <span>Download CV</span>
                </button>
              </div>
            </div>
            {/* Right Column - About Text */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold mb-2" style={{ color: 'var(--text)' }}>Web Developer</h3>
                <p className="text-lg" style={{ color: 'var(--tertiary)' }}>
                  Hello! I'm a passionate Web developer with a keen eye for creating
                  beautiful and functional web applications. My journey in web development
                  started with a curiosity about how websites work, which led me to dive
                  deep into modern web technologies.
                </p>
                <p className="text-lg" style={{ color: 'var(--tertiary)' }}>
                  I specialize in building responsive and user-friendly interfaces using
                  React and modern CSS frameworks. I'm constantly learning and exploring
                  new technologies to stay at the forefront of web development.
                </p>
                <p className="text-lg" style={{ color: 'var(--tertiary)' }}>
                  When I'm not coding, you can find me exploring new technologies,  
                  contributing to open-source projects, or sharing what I've learned  
                  through technical writing. I also make time to always learn new things—  
                  as I always say, a good developer is always learning and improving.
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