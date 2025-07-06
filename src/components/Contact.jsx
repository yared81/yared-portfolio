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
    <section id="contact" className="py-20 relative w-full overflow-hidden bg-white/90 text-neutral-900 dark:bg-neutral-900/90 dark:text-neutral-100" data-aos="fade-up">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 md:p-16 max-w-3xl mx-auto border border-white/10"
      >
        <h2 className="section-title text-center">Get In Touch</h2>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-tertiary mb-12 text-center">
            I'm currently open to new opportunities and collaborations.
            Whether you have a question or just want to say hi, I'll try my best
            to get back to you!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-primary/50 rounded-lg hover:bg-primary/70 transition-colors btn-glow hover-underline"
                >
                  <span className="text-secondary">{info.icon}</span>
                  <div>
                    <p className="text-light font-medium">{info.label}</p>
                    <p className="text-tertiary">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-light mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-primary/50 border border-tertiary/20 rounded-lg text-light focus:outline-none focus:border-secondary"
                  
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-light mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-primary/50 border border-tertiary/20 rounded-lg text-light focus:outline-none focus:border-secondary"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-light mb-2">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-primary/50 border border-tertiary/20 rounded-lg text-light focus:outline-none focus:border-secondary"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-light mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 bg-primary/50 border border-tertiary/20 rounded-lg text-light focus:outline-none focus:border-secondary"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="btn btn-primary w-full btn-glow hover-underline"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact 