import { motion } from "framer-motion";
import "./styles/Projects.css";

const projects = [
  {
    title: "CampusConnect",
    description: "A marketplace exclusively for college students. A platform for connecting college students, allowing seniors to list items for sale or donation to juniors.",
    image: "/src/assets/images/CampusConnect.png",
    techStack: ["TurboRepo", "Prisma ORM", "PostgreSQL", "Next.js", "NextAuth", "Tailwind CSS"],
    liveUrl: "https://acampusconnect.vercel.app",
    githubUrl: "https://github.com/akash-kumar-dev/CampusConnect",
  },
  {
    title: "Portfolio",
    description: "A personal website showcasing my projcects, skills, and professional experience.",
    image: "/src/assets/images/image.png",
    techStack: ["React.js", "Framer Motion", "Bootstrap", "CSS3"],
    liveUrl: "https://akashkumar-dev.vercel.app",
    githubUrl: "https://github.com/akash-kumar-dev/portfolio",
  }
];

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
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                    <i className='bx bxl-github'></i>
                    <span>GitHub</span>
                  </a>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                    <i className='bx bx-link-external'></i>
                    <span>Live Demo</span>
                  </a>
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