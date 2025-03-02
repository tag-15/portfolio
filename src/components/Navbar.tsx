import "../index.css";

const Navbar = () => {
  return (
    <>
      <nav className=" navbar navbar-default navbar-expand-lg navbar-expand-sm navbar-light navbar-fixed-top">
        <a className="navbar-brand p-3" href="#">
          TRG
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                <strong>Introduction</strong>{" "}
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <strong>Education</strong>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <strong>Experience</strong>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
