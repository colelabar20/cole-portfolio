import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card-top">
        <p className="project-status">{project.status}</p>
        <p className="project-category">{project.category}</p>
      </div>

      <h3 className="project-title">{project.title}</h3>
      <p className="project-summary">{project.summary}</p>

      <div className="project-tech-list">
        {project.technologies.map((tech) => (
          <span key={tech} className="project-tech-tag">
            {tech}
          </span>
        ))}
      </div>

      {project.slug && (
        <Link to={`/projects/${project.slug}`} className="project-detail-link">
          View Details
        </Link>
      )}
    </article>
  );
}