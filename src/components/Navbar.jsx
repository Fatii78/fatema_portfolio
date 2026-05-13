import "./Navbar.css";

const links = [
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Skills", id: "skills" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo" onClick={() => scrollTo("home") }>
        FA<span></span>
      </div>
      <div className="navbar-links">
        {links.map(({ label, id }) => (
          <button key={id} className="nav-link" onClick={() => scrollTo(id)}>
            {label}
          </button>
        ))}
      </div>
    </nav>
  );
}
