import "./About.css";

const education = [
  {
    degree: "B.Sc. Information Systems",
    school: "University of Bahrain",
    date: "Jan 2026",
    detail: "GPA: 3.38",
  },
  {
    degree: "Software Engineering Bootcamp",
    school: "General Assembly, Bahrain",
    date: "Apr 2026",
    detail: "500+ hours · Front-end, Node/Express, MERN, Python/Django",
  },
];

const experience = [
  {
    role: "IT Department Intern",
    company: "Ministry of Industry and Commerce, Bahrain",
    date: "Sep – Nov 2025",
    points: [
      "Supported development and maintenance of internal systems using C# and .NET",
      "Configured and maintained Windows and Linux environments",
      "Assisted the IT team in system maintenance and technical support",
    ],
  },
  {
    role: "Software Engineering Bootcamp Fellow",
    company: "General Assembly, Bahrain",
    date: "Jan – Apr 2026",
    points: [
      "Built and deployed 4 full-stack portfolio projects (3 collaborative, 1 solo)",
      "Covered front-end, Node/Express, MERN, and Python/Django stacks",
      "Each project included ERD design, user stories, wireframes, and cloud deployment",
    ],
  },
];

const certifications = [
  { name: "Microsoft Certified: Power BI Data Analyst Associate", issuer: "Microsoft", date: "Oct 2024" },
  { name: "Data Science for Business Innovation", issuer: "Coursera", date: "May 2024" },
  { name: "Prototypes in Figma: Creating Low-Fidelity Designs", issuer: "Coursera", date: "Apr 2024" },
];

export default function About() {
  return (
    <div className="about">

      <div className="about-header">
        <p className="sec-label">About Me</p>
        <p className="about-bio">
          Full Stack Software Engineer with a BSc in Information Systems and a General Assembly certification.
          Delivered 4 web applications using React.js, Node.js, Django, and both SQL and NoSQL databases.
          Experienced in role-based authentication, REST API design, and multi-stack development.
          Seeking a product team in fintech, telecom, or tech where I can contribute from day one.
        </p>
      </div>

      <div className="about-section">
        <p className="sec-label">Education</p>
        <div className="timeline">
          {education.map((e) => (
            <div key={e.degree} className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <div className="timeline-header">
                  <span className="timeline-title">{e.degree}</span>
                  <span className="timeline-date">{e.date}</span>
                </div>
                <span className="timeline-sub">{e.school}</span>
                <p className="timeline-detail">{e.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="about-section">
        <p className="sec-label">Experience</p>
        <div className="timeline">
          {experience.map((e) => (
            <div key={e.role} className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <div className="timeline-header">
                  <span className="timeline-title">{e.role}</span>
                  <span className="timeline-date">{e.date}</span>
                </div>
                <span className="timeline-sub">{e.company}</span>
                <ul className="timeline-points">
                  {e.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="about-section">
        <p className="sec-label">Certifications</p>
        <div className="certs-grid">
          {certifications.map((c) => (
            <div key={c.name} className="cert-card">
              <span className="cert-issuer">{c.issuer}</span>
              <p className="cert-name">{c.name}</p>
              <span className="cert-date">{c.date}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
