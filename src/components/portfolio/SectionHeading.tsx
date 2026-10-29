import type { ReactNode } from "react";

export default function SectionHeading({ number, label, title, children }: { number: string; label: string; title: ReactNode; children?: ReactNode }) {
  return <header className="section-heading"><p className="eyebrow"><span>{number}</span> {label}</p><div className="section-heading-row"><h2>{title}</h2>{children}</div></header>;
}
