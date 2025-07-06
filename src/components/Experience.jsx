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
      period: "2024 - 2025",
      description: "I worked as a backend developer at Kuraz technologies. I was responsible for developing and maintaining the backend of the website. I was also responsible for developing and maintaining the backend of the website. I was also responsible for developing and maintaining the backend of the website."
    },
    {
      role: "Software Engineer",
      company: "HammerSpacecrafts",
      period: "2024 - 2025",
      description: "I work as a full-stack software engineer at Hammerspacecrafts, where I develop and maintain web applications across both frontend and backend. My responsibilities include building and integrating APIs, improving application performance, and collaborating with team members to design and implement new features. I also take part in code reviews, write tests to ensure reliability, and focus on delivering secure, scalable, and user-friendly software."
    },
    {
      role: "Tools & Systems Developer",
      company: "Startup Garage",
      period: "2024 - 2025",
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
      period: "2023 - 2025",
      description: "I work with clients to design, build, and maintain complete web applications from frontend to backend. My responsibilities include developing user interfaces, handling server-side logic, managing databases, and deploying applications. I often collaborate with clients to understand their needs, offer technical guidance, and ensure the final product is functional, secure, and user-friendly. This role has helped me grow in both technical ability and project ownership, while learning to adapt quickly to different challenges and workflows."
    }
    
  ]

  return (
    <section id="experience" className="py-20 relative w-full overflow-hidden bg-white/90 text-black font-bold dark:bg-neutral-900/90 dark:text-white" data-aos="fade-up">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 w-full max-w-5xl mx-auto px-6 py-16 glass shadow-2xl"
      >
        <h2 className="section-title">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-primary/50 p-6 rounded-lg">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-light">{exp.role}</h3>
                  <p className="text-secondary">{exp.company}</p>
                </div>
                <span className="text-tertiary">{exp.period}</span>
              </div>
              <p className="text-tertiary">{exp.description}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Experience 