
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import "./About.css"

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const experiences = [
    {
      year: "Sep 2025 - Feb 2026",
      title: "Software Developer Intern",
      company: "Ariveguru Technologies",
      description:
        "Developed and managed core backend functionality for AI-powered consumer and chef applications, handling real-time bot workflows, command execution pipelines, and seamless communication between services.",
      tech: ["Node.js", "AI APIs", "Backend", "FireStore", "Azure"],
    },
    {
      year: "Sep 2024 - Mar 2025",
      title: "Full Stack Developer Intern",
      company: "CropNow",
      description:
        "Refactored and optimized multiple backend API endpoints by restructuring MongoDB schemas, introducing indexing, and eliminating redundant queries for improved performance.",
      tech: ["Node.js", "MongoDB", "Express"],
    }
  ]

  const education = [
    {
      year: "Dec 2022 - May 2026",
      title: "B.E. in Computer Science and Engineering",
      institution: "AMC Engineering College, Bengaluru",
      description: "CGPA: 9.0",
    }
  ]

  return (
    <section className="about" ref={ref}>
      <div className="about-bg">
        <div className="floating-elements">
          <div className="element element-1"></div>
          <div className="element element-2"></div>
          <div className="element element-3"></div>
        </div>
      </div>

      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2>About Me</h2>
          <p>My journey in the world of technology and innovation</p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-intro"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="intro-text">
              <h3>Software Engineer & Problem Solver</h3>
              <p>
                Strong foundation in Data Structures & Algorithms, Object-Oriented Design, database systems, and API development. Experienced in designing and implementing reliable software systems while solving complex engineering problems through scalable and maintainable solutions.
              </p>
              <p>
                Passionate about building highly available backend services, real-time networking protocols, and scalable architectures.
              </p>
            </div>
            <div className="intro-stats">
              <div className="stat">
                <span className="stat-number">250+</span>
                <span className="stat-label">DSA Problems Solved</span>
              </div>
              <div className="stat">
                <span className="stat-number">9.0</span>
                <span className="stat-label">CGPA</span>
              </div>
              <div className="stat">
                <span className="stat-number">3+</span>
                <span className="stat-label">Full Stack Projects</span>
              </div>
            </div>
          </motion.div>

          <div className="timeline-section">
            <motion.div
              className="timeline-header"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3>Professional Experience</h3>
            </motion.div>

            <div className="timeline">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="timeline-item"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                >
                  <div className="timeline-content">
                    <div className="timeline-year">{exp.year}</div>
                    <h4>{exp.title}</h4>
                    <h5>{exp.company}</h5>
                    <p>{exp.description}</p>
                    <div className="timeline-tech">
                      {exp.tech.map((tech) => (
                        <span key={tech} className="tech-badge">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="timeline-dot"></div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="education-section">
            <motion.div
              className="education-header"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <h3>Education & Certifications</h3>
            </motion.div>

            <div className="education-grid">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="education-card"
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.4 + index * 0.2 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  <div className="education-year">{edu.year}</div>
                  <h4>{edu.title}</h4>
                  <h5>{edu.institution}</h5>
                  <p>{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
