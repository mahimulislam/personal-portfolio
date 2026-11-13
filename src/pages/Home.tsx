import { ArrowDown, ArrowRight, ArrowUpRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import WorkList from "@/components/portfolio/WorkList";
import SystemMap from "@/components/portfolio/SystemMap";
import SectionHeading from "@/components/portfolio/SectionHeading";
import { publications, skillGroups } from "@/data/portfolio";

export default function Home() {
  return (
    <>
      <section className="hero" data-enter aria-labelledby="hero-title">
        <div className="wrap page-width">
          <div className="hero-grid">
            <div className="hero-copy hero__text">
              <div className="hero-kicker">
                <span className="status-dot" /> MAHIMUL ISLAM{" "}
                <span className="kicker-divider" /> NEW YORK CITY
              </div>
              <h1 id="hero-title">
                Software
                <br />
                engineer.<span className="hero-role">And AI researcher.</span>
              </h1>
              <p className="hero-intro hero__lead">
                I build the software behind everyday work, and study how AI can
                help the people doing it.
              </p>
              <div className="hero-actions">
                <Link className="primary-link btn" to="/projects">
                  View my work <ArrowUpRight size={20} />
                </Link>
                <Link className="secondary-link btn" to="/publications">
                  Read my research <ArrowRight size={18} />
                </Link>
              </div>
              <div className="hero-credentials">
                <div>
                  <span className="meta-label">CURRENTLY</span>
                  <strong>Engineering at MAEKNIT</strong>
                </div>
                <div>
                  <span className="meta-label">EDUCATION</span>
                  <strong>M.S. Computer Science, Georgia Tech</strong>
                </div>
              </div>
            </div>
            <figure className="hero-portrait hero__media" data-visual>
              <div className="portrait-topline">
                <span>HI, I’M MAHIMUL.</span>
                <ArrowUpRight size={20} />
              </div>
              <img
                src="/images/mahimul-portrait.jpg"
                srcSet="/images/mahimul-portrait-640.jpg 640w, /images/mahimul-portrait.jpg 820w"
                sizes="(max-width: 600px) calc(100vw - 40px), (max-width: 900px) 42vw, 500px"
                alt="Mahimul Islam"
                width="820"
                height="1100"
              />
              <figcaption>
                <span>Mahimul Islam</span>
                <span>
                  <MapPin size={13} /> New York, NY
                </span>
              </figcaption>
            </figure>
          </div>
          <div className="hero-bottom">
            <span>6+ YEARS IN SOFTWARE ENGINEERING</span>
            <a href="#selected-work">
              SCROLL TO EXPLORE <ArrowDown size={15} />
            </a>
          </div>
        </div>
      </section>

      <section className="section work-section" id="selected-work">
        <div className="wrap page-width">
          <SectionHeading
            number="01"
            label="SELECTED WORK"
            title={
              <>
                Ideas into
                <br />
                <span className="accent-text">working systems.</span>
              </>
            }
          >
            <p>
              Manufacturing platforms, healthcare software,
              <br />
              and AI agents that learn from feedback.
            </p>
          </SectionHeading>
          <WorkList featured />
        </div>
      </section>

      <section
        className="research-feature section"
        id="research"
        data-moment="word-highlight"
      >
        <div className="wrap page-width">
          <div className="section-topline">
            <span className="eyebrow">02 / RESEARCH</span>
            <span>GEORGIA TECH + MAEKNIT</span>
          </div>
          <h2 className="research-statement mo-wh__text">
            AI should be able to examine its reasoning, learn from mistakes, and
            work with <strong>human expertise.</strong>
          </h2>
          <div className="research-feature-grid">
            <div className="research-aside">
              <p>
                At Georgia Tech’s Design Intelligence Lab, I helped build
                metacognitive agents. At MAEKNIT, I research how AI can support
                manufacturing experts.
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
                View all publications <ArrowUpRight size={18} />
              </Link>
            </div>
            <div className="paper-list">
              {publications.slice(0, 3).map((paper, index) => (
                <Link
                  to={`/publications#paper-${index}`}
                  key={paper.title}
                  className="paper-preview"
                >
                  <span className="paper-number">0{index + 1}</span>
                  <div>
                    <span className="eyebrow">
                      {paper.date} / {index === 0 ? "IAAI" : "ToM4AI"}
                    </span>
                    <h3>{paper.title}</h3>
                    <span className="paper-venue">{paper.venue}</span>
                  </div>
                  <ArrowUpRight size={22} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section practice-section">
        <div className="wrap page-width">
          <SectionHeading
            number="03"
            label="HOW I WORK"
            title={
              <>
                Across the stack.
                <br />
                <span className="accent-text">Close to the problem.</span>
              </>
            }
          >
            <p>
              I work from architecture to interface,
              <br />
              with the people using the system in mind.
            </p>
          </SectionHeading>
          <div className="practice-grid">
            <SystemMap />
            <div className="practice-index">
              {skillGroups.map((group, index) => (
                <div key={group.label}>
                  <span className="meta-label">0{index + 1}</span>
                  <div>
                    <h3>{group.label}</h3>
                    <p>{group.skills}</p>
                  </div>
                  <ArrowUpRight size={19} />
                </div>
              ))}
              <Link className="text-link" to="/experience">
                See my experience <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="about-home section">
        <div className="wrap page-width about-home-grid">
          <div>
            <span className="eyebrow">04 / A LITTLE BACKGROUND</span>
            <h2>
              Engineering,
              <br />
              with a researcher’s
              <br />
              <span className="accent-text">curiosity.</span>
            </h2>
          </div>
          <div className="about-home-copy">
            <p className="large-copy">
              I’m Mahimul. I enjoy taking a complicated problem apart and
              building something people can use.
            </p>
            <p>
              I’ve spent 6+ years working in healthcare, manufacturing,
              e-commerce, and B2B SaaS. I have an M.S. in Computer Science from
              Georgia Tech, specializing in Interactive Intelligence.
            </p>
            <Link className="primary-link btn" to="/education">
              More about me <ArrowUpRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
