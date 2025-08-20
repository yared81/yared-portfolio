import { useState, useEffect } from 'react'
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi'
import * as Switch from '@radix-ui/react-switch'
import { motion } from 'framer-motion'

function Navbar({ isMenuOpen, setIsMenuOpen, theme, setTheme }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      
      const sections = ['home', 'about', 'experience', 'projects', 'contact']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = (e, href) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(targetId)
      setIsMenuOpen(false)
    }
  }

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="fixed w-full z-50 transition-all duration-300 border-b shadow-2xl backdrop-blur-xl"
      style={{ 
        background: 'var(--glass-bg)', 
        borderColor: 'var(--tertiary)',
        backdropFilter: 'blur(20px)'
      }}
      data-aos="fade-down"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a 
            href="#home" 
            className="text-2xl font-bold hover:text-secondary transition-colors"
            style={{ color: 'var(--text)' }}
            onClick={(e) => handleClick(e, '#home')}
          >
          Yared Mehari Azene             
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`relative transition-colors px-3 py-2 rounded-lg ${
                  activeSection === link.href.replace('#', '')
                    ? 'font-semibold'
                    : 'hover:bg-white/10'
                }`}
                style={{ 
                  color: activeSection === link.href.replace('#', '') 
                    ? 'var(--secondary)' 
                    : 'var(--text)' 
                }}
                onClick={(e) => handleClick(e, link.href)}
              >
                {link.name}
                {activeSection === link.href.replace('#', '') && (
                  <motion.span
                    layoutId="navbar-underline"
                    className="absolute left-0 right-0 -bottom-1 h-0.5 rounded-full"
                    style={{ background: 'var(--secondary)' }}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </a>
            ))}
            {/* Theme Toggle */}
            <div className="ml-4 flex items-center p-2 rounded-lg hover:bg-white/10 transition-colors">
              <FiSun className={`mr-2 ${theme === 'light' ? 'text-yellow-400' : 'text-gray-400'}`} />
              <Switch.Root
                className="w-10 h-6 bg-gray-300 rounded-full relative transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-secondary"
                checked={theme === 'dark'}
                onCheckedChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                id="theme-toggle"
              >
                <Switch.Thumb
                  className={`block w-5 h-5 bg-white rounded-full shadow-lg transition-transform duration-300 ${theme === 'dark' ? 'translate-x-4' : 'translate-x-1'}`}
                />
              </Switch.Root>
              <FiMoon className={`ml-2 ${theme === 'dark' ? 'text-blue-400' : 'text-gray-400'}`} />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden hover:bg-white/10 p-2 rounded-lg transition-colors"
            style={{ color: 'var(--text)' }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 p-4 rounded-2xl backdrop-blur-xl shadow-2xl border border-white/20" style={{ background: 'var(--glass-bg)' }}>
            <div className="space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`block px-4 py-3 rounded-lg transition-colors ${
                    activeSection === link.href.replace('#', '')
                      ? 'font-semibold'
                      : 'hover:bg-white/10'
                  }`}
                  style={{ 
                    color: activeSection === link.href.replace('#', '') 
                      ? 'var(--secondary)' 
                      : 'var(--text)' 
                  }}
                  onClick={(e) => handleClick(e, link.href)}
                >
                  {link.name}
                </a>
              ))}
              {/* Theme Toggle for Mobile */}
              <div className="mt-4 flex items-center justify-center p-3 rounded-lg hover:bg-white/10 transition-colors">
                <FiSun className={`mr-2 ${theme === 'light' ? 'text-yellow-400' : 'text-gray-400'}`} />
                <Switch.Root
                  className="w-10 h-6 bg-gray-300 rounded-full relative transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-secondary"
                  checked={theme === 'dark'}
                  onCheckedChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  id="theme-toggle-mobile"
                >
                  <Switch.Thumb
                    className={`block w-5 h-5 bg-white rounded-full shadow-lg transition-transform duration-300 ${theme === 'dark' ? 'translate-x-4' : 'translate-x-1'}`}
                  />
                </Switch.Root>
                <FiMoon className={`ml-2 ${theme === 'dark' ? 'text-blue-400' : 'text-gray-400'}`} />
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.nav>
  )
}

export default Navbar 