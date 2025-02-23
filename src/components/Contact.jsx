import { motion, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";
import "./styles/Contact.css";

const Contact = () => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending....");
    
    const formData = new FormData(event.target);
    formData.append("access_key", "f3fbb1f0-356a-4296-b4a1-0877bd959611");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully!");
        event.target.reset();
      } else {
        setResult("Something went wrong. Please try again.");
      }
    } catch (error) {
      setResult("Error sending message. Please try again.");
    }
    
    setIsSubmitting(false);
  };

  // Animation for the floating envelope
  const floatAnimation = {
    y: [0, -20, 0],
    rotate: [0, -5, 5, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <div id="contact" className="contact-container">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="contact-header"
      >
        <p className="section-sub-text text-center">Get In Touch</p>
        <h2 className="section-head-text text-center">Contact.</h2>
      </motion.div>

      <div className="contact-content">
        <div className="contact-grid">
          {/* 3D Animation Side */}
          <motion.div 
            className="contact-animation"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div 
              className="envelope-3d"
              animate={floatAnimation}
            >
              <i className='bx bx-envelope'></i>
              <div className="connecting-lines"></div>
            </motion.div>
            <div className="contact-text">
              <h3>Let's Connect!</h3>
              <p>Feel free to reach out for collaborations, opportunities, or just a friendly chat.</p>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="contact-form-container"
          >
            <form onSubmit={onSubmit} className="contact-form">
              <div className="form-group">
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  name="about"
                  placeholder="About Yourself (Optional)"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  name="social"
                  placeholder="Social Media Link (Optional)"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  name="message"
                  placeholder="Your Message"
                  required
                  className="form-input message-input"
                ></motion.textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="submit-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <i className='bx bx-send'></i>
              </motion.button>

              {result && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`form-result ${result.includes("success") ? "success" : "error"}`}
                >
                  {result}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 