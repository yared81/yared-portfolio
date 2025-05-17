import { FiMail, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'

function Contact() {
  return (
    <section id="contact" className="py-20">
      <h2 className="section-title text-center">Get In Touch</h2>
      
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-tertiary mb-8">
          I'm currently open to new opportunities and collaborations.
          Whether you have a question or just want to say hi, I'll try my best
          to get back to you!
        </p>
        
        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="mailto:yared4193@gmail.com"
            className="text-tertiary hover:text-secondary transition-colors"
            title="Email"
          >
            <FiMail size={24} />
          </a>
          <a
            href="https://github.com/yared81"
            target="_blank"
            rel="noopener noreferrer"
            className="text-tertiary hover:text-secondary transition-colors"
            title="GitHub"
          >
            <FiGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/yaredazene"
            target="_blank"
            rel="noopener noreferrer"
            className="text-tertiary hover:text-secondary transition-colors"
            title="LinkedIn"
          >
            <FiLinkedin size={24} />
          </a>
           
        </div>
        
        <a
          href="mailto:your.email@example.com"
          className="btn btn-primary inline-block"
        >
          Say Hello
        </a>
      </div>
    </section>
  )
}

export default Contact 