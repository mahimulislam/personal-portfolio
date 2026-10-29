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
            <span className="status-dot" /> A PRACTICE IN SOFTWARE &
            INTELLIGENCE
          </span>
          <span className="hero-edition">PERSONAL PORTFOLIO / 2026</span>
        </div>
        <div className="hero-grid">
          <div className="hero-copy">
            <h1>
              Engineering
              <br />
              with a <span className="serif-word">human</span>
              <br />
              in the loop<span className="accent-text">.</span>
            </h1>
            <p className="hero-intro">
              I’m Mahimul. I build the systems behind the screen—and explore how
              AI can work better with the people in front of it.
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
              <span className="tiny-cross">✳</span>
              <span>
                FULL STACK SOFTWARE ENGINEER & AI RESEARCHER
                <br />
                <span>NEW YORK CITY · M.S. COMPUTER SCIENCE, GEORGIA TECH</span>
              </span>
            </div>
          </div>
          <SystemMap />
        </div>
      </section>
      <div className="practice-strip">
        <div className="page-width">
          <span>FROM IDEA TO PRODUCTION</span>
          <span>SOFTWARE ENGINEERING</span>
          <i>✳</i>
          <span>APPLIED AI RESEARCH</span>
          <i>✳</i>
          <span>HUMAN EXPERTISE</span>
        </div>
      </div>
      <section className="section page-width" id="selected-work">
        <SectionHeading
          number="01"
          label="SELECTED WORK"
          title={
            <>
              Different domains.
              <br />
              <span className="serif-word">One connected thread.</span>
            </>
          }
        >
          <p>
            Real systems. Real constraints.
            <br />A few things I’ve helped bring to life.
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
              src="/images/mahimul.webp"
              alt="Mahimul Islam"
              loading="lazy"
              width="600"
              height="700"
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
            Let’s make
            <br />
            something <span className="serif-word">matter.</span>
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
