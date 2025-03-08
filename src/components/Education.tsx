import vitap from "../assets/vitap.png";
import uta from "../assets/uta.jpg";

const Education = () => {
  const education = [
    {
      school: "University of Texas at Arlington",
      degree: "Master of Science",
      field: "Computer Science",
      year: "2025",
      logo: uta,
      location: "Arlington, TX",
    },
    {
      school: "VIT-AP University",
      degree: "Bachelor of Technology",
      field: "Computer Science and Engineering",
      year: "2022",
      logo: vitap,
      location: "Amaravati, India",
    },
  ];

  return (
    <div id="education" className="section animate-fade-in">
      <div className="container">
        <h2 className="text-center mb-5">Education</h2>

        <div className="row justify-content-center g-4">
          {education.map((edu, index) => (
            <div key={index} className="col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-4">
                    <img
                      src={edu.logo}
                      alt={edu.school}
                      className="me-3 rounded"
                      style={{
                        width: "64px",
                        height: "64px",
                        objectFit: "contain",
                      }}
                    />
                    <div>
                      <h3 className="h5 mb-1 text-primary">{edu.school}</h3>
                      <p className="text-muted mb-0">
                        <i className="bi bi-geo-alt me-2"></i>
                        {edu.location}
                      </p>
                    </div>
                  </div>

                  <div className="mb-3">
                    <h4 className="h6 text-secondary mb-2">Degree</h4>
                    <p className="mb-0">
                      <strong>{edu.degree}</strong> in {edu.field}
                    </p>
                  </div>

                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <h4 className="h6 text-secondary mb-2">Graduation</h4>
                      <p className="mb-0">
                        <i className="bi bi-calendar-event me-2"></i>
                        {edu.year}
                      </p>
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

export default Education;
