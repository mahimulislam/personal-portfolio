import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { publications, service } from "@/data/portfolio";
import SectionHeading from "@/components/portfolio/SectionHeading";
export default function Publications() {
  return (
    <section className="page-width section inner-page">
      <div className="page-intro">
        <p className="eyebrow">RESEARCH / AI AGENTS & HUMAN EXPERTISE</p>
        <h1>
          How AI agents
          <br />
          <span className="accent-text">learn from mistakes.</span>
        </h1>
        <p>
          I explore how AI agents can understand their own reasoning, correct
          their mistakes, and work with people who know the subject.
        </p>
      </div>
      <div className="research-topics">
        <span>Metacognitive AI</span>
        <span>Knowledge-Based AI</span>
        <span>Human-in-the-loop systems</span>
        <span>Natural language processing</span>
      </div>
      <SectionHeading
        number="01"
        label="PUBLICATIONS"
        title="Papers I’ve contributed to."
      />
      <div className="publication-list">
        {publications.map((paper, i) => (
          <article id={`paper-${i}`} key={paper.title}>
            <div className="publication-index">
              <span>0{i + 1}</span>
              <span>{paper.date}</span>
            </div>
            <div>
              <span className="eyebrow">{paper.venue}</span>
              <h3>{paper.title}</h3>
              <p>{paper.description}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="research-projects">
        <SectionHeading
          number="02"
          label="RESEARCH IN PRACTICE"
          title={
            <>
              Putting the research
              <br />
              <span className="accent-text">to work.</span>
            </>
          }
        />
        <div className="research-cases">
          <Link to="/projects#sami">
            <span className="eyebrow">GEORGIA TECH / AUG 2024 to DEC 2025</span>
            <h3>SAMI</h3>
            <p>
              A social AI agent that examines its reasoning at two levels.
              Knowledge graphs and Task–Method–Knowledge (TMK) self-models
              help it find errors and decide how to adapt.
            </p>
            <span className="text-link">
              Read about SAMI <ArrowUpRight size={16} />
            </span>
          </Link>
          <Link to="/projects#knitdraft">
            <span className="eyebrow">MAEKNIT / MAR 2025 to PRESENT</span>
            <h3>KnitDraft / TMK-Knit</h3>
            <p>
              A research system that combines structured manufacturing
              knowledge with LLMs to help program industrial flat-knitting
              machines. Experts review the results.
            </p>
            <span className="text-link">
              Read about KnitDraft <ArrowUpRight size={16} />
            </span>
          </Link>
        </div>
      </div>
      <div className="service-section">
        <SectionHeading
          number="03"
          label="PROFESSIONAL SERVICE"
          title="Peer review."
        />
        <p>I review submissions for:</p>
        <ul>
          {service.map((item) => (
            <li key={item}>
              {item}
              <span>REVIEWER</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
