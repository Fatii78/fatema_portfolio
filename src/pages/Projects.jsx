import "./Projects.css";

const projects = [
  {
    tag: "AI · Mobile App",
    title: "Markabati-VS",
    desc: "AI-powered mobile application for GCC vehicle inspection and registration management. Contributed across the full development cycle including backend, frontend, and UI prototyping.",
    stack: ["Flutter", "Dart", "Supabase", "Figma"],
    type: "Team of 3 · Senior Project, University of Bahrain",
    date: "2025",
    live: "https://markabati-vs.com/",
    github: null,
  },
  {
    tag: "Full Stack · MERN",
    title: "AERO",
    desc: "Airport operations management platform with Admin Dashboard for managing staff, flights, and task assignments. Implemented role-based access control with JWT authentication.",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB"],
    type: "Team of 3 · General Assembly Bootcamp",
    date: "2026",
    live: "https://aero_2026.surge.sh/",
    github: null,
  },
  {
    tag: "Full Stack · Django",
    title: "HappyHome",
    desc: "Multi-branch furniture showroom system with role-based dashboards, live inventory tracking across branches, and order processing. Designed with ERD and deployed to cloud.",
    stack: ["Python", "Django", "PostgreSQL"],
    type: "Team of 3 · General Assembly Bootcamp",
    date: "2026",
    live: null,
    github: null,
  },
  {
    tag: "Full Stack · Node",
    title: "Bloom Pharmacy",
    desc: "E-commerce platform for online pharmacy shopping with product browsing, cart management, and review system. Built efficient backend for product and order management.",
    stack: ["Node.js", "Express.js", "MongoDB", "EJS"],
    type: "Team of 2 · General Assembly Bootcamp",
    date: "2026",
    live: "https://bloompharmacy-4.onrender.com/",
    github: null,
  },
  {
    tag: "Frontend",
    title: "Word Hunter",
    desc: "Browser-based word guessing game with category selection (Animals, Foods, Jobs) and an interactive on-screen keyboard. Focused on clean JavaScript logic and responsive design.",
    stack: ["HTML", "CSS", "JavaScript"],
    type: "Solo · General Assembly Bootcamp",
    date: "2026",
    live: null,
    github: "https://fatii78.github.io/Word-Hunter/index.html",
  },
];

export default function Projects() {
  return (
    <div className="projects">
      <div className="projects-header">
        <p className="sec-label">Projects</p>
      </div>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <div key={i} className="project-card">
            <div className="project-top">
              <span className="project-tag">{p.tag}</span>
              <span className="project-date">{p.date}</span>
            </div>
            <div className="project-body">
              <div className="project-info">
                <h2 className="project-title">{p.title}</h2>
                <p className="project-type">{p.type}</p>
                <p className="project-desc">{p.desc}</p>
              </div>
              <div className="project-footer">
                <div className="project-stack">
                  {p.stack.map((t) => (
                    <span key={t} className="stack-tag">{t}</span>
                  ))}
                </div>
                <div className="project-links">
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noreferrer" className="proj-link">
                      View Live →
                    </a>
                  )}
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noreferrer" className="proj-link">
                      GitHub →
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
