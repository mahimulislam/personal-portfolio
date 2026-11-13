import {
  ArrowDown,
  ArrowRight,
  Boxes,
  BrainCircuit,
  Check,
  FileText,
  Network,
  ShieldCheck,
  Workflow,
} from "lucide-react";

export default function ProjectArt({ kind }: { kind: string }) {
  return (
    <div className={`project-art art-${kind}`} aria-hidden="true" data-visual>
      {kind === "systems" ? (
        <div className="architecture-visual">
          <div className="visual-topbar">
            <span className="visual-brand">
              <Boxes size={17} /> MAEKNIT
            </span>
            <span>PLATFORM ARCHITECTURE</span>
            <span className="window-dots">● ● ●</span>
          </div>
          <div className="architecture-body">
            <div className="architecture-heading">
              <span>ONE WORKFLOW</span>
              <strong>
                From brief
                <br />
                to production.
              </strong>
            </div>
            <div className="workflow-lanes">
              <div>
                <FileText size={20} />
                <strong>Client portal</strong>
                <span>Briefs & collections</span>
              </div>
              <ArrowDown size={18} />
              <div>
                <Workflow size={20} />
                <strong>Admin portal</strong>
                <span>Review & quotations</span>
              </div>
              <ArrowDown size={18} />
              <div>
                <Boxes size={20} />
                <strong>Factory portal</strong>
                <span>Planning & production</span>
              </div>
            </div>
          </div>
          <div className="visual-bottom">
            <span>ODOO 18 ENTERPRISE</span>
            <span>
              CONNECTED OPERATIONS <Network size={13} />
            </span>
          </div>
        </div>
      ) : kind === "knit" ? (
        <div className="knit-visual">
          <div className="visual-topbar">
            <span>KNITDRAFT / TMK-KNIT</span>
            <span>HUMAN-IN-THE-LOOP AI</span>
          </div>
          <div className="knit-swatch">
            <svg viewBox="0 0 360 220" fill="none">
              <defs>
                <pattern
                  id="knit-pattern"
                  width="24"
                  height="32"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M12 0C-8 12 32 20 12 32C-8 20 32 12 12 0Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </pattern>
              </defs>
              <rect width="360" height="220" fill="url(#knit-pattern)" />
            </svg>
          </div>
          <div className="knit-process">
            <span>Expert knowledge</span>
            <ArrowRight size={14} />
            <span>AI assistance</span>
            <ArrowRight size={14} />
            <span>
              Expert review <Check size={13} />
            </span>
          </div>
        </div>
      ) : kind === "agent" ? (
        <div className="agent-visual">
          <div className="visual-topbar">
            <span>SAMI</span>
            <span>METACOGNITIVE ARCHITECTURE</span>
          </div>
          <div className="agent-network">
            <div className="agent-main">
              <BrainCircuit size={38} strokeWidth={1} />
              <strong>
                Think about
                <br />
                the thinking.
              </strong>
            </div>
            <div className="agent-stages">
              <span>
                <i />
                Reason
              </span>
              <span>
                <i />
                Reflect
              </span>
              <span>
                <i />
                Adapt
              </span>
            </div>
            <svg viewBox="0 0 360 120" fill="none">
              <path
                d="M35 20H325M35 20V100H325V20M180 20V100"
                stroke="currentColor"
                strokeWidth="1"
              />
              <circle cx="35" cy="20" r="5" fill="currentColor" />
              <circle cx="180" cy="20" r="5" fill="currentColor" />
              <circle cx="325" cy="20" r="5" fill="currentColor" />
            </svg>
          </div>
          <div className="visual-bottom">
            <span>GEORGIA TECH</span>
            <span>KNOWLEDGE-BASED AI + LLMS</span>
          </div>
        </div>
      ) : kind === "health" ? (
        <div className="health-visual">
          <div className="visual-topbar">
            <span>GENOME MEDICAL</span>
            <ShieldCheck size={19} />
          </div>
          <div className="health-symbol">+</div>
          <div className="health-nodes">
            <span>Patient</span>
            <span className="health-line" />
            <span>Provider</span>
          </div>
          <div className="visual-bottom">
            <span>CONNECTED CLINICAL APPLICATIONS</span>
            <span>SECURE DATA WORKFLOWS</span>
          </div>
        </div>
      ) : (
        <div className="language-visual">
          <div className="visual-topbar">
            <span>BANGLA TEXT SUMMARIZATION</span>
            <FileText size={18} />
          </div>
          <strong lang="bn">
            ভাষা<span>ও অর্থ</span>
          </strong>
          <div className="visual-bottom">
            <span>NATURAL LANGUAGE PROCESSING</span>
            <span>বাংলা</span>
          </div>
        </div>
      )}
    </div>
  );
}
