import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "@/components/portfolio/SectionHeading";
import SystemMap from "@/components/portfolio/SystemMap";
import WorkList from "@/components/portfolio/WorkList";
import { publications, skillGroups } from "@/data/portfolio";

export default function Home() {
  return (
    <>
      <section className="hero page-width">
        <div className="hero-topline">
          <span className="eyebrow">
            <span className="status-dot" /> SOFTWARE ENGINEERING & APPLIED AI
          </span>
          <span className="hero-edition">NEW YORK CITY / PORTFOLIO</span>
        </div>
        <div className="hero-grid">
          <div className="hero-copy">
            <h1>
              Software.
              <br />
              Intelligence.
              <br />
              <span className="serif-word">A human touch.</span>
            </h1>
            <p className="hero-intro">
              I’m Mahimul Islam, a full stack engineer and AI researcher.
              I build production systems and explore how AI can support
              the people who use them.
            </p>
            <div className="hero-actions">
              <a className="primary-link" href="#selected-work">
                Explore my work <ArrowDown size={17} />
              </a>
              <Link className="text-link" to="/publications">
                The research side <ArrowUpRight size={17} />
              </Link>
            </div>
            <div className="hero-signoff">
              <img src="/images/mahimul-avatar.jpg" alt="" width="44" height="44" />
              <span>
                CURRENTLY BUILDING AT MAEKNIT
                <br />
                <span>M.S. COMPUTER SCIENCE · GEORGIA TECH</span>
              </span>
            </div>
          </div>
          <SystemMap />
        </div>
      </section>
      <div className="practice-strip">
        <div className="page-width">
          <span>EXPERIENCE, IN PRACTICE</span>
          <div><strong>6+</strong><span>YEARS BUILDING SOFTWARE</span></div>
          <div><strong>4</strong><span>INDUSTRIES, CONNECTED</span></div>
          <div><strong>11,000+</strong><span>STUDENTS REACHED BY SAMI</span></div>
        </div>
      </div>
      <section className="section page-width" id="selected-work">
        <SectionHeading
          number="01"
          label="SELECTED WORK"
          title={
            <>
              Selected systems,
              <br />
              <span className="serif-word">built for people.</span>
            </>
          }
        >
          <p>
            Manufacturing, healthcare, and applied AI.
            <br />Explore the work and the decisions behind it.
          </p>
        </SectionHeading>
        <WorkList featured />
      </section>
      <section className="research-feature" id="research">
        <div className="page-width">
          <SectionHeading
            number="02"
            label="RESEARCH & CURIOSITY"
            title={
              <>
                What if AI could
                <br />
                <span className="serif-word">think about its thinking?</span>
              </>
            }
          />
          <div className="research-feature-grid">
            <div className="research-aside">
              <p>
                That question connects my work on metacognitive agents at
                Georgia Tech’s Design Intelligence Lab to human-in-the-loop
                manufacturing AI at MAEKNIT.
              </p>
              <div className="research-stat">
                <strong>
                  11,000<span>+</span>
                </strong>
                <span>
                  STUDENTS HAVE USED SAMI
                  <br />
                  ACROSS TEN SEMESTERS
                </span>
              </div>
              <Link className="text-link" to="/publications">
                Research, publications & service <ArrowUpRight size={16} />
              </Link>
            </div>
            <div className="paper-list">
              {publications.slice(0, 3).map((paper, i) => (
                <Link
                  to={`/publications#paper-${i}`}
                  key={paper.title}
                  className="paper-preview"
                >
                  <span className="eyebrow">
                    {paper.date} / {i === 0 ? "IAAI" : "ToM4AI"}
                  </span>
                  <h3>{paper.title}</h3>
                  <span className="paper-venue">
                    {paper.venue}
                    <ArrowUpRight size={19} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="section page-width about-section">
        <SectionHeading
          number="03"
          label="THE PERSON BEHIND THE WORK"
          title={
            <>
              Curious by nature.
              <br />
              <span className="serif-word">Hands-on by choice.</span>
            </>
          }
        />
        <div className="about-grid">
          <figure className="portrait">
            <img
              src="/images/mahimul-portrait.jpg"
              alt="Mahimul Islam"
              loading="lazy"
              width="1083"
              height="1453"
            />
            <figcaption>MAHIMUL ISLAM / NEW YORK CITY</figcaption>
            <span className="portrait-mark" aria-hidden="true">
              mi.
            </span>
          </figure>
          <div className="about-copy">
            <p className="large-copy">
              I like the space where a complex problem becomes something people
              can actually use.
            </p>
            <p>
              Over 6+ years, I’ve built production software across healthcare,
              manufacturing, e-commerce, and B2B SaaS. Today, I lead engineering
              execution at MAEKNIT and research how AI can support specialized
              human expertise.
            </p>
            <p>
              I hold an M.S. in Computer Science from Georgia Tech, specializing
              in Interactive Intelligence. My work moves between system
              architecture, thoughtful interfaces, and agents that can learn
              from their mistakes.
            </p>
            <div className="skill-table">
              {skillGroups.map((group) => (
                <div key={group.label}>
                  <span>{group.label}</span>
                  <p>{group.skills}</p>
                </div>
              ))}
            </div>
            <Link className="text-link" to="/experience">
              Follow the journey <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
      <section className="contact-band">
        <div className="page-width">
          <span className="eyebrow">04 / THE NEXT CONVERSATION</span>
          <Link to="/contact">
            Have a problem
            <br />
            <span className="serif-word">worth solving?</span>
            <ArrowUpRight aria-hidden="true" />
          </Link>
          <div className="contact-band-bottom">
            <span>
              Engineering, AI research, or a good question.
              <br />
              I’m always interested in a thoughtful conversation.
            </span>
            <a href="mailto:mahimulislam@gmail.com">
              mahimulislam@gmail.com <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
