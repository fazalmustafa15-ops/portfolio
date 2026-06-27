import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <p>© 2026 Mahammad Fazal Mustafa. All rights reserved.</p>

        <div className="footer-links">
          <a href="https://github.com/fazalmustafa15-ops" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/mohammad-fazal-mustafa-b5839137a/" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="fazalmustafa15@gmail.com">
            <FaEnvelope />
          </a>
          <a href="#home">
            <FaArrowUp />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;