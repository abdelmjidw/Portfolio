import React, { useEffect, useState } from "react";
import { FaGithub, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import "./Home.css";

function Home() {
  const roles = [
    "Developer",
    "Freelancer",
    "Front-end Developer",
    "Back-end Developer",
  ];

  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false); // For burger toggle

  // Typing effect
  useEffect(() => {
    const typing = setInterval(() => {
      const fullText = roles[index];
      if (charIndex < fullText.length) {
        setDisplayText(fullText.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else {
        clearInterval(typing);
      }
    }, 100);
    return () => clearInterval(typing);
  }, [charIndex, index]);

  // Role change every 3s
  useEffect(() => {
    const roleChange = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
      setCharIndex(0);
      setDisplayText("");
    }, 3000);
    return () => clearInterval(roleChange);
  }, []);

  const handleContact = () => {
    window.location.href = "mailto:abdelmjidmoumni78@gmail.com?subject=Contacting You&body=Hello, I would like to get in touch!";
  };

  const handleDownloadCV = () => {
    window.open("https://drive.google.com/file/d/1ar7Yny5jPkI264WL7pg13EPu8ux8OpBX/view?usp=sharing", "_blank");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="nav-bar">
        <h1 className="logo">MjidOux</h1>

        <div className={`nav-list ${menuOpen ? "show" : ""}`}>
          <li><a href="#Home" onClick={toggleMenu}>Home</a></li>
          <li><a href="#About" onClick={toggleMenu}>About</a></li>
          <li><a href="#Experience" onClick={toggleMenu}>Experience</a></li>
          <li><a href="#Contact" onClick={toggleMenu}>Contact</a></li>
        </div>

        <div className="burger" onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>

      <div className="main" id="Home">
        <div className="home">
          <img className="me" src="images/Me.svg" alt="Portrait of AbdeLmajid Moumni" />
          <div className="text">
            <h1 className="name">AbdeLmajid Moumni</h1>
            <h3 className="do">
              I'm <span className="typing">{displayText}</span>
            </h3>
            <p className="description">
              I'm a full-stack developer skilled in both front-end and back-end
              technologies. I build responsive interfaces using React, Js, HTML,
              and CSS. On the back end, I work with Laravel, Express, Php and
              databases like MongoDB. I enjoy turning complex problems into
              clean, functional solutions. Always learning, always building —
              from idea to full deployment.
            </p>
          </div>
          <div className="check">
            <button className="click1" onClick={handleContact}>
              Contact Me
            </button>
            <button className="click2" onClick={handleDownloadCV}>
              Download CV
            </button>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="about-me" id="About">
          <h1 className="about">About Me</h1>
          <p className="description">
            I'm AbdeLmajid Moumni (MjidOux), a full-stack developer skilled in
            front-end and back-end development. I build responsive interfaces
            using HTML, CSS, JavaScript, React, and Tailwind CSS. On the back
            end, I work with Node.js, Express, Laravel, Python, PHP, MongoDB,
            and MySQL. I also use Git/GitHub for version control and manage
            projects with Jira. With a strong eye for design, I use Figma to
            create seamless user experiences.
          </p>
        </div>
        <div className="about-me" id="Experience">
          <h1 className="about">Experience</h1>
          <div className="head">
            <div className="company">
              <img
                src="https://www.omegaupdate.ma/wp-content/uploads/2024/11/logiciel_omegagest__24_-removebg-preview.png"
                alt="Omega Update logo"
                className="omega"
              />
              <h1 className="company-name">Omega Update</h1>
            </div>
            <div>March 2025 to April 2025</div>
          </div>
          <p className="descri">
            Developed and maintained full-stack web applications using React,
            Laravel, and MySQL. Worked on tasks like API development, database
            integration, and UI enhancements. Collaborated on a project to
            improve the user experience for a client-facing platform. Utilized
            ClickUp for task management and worked closely with the design team
            using Figma.
          </p>
        </div>
      </div>

      <footer id="Contact">
        <div className="footer-content">
          <h3>Contact Me</h3>
          <ul className="social-links">
            <li><a href="https://github.com/abdelmjidw" target="_blank" rel="noopener noreferrer"><FaGithub size={25} /></a></li>
            <li><a href="https://wa.me/0628732477" target="_blank" rel="noopener noreferrer"><FaWhatsapp size={25} /></a></li>
            <li><a href="https://www.linkedin.com/in/abdelmajid-moumni-b01541338/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={25} /></a></li>
            <li><a href="https://www.instagram.com/mjid_oux/" target="_blank" rel="noopener noreferrer"><FaInstagram size={25} /></a></li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Home;
