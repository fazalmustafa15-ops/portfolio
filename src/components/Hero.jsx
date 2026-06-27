import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="hero-badge">Full Stack Developer | .NET Developer | Unity XR Developer</p>

          <h1>
            Hi, I&apos;m <span>Syed Abdul Raheem</span>
          </h1>

          <p className="hero-description">
            I build modern web applications, scalable backend systems, and immersive
            Unity AR/VR experiences with clean, responsive, and user-focused design.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary-btn">View Projects</a>
            <a href="#contact" className="btn secondary-btn">Contact Me</a>
            <a href="/resume.pdf" className="btn secondary-btn" download>
              <FaDownload /> Resume
            </a>
          </div>

          <div className="social-links">
            <a href="https://github.com/your-username" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href="mailto:your-email@gmail.com">
              <FaEnvelope />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-image-wrapper"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-image">
            <span>SA</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;