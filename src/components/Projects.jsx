import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import projects from "../data/projects";

function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="section-header">
          <p className="section-tag">Projects</p>
          <h2 className="section-title">Featured Work</h2>
          <p className="section-subtitle">
            A selection of full-stack, .NET, and Unity projects that demonstrate my development skills.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card card" key={project.title}>
              <div className="project-image">
                <span>0{index + 1}</span>
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-tech">
                  {project.tech.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <FaGithub /> GitHub
                  </a>
                  <a href={project.live} target="_blank" rel="noreferrer">
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;