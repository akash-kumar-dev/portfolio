import "./styles/Landing.css";
import video from "../assets/images/Cyberpunkvid.mp4";
import { Typewriter } from 'react-simple-typewriter';
import socialLinks from "../config/placeholders/SocialLinks";

function Landing() {
  const nameObj = { name: " Akash Kumar ", role: "" };

  return (
    <div id="landing">
      <video class="videoclass" autoPlay="autoplay" muted loop width="100%">
        <source src={video} type="video/mp4" />
      </video>
      <div class="mycontent">
        <div class="d-flex justify-content-center">
          <h2>
            const me = {"{ "}
            <br /> {"\t name : "} {JSON.stringify(nameObj.name)} {","}
          </h2>
        </div>
        <div class="d-flex justify-content-center">
          <h2>
            <div className="d-flex">
              <div className="pe-2">role : </div>
              <div className="my-roles">
                <div className='App'>
                  {' '}
                  <span style={{ color: 'red', fontWeight: 'bold' }}>
                    {/* Style will be inherited from the parent element */}
                    <Typewriter
                      words={['"Open Source Developer"', '"Software Developer"', '"CyberSecurity enthusiast"', '"Web Developer"']}
                      loop={true}
                      cursor
                      cursorStyle='_'
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={1000}
                    // onLoopDone={handleDone}
                    // onType={handleType}
                    />
                  </span>
                </div>
              </div>
              {" \n}"}
            </div>
          </h2>
        </div>

        <div class="d-flex landing-icons">
          {
            socialLinks.map((link) => {
              const classes = "fab p-3 " + link.icon;

              return (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={link.url}
                  key={link.name}
                >
                  {link.icon ? (
                    <i className={classes}></i>
                  ) : (
                    <img
                      src={link.img}
                      alt={link.name}

                    />
                  )}

                </a>
              );
            })
          }
        </div>
      </div>
    </div>
  );
}

export default Landing;
