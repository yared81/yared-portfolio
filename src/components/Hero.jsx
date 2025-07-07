import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-white/90 text-black font-bold dark:bg-neutral-900/90 dark:text-white"
      data-aos="fade-up"
    >
      {/* Theme-aware overlay for readability */}
      <div className="absolute inset-0 z-0 bg-white/70 dark:bg-neutral-900/70" />
      {/* Animated background blobs */}
      <motion.div
        className="absolute top-0 left-0 w-[60vw] h-[60vw] rounded-full blur-3xl z-0 animate-pulse bg-secondary/10 dark:bg-secondary/20"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[40vw] h-[40vw] rounded-full blur-2xl z-0 animate-pulse bg-primary/10 dark:bg-primary/20"
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
            src="/images/Yared_home.png"
            alt="Yared Mehari"
            className="rounded-3xl w-82 h-82 md:w-[450px] md:h-[500px] object-cover border-4 shadow-2xl border-cyan-400 bg-white/60 dark:bg-neutral-900/60"
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
          <p className="mb-4 text-lg font-semibold tracking-widest uppercase text-cyan-500 dark:text-cyan-400">Hi, my name is</p>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 drop-shadow-xl leading-tight text-neutral-900 dark:text-neutral-100">
            Yared Mehari
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold mb-8 tracking-tight text-neutral-700 dark:text-neutral-300">
            Software Developer
          </h2>
          <p className="mb-8 text-lg max-w-xl text-neutral-700 dark:text-neutral-300">
            I create useful and practical software solutions that aim to make everyday tasks easier. I'm passionate about solving problems through technology and enjoy working on projects that have a real impact. Whether it's building websites, applications, or other digital tools, I focus on making sure the end result is clear, reliable, and easy to use.
          </p>
          <div className="flex space-x-6 mb-10">
            <a
              href="https://github.com/yared81"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors text-2xl btn-glow text-neutral-700 dark:text-neutral-300"
            >
              <FiGithub />
            </a>
            <a
              href="https://linkedin.com/in/yaredazene"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors text-2xl btn-glow text-neutral-700 dark:text-neutral-300"
            >
              <FiLinkedin />
            </a>
          </div>
          <div className="flex space-x-4">
            <a
              href="#projects"
              className="btn btn-primary inline-block btn-glow hover-underline text-lg px-8 py-3"
              style={{ background: 'var(--secondary)', color: 'var(--primary)' }}
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="btn btn-primary inline-block btn-glow hover-underline text-lg px-8 py-3"
              style={{ background: 'var(--secondary)', color: 'var(--primary)' }}
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