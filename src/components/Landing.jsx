import "./styles/Landing.css";
import { Typewriter } from 'react-simple-typewriter';
import socialLinks from "../config/placeholders/SocialLinks";

function Landing() {
  const nameObj = { name: " Akash Kumar ", role: "" };

  return (
    <div id="landing" className="landing-container">
      <div className="background-effect">
        <div className="gradient-bg"></div>
        <div className="spotlight spotlight-1"></div>
        <div className="spotlight spotlight-2"></div>
        <div className="spotlight spotlight-3"></div>
      </div>
      
      <div className="glass-container">
        <div className="content-wrapper">
          <div className="code-block">
            <div className="code-line">
              <span className="keyword">const</span>
              <span className="variable"> developer</span>
              <span className="operator"> = </span>
              <span className="bracket">{'{'}</span>
            </div>
            
            <div className="code-line indented">
              <span className="property">name:</span>
              <span className="string"> "{nameObj.name}"</span>
              <span className="comma">,</span>
            </div>
            
            <div className="code-line indented">
              <span className="property">role:</span>
              <span className="string">
                <Typewriter
                  words={[
                    '"Open Source Developer"',
                    '"Software Developer"',
                    '"CyberSecurity Enthusiast"',
                    '"Web Developer"'
                  ]}
                  loop={true}
                  cursor
                  cursorStyle='|'
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </div>
            
            <div className="code-line">
              <span className="bracket">{'}'}</span>
            </div>
          </div>

          <div className="social-links">
            {socialLinks.map((link) => (
              <a
                href={link.url}
                key={link.name}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-wrapper"
              >
                <i className={link.icon}></i>
                <span className="icon-tooltip">{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
