
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import "./Skills.css"

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const skillsData = {
    core: [
      { name: "C++", level: 95, icon: "⚙️" },
      { name: "Python", level: 90, icon: "🐍" },
      { name: "JavaScript", level: 90, icon: "🟨" },
      { name: "DSA", level: 95, icon: "🧠" },
      { name: "OOP / LLD", level: 90, icon: "🏗️" },
      { name: "OS & Networks", level: 85, icon: "🖥️" },
    ],
    web: [
      { name: "Node.js", level: 90, icon: "🟢" },
      { name: "Express.js", level: 90, icon: "🚀" },
      { name: "React.js", level: 85, icon: "⚛️" },
      { name: "Next.js", level: 80, icon: "▲" },
      { name: "Socket.IO", level: 85, icon: "⚡" },
      { name: "REST / JWT", level: 90, icon: "🔐" },
    ],
    tools: [
      { name: "MongoDB", level: 90, icon: "🍃" },
      { name: "MySQL", level: 85, icon: "🐬" },
      { name: "AWS EC2", level: 75, icon: "☁️" },
      { name: "Docker", level: 80, icon: "🐳" },
      { name: "Git & GitHub", level: 90, icon: "🐙" },
      { name: "Postman", level: 90, icon: "📮" },
    ],
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="skills" ref={ref}>
      <div className="skills-bg">
        <div className="floating-icons">
          <span>💻</span>
          <span>🚀</span>
          <span>⚡</span>
          <span>🎨</span>
          <span>🔧</span>
        </div>
      </div>

      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2>Skills & Expertise</h2>
          <p>Technologies I use to bring ideas to life</p>
        </motion.div>

        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div className="skill-category" variants={itemVariants}>
            <h3>Core & Languages</h3>
            <div className="skills-list">
              {skillsData.core.map((skill, index) => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div
                      className="skill-progress"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div className="skill-category" variants={itemVariants}>
            <h3>Web Technologies</h3>
            <div className="skills-list">
              {skillsData.web.map((skill, index) => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div
                      className="skill-progress"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div className="skill-category" variants={itemVariants}>
            <h3>Databases & Tools</h3>
            <div className="skills-list">
              {skillsData.tools.map((skill, index) => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div
                      className="skill-progress"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
