import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <p className="text-secondary mb-4">Hi, my name is</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Yared Mehari
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold text-tertiary mb-8">
              WEB Developer
            </h2>
            <p className="text-tertiary mb-8">
              I build exceptional and accessible digital experiences for the web.
              Currently focused on creating responsive and user-friendly web applications.
            </p>
            
            <div className="flex space-x-6 mb-12">
              <a
                href="https://github.com/yared81"
                target="_blank"
                rel="noopener noreferrer"
                className="text-tertiary hover:text-secondary transition-colors"
              >
                <FiGithub size={24} />
              </a>
              <a
                href="https://linkedin.com/in/yaredazene"
                target="_blank"
                rel="noopener noreferrer"
                className="text-tertiary hover:text-secondary transition-colors"
              >
                <FiLinkedin size={24} />
              </a>               
            </div>

            <div className="flex space-x-4">
              <a
                href="#projects"
                className="btn btn-primary inline-block"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="btn btn-primary inline-block"
              >
                Contact Me
              </a>
            </div>
          </div>
          
          <div className="flex justify-center">
            <img
              src="/images/Yared_Photo.jpg"
              alt="Yared Mehari"
              className="rounded-full w-96 h-96 md:w-[500px] md:h-[500px] object-cover border-4 border-secondary shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 