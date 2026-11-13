import { useState } from "react";
import { ArrowRight, ArrowUpRight, Minus, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "@/data/portfolio";
import ProjectArt from "./ProjectArt";

export default function WorkList({ featured = false }: { featured?: boolean }) {
  const [filter, setFilter] = useState("All");
  const [expanded, setExpanded] = useState<string | null>(null);
  const visible = (featured ? projects.slice(0, 4) : projects).filter(
    (project) => filter === "All" || project.category === filter,
  );
  const toggle = (id: string) =>
    setExpanded((current) => (current === id ? null : id));

  return (
    <>
      {!featured && (
        <div className="work-toolbar">
          <div className="filter-bar" aria-label="Filter projects">
            {["All", "Engineering", "Research"].map((item) => (
              <button
                key={item}
                aria-pressed={filter === item}
                onClick={() => setFilter(item)}
              >
                {item}
                <span>
                  {item === "All"
                    ? projects.length
                    : projects.filter((project) => project.category === item)
                        .length}
                </span>
              </button>
            ))}
          </div>
          <span className="meta-label" aria-live="polite">
            {visible.length} PROJECTS
          </span>
        </div>
      )}
      <div className={featured ? "work-grid featured-work" : "work-grid"}>
        {visible.map((project) => (
          <article
            className={`work-item work-${project.kind}`}
            key={project.id}
            id={project.id}
          >
            <button
              className="work-art-button"
              onClick={() => toggle(project.id)}
              aria-expanded={expanded === project.id}
              aria-controls={`detail-${project.id}`}
              aria-label={`${expanded === project.id ? "Close" : "Explore"} ${project.name}`}
            >
              <ProjectArt kind={project.kind} />
              <span className="art-action">
                <ArrowUpRight size={23} />
              </span>
            </button>
            <div className="work-content">
              <div className="work-meta">
                <span>{project.category}</span>
                <span>{project.period}</span>
              </div>
              <p className="work-name">{project.name}</p>
              <h3>{project.title}</h3>
              <p className="work-summary">{project.summary}</p>
              <div className="tech-list">
                {project.tech.slice(0, 4).map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              <button
                className="text-link details-toggle"
                onClick={() => toggle(project.id)}
                aria-expanded={expanded === project.id}
                aria-controls={`detail-${project.id}`}
              >
                {expanded === project.id
                  ? "Hide project details"
                  : "Read project details"}
                {expanded === project.id ? (
                  <Minus size={17} />
                ) : (
                  <Plus size={17} />
                )}
              </button>
            </div>
            <div
              id={`detail-${project.id}`}
              hidden={expanded !== project.id}
              className="work-details"
            >
              <span className="meta-label">THE WORK / {project.name}</span>
              <p>{project.description}</p>
              <ul>
                {project.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
              <div className="tech-list">
                {project.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
      {featured && (
        <Link className="secondary-link all-work btn" to="/projects">
          View all projects <ArrowRight size={19} />
        </Link>
      )}
    </>
  );
}
