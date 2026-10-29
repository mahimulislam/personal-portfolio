export default function ProjectArt({ kind }: { kind: string }) {
  return <div className={`project-art art-${kind}`} aria-hidden="true">
    {kind === "systems" ? <div className="portal-diagram"><span>CLIENT</span><span>ADMIN</span><span>FACTORY</span><i /><strong>one connected<br />ecosystem.</strong><small>ODOO × AWS</small></div>
      : kind === "knit" ? <div className="knit-diagram">{Array.from({ length: 9 }, (_, i) => <div key={i}>{Array.from({ length: 12 }, (_, j) => <i key={j} />)}</div>)}<span>KNOWLEDGE, WOVEN IN.</span></div>
      : kind === "agent" ? <div className="agent-diagram"><span>REASON</span><i>↗</i><span>REFLECT</span><i>↙</i><span>ADAPT</span><div className="agent-orbit" /></div>
      : kind === "health" ? <div className="health-diagram"><span>01 / PATIENT</span><div>＋</div><span>02 / PROVIDER</span><i /><small>CONTINUITY BY DESIGN</small></div>
      : <div className="language-diagram"><span>অ আ ক খ</span><span>শব্দ থেকে অর্থ</span><small>LANGUAGE → MEANING</small></div>}
  </div>;
}
