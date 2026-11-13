import { useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
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
      const frame = requestAnimationFrame(() =>
        document
          .getElementById(decodeURIComponent(hash.slice(1)))
          ?.scrollIntoView({ behavior: "instant" }),
      );
      return () => cancelAnimationFrame(frame);
    }
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname, hash]);
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
        <div className="page-width">
          <div className="footer-top">
            <Link className="footer-name" to="/">
              Mahimul Islam<span>Built with thought. Made for people.</span>
            </Link>
            <div className="footer-social">
              <a
                href="https://github.com/mahimulislam"
                target="_blank"
                rel="noreferrer"
              >
                GitHub <ArrowUpRight size={14} />
              </a>
              <a
                href="https://linkedin.com/in/mahimulislam"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn <ArrowUpRight size={14} />
              </a>
              <a href="mailto:mahimulislam@gmail.com">
                Email <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
          <nav className="footer-pages" aria-label="Explore the portfolio">
            <Link to="/projects">Work</Link>
            <Link to="/publications">Research</Link>
            <Link to="/experience">Experience</Link>
            <Link to="/education">About & education</Link>
            <Link to="/certifications">Certifications</Link>
            <Link to="/contact">Contact</Link>
          </nav>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} MAHIMUL ISLAM</span>
            <span>NEW YORK CITY · BUILT AT THE INTERSECTION</span>
            <a href="#main">BACK TO TOP ↑</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
