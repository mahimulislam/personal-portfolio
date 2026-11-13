import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { resumeUrl } from "@/data/portfolio";

const links = [
  { name: "Work", path: "/projects" },
  { name: "Research", path: "/publications" },
  { name: "Experience", path: "/experience" },
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
    const desktop = window.matchMedia("(min-width: 901px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setOpen(false);
    };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  return (
    <header className="site-header nav">
      <div className="nav-inner page-width wrap">
        <Link className="wordmark" to="/" aria-label="Mahimul Islam home">
          <span className="monogram">
            mi<span>↗</span>
          </span>
          <span className="wordmark-name">
            Mahimul Islam<span>ENGINEERING & RESEARCH</span>
          </span>
        </Link>
        <nav aria-label="Main navigation" className="main-nav">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              aria-current={pathname === link.path ? "page" : undefined}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <a
          className="resume-link"
          href={resumeUrl}
          target="_blank"
          rel="noreferrer"
        >
          Résumé <ArrowUpRight size={17} />
        </a>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button className="mobile-menu" aria-label="Open navigation">
              <Menu size={24} />
            </button>
          </SheetTrigger>
          <SheetContent className="mobile-nav-panel" side="right">
            <SheetTitle className="mobile-nav-title">
              Mahimul Islam<span>↗</span>
            </SheetTitle>
            <SheetDescription>
              Software engineer & AI researcher
            </SheetDescription>
            <nav aria-label="Mobile navigation" className="mobile-nav-links">
              {[
                ...links,
                { name: "Certifications", path: "/certifications" },
              ].map((link, index) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  aria-current={pathname === link.path ? "page" : undefined}
                >
                  <span>0{index + 1}</span>
                  {link.name}
                  <ArrowUpRight size={23} />
                </Link>
              ))}
            </nav>
            <a
              className="primary-link"
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
            >
              View my résumé <ArrowUpRight size={19} />
            </a>
            <a
              className="mobile-nav-email"
              href="mailto:mahimulislam@gmail.com"
            >
              mahimulislam@gmail.com
            </a>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
