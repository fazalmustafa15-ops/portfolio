import { FaGraduationCap, FaBriefcase, FaBullseye } from "react-icons/fa";
import { motion } from "framer-motion";

function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="section-header">
          <p className="section-tag">About Me</p>
          <h2 className="section-title">Who I Am</h2>
          <p className="section-subtitle">
            Final-year B.Tech student passionate about building modern web applications, scalable backend systems, and impactful digital experiences.
          </p>
        </div>

        <div className="about-grid">
          <motion.div
            className="about-content card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3>Professional Summary</h3>
            <p>
              I am a final-year B.Tech student and aspiring Full-Stack Web Developer with a strong passion for designing and developing modern, responsive, and scalable web applications. I have hands-on experience with HTML, CSS, JavaScript, React.js, Node.js, Express.js, and MongoDB, enabling me to build user-friendly frontends and efficient backend systems.
            </p>
            <p>
              I enjoy solving real-world problems through clean, maintainable code and continuously expanding my technical expertise. My goal is to contribute to innovative software projects while growing as a professional developer and delivering high-quality digital solutions.
            </p>
          </motion.div>

          <div className="about-cards">
            <div className="about-info card">
              <FaGraduationCap />
              <h4>Education</h4>
              <p>B.Tech in Computer Science and Engineering</p>
              <span>NIE College, Macherla</span>
            </div>

            <div className="about-info card">
              <FaBriefcase />
              <h4>Experience</h4>
              <p>Completed a Full-Stack Web Development Internship at Future Interns, building responsive web applications and scalable full-stack solutions using modern web technologies.</p>
              <span>Web apps, APIs, Full stack projects</span>
            </div>

            <div className="about-info card">
              <FaBullseye />
              <h4>Goal</h4>
              <p>To build professional software products and grow as a developer</p>
              <span>Open to job and freelance opportunities</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;