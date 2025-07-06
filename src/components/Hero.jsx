import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-secondary to-dark transition-colors duration-500"
      data-aos="fade-up"
    >
      {/* Animated background blobs */}
      <motion.div
        className="absolute top-0 left-0 w-[60vw] h-[60vw] bg-secondary/30 rounded-full blur-3xl z-0 animate-pulse"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[40vw] h-[40vw] bg-primary/30 rounded-full blur-2xl z-0 animate-pulse"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
      />
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-16">
        {/* Image left */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex-shrink-0 flex justify-center md:justify-start w-full md:w-1/2"
        >
          <img
            src="/images/Yared_Photo.jpg"
            alt="Yared Mehari"
            className="rounded-3xl w-72 h-72 md:w-[400px] md:h-[400px] object-cover border-4 border-secondary shadow-2xl bg-dark/60"
          />
        </motion.div>
        {/* Text right */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="w-full md:w-1/2 text-left"
        >
          <p className="text-secondary mb-4 text-lg font-semibold tracking-widest uppercase">Hi, my name is</p>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-light drop-shadow-xl leading-tight">
            Yared Mehari
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold text-tertiary mb-8 tracking-tight">
            WEB Developer
          </h2>
          <p className="text-tertiary mb-8 text-lg max-w-xl">
            I build exceptional and accessible digital experiences for the web. Currently focused on creating responsive and user-friendly web applications.
          </p>
          <div className="flex space-x-6 mb-10">
            <a
              href="https://github.com/yared81"
              target="_blank"
              rel="noopener noreferrer"
              className="text-tertiary hover:text-secondary transition-colors text-2xl btn-glow"
            >
              <FiGithub />
            </a>
            <a
              href="https://linkedin.com/in/yaredazene"
              target="_blank"
              rel="noopener noreferrer"
              className="text-tertiary hover:text-secondary transition-colors text-2xl btn-glow"
            >
              <FiLinkedin />
            </a>
          </div>
          <div className="flex space-x-4">
            <a
              href="#projects"
              className="btn btn-primary inline-block btn-glow hover-underline text-lg px-8 py-3"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="btn btn-primary inline-block btn-glow hover-underline text-lg px-8 py-3"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero 