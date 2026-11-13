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
  { name: "About", path: "/education" },
  { name: "Contact", path: "/contact" },
];
const additionalLinks = [
  { name: "Experience", path: "/experience" },
  { name: "Certifications", path: "/certifications" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 761px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setOpen(false);
    };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  return (
    <header className="site-header">
      <div className="nav-inner page-width">
        <Link className="wordmark" to="/" aria-label="Mahimul Islam home">
          <span className="monogram">m<span>i</span>.</span>
          <span>MAHIMUL ISLAM<span className="wordmark-sub">ENGINEER & AI RESEARCHER</span></span>
        </Link>
        <nav aria-label="Main navigation" className="main-nav">
          {links.map((link) => (
            <Link key={link.path} to={link.path} aria-current={pathname === link.path ? "page" : undefined}>
              {link.name}<span className="nav-dot" />
            </Link>
          ))}
          <a className="resume-link" href={resumeUrl} target="_blank" rel="noreferrer">Résumé <ArrowUpRight size={15} /></a>
        </nav>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button className="mobile-menu" aria-label="Open navigation"><Menu size={23} /></button>
          </SheetTrigger>
          <SheetContent className="mobile-nav-panel" side="right">
            <SheetTitle className="mobile-nav-title">Mahimul Islam<span className="accent-text">.</span></SheetTitle>
            <SheetDescription>Engineering & applied AI</SheetDescription>
            <nav aria-label="Mobile navigation" className="mobile-nav-links">
              {[...links, ...additionalLinks].map((link, index) => (
                <Link key={link.path} to={link.path} onClick={() => setOpen(false)} aria-current={pathname === link.path ? "page" : undefined}>
                  <span>0{index + 1}</span>{link.name}<ArrowUpRight size={22} />
                </Link>
              ))}
            </nav>
            <a className="primary-link" href={resumeUrl} target="_blank" rel="noreferrer">View my résumé <ArrowUpRight size={18} /></a>
            <a className="mobile-nav-email" href="mailto:mahimulislam@gmail.com">mahimulislam@gmail.com</a>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
