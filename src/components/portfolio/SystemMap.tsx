import { useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Boxes,
  BrainCircuit,
  Users,
} from "lucide-react";

const modes = [
  {
    name: "Systems",
    icon: Boxes,
    caption: "Software, from frontend to backend.",
    nodes: ["INTERFACE", "PLATFORM", "OPERATIONS"],
    note: "I build the interfaces, services, and infrastructure that teams use every day.",
  },
  {
    name: "Intelligence",
    icon: BrainCircuit,
    caption: "AI that checks its own reasoning.",
    nodes: ["REASON", "SELF-MODEL", "ADAPT"],
    note: "I study how agents can find mistakes in their reasoning and correct them.",
  },
  {
    name: "People",
    icon: Users,
    caption: "The expert stays in the loop.",
    nodes: ["CONTEXT", "EXPERT", "FEEDBACK"],
    note: "I design AI-assisted workflows where people use their expertise to review the results.",
  },
];

export default function SystemMap() {
  const [selected, setSelected] = useState(0);
  const mode = modes[selected];
  const Icon = mode.icon;
  return (
    <div className="system-map" data-visual>
      <div className="map-header">
        <span>A CONNECTED PRACTICE</span>
        <ArrowUpRight size={19} />
      </div>
      <div className={`map-drawing map-mode-${selected}`}>
        <div className="map-core">
          <Icon size={46} strokeWidth={1} />
        </div>
        <div className="map-connector" />
        <div className="map-nodes">
          {mode.nodes.map((node, index) => (
            <div className="map-node" key={node}>
              <span>0{index + 1}</span>
              <strong>{node}</strong>
              <ArrowDown size={14} />
            </div>
          ))}
        </div>
      </div>
      <div
        className="map-controls"
        role="group"
        aria-label="Explore how I work"
      >
        {modes.map((item, index) => (
          <button
            key={item.name}
            aria-pressed={selected === index}
            onClick={() => setSelected(index)}
          >
            <span>0{index + 1}</span>
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
