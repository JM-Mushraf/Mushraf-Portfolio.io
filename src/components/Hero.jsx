
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import "./Hero.css"

const Hero = () => {
  const [, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const typewriterText = "Software Engineer"
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < typewriterText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + typewriterText[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, typewriterText])

  return (
    <section className="hero">
      <div className="parallax-bg">
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
      </div>

      <div className="hero-content">
        <motion.div
          className="profile-container"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
        >
          <div className="profile-image">
            <img src={`${import.meta.env.BASE_URL}Mushraf.png`} alt="J.M. Mushraf" />
            <div className="glow-ring"></div>
          </div>
        </motion.div>

        <motion.h1
          className="hero-name"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          J.M. Mushraf
        </motion.h1>

        <motion.h2
          className="hero-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {displayText}
          <span className="cursor-blink">|</span>
        </motion.h2>

        <motion.p
          className="hero-intro"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          Building scalable backend systems, real-time applications, and distributed software solutions.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <button className="cta-button primary">
            <span>View Projects</span>
            <div className="button-glow"></div>
          </button>
          <a href="https://drive.google.com/file/d/1zQ_cGyNf2pOnImzoLupOc2PoWeOYnXF3/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="cta-button secondary">
            <span>Download Resume</span>
            <div className="button-glow"></div>
          </a>
        </motion.div>
      </div>

      <div className="scroll-indicator">
        <motion.div
          className="scroll-arrow"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          ↓
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
