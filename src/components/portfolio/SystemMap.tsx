import { useState } from "react";

const modes = [
  {
    name: "Systems",
    caption: "From the interface to the infrastructure.",
    nodes: ["INTERFACE", "PLATFORM", "OPERATIONS"],
    note: "Production software that connects people, data, and workflows.",
  },
  {
    name: "Intelligence",
    caption: "Reason. Reflect. Adapt.",
    nodes: ["REASON", "SELF-MODEL", "ADAPT"],
    note: "Metacognitive agents that can examine and correct their reasoning.",
  },
  {
    name: "People",
    caption: "The expert stays in the loop.",
    nodes: ["CONTEXT", "EXPERT", "FEEDBACK"],
    note: "AI-assisted workflows shaped by human knowledge and judgment.",
  },
];

export default function SystemMap() {
  const [selected, setSelected] = useState(0);
  const mode = modes[selected];
  return (
    <div className="system-map">
      <div className="map-header">
        <span>FIG. 01 | A CONNECTED PRACTICE</span>
        <span className="map-cross">+</span>
      </div>
      <div className={`map-drawing map-mode-${selected}`}>
        <svg viewBox="0 0 500 400" fill="none" aria-hidden="true">
          <defs>
            <pattern
              id="map-grid"
              width="25"
              height="25"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="1" cy="1" r="1" fill="currentColor" opacity=".18" />
            </pattern>
          </defs>
          <rect width="500" height="400" fill="url(#map-grid)" />
          <g className="map-rings" stroke="currentColor" strokeWidth="1.2">
            {Array.from({ length: 12 }, (_, i) => (
              <ellipse
                key={i}
                cx="250"
                cy="200"
                rx={65 + i * 11}
                ry={44 + i * 10}
                transform={`rotate(${i * 6 - 32} 250 200)`}
              />
            ))}
          </g>
          <path
            className="map-path"
            d="M70 125 C210 40 320 80 250 200 S320 350 435 280"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="5 7"
          />
          <circle
            cx="250"
            cy="200"
            r="30"
            fill="var(--paper)"
            stroke="var(--ink)"
          />
          <path
            d="M239 200h22m-11-11v22"
            stroke="var(--ink)"
            strokeWidth="1.5"
          />
          <g fill="var(--accent-color)">
            <circle cx="105" cy="112" r="5" />
            <circle cx="393" cy="297" r="5" />
          </g>
        </svg>
        <span className="map-node node-top">{mode.nodes[0]}</span>
        <span className="map-node node-middle">{mode.nodes[1]}</span>
        <span className="map-node node-bottom">{mode.nodes[2]}</span>
        <span className="map-coordinate">
          40.7128° N<br />
          73.0060° W
        </span>
      </div>
      <div
        className="map-controls"
        role="group"
        aria-label="Explore my practice"
      >
        {modes.map((item, i) => (
          <button
            key={item.name}
            aria-pressed={selected === i}
            onClick={() => setSelected(i)}
          >
            <span>0{i + 1}</span>
            {item.name}
          </button>
        ))}
      </div>
      <div className="map-caption" aria-live="polite">
        <strong>{mode.caption}</strong>
        <p>{mode.note}</p>
      </div>
    </div>
  );
}
