import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{ background: 'var(--background)', color: 'var(--text)' }}
      data-aos="fade-up"
    >
      {/* Theme-aware overlay for readability */}
      <div className="absolute inset-0 z-0" style={{ background: 'var(--background)' }} />
      {/* Animated background blobs */}
      <motion.div
        className="absolute top-0 left-0 w-[60vw] h-[60vw] rounded-full blur-3xl z-0 opacity-20"
        style={{ background: 'var(--secondary)' }}
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ repeat: Infinity, duration: 25, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[40vw] h-[40vw] rounded-full blur-2xl z-0 opacity-15"
        style={{ background: 'var(--primary)' }}
        animate={{ scale: [1, 1.03, 1] }}
        transition={{ repeat: Infinity, duration: 30, ease: 'easeInOut' }}
      />
      
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh]">
          {/* Image left */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex-shrink-0 flex justify-center lg:justify-start w-full order-2 lg:order-1"
          >
            <img
              src="/images/Yared_home.png"
              alt="Yared Mehari"
              className="rounded-3xl w-80 h-80 md:w-96 md:h-[500px] object-cover border-4 shadow-2xl border-cyan-400"
              style={{ background: 'var(--background)' }}
            />
          </motion.div>
          
          {/* Text right */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="w-full order-1 lg:order-2 text-center lg:text-left space-y-6"
          >
            <div className="space-y-4">
              <p className="text-lg md:text-xl font-semibold tracking-widest uppercase text-cyan-500">
                Hi, my name is
              </p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold drop-shadow-xl leading-tight" style={{ color: 'var(--text)' }}>
                Yared Mehari
              </h1>
              <h2 className="text-xl md:text-3xl lg:text-4xl font-bold tracking-tight" style={{ color: 'var(--text)' }}>
                Software Developer
              </h2>
            </div>
            
            <p className="text-base md:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed" style={{ color: 'var(--text)' }}>
              I create useful and practical software solutions that aim to make everyday tasks easier. I'm passionate about solving problems through technology and enjoy working on projects that have a real impact. Whether it's building websites, applications, or other digital tools, I focus on making sure the end result is clear, reliable, and easy to use.
            </p>
            
            <div className="flex justify-center lg:justify-start space-x-4 mb-6">
              <a
                href="https://github.com/yared81"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors text-2xl btn-glow hover:scale-110"
                style={{ color: 'var(--text)' }}
              >
                <FiGithub />
              </a>
              <a
                href="https://linkedin.com/in/yaredazene"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors text-2xl btn-glow hover:scale-110"
                style={{ color: 'var(--text)' }}
              >
                <FiLinkedin />
              </a>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-4">
              <a
                href="#projects"
                className="btn btn-primary inline-block btn-glow hover-underline text-lg px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
                style={{ background: 'var(--secondary)', color: 'white' }}
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="btn btn-primary inline-block btn-glow hover-underline text-lg px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
                style={{ background: 'var(--secondary)', color: 'white' }}
              >
                Contact Me
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero 