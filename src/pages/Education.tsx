import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "@/components/portfolio/SectionHeading";
import { skillGroups } from "@/data/portfolio";
export default function Education() {
  return (
    <section className="page-width section inner-page">
      <div className="page-intro">
        <p className="eyebrow">ABOUT / ALWAYS A STUDENT</p>
        <h1>
          Engineer. Researcher.
          <br />
          <span className="serif-word">Work in progress.</span>
        </h1>
      </div>
      <div className="about-grid">
        <figure className="portrait">
          <img
            src="/images/mahimul.webp"
            alt="Mahimul Islam"
            width="600"
            height="700"
          />
          <figcaption>BASED IN NEW YORK CITY</figcaption>
          <span className="portrait-mark" aria-hidden="true">
            mi.
          </span>
        </figure>
        <div className="about-copy">
          <p className="large-copy">
            Hi, I’m Mahimul. I’m interested in making complex systems useful to
            the people who rely on them.
          </p>
          <p>
            My work connects full stack engineering and applied AI research. At
            MAEKNIT, I lead engineering execution across a team of four,
            building platforms for clients, factories, and internal operations
            while developing human-in-the-loop manufacturing AI.
          </p>
          <p>
            At Georgia Tech’s Design Intelligence Lab, I contributed to SAMI and
            co-designed a metacognitive architecture for AI agents. The thread
            through both worlds is the same: thoughtful systems, grounded in
            human context.
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
            My professional journey <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
      <div className="education-section">
        <SectionHeading
          number="01"
          label="EDUCATION"
          title={
            <>
              A foundation for
              <br />
              <span className="serif-word">the next question.</span>
            </>
          }
        />
        <article className="education-row">
          <span className="eyebrow">JAN 2024 — DEC 2025</span>
          <div>
            <h3>Georgia Institute of Technology</h3>
            <p>Master of Science in Computer Science</p>
            <span>Interactive Intelligence · GPA 3.7 / 4.0</span>
          </div>
          <span className="degree-mark">M.S.</span>
        </article>
        <article className="education-row">
          <span className="eyebrow">NOV 2015 — FEB 2020</span>
          <div>
            <h3>Ahsanullah University of Science and Technology</h3>
            <p>Bachelor of Science in Computer Science and Engineering</p>
            <span>GPA 3.43 / 4.0</span>
          </div>
          <span className="degree-mark">B.S.</span>
        </article>
        <Link className="text-link" to="/certifications">
          More learning & certifications <ArrowUpRight size={16} />
        </Link>
      </div>
    </section>
  );
}
