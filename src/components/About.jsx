import { motion } from "framer-motion";
import "./styles/About.css";
import { resumeLink, storyBlocks } from "../config/constants/About";

const About = () => {
  return (
    <div id="about" className="about-container">
      <div className="about-content">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="about-header"
        >
          <h2 className="section-head-text">About Me.</h2>
          <motion.a
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="resume-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className='bx bx-download'></i>
            Download Resume
          </motion.a>
        </motion.div>

        <div className="story-grid">
          {storyBlocks.map((block, index) => (
            <motion.div
              key={index}
              className="story-block"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <div className="block-icon">
                <i className={block.icon}></i>
              </div>
              <div className="block-content">
                <h3>{block.title}</h3>
                <p>{block.content}</p>
              </div>
              <div className="block-decoration"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About; 