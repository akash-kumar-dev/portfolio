import { motion } from "framer-motion";
import "./styles/Projects.css";
import projects from "../config/placeholders/projects";

const Projects = () => {
  return (
    <div id="projects" className="projects-container">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="projects-header"
      >
        <p className="section-sub-text text-center">My Work</p>
        <h2 className="section-head-text text-center">Projects.</h2>
      </motion.div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.2,
              type: "spring",
              stiffness: 100
            }}
          >
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>

            <div className="project-content">
              <div className="project-header">
                <h3>{project.title}</h3>
                <div className="project-links">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                      <i className='bx bxl-github'></i>
                      <span>GitHub</span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                      <i className='bx bx-link-external'></i>
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
              
              <p>{project.description}</p>
              
              <div className="tech-stack">
                {project.techStack.map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                    className="tech-tag"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      delay: index * 0.1 + techIndex * 0.05,
                      type: "spring",
                      stiffness: 200
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;