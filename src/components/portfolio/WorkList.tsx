import { useState } from "react";
import { ArrowDown, ArrowUpRight, Minus, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "@/data/portfolio";
import ProjectArt from "./ProjectArt";

export default function WorkList({ featured = false }: { featured?: boolean }) {
  const [filter, setFilter] = useState("All");
  const [expanded, setExpanded] = useState<string | null>(null);
  const visible = (featured ? projects.slice(0, 4) : projects).filter(p => filter === "All" || p.category === filter);
  return <>
    {!featured && <div className="filter-bar" aria-label="Filter projects">{["All", "Engineering", "Research"].map(item => <button key={item} aria-pressed={filter === item} onClick={() => setFilter(item)}>{item}<span>{item === "All" ? projects.length : projects.filter(p => p.category === item).length}</span></button>)}</div>}
    <div className="work-grid">{visible.map(project => <article className="work-item" key={project.id} id={project.id}>
      <button className="work-art-button" aria-expanded={expanded === project.id} aria-controls={`detail-${project.id}`} onClick={() => setExpanded(expanded === project.id ? null : project.id)} aria-label={`${expanded === project.id ? "Close" : "Explore"} ${project.name}`}><ProjectArt kind={project.kind} /><span className="art-action"><ArrowUpRight size={22} /></span></button>
      <div className="work-meta"><span>{project.number} / {project.category}</span><span>{project.period}</span></div>
      <h3>{project.title}</h3><p className="work-name">{project.name}</p><p className="work-summary">{project.summary}</p>
      <button className="text-link details-toggle" onClick={() => setExpanded(expanded === project.id ? null : project.id)} aria-expanded={expanded === project.id} aria-controls={`detail-${project.id}`}>{expanded === project.id ? "Close field note" : "Read field note"}{expanded === project.id ? <Minus size={16} /> : <Plus size={16} />}</button>
      <div id={`detail-${project.id}`} hidden={expanded !== project.id} className="work-details"><p>{project.description}</p><ul>{project.details.map(detail => <li key={detail}>{detail}</li>)}</ul><div className="tech-list">{project.tech.map(tech => <span key={tech}>{tech}</span>)}</div></div>
    </article>)}</div>
    {featured && <Link className="text-link all-work" to="/projects">Explore the full collection <ArrowDown size={16} /></Link>}
  </>;
}
