const Projects = () => {
  const projects = [
    {
      title: "Health And Fitness Tracker",
      description:
        "A comprehensive health and fitness tracking application that helps users monitor their daily activities, nutrition, and workout progress.",
      language: "TypeScript",
      tags: ["React", "Node.js", "MongoDB"],
      stars: 12,
      forks: 5,
      githubLink: "#",
      demoLink: "#",
    },
    {
      title: "Online Lung Cancer Survey",
      description:
        "An interactive survey platform for collecting and analyzing lung cancer risk factors and patient data.",
      language: "Python",
      tags: ["Angular", "Python", "ML"],
      stars: 8,
      forks: 3,
      githubLink: "#",
      demoLink: "#",
    },
    {
      title: "Cloud Infrastructure Management",
      description:
        "Automated cloud infrastructure deployment and management system using modern DevOps practices.",
      language: "TypeScript",
      tags: ["AWS", "Terraform", "Docker"],
      stars: 15,
      forks: 7,
      githubLink: "#",
      demoLink: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website built with React and TypeScript showcasing my projects and skills.",
      language: "TypeScript",
      tags: ["React", "TypeScript", "Bootstrap"],
      stars: 10,
      forks: 4,
      githubLink: "#",
      demoLink: "#",
    },
  ];

  return (
    <div id="projects" className="section animate-fade-in">
      <div className="container">
        <h2 className="text-center mb-5">Featured Projects</h2>
        <div className="row g-4">
          {projects.map((project, index) => (
            <div key={index} className="col-md-6">
              <div className="project-card">
                <div className="project-content">
                  <a href={project.githubLink} className="project-title">
                    {project.title}
                  </a>
                  <p className="project-description">{project.description}</p>

                  <div className="project-tech-stack">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="tech-tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="project-meta">
                    <div className="project-language">
                      <span
                        className={`language-dot ${project.language.toLowerCase()}`}
                      ></span>
                      {project.language}
                    </div>
                    <div className="project-stat">
                      <i className="bi bi-star"></i>
                      {project.stars}
                    </div>
                    <div className="project-stat">
                      <i className="bi bi-git"></i>
                      {project.forks}
                    </div>
                  </div>

                  <div className="project-links">
                    <a href={project.githubLink} className="project-link">
                      <i className="bi bi-github"></i>
                      View Source
                    </a>
                    <a href={project.demoLink} className="project-link">
                      <i className="bi bi-box-arrow-up-right"></i>
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
