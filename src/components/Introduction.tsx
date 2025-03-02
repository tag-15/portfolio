import img from "../assets/img.jpeg";

const Introduction = () => {
  return (
    <div className="container lead">
      <img src={img} className="image-thumbnail mx-auto d-block" />
      <h2 className="text-center mt-3">Tarun Gurijala</h2>
      <hr />
      <div className="container row">
        <div className="col-xs-6 col-sm-6">
          <p>
            <strong>Contact:</strong> {"+1(913)-945-0389"}
          </p>
        </div>
        <div className="col-xs-6 col-sm-6">
          <p className="text-end">
            <strong>Email:</strong> tarunr.gurijala@gmail.com
          </p>
        </div>
      </div>
      <h4 className="mt-2">About</h4>
      <p>
        Hey! I'm Tag (TArun Gurijala). Thank you for visiting my page. Here, you
        can get to know me better, if you don't already. &#128516;
      </p>
      <p>
        {" "}
        I am a{" "}
        <span className="text-brown">
          <strong>Computer Science</strong>
        </span>{" "}
        Student and Professional with experience through university coursework
        and organizations, working with teams and other colleagues. I have tons
        of individual project experience and the enthusiasm to learn more
        exciting concepts, technologies and many other things which I do not
        know about. I like to grow stronger through experience and believe that
        is the optimal way to do so. I'm a huge enthusiast in{" "}
        <span className="text-brown">
          <strong>Full Stack Development</strong>
        </span>
        ,
        <span className="text-brown">
          <strong> DevOps</strong>
        </span>{" "}
        and
        <span className="text-brown">
          <strong> Cloud Technologies</strong>
        </span>
      </p>
      <p>
        That sums up pretty much everything about me. Still want to know
        more??.. Scroll ahead.
      </p>
      <hr />
    </div>
  );
};

export default Introduction;
