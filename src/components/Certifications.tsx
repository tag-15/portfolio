import azure from "../assets/azure.png";
import aws from "../assets/aws.png";
import oracle from "../assets/oracle.png";

const Certifications = () => {
  const certifications = [
    {
      title: "Microsoft Azure Fundamentals",
      issuer: "Microsoft",
      image: azure,
      date: "2023",
      credentialId: "Azure-123",
      skills: ["Cloud Computing", "Azure Services", "Cloud Security"],
      color: "info",
      link: "#",
    },
    {
      title: "AWS Certified Developer Associate",
      issuer: "Amazon Web Services",
      image: aws,
      date: "2023",
      credentialId: "AWS-123",
      skills: ["AWS Services", "Cloud Development", "Serverless"],
      color: "warning",
      link: "#",
    },
    {
      title: "Oracle Certified Java Developer",
      issuer: "Oracle",
      image: oracle,
      date: "2022",
      credentialId: "OCJD-123",
      skills: ["Java", "Object-Oriented Programming", "Software Development"],
      color: "danger",
      link: "#",
    },
  ];

  return (
    <div className="section animate-fade-in">
      <div className="container">
        <h2 className="text-center mb-5">Professional Certifications</h2>

        <div className="row g-4">
          {certifications.map((cert, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="card h-100 certification-card">
                <div className="card-body p-4">
                  {/* Certificate Header */}
                  <div className="text-center mb-4">
                    <div className="certification-image-wrapper mb-3">
                      <img
                        src={cert.image}
                        alt={`${cert.title} logo`}
                        className="certification-image"
                      />
                    </div>
                    <h3 className="h5 mb-1">{cert.title}</h3>
                    <p className="text-muted mb-0">{cert.issuer}</p>
                  </div>

                  {/* Certificate Details */}
                  <div className="mb-4">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <span className="text-muted">
                        <i className="bi bi-calendar-event me-2"></i>
                        Issued {cert.date}
                      </span>
                      <span
                        className={`badge bg-${cert.color} bg-opacity-10 text-${cert.color}`}
                      >
                        Active
                      </span>
                    </div>
                    <div className="text-muted small mb-3">
                      <i className="bi bi-shield-check me-2"></i>
                      Credential ID: {cert.credentialId}
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="mb-4">
                    <h4 className="h6 text-secondary mb-3">Key Skills</h4>
                    <div className="d-flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className={`badge bg-${cert.color} bg-opacity-10 text-${cert.color}`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Verify Button */}
                  <a
                    href={cert.link}
                    className={`btn btn-${cert.color} btn-sm w-100`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-patch-check-fill me-2"></i>
                    Verify Certificate
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
