import exp from "../assets/exp.jpg";
const Experience = () => {
  return (
    <>
      <div className="container lead">
        <h4>Experience</h4>
        <img src={exp} className="exp mt-4" />
        <p className="mt-3">
          <strong>Systems Analyst</strong>
          <ul>
            <li>
              Managed user role balance using Agile methodologies to enhance
              system efficiency.
            </li>
            <li>
              Contributed to Angular web development, integrating automated
              scripts to improve website functionality.
            </li>
            <li>
              Assisted in database management and optimization with Microsoft
              SQL Server.
            </li>
            <li>
              Collaborated with cross-functional teams to ensure seamless system
              performance and user experience.
            </li>
            <li>
              Provided analytical support for system enhancements and
              troubleshooting.
            </li>
          </ul>
        </p>
        <hr />
      </div>
    </>
  );
};

export default Experience;
