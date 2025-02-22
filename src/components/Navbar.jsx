import "./styles/Navbar.css";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useState, useEffect } from "react";

function Navbar() {
  const [show, setShow] = useState("transy");
  const controlNavbar = () => {
    if (window.scrollY < 10) {
      setShow("transy");
    } else if (window.scrollY > 600) {
      setShow(" ");
    } else {
      setShow("navinvis");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  return (
    <nav className={`navbar fixed-top navbar-fixed-top navbar-expand-lg navbar-dark ${show}`}>
      <div className="container-fluid d-flex">
        <a className="navbar-brand ps-2 my-name" href="#landing">
          Akash Kumar
        </a>

        <div className="navbar-collapse collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a
                className="nav-link active nav-effect"
                aria-current="page"
                href="#landing"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active nav-effect"
                aria-current="page"
                href="#about"
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active nav-effect"
                aria-current="page"
                href="#skills"
              >
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active nav-effect"
                aria-current="page"
                href="#Experience"
              >
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active nav-effect"
                aria-current="page"
                href="#projects"
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active nav-effect contact-nav"
                aria-current="page"
                href="#contact"
              >
                Contact Me
              </a>
            </li>
          </ul>
        </div>
        <button
          className="navbar-toggler ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
