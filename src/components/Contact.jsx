import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'

// Initialize EmailJS
emailjs.init({
  publicKey: "c3IRm2KGrkXhj7w5W",
})

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Send email using EmailJS
    emailjs.send(
      'service_xhi1phl', // Replace with your EmailJS service ID
      'template_h4jhs1o', // Replace with your EmailJS template ID
      {
        from_name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        to_name: 'Yared Mehari',
      }
    )
    .then((result) => {
      console.log('Email sent successfully:', result.text)
      // Reset form after successful send
      setFormData({ name: '', email: '', phone: '', message: '' })
      alert('Message sent successfully!')
    })
    .catch((error) => {
      console.error('Error sending email:', error.text)
      alert('Failed to send message. Please try again.')
    })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: <FiMail size={24} />,
      label: "Email",
      value: "yared4193@gmail.com",
      link: "mailto:yaredazene16@gmail.com"
    },
    {
      icon: <FiGithub size={24} />,
      label: "GitHub",
      value: "github.com/yared81",
      link: "https://github.com/yared81"
    },
    {
      icon: <FiLinkedin size={24} />,
      label: "LinkedIn",
      value: "linkedin.com/in/yaredazene",
      link: "https://linkedin.com/in/yaredazene"
    }
  ]

  return (
    <section id="contact" className="py-20 relative w-full overflow-hidden font-bold" style={{ background: 'var(--background)', color: 'var(--text)' }} data-aos="fade-up">
      {/* Animated background blobs */}
      <motion.div
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[80vw] h-[40vw] rounded-full blur-3xl z-0 animate-pulse"
        style={{ background: 'var(--secondary)' }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 12, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-32 right-1/2 translate-x-1/2 w-[60vw] h-[30vw] rounded-full blur-2xl z-0 animate-pulse"
        style={{ background: 'var(--primary)' }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
      />
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 w-full max-w-6xl mx-auto px-4"
      >
        <h2 className="section-title text-center mb-16">Contact Me</h2>
        
        <div className="max-w-4xl mx-auto">
          <p className="mb-12 text-center" style={{ color: 'var(--text)' }}>
            I'm currently open to new opportunities and collaborations.
            Whether you have a question or just want to say hi, I'll try my best
            to get back to you!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 rounded-lg hover:bg-cyan-100 transition-colors btn-glow hover-underline backdrop-blur-lg shadow-lg border"
                  style={{ background: 'var(--glass-bg)', borderColor: 'var(--tertiary)' }}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
                  whileHover={{ y: -3, scale: 1.02 }}
                >
                  <span className="text-cyan-500">{info.icon}</span>
                  <div>
                    <p className="font-medium" style={{ color: 'var(--text)' }}>{info.label}</p>
                    <p style={{ color: 'var(--text)' }}>{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Contact Form */}
            <motion.form 
              onSubmit={handleSubmit} 
              className="space-y-6 p-6 rounded-2xl backdrop-blur-lg shadow-2xl border"
              style={{ background: 'var(--glass-bg)', borderColor: 'var(--tertiary)' }}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            >
              <div>
                <label htmlFor="name" className="block mb-2" style={{ color: 'var(--text)' }}>Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-secondary"
                  style={{ background: 'var(--glass-bg)', color: 'var(--text)', borderColor: 'var(--tertiary)' }}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2" style={{ color: 'var(--text)' }}>Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-secondary"
                  style={{ background: 'var(--glass-bg)', color: 'var(--text)', borderColor: 'var(--tertiary)' }}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block mb-2" style={{ color: 'var(--text)' }}>Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-secondary"
                  style={{ background: 'var(--glass-bg)', color: 'var(--text)', borderColor: 'var(--tertiary)' }}
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2" style={{ color: 'var(--text)' }}>Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-secondary"
                  style={{ background: 'var(--glass-bg)', color: 'var(--text)', borderColor: 'var(--tertiary)' }}
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="btn btn-primary w-full btn-glow hover-underline"
                style={{ background: 'var(--secondary)', color: 'white' }}
              >
                Send Message
              </button>
            </motion.form>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact 