import { motion } from "framer-motion";
import "./styles/About.css";

const About = () => {
  const resumeLink = "https://drive.google.com/file/d/1E_UGfi9rw2s-Ec0uPeWdaAgS0QbkfnyE/view?usp=sharing";

  const storyBlocks = [
    {
      title: "The Journey",
      icon: "bx bx-map",
      content: "As a pre-final year student at NIT Uttarakhand, my path has been anything but conventional. Despite being in Electrical & Electronics Engineering, my heart found its true calling in the world of software development and cybersecurity.",
    },
    {
      title: "The Passion",
      icon: "bx bx-code-block",
      content: "My journey into tech started with a simple curiosity that quickly evolved into an unstoppable passion. From diving deep into software development to exploring the intricacies of cybersecurity, every challenge has been a stepping stone to growth.",
    },
    {
      title: "The Mission",
      icon: "bx bx-target-lock",
      content: "Today, I'm not just a student but an enthusiastic open source contributor and tech explorer. Whether it's building robust applications or understanding system vulnerabilities, I'm driven by the desire to create secure and impactful solutions that make a difference.",
    }
  ];

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