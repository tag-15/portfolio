import exp from "../assets/exp.jpg";
import ScrollReveal from "./ScrollReveal";

const Experience = () => {
  const experiences = [
    {
      title: "Systems Analyst",
      company: "Company Name",
      location: "Arlington, TX",
      type: "Intership",
      period: "2021 Jan - Jul",
      image: exp,
      description:
        "Working as a Systems Analyst focusing on system optimization, web development, and database management. Leading cross-functional teams and implementing innovative solutions.",
      technologies: [
        "Angular",
        "TypeScript",
        "SQL Server",
        "Azure",
        "Git",
        "Agile",
      ],
      achievements: [
        "Improved system efficiency by 40% through optimized user role management",
        "Developed and deployed 5+ automated scripts reducing manual work by 60%",
        "Led a team of 4 developers in successful project deliveries",
      ],
      responsibilities: [
        "Managed user role balance using Agile methodologies to enhance system efficiency.",
        "Contributed to Angular web development, integrating automated scripts to improve website functionality.",
        "Assisted in database management and optimization with Microsoft SQL Server.",
        "Collaborated with cross-functional teams to ensure seamless system performance and user experience.",
        "Provided analytical support for system enhancements and troubleshooting.",
      ],
    },
  ];

  return (
    <div id="experience" className="section animate-fade-in">
      <ScrollReveal animation="up">
        <div className="text-center mb-4">
          <h2 className="display-6 mb-2">Professional Experience</h2>
          <p className="text-muted">
            Building innovative solutions and leading teams to success
          </p>
        </div>
      </ScrollReveal>

      <div className="position-relative">
        {experiences.map((exp, index) => (
          <ScrollReveal key={index} animation="up" delay={200}>
            <div className="card mb-4 border-0 shadow-sm overflow-hidden experience-card">
              {/* Company Info Section */}
              <div className="experience-company-info">
                <div className="text-white mb-3">
                  <h3 className="h2 fw-bold mb-2">{exp.title}</h3>
                  <p className="mb-2 opacity-90">
                    <i className="bi bi-building me-2"></i>
                    {exp.company}
                  </p>
                  <p className="mb-2 opacity-75 small">
                    <i className="bi bi-geo-alt me-2"></i>
                    {exp.location}
                  </p>
                </div>
                <div className="d-flex flex-wrap gap-2">
                  <span className="badge bg-primary">
                    <i className="bi bi-briefcase me-1"></i>
                    {exp.type}
                  </span>
                  <span className="badge bg-light text-dark">
                    <i className="bi bi-calendar-event me-1"></i>
                    {exp.period}
                  </span>
                </div>
              </div>

              {/* Main Content Section */}
              <div className="card-body p-4">
                {/* Overview */}
                <ScrollReveal animation="up" delay={400}>
                  <div className="mb-4">
                    <h4 className="h5 text-primary mb-3">Overview</h4>
                    <p className="text-muted mb-0">{exp.description}</p>
                  </div>
                </ScrollReveal>

                {/* Technologies */}
                <ScrollReveal animation="up" delay={500}>
                  <div className="mb-4">
                    <h4 className="h5 text-primary mb-3">
                      Technologies & Skills
                    </h4>
                    <div className="d-flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="badge bg-light text-secondary px-3 py-2"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>

                {/* Key Achievements */}
                <ScrollReveal animation="up" delay={600}>
                  <div className="mb-4">
                    <h4 className="h5 text-primary mb-3">Key Achievements</h4>
                    <ul className="list-unstyled mb-0">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="mb-3 d-flex align-items-start">
                          <i className="bi bi-trophy text-warning me-2 mt-1"></i>
                          <span className="text-muted">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>

                {/* Responsibilities */}
                <ScrollReveal animation="up" delay={700}>
                  <div>
                    <h4 className="h5 text-primary mb-3">
                      Core Responsibilities
                    </h4>
                    <div className="d-flex flex-column gap-3">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <div key={idx} className="d-flex align-items-start">
                          <i className="bi bi-check2-circle text-success me-2 mt-1"></i>
                          <span className="text-muted">{responsibility}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
};

export default Experience;
