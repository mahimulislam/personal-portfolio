import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { resumeUrl } from "@/data/portfolio";

const links = [
  { name: "Work", path: "/projects" },
  { name: "Research", path: "/publications" },
  { name: "About", path: "/education" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [open]);
  return (
    <header className="site-header">
      <div className="nav-inner page-width">
        <Link
          className="wordmark"
          to="/"
          onClick={() => setOpen(false)}
          aria-label="Mahimul Islam home"
        >
          <span className="monogram">
            m<span>i</span>.
          </span>
          <span>
            MAHIMUL ISLAM
            <span className="wordmark-sub">ENGINEER & AI RESEARCHER</span>
          </span>
        </Link>
        <nav
          aria-label="Main navigation"
          className={open ? "main-nav is-open" : "main-nav"}
          id="main-navigation"
        >
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              aria-current={pathname === link.path ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {link.name}
              <span className="nav-dot" />
            </Link>
          ))}
          <a
            className="resume-link"
            href={resumeUrl}
            target="_blank"
            rel="noreferrer"
          >
            Résumé <ArrowUpRight size={15} />
          </a>
        </nav>
        <button
          className="mobile-menu"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="main-navigation"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
