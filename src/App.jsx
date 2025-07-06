import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { About, SkillsMarquee } from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light'
    }
    return 'light'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  return (
    <div className="min-h-screen bg-primary transition-colors duration-500">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} theme={theme} setTheme={setTheme} />
      <main className="container mx-auto px-4 py-8">
        <Hero />
        <About theme={theme} />
        <SkillsMarquee theme={theme} />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App 