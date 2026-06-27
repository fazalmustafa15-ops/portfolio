import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <p>© 2026 Syed Abdul Raheem. All rights reserved.</p>

        <div className="footer-links">
          <a href="https://github.com/your-username" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:your-email@gmail.com">
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