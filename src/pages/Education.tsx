import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "@/components/portfolio/SectionHeading";
import { skillGroups } from "@/data/portfolio";
export default function Education() {
  return (
    <section className="page-width section inner-page">
      <div className="page-intro">
        <p className="eyebrow">ABOUT / BACKGROUND & EDUCATION</p>
        <h1>
          A little
          <br />
          <span className="serif-word">about me.</span>
        </h1>
      </div>
      <div className="about-grid">
        <figure className="portrait">
          <img
            src="/images/mahimul-portrait.jpg"
            alt="Mahimul Islam"
            width="1083"
            height="1453"
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
            I work in full stack engineering and applied AI research. At
            MAEKNIT, I lead a team of four engineers. We build platforms for
            clients, factories, and internal operations. I also research
            manufacturing AI that keeps experts involved in the decisions.
          </p>
          <p>
            At Georgia Tech’s Design Intelligence Lab, I contributed to SAMI and
            co-designed a metacognitive architecture that helps AI agents
            examine their own reasoning. In both roles, I’m interested in
            how people use these systems and where they need help.
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
            See where I’ve worked <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
      <div className="education-section">
        <SectionHeading
          number="01"
          label="EDUCATION"
          title={
            <>
              What I studied,
              <br />
              <span className="serif-word">and where.</span>
            </>
          }
        />
        <article className="education-row">
          <span className="eyebrow">JAN 2024 to DEC 2025</span>
          <div>
            <h3>Georgia Institute of Technology</h3>
            <p>Master of Science in Computer Science</p>
            <span>Interactive Intelligence · GPA 3.7 / 4.0</span>
          </div>
          <span className="degree-mark">M.S.</span>
        </article>
        <article className="education-row">
          <span className="eyebrow">NOV 2015 to FEB 2020</span>
          <div>
            <h3>Ahsanullah University of Science and Technology</h3>
            <p>Bachelor of Science in Computer Science and Engineering</p>
            <span>GPA 3.43 / 4.0</span>
          </div>
          <span className="degree-mark">B.S.</span>
        </article>
        <Link className="text-link" to="/certifications">
          View my certifications <ArrowUpRight size={16} />
        </Link>
      </div>
    </section>
  );
}
