import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { experience } from "@/data/portfolio";
export default function Experience() {
  return (
    <section className="page-width section inner-page">
      <div className="page-intro">
        <p className="eyebrow">EXPERIENCE / MY ROLES</p>
        <h1>
          My work
          <br />
          <span className="accent-text">so far.</span>
        </h1>
        <p>
          I’ve spent 6+ years designing software, building APIs, and supporting
          applications in production. Here’s where I’ve done that work.
        </p>
      </div>
      <div className="timeline">
        {experience.map((job, i) => (
          <article className="timeline-entry" key={job.company}>
            <aside>
              <span className="eyebrow">0{i + 1}</span>
              <p>{job.period}</p>
              <span>{job.location}</span>
            </aside>
            <div>
              <span className="eyebrow">{job.role}</span>
              <h2>{job.company}</h2>
              <p className="large-copy">{job.intro}</p>
              <p>{job.description}</p>
              <ul>
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <span className="job-tech">{job.tech}</span>
            </div>
          </article>
        ))}
      </div>
      <Link className="text-link" to="/projects">
        View my projects <ArrowUpRight size={17} />
      </Link>
    </section>
  );
}
