import azure from "../assets/azure.png";
import aws from "../assets/aws.png";
import oracle from "../assets/oracle.png";
const Certifications = () => {
  return (
    <div className="container lead">
      <h4>Certifications</h4>
      <div className="container row">
        <div className="col-xs-6 col-sm-6">
          <img src={aws} />
        </div>
        <div className="col-xs-6 col-sm-6">
          <img src={azure} className="azure float-end" />
        </div>
      </div>
      <div className="container ">
        <div>
          <img src={oracle} className="oracle mx-auto d-block float-right" />
        </div>
      </div>

      <hr />
    </div>
  );
};

export default Certifications;
