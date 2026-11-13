import WorkList from "@/components/portfolio/WorkList";
export default function Projects() {
  return (
    <section className="page-width section inner-page">
      <div className="page-intro">
        <p className="eyebrow">PROJECTS / ENGINEERING & RESEARCH</p>
        <h1>
          Projects I’ve
          <br />
          <span className="serif-word">worked on.</span>
        </h1>
        <p>
          I’ve worked on manufacturing platforms, healthcare software, and AI
          agents that review their own reasoning. Here’s what each project
          involved and what I contributed.
        </p>
      </div>
      <WorkList />
    </section>
  );
}
