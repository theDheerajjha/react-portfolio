import React from "react";
import Button from "react-bootstrap/Button";

export default function Home() {
  return (
    <div className="intro-container">
      <section className="intro-text">
        <div>
          <h2 className="intro-heading">
            Hi, I'm <span className="full-name">Dheeraj</span>
          </h2>
          <p className="intro-subheading">
            <h2>
              <span className="engineer">Frontend </span> Engineer
            </h2>
            With a passion for creating User-friendly Web Experiences.
          </p>
        </div>
        <div className="mb-2 intro-buttons">
          <Button
            onClick={() => (window.location = "mailto:write4dheeraj@gmail.com")}
            variant="outline-primary"
            size="sm"
            className="mr-2"
            style={{ margin: "0 5px" }}
          >
            Hire Me
          </Button>
          <Button
            href="https://github.com/theDheerajjha"
            variant="outline-warning"
            size="sm"
            className="mr-2"
            style={{ margin: "0 5px" }}
          >
            Github <i className="fab fa-github"></i>
          </Button>
          <Button
            href="https://drive.google.com/file/d/1x4WM_BoD0JgexyH_HyqM08iiJoo4z7SD/view"
            variant="outline-info"
            size="sm"
            className="mr-2"
            style={{ margin: "0 5px" }}
          >
            Resume
          </Button>

          <Button
            href="https://dev.to/thedheerajjha"
            variant="outline-success"
            size="sm"
            style={{ margin: "0 5px" }}
          >
            Blog's
          </Button>
        </div>
      </section>
      <section className="intro-image-section">
        <img src="https://i.ibb.co/59CR5Wz/DP.jpg" alt="Profile picture" />
      </section>
    </div>
  );
}
