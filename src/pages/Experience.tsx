import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { experience } from "@/data/portfolio";
export default function Experience() {
  return <section className="page-width section inner-page"><div className="page-intro"><p className="eyebrow">EXPERIENCE / THE THROUGH LINE</p><h1>Learning by building.<br /><span className="serif-word">Building with purpose.</span></h1><p>6+ years working across the full software lifecycle, from architecture and APIs to production support and the people who depend on it.</p></div><div className="timeline">{experience.map((job, i) => <article className="timeline-entry" key={job.company}><aside><span className="eyebrow">0{i + 1}</span><p>{job.period}</p><span>{job.location}</span></aside><div><span className="eyebrow">{job.role}</span><h2>{job.company}</h2><p className="large-copy">{job.intro}</p><p>{job.description}</p><ul>{job.points.map(point => <li key={point}>{point}</li>)}</ul><span className="job-tech">{job.tech}</span></div></article>)}</div><Link className="text-link" to="/projects">See the work behind the roles <ArrowUpRight size={17} /></Link></section>;
}
