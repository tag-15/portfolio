const Projects = () => {
  const projects = [
    {
      title: "Device Security Using Deepface",
      description:
        "Implemented face recognition model which emails an error message and powers off the system if an unknown face is detected",
      language: "Python",
      tags: ["Python", "Tensorflow", "OpenCV"],
      stars: 12,
      forks: 5,
    },
    {
      title: "Secure Electronic Voting Machine, VIT-AP",
      description:
        "A secure electronic voting machine that allows users to cast votes securely and transparently.",
      language: "C",
      tags: ["C", "Arduino"],
      stars: 8,
      forks: 3,
    },
    {
      title: "Health And Fitness Application, UTA",
      description:
        "This application helps end-users track their workout goals, weight and monitor their progress. This application can be integrated with devices like Fitbit, Apple Watch, Google Fit etc.",
      language: "Java",
      tags: ["Java", "Spring"],
      stars: 15,
      forks: 7,
    },
    {
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website built with React and TypeScript showcasing my projects and skills.",
      language: "React",
      tags: ["React", "TypeScript", "Bootstrap", "AWS"],
      stars: 10,
      forks: 4,
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
                  <p className="project-title text-primary">{project.title}</p>
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
