import img from "../assets/img.jpeg";

const Introduction = () => {
  return (
    <div id="introduction" className="section animate-fade-in">
      <div className="container">
        <div className="text-center mb-5">
          <img
            src={img}
            className="image-thumbnail mb-4"
            alt="Tarun Gurijala"
          />
          <h1 className="display-4 mb-3">Tarun Gurijala</h1>
          <div className="d-flex justify-content-center gap-4 mb-4">
            <a href="tel:+1(913)-945-0389" className="text-decoration-none">
              <i className="bi bi-telephone me-2"></i>
              +1(913)-945-0389
            </a>
            <a
              href="mailto:tarunr.gurijala@gmail.com"
              className="text-decoration-none"
            >
              <i className="bi bi-envelope me-2"></i>
              tarunr.gurijala@gmail.com
            </a>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h3 className="mb-4">About Me</h3>
            <div className="lead">
              <p className="mb-4">
                Hey! I'm Tag (TArun Gurijala). Thank you for visiting my page.
                Here, you can get to know me better, if you don't already.
                &#128516;
              </p>
              <p className="mb-4">
                I am a <span className="text-brown">Computer Science</span>{" "}
                Student and Professional with experience through university
                coursework and organizations, working with teams and other
                colleagues. I have tons of individual project experience and the
                enthusiasm to learn more exciting concepts, technologies and
                many other things which I do not know about.
              </p>
              <p className="mb-4">
                I like to grow stronger through experience and believe that is
                the optimal way to do so. I'm a huge enthusiast in{" "}
                <span className="text-brown">Full Stack Development</span>,{" "}
                <span className="text-brown">DevOps</span> and{" "}
                <span className="text-brown">Cloud Technologies</span>
              </p>
              <p className="mb-0">
                That sums up pretty much everything about me. Still want to know
                more? Scroll ahead!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
