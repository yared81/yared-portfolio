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
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
      document.documentElement.setAttribute('data-theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      document.documentElement.setAttribute('data-theme', 'light')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 transition-colors duration-500">
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