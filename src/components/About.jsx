import { FiDownload } from 'react-icons/fi'

function About() {
  const stats = [
    { number: "4+", label: "Years Experience" },
    { number: "15+", label: "Projects Completed" }
  ]

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

  const handleDownloadCV = () => {     
    window.open('/files/CV_Yared_Azene.pdf', '_blank')
  }

  return (
    <section id="about" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Stats */}
          <div className="space-y-8">
            {/* Stats Box */}
            <div className="bg-dark p-6 rounded-lg shadow-lg">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-4">
                    <div className="text-3xl font-bold text-secondary mb-2">{stat.number}</div>
                    <div className="text-tertiary text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Download CV Button */}
            <div className="flex justify-center">
              <button
                onClick={handleDownloadCV}
                className="w-full max-w-xs bg-dark hover:bg-secondary/10 text-secondary border border-secondary/20 rounded-lg py-3 px-6 flex items-center justify-center space-x-2 transition-all duration-300 group"
              >
                <FiDownload className="group-hover:animate-bounce" />
                <span>Download CV</span>
              </button>
            </div>
          </div>

          {/* Right Column - About Text and Skills */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-light">Web Developer</h3>
              <p className="text-tertiary">
                Hello! I'm a passionate Web developer with a keen eye for creating
                beautiful and functional web applications. My journey in web development
                started with a curiosity about how websites work, which led me to dive
                deep into modern web technologies.
              </p>
              
              <p className="text-tertiary">
                I specialize in building responsive and user-friendly interfaces using
                React and modern CSS frameworks. I'm constantly learning and exploring
                new technologies to stay at the forefront of web development.
              </p>
              
              <p className="text-tertiary">
                When I'm not coding, you can find me exploring new technologies,  
                contributing to open-source projects, or sharing what I've learned  
                through technical writing. I also make time to always learn new things—  
                as I always say, a good developer is always learning and improving.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6 text-light">Skills & Technologies</h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 text-tertiary"
                  >
                    <span className="text-secondary">▹</span>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 