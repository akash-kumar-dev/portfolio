import { motion } from "framer-motion";
import "./styles/Footer.css";
import { useState, useEffect } from "react";

const Footer = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: "bx bxl-github",
      url: "https://github.com/akash-kumar-dev"
    },
    {
      name: "LinkedIn",
      icon: "bx bxl-linkedin",
      url: "https://linkedin.com/in/akash-kumar-dev"
    },
    {
      name: "Twitter",
      icon: "bx bxl-twitter",
      url: "https://twitter.com/akash_kumar_dev"
    },
    {
      name: "Email",
      icon: "bx bx-envelope",
      url: "mailto:akashkumar.dev00@.com"
    }
  ];

  const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };

      window.addEventListener("scroll", toggleVisibility);
      return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    };

    return (
      <motion.button
        className="scroll-to-top"
        onClick={scrollToTop}
        initial={{ opacity: 0, y: 10 }}
        animate={{ 
          opacity: isVisible ? 1 : 0,
          y: isVisible ? 0 : 10
        }}
        transition={{ duration: 0.3 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <i className='bx bx-up-arrow-alt'></i>
      </motion.button>
    );
  };

  return (
    <footer className="footer">
      <ScrollToTop />
      <div className="footer-content">
        <motion.h2 
          className="footer-name"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Akash Kumar
        </motion.h2>
        
        <motion.div 
          className="social-links"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              whileHover={{ scale: 1.2, y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <i className={link.icon}></i>
            </motion.a>
          ))}
        </motion.div>

        <motion.p 
          className="copyright"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          © {new Date().getFullYear()} Akash Kumar. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer; 