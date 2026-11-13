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
              I build software
              <br />
              <span className="serif-word">and research AI.</span>
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
                Read my research <ArrowUpRight size={17} />
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
          <span>MY WORK SO FAR</span>
          <div><strong>6+</strong><span>YEARS BUILDING SOFTWARE</span></div>
          <div><strong>4</strong><span>INDUSTRIES WORKED IN</span></div>
          <div><strong>11,000+</strong><span>STUDENTS REACHED BY SAMI</span></div>
        </div>
      </div>
      <section className="section page-width" id="selected-work">
        <SectionHeading
          number="01"
          label="SELECTED WORK"
          title={
            <>
              A few projects
              <br />
              <span className="serif-word">I’ve worked on.</span>
            </>
          }
        >
          <p>
            Manufacturing, healthcare, and applied AI.
            <br />Read about what I built and why.
          </p>
        </SectionHeading>
        <WorkList featured />
      </section>
      <section className="research-feature" id="research">
        <div className="page-width">
          <SectionHeading
            number="02"
            label="AI RESEARCH"
            title={
              <>
                Helping AI agents
                <br />
                <span className="serif-word">catch their mistakes.</span>
              </>
            }
          />
          <div className="research-feature-grid">
            <div className="research-aside">
              <p>
                At Georgia Tech’s Design Intelligence Lab, I worked on agents
                that examine and correct their reasoning. At MAEKNIT, I’m
                exploring how AI can help manufacturing experts with their work.
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
          label="ABOUT ME"
          title={
            <>
              A little about
              <br />
              <span className="serif-word">how I work.</span>
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
              I enjoy figuring out how a complicated system should work,
              then building something people can use.
            </p>
            <p>
              I’ve spent 6+ years building production software for healthcare,
              manufacturing, e-commerce, and B2B SaaS. At MAEKNIT, I lead
              engineering work and research how AI can help people apply
              their specialized knowledge.
            </p>
            <p>
              I have an M.S. in Computer Science from Georgia Tech, with a
              specialization in Interactive Intelligence. I work on system
              architecture and interfaces, and study how AI agents can learn
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
              See my experience <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
      <section className="contact-band">
        <div className="page-width">
          <span className="eyebrow">04 / GET IN TOUCH</span>
          <Link to="/contact">
            Have a problem
            <br />
            <span className="serif-word">worth solving?</span>
            <ArrowUpRight aria-hidden="true" />
          </Link>
          <div className="contact-band-bottom">
            <span>
              Tell me about your project or research question.
              <br />
              I’d be happy to hear what you’re working on.
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
