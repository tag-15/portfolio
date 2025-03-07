const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: "bi-linkedin",
      url: "https://www.linkedin.com/in/tarun-gurijala/",
      color: "primary",
    },
    {
      name: "GitHub",
      icon: "bi-github",
      url: "https://github.com/tarungurijala",
      color: "dark",
    },
    {
      name: "Email",
      icon: "bi-envelope",
      url: "mailto:tarunr.gurijala@gmail.com",
      color: "danger",
    },
  ];

  const quickLinks = [
    { label: "Introduction", href: "#introduction" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
  ];

  return (
    <footer className="footer mt-auto py-5 bg-light">
      <div className="container">
        <div className="row g-4">
          {/* About Section */}
          <div className="col-lg-4">
            <h5 className="mb-3">About Me</h5>
            <p className="text-muted mb-4">
              A passionate Computer Science professional with expertise in Full
              Stack Development, DevOps, and Cloud Technologies. Always eager to
              learn and grow.
            </p>
            <div className="d-flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className={`text-${social.color} fs-5 social-link`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                >
                  <i className={`bi ${social.icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-4">
            <h5 className="mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              {quickLinks.map((link, index) => (
                <li key={index} className="mb-2">
                  <a
                    href={link.href}
                    className="text-decoration-none text-muted hover-primary"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .querySelector(link.href)
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    <i className="bi bi-chevron-right me-2 small"></i>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-lg-4">
            <h5 className="mb-3">Contact</h5>
            <div className="text-muted">
              <p className="mb-2">
                <i className="bi bi-geo-alt me-2"></i>
                Arlington, Texas
              </p>
              <p className="mb-2">
                <i className="bi bi-telephone me-2"></i>
                +1(913)-945-0389
              </p>
              <p className="mb-0">
                <i className="bi bi-envelope me-2"></i>
                tarunr.gurijala@gmail.com
              </p>
            </div>
          </div>
        </div>

        <hr className="my-4" />

        {/* Copyright */}
        <div className="text-center text-muted">
          <small>© {currentYear} Tarun Gurijala. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
