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
          <p className="hero-badge">Full Stack Developer</p>

          <h1>
            Hi, I&apos;m <span>Mahammad Fazal Mustafa</span>
          </h1>

          <p className="hero-description">
            Final-year B.Tech student and aspiring Full-Stack Developer focused on building modern web applications, scalable backend systems, and responsive user interfaces. Passionate about writing clean, efficient code and developing real-world solutions using React, Node.js, Express, and MongoDB.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary-btn">View Projects</a>
            <a href="#contact" className="btn secondary-btn">Contact Me</a>
            <a href="/resume.pdf" className="btn secondary-btn" download>
              <FaDownload /> Resume
            </a>
          </div>

          <div className="social-links">
            <a href="https://github.com/fazalmustafa15-ops" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/mohammad-fazal-mustafa-b5839137a/" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href="fazalmustafa15@gmail.com">
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
            <span>FM</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;