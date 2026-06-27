import { FaReact, FaNodeJs, FaDatabase, FaUnity, FaTools } from "react-icons/fa";
import { SiDotnet, SiJavascript, SiMongodb, SiMysql } from "react-icons/si";

function Skills() {
  const skillGroups = [
    {
      title: "Frontend",
      icon: <FaReact />,
      skills: ["React.js", "JavaScript", "HTML5", "CSS3", "Responsive UI"],
    },
    {
      title: "Backend",
      icon: <FaNodeJs />,
      skills: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"],
    },
    {
      title: ".NET",
      icon: <SiDotnet />,
      skills: ["ASP.NET Core", "C#", "MVC", "Entity Framework"],
    },
    {
      title: "Database",
      icon: <FaDatabase />,
      skills: ["MongoDB", "MySQL", "SQL Server"],
    },
    {
      title: "Unity XR",
      icon: <FaUnity />,
      skills: ["Unity", "C#", "AR", "VR", "Interactive Training"],
    },
    {
      title: "Tools",
      icon: <FaTools />,
      skills: ["Git", "GitHub", "Postman", "VS Code", "Visual Studio"],
    },
  ];

  return (
    <section id="skills">
      <div className="container">
        <div className="section-header">
          <p className="section-tag">Skills</p>
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            Technologies and tools I use to build web applications, backend systems,
            and immersive Unity experiences.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-box card" key={group.title}>
              <div className="skill-icon">{group.icon}</div>
              <h3>{group.title}</h3>

              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;