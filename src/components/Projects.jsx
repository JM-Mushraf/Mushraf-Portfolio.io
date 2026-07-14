
import { motion } from "framer-motion"
import { useState } from "react"
import { useInView } from "framer-motion"
import { useRef } from "react"
import "./Projects.css"

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [activeFilter, setActiveFilter] = useState("all")
  const [activeTab, setActiveTab] = useState({})

  const projects = [
    {
      id: 1,
      title: "Devsphere",
      category: "fullstack",
      image: "/Devsphere.png",
      video: "/Devsphere.png",
      description: "Developer platform with real-time 1v1 communication, social feed system, and in-app multi-language code execution.",
      tech: ["Node.js", "React.js", "MongoDB", "WebSockets", "Express", "Tailwind CSS", "CodeMirror"],
      github: "https://github.com/JM-Mushraf",
      live: "https://dev-sphere-vrvj.onrender.com/",
    },
    {
      id: 2,
      title: "TownSquare",
      category: "fullstack",
      image: "/Townsquare.png",
      video: "/Townsquare.png",
      description: "Real-time community platform implementing Redis caching for feed data and batched user actions for efficiency.",
      tech: ["Node.js", "Socket.IO", "Redis", "React", "MongoDB", "Express"],
      github: "https://github.com/JM-Mushraf",
      live: "https://town-square.onrender.com/",
    },
    {
      id: 3,
      title: "Novascript",
      category: "core",
      image: "/Novascript.png",
      video: "/Novascript.png",
      description: "A custom-built programming language created entirely from scratch (co-authored with Himanshu Sahu). Features lexical analysis, recursive descent parsing, an AST, semantic validation, and a custom interpreter supporting recursion and error handling.",
      tech: ["Compiler Design", "AST", "Interpreter", "Parsers"],
      github: "https://github.com/JM-Mushraf",
      live: "https://novascript-docs.vercel.app/",
    }
  ]

  const filters = [
    { key: "all", label: "All Projects" },
    { key: "fullstack", label: "Full Stack" },
    { key: "core", label: "Core Systems" },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  const handleTabChange = (projectId, tab) => {
    setActiveTab((prev) => ({ ...prev, [projectId]: tab }))
  }

  return (
    <section className="projects" ref={ref}>
      <div className="projects-bg">
        <div className="grid-pattern"></div>
      </div>

      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2>Featured Projects</h2>
          <p>Showcasing my latest work and creative solutions</p>
        </motion.div>

        <motion.div
          className="filter-tabs"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {filters.map((filter) => (
            <button
              key={filter.key}
              className={`filter-tab ${activeFilter === filter.key ? "active" : ""}`}
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        <motion.div
          className="projects-grid"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="project-media">
                <div className="media-tabs">
                  <button
                    className={`media-tab ${!activeTab[project.id] || activeTab[project.id] === "image" ? "active" : ""}`}
                    onClick={() => handleTabChange(project.id, "image")}
                  >
                    Image
                  </button>
                  <button
                    className={`media-tab ${activeTab[project.id] === "video" ? "active" : ""}`}
                    onClick={() => handleTabChange(project.id, "video")}
                  >
                    Demo
                  </button>
                  <button
                    className={`media-tab ${activeTab[project.id] === "tech" ? "active" : ""}`}
                    onClick={() => handleTabChange(project.id, "tech")}
                  >
                    Tech
                  </button>
                </div>

                <div className="media-content">
                  {(!activeTab[project.id] || activeTab[project.id] === "image") && (
                    <img src={project.image || "/placeholder.svg"} alt={project.title} />
                  )}
                  {activeTab[project.id] === "video" && (
                    <div className="video-placeholder">
                      <img src={project.video || "/placeholder.svg"} alt={`${project.title} demo`} />
                      <div className="play-button">▶</div>
                    </div>
                  )}
                  {activeTab[project.id] === "tech" && (
                    <div className="tech-stack">
                      {project.tech.map((tech) => (
                        <span key={tech} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-links">
                  <a href={project.github} className="project-link">
                    <span>GitHub</span>
                  </a>
                  <a href={project.live} className="project-link primary">
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>

              <div className="card-glow"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
