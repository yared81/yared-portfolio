import { motion } from 'framer-motion'

const Experience = () => {
  const experiences = [
    {
      role: "Web Developer",
      company: "BiT Career Development Center",
      period: "2024 - Present",
      description: "Developed, improved, and maintained the website to ensure strong performance and functionality. Regularly fixed bugs and resolved technical issues as they arose. Made continuous improvements to enhance user experience and increase overall site efficiency."
    },
    {
      role: "Backend Developer",
      company: "CodeAlpha",
      period: "2024 - 2025",
      description: "Designed and built scalable backend systems and APIs to support web applications. Resolved server-side issues to maintain high performance and reliability. Worked closely with frontend teams to connect user-facing features with backend logic. Implemented database solutions and followed security best practices to protect data and improve system efficiency."
    }
  ]

  return (
    <section id="experience" className="py-20" data-aos="fade-up">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 md:p-16 max-w-3xl mx-auto border border-white/10"
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