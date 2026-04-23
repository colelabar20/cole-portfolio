import { skills } from "../data/skills";

export default function Skills() {
	return (
		<section id="skills">
			<p className="section-label">Technical Skills</p>
			<h2>Skills</h2>
			<p className="section-description">
				A mix of programming, embedded systems, electronics, and design tools
				used across research and personal projects.
			</p>

			<div className="skills-grid">
				{skills.map((group) => (
					<article key={group.category} className="skill-card">
						<h3>{group.category}</h3>
						<div className="skill-tag-list">
							{group.items.map((item) => (
								<span key={item} className="skill-tag">
									{item}
								</span>
							))}
						</div>
					</article>
				))}
			</div>
		</section>
	);
}
