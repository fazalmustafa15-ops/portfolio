import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="section-header">
          <p className="section-tag">Contact</p>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            I am open to Full Stack Developer, .NET Developer, Unity Developer,
            freelance, and internship opportunities.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info-box card">
            <h3>Contact Information</h3>

            <div className="contact-item">
              <FaEnvelope />
              <span>your-email@gmail.com</span>
            </div>

            <div className="contact-item">
              <FaLinkedin />
              <span>linkedin.com/in/your-profile</span>
            </div>

            <div className="contact-item">
              <FaGithub />
              <span>github.com/your-username</span>
            </div>

            <div className="contact-item">
              <FaMapMarkerAlt />
              <span>India</span>
            </div>
          </div>

          <form className="contact-form card">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <input type="text" placeholder="Subject" />
            <textarea rows="6" placeholder="Your Message"></textarea>
            <button type="submit" className="btn primary-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;