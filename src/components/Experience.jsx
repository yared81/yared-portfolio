import { motion } from 'framer-motion'

const Experience = () => {
  const experiences = [
    {
      role: "Full Stack Developer",
      company: "BiT Career Development Center",
      period: "2024 - Present",
      description: "Developed, improved, and maintained the website to ensure strong performance and functionality. Regularly fixed bugs and resolved technical issues as they arose. Made continuous improvements to enhance user experience and increase overall site efficiency."
    },
    {
      role: "Backend Engineer",
      company: "Kuraz technologies",
      period: "2024 - Present",
      description: "Developed and maintained backend systems to ensure performance and reliability. Collaborated with the team to solve project challenges, fixed bugs, and resolved technical issues. Continuously improved features to enhance efficiency and user experience."
    },
    {
      role: "Software Engineer",
      company: "HammerSpacecrafts",
      period: "2024 - Present",
      description: "I work as a full-stack software engineer at Hammerspacecrafts, where I develop and maintain web applications across both frontend and backend. My responsibilities include building and integrating APIs, improving application performance, and collaborating with team members to design and implement new features. I also take part in code reviews, write tests to ensure reliability, and focus on delivering secure, scalable, and user-friendly software."
    },
    {
      role: "Tools & Systems Developer",
      company: "Startup Garage",
      period: "2024 - Present",
      description: "I support the team by exploring, testing, and implementing digital tools that enhance workflow and operational efficiency. I help evaluate automation solutions, contribute to backend systems, and collaborate with others to improve processes for early-stage startups. This role is helping me build a strong foundation in tech infrastructure and startup operations."
    },
    {
      role: "Backend Developer",
      company: "CodeAlpha",
      period: "2024 - 2025",
      description: "Designed and built scalable backend systems and APIs to support web applications. Resolved server-side issues to maintain high performance and reliability. Worked closely with frontend teams to connect user-facing features with backend logic. Implemented database solutions and followed security best practices to protect data and improve system efficiency."
    },
    {
      role: "Full Stack Developer",
      company: "Freelance / Self-employed",
      period: "2023 - Present",
      description: "I work with clients to design, build, and maintain complete web applications from frontend to backend. My responsibilities include developing user interfaces, handling server-side logic, managing databases, and deploying applications. I often collaborate with clients to understand their needs, offer technical guidance, and ensure the final product is functional, secure, and user-friendly."
    }
    
  ]

  return (
    <section id="experience" className="py-20 relative w-full overflow-hidden font-bold" style={{ background: 'var(--background)', color: 'var(--text)' }} data-aos="fade-up">
      {/* Animated background blobs */}
      <motion.div
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[80vw] h-[40vw] rounded-full blur-3xl z-0 animate-pulse"
        style={{ background: 'var(--secondary)' }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 12, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-32 right-1/2 translate-x-1/2 w-[60vw] h-[30vw] rounded-full blur-2xl z-0 animate-pulse"
        style={{ background: 'var(--primary)' }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
      />
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 w-full max-w-6xl mx-auto px-4"
      >
        <h2 className="section-title text-center mb-16">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-lg backdrop-blur-lg shadow-lg border"
              style={{ background: 'var(--glass-bg)', borderColor: 'var(--tertiary)' }}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold" style={{ color: 'var(--text)' }}>{exp.role}</h3>
                  <p className="text-cyan-500">{exp.company}</p>
                </div>
                <span style={{ color: 'var(--text)' }}>{exp.period}</span>
              </div>
              <p style={{ color: 'var(--text)' }}>{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Experience 