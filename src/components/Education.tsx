import vitap from "../assets/vitap.png";
import uta from "../assets/uta.jpg";
const Education = () => {
  return (
    <div className="container lead">
      <h4>Education</h4>
      <p className="mt-4">
        <img className="vitap rounded float-left" src={uta} />
        <span className="ml-2">
          {" "}
          &nbsp;<strong className="text-purple">Master of Science</strong> in
          Computer Science.
        </span>
      </p>
      <p>
        <strong>Earned - 2025</strong>
      </p>
      <p className="mt-4">
        <img className="vitap" src={vitap} />
        <span className="ml-2">
          {" "}
          &nbsp;<strong className="text-purple">
            Bachelor of Technology
          </strong>{" "}
          in Computer Science and Engineering.
        </span>
      </p>
      <p>
        <strong>Earned - 2022</strong>
      </p>
      <hr />
    </div>
  );
};

export default Education;
