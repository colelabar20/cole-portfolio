import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
	const completedProjects = projects.filter(
		(project) => project.status === "Completed"
	);

	const inProgressProjects = projects.filter(
		(project) => project.status === "In Progress"
	);

	return (
		<section id="projects">
			<p className="section-label">Portfolio</p>
			<h2>Projects</h2>
			<p className="section-description">
				A selection of projects across hardware, software, embedded systems,
				and product design.
			</p>

			<div className="project-group">
				<h3 className="project-group-title">Completed Projects</h3>
				<div className="projects-grid">
					{completedProjects.map((project) => (
						<ProjectCard key={project.title} project={project} />
					))}
				</div>
			</div>

			<div className="project-group">
				<h3 className="project-group-title">In Progress</h3>
				<div className="projects-grid">
					{inProgressProjects.map((project) => (
						<ProjectCard key={project.title} project={project} />
					))}
				</div>
			</div>
		</section>
	);
}
