import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import background from "../assets/img/color-sharp.png";

export const Skills = () => {
  const skills = [
    { img: meter1, title: "Web Development" },
    { img: meter2, title: "Machine Learning" },
    { img: meter3, title: "Artificial Intelligence" },
    { img: meter1, title: "Database Management" },
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <div className="skills-box">
          <h2 className="skills-title">Skills</h2>
          <p className="skills-description">
            Here are the technologies and domains I’ve worked with so far.
          </p>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card">
                <img src={skill.img} alt={skill.title} />
                <h5>{skill.title}</h5>
              </div>
            ))}
          </div>
        </div>
      </div>
      <img src={background} alt="bg" className="skills-bg" />
    </section>
  );
};
