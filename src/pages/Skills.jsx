import "./Skills.css";

const skills = [
  {
    category: "Languages",
    items: ["JavaScript", "Python", "Java", "C#", "PHP", "HTML", "CSS"],
  },
  {
    category: "Frontend",
    items: ["React.js", "EJS", "Responsive Design"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "Django", "REST APIs"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Oracle", "SQL"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Figma", "Visual Studio", "IntelliJ IDEA", "Power BI", "Render"],
  },
  {
    category: "Concepts",
    items: ["REST APIs", "MVC Architecture", "CRUD", "Role-Based Authentication", "ERDs", "JWT"],
  },
];

const soft = ["Communication", "Teamwork", "Time Management", "Fast Learner"];

export default function Skills() {
  return (
    <div className="skills">
      <div className="skills-header">
        <p className="sec-label">Technical Skills</p>
      </div>

      <div className="skills-grid">
        {skills.map((cat) => (
          <div key={cat.category} className="skill-card">
            <p className="skill-category">{cat.category}</p>
            <div className="skill-items">
              {cat.items.map((item) => (
                <span key={item} className="skill-tag">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="soft-section">
        <p className="sec-label">Professional Skills</p>
        <div className="soft-items">
          {soft.map((s) => (
            <div key={s} className="soft-item">
              <span className="soft-dot" />
              {s}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
