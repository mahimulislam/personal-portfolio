import { useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { ArrowUpRight, ArrowUp } from "lucide-react";
import Navbar from "./Navbar";

const titles: Record<string, string> = {
  "/": "Full Stack Engineer & AI Researcher",
  "/projects": "Selected Work",
  "/experience": "Experience",
  "/publications": "Research & Publications",
  "/education": "About & Education",
  "/certifications": "Certifications",
  "/contact": "Contact",
};

export default function Layout() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    document.title = `${titles[pathname] || "Page not found"} | Mahimul Islam`;
    if (hash) {
      let target = hash.slice(1);
      try {
        target = decodeURIComponent(target);
      } catch {
        /* An invalid fragment still leaves the page readable. */
      }
      const frame = requestAnimationFrame(() =>
        document
          .getElementById(target)
          ?.scrollIntoView({ behavior: "instant" }),
      );
      return () => cancelAnimationFrame(frame);
    }
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname, hash]);

  useEffect(() => {
    const moments = [
      ...document.querySelectorAll<HTMLElement>("[data-moment]"),
    ];
    window.dispatchEvent(new Event("portfolio:refresh"));
    return () => {
      moments.forEach((element) =>
        (
          element as HTMLElement & { __moment?: { destroy?: () => void } }
        ).__moment?.destroy?.(),
      );
    };
  }, [pathname]);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main" tabIndex={-1}>
        <Outlet />
      </main>
      <footer className="site-footer">
        <div className="wrap page-width">
          <div className="footer-invitation">
            <span className="eyebrow">
              HAVE A PROJECT OR A RESEARCH QUESTION?
            </span>
            <Link to="/contact">
              Let’s talk.
              <ArrowUpRight strokeWidth={1} />
            </Link>
            <a className="footer-email" href="mailto:mahimulislam@gmail.com">
              mahimulislam@gmail.com <ArrowUpRight size={18} />
            </a>
          </div>
          <div className="footer-grid">
            <Link className="footer-name" to="/">
              Mahimul Islam
              <span>
                Software engineer.
                <br />
                AI researcher. Based in New York City.
              </span>
            </Link>
            <nav className="footer-pages" aria-label="Explore the portfolio">
              <span className="meta-label">EXPLORE</span>
              <Link to="/projects">Work</Link>
              <Link to="/publications">Research</Link>
              <Link to="/experience">Experience</Link>
              <Link to="/education">About & education</Link>
              <Link to="/certifications">Certifications</Link>
              <Link to="/contact">Contact</Link>
            </nav>
            <div className="footer-social">
              <span className="meta-label">ELSEWHERE</span>
              <a
                href="https://github.com/mahimulislam"
                target="_blank"
                rel="noreferrer"
              >
                GitHub <ArrowUpRight size={15} />
              </a>
              <a
                href="https://linkedin.com/in/mahimulislam"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn <ArrowUpRight size={15} />
              </a>
              <a href="mailto:mahimulislam@gmail.com">
                Email <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} MAHIMUL ISLAM</span>
            <span>SOFTWARE + HUMAN EXPERTISE</span>
            <a href="#main">
              BACK TO TOP <ArrowUp size={14} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
