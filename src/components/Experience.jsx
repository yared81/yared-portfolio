const Experience = () => {
  const experiences = [
    {
      role: "Frontend Developer",
      company: "Freelance",
      period: "2023 - Present",
      description: "Developing responsive web applications using React and modern web technologies."
    },
    {
      role: "Web Developer",
      company: "Self-Employed",
      period: "2022 - 2023",
      description: "Created and maintained multiple web projects including e-commerce and portfolio websites."
    }
  ]

  return (
    <section id="experience" className="py-20">
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
    </section>
  )
}

export default Experience 