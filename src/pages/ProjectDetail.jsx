import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <>
        <Navbar />
        <main className="project-detail-page">
          <section className="project-detail-container">
            <h1>Project not found</h1>
            <Link to="/#projects" className="back-link">
              Back to Projects
            </Link>
          </section>
          <Footer />
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="project-detail-page">
        <section className="project-detail-container">
          <Link to="/#projects" className="back-link">
            ← Back to Projects
          </Link>

          <div className="project-detail-header">
            <p className="section-label">{project.status}</p>
            <h1 className="project-detail-title">{project.title}</h1>
            <p className="project-detail-category">{project.category}</p>
            <p className="project-detail-summary">{project.summary}</p>

            {(project.githubLink || project.demoLink) && (
              <div className="project-detail-links">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="detail-button"
                  >
                    GitHub
                  </a>
                )}

                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noreferrer"
                    className="detail-button"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            )}
          </div>

          {project.heroImage && (
            <div className="project-hero-image-wrapper">
              <img
                src={project.heroImage}
                alt={project.title}
                className="project-hero-image"
              />
            </div>
          )}

          <div className="project-detail-block">
            <h2>Overview</h2>
            <p className="project-detail-description">{project.longDescription}</p>
          </div>

          <div className="project-detail-two-column">
            <div className="project-detail-block">
              <h2>Technical Highlights</h2>
              <ul>
                {project.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>

            <div className="project-detail-block">
              <h2>Technologies Used</h2>
              <div className="project-tech-list">
                {project.technologies.map((tech) => (
                  <span key={tech} className="project-tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="project-detail-two-column">
            <div className="project-detail-block">
              <h2>Key Challenge</h2>
              <p>{project.challenge}</p>
            </div>

            <div className="project-detail-block">
              <h2>What I’m Most Proud Of</h2>
              <p>{project.proudOf}</p>
            </div>
          </div>

          {project.images && project.images.length > 0 && (
            <div className="project-detail-block">
              <h2>Gallery</h2>
              <div className="project-media-grid">
                {project.images.map((image, index) => (
                  <img
                    key={`${project.slug}-image-${index}`}
                    src={image}
                    alt={`${project.title} ${index + 1}`}
                    className="project-detail-image"
                  />
                ))}
              </div>
            </div>
          )}

          {project.videos && project.videos.length > 0 && (
            <div className="project-detail-block">
              <h2>Videos</h2>
              <div className="project-video-list">
                {project.videos.map((video, index) => (
                  <video
                    key={`${project.slug}-video-${index}`}
                    controls
                    className="project-detail-video"
                  >
                    <source src={video} />
                    Your browser does not support the video tag.
                  </video>
                ))}
              </div>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}