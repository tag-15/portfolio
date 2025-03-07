const Skills = () => {
  const skillCategories = [
    {
      title: "Development Languages",
      icon: "bi-code-slash",
      skills: ["C", "C++", "Java", "Python", "Perl", "Ruby"],
      color: "primary",
    },
    {
      title: "Database Technologies",
      icon: "bi-database",
      skills: ["MySQL", "SQL Server", "Oracle"],
      color: "success",
    },
    {
      title: "Web Technologies",
      icon: "bi-globe",
      skills: [
        "React",
        "JavaScript",
        "HTML",
        "CSS",
        "Bootstrap",
        "Chakra UI",
        "PHP",
      ],
      color: "info",
    },
    {
      title: "DevOps & Cloud",
      icon: "bi-cloud",
      skills: ["Git", "Docker", "AWS", "Jenkins", "Terraform"],
      color: "warning",
    },
    {
      title: "Soft Skills",
      icon: "bi-person-workspace",
      skills: [
        "Team Leadership",
        "Problem Solving",
        "Agile Methodologies",
        "Communication",
      ],
      color: "danger",
    },
    {
      title: "Languages",
      icon: "bi-translate",
      skills: ["English", "Hindi", "Telugu"],
      color: "secondary",
    },
  ];

  return (
    <div id="skills" className="section animate-fade-in">
      <div className="container">
        <h2 className="text-center mb-5">Skills & Expertise</h2>

        <div className="row g-4">
          {skillCategories.map((category, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-4">
                    <div
                      className={`rounded-circle bg-${category.color} bg-opacity-10 p-3 me-3`}
                    >
                      <i
                        className={`bi ${category.icon} text-${category.color} fs-4`}
                      ></i>
                    </div>
                    <h3 className="h5 mb-0">{category.title}</h3>
                  </div>

                  <div className="d-flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className={`badge bg-${category.color} bg-opacity-10 text-${category.color} px-3 py-2`}
                      >
                        {skill}
                      </span>
                    ))}
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

export default Skills;
