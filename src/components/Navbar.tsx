import { useState, useEffect } from "react";
import "../index.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Introduction", id: "introduction" },
    { label: "Education", id: "education" },
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "projects" },
    { label: "Skills", id: "skills" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${
        isScrolled ? "navbar-scrolled" : ""
      }`}
    >
      <div className="container">
        <a
          className="navbar-brand fw-bold"
          href="#"
          onClick={(e) => scrollToSection("introduction")}
        >
          <span className="text-primary">T</span>RG
        </a>

        <button
          className={`navbar-toggler ${isMenuOpen ? "" : "collapsed"}`}
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-controls="navbarNav"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            {navItems.map((item, index) => (
              <li key={index} className="nav-item">
                <a
                  className="nav-link px-3"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="nav-item ms-lg-3">
              <a
                href="/resume.pdf"
                className="btn btn-primary rounded-pill px-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-download me-2"></i>
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
