import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import "../styles/navbar.css"; 

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false); 

  const links = [
    { name: "Home", path: "/" },
    { name: "Experience", path: "/experience" },
    { name: "Projects", path: "/projects" },
    { name: "Education", path: "/education" },
    { name: "Certifications", path: "/certifications" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        <Link to="/" className="navbar-logo">
          Mahimul Islam
        </Link>

        <div className="navbar-links">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`nav-item ${
                location.pathname === link.path ? "active" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <a
          href="/resume/Mahimul_Islam_Resume_Jan_28.pdf"
          download="Mahimul_Islam_Resume.pdf"
          className="resume-button"
        >
          Download Resume
        </a>

        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {isOpen && (
        <div className="mobile-menu">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="mobile-nav-item"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          <a
            href="/resume/Mahimul_Islam_Resume_Jan_28.pdf"
            download="Mahimul_Islam_Resume.pdf"
            className="mobile-resume-button"
            onClick={() => setIsOpen(false)}
          >
            Download Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
