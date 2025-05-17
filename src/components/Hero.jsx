import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'

function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="text-center">
        <p className="text-secondary text-4xl mb-9">Hi, my name is</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Yared Mehari
        </h1>
        <h2 className="text-2xl md:text-4xl font-bold text-tertiary mb-8">
          WEB Developer
        </h2>
        <p className="max-w-2xl mx-auto text-tertiary mb-8">
          I build exceptional and accessible digital experiences for the web.
          Currently focused on creating responsive and user-friendly web applications.
        </p>
        
        <div className="flex justify-center space-x-6 mb-12">
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
        <a
          href="#projects"
          className="btn btn-primary inline-block"
        >
          View My Work
        </a>
      </div>
    </section>
  )
}

export default Hero 