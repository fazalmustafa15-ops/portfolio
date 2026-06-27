import { useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
import api from "../services/api";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    message: "",
    type: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatus({
        loading: false,
        message: "Please fill all fields.",
        type: "error",
      });
      return;
    }

    try {
      setStatus({
        loading: true,
        message: "",
        type: "",
      });

      const response = await api.post("/contact", formData);

      setStatus({
        loading: false,
        message: response.data.message || "Message sent successfully.",
        type: "success",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch {
      setStatus({
        loading: false,
        message: "Failed to send message. Please try again.",
        type: "error",
      });
    }
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="section-header">
          <p className="section-tag">Contact</p>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Open to Full-Stack Developer, Software Developer, freelance, and internship opportunities.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info-box card">
            <h3>Contact Information</h3>

            <div className="contact-item">
              <FaEnvelope />
              <span>fazalmustafa15@gmail.com</span>
            </div>

            <div className="contact-item">
              <FaLinkedin />
              <span>linkedin.com/in/mohammad-fazal-mustafa-b5839137a/</span>
            </div>

            <div className="contact-item">
              <FaGithub />
              <span>github.com/fazalmustafa15-ops</span>
            </div>

            <div className="contact-item">
              <FaMapMarkerAlt />
              <span>India</span>
            </div>
          </div>

          <form className="contact-form card" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
            />

            <textarea
              name="message"
              rows="6"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>

            {status.message && (
              <p className={`form-status ${status.type}`}>
                {status.message}
              </p>
            )}

            <button type="submit" className="btn primary-btn" disabled={status.loading}>
              {status.loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;