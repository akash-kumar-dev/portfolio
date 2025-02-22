import { motion } from "framer-motion";
import "./styles/Skills.css";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: "bx bx-code-alt",
    skills: ["React.js", "Next.js", "HTML5", "CSS3", "JavaScript", "Bootstrap"]
  },
  {
    title: "Backend Development",
    icon: "bx bx-server",
    skills: ["Node.js", "Express.js", "PHP", "Laravel", "RESTful APIs"]
  },
  {
    title: "Database & Storage",
    icon: "bx bx-data",
    skills: ["MySQL", "MongoDB", "MariaDB", "Prisma ORM", "Redis"]
  },
  {
    title: "DevOps & Cloud",
    icon: "bx bx-cloud",
    skills: ["AWS", "Docker", "CI/CD", "Git", "Serverless"]
  },
  {
    title: "Core Programming",
    icon: "bx bx-terminal",
    skills: ["C++", "Java", "Python", "Data Structures", "Algorithms"]
  },
  {
    title: "Security & Networking",
    icon: "bx bx-shield-quarter",
    skills: ["Wireshark", "Burp Suite", "Nmap", "Network Protocols", "Linux"]
  }
];

const Skills = () => {
  return (
    <div id="skills" className="skills-container">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="skills-header"
      >
        <p className="section-sub-text text-center">My Technical Expertise</p>
        <h2 className="section-head-text text-center">Skills.</h2>
      </motion.div>

      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            className="skill-card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              type: "spring",
              stiffness: 100
            }}
          >
            <div className="skill-icon">
              <i className={category.icon}></i>
            </div>
            <h3>{category.title}</h3>
            <div className="skills-list">
              {category.skills.map((skill, skillIndex) => (
                <motion.span
                  key={skillIndex}
                  className="skill-tag"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay: index * 0.1 + skillIndex * 0.05,
                    type: "spring",
                    stiffness: 200
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills; 