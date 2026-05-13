import "./Home.css";

export default function Home() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="home">
      <div className="home-content">
        <p className="home-tag">Full Stack Software Engineer</p>
        <h1 className="home-name">Fatema Alnajjas<span></span></h1>
        <p className="home-sub">
          I build end-to-end web applications — from clean frontends to
          scalable backends. BSc in Information Systems · General Assembly Bootcamp · Based in Bahrain.
        </p>

        <div className="home-cta">
          <button className="btn-primary" onClick={() => scrollTo("projects")}>View My Projects</button>
          <button className="btn-outline" onClick={() => scrollTo("contact")}>Contact Me</button>
<a href="/cv.pdf" download className="btn-outline">
  Download CV
</a> </div>

      </div>
    </div>
  );
}
