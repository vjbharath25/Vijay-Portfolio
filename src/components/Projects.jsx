import { projects } from "../data/profile.js";
import SectionHeading from "./SectionHeading.jsx";
import Reveal from "./Reveal.jsx";

function ProjectCard({ project }) {
  const ongoing = project.status === "Ongoing";
  return (
    <article className={`project-card ${ongoing ? "project-card--ongoing" : ""}`}>
      <div className="project-card__top">
        <h3>{project.title}</h3>
        <span className={`status ${ongoing ? "status--ongoing" : "status--done"}`}>
          {ongoing && <i className="status__dot" aria-hidden="true" />}
          {project.status}
        </span>
      </div>

      <p className="project-card__desc">{project.description}</p>

      {project.technologies.length > 0 && (
        <div className="project-card__block">
          <h4>Technologies</h4>
          <ul className="tags">
            {project.technologies.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      )}

      {project.features.length > 0 && (
        <div className="project-card__block">
          <h4>Features</h4>
          <ul className="feature-list">
            {project.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeading title="Projects" subtitle="Things I have built and am building." />
        <div className="projects__grid">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 120} className="projects__item">
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
