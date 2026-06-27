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
            A developer focused on building practical, scalable, and user-friendly digital solutions.
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
              I am Syed Abdul Raheem, a Full Stack Developer with hands-on experience
              in React.js, Node.js, ASP.NET Core, C#, SQL databases, and Unity-based
              AR/VR applications.
            </p>
            <p>
              I enjoy creating clean frontend interfaces, reliable backend APIs, and
              immersive interactive experiences. My goal is to grow as a strong software
              developer and contribute to real-world products.
            </p>
          </motion.div>

          <div className="about-cards">
            <div className="about-info card">
              <FaGraduationCap />
              <h4>Education</h4>
              <p>B.Tech in Electronics and Communication Engineering</p>
              <span>KL University, Vijayawada</span>
            </div>

            <div className="about-info card">
              <FaBriefcase />
              <h4>Experience</h4>
              <p>Full Stack, .NET, and Unity XR development experience</p>
              <span>Web apps, APIs, AR/VR projects</span>
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