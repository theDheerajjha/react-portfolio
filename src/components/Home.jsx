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
            {/* <h2>
            <span className="engineer">Frontend</span> {"<"} Engineer {"/"}
            {">"}
          </h2> */}
            <h2>
              <span className="engineer">Frontend </span> Engineer
            </h2>
            With a passion for creating User-friendly Web Experiences.
          </p>
        </div>
        <div className="mb-2 intro-buttons">
          <Button
            onClick={() => (window.location = "mailto:write4dheeraj@gmail.com")}
            variant="primary"
            size="lg"
          >
            &nbsp; &nbsp;Hire Me&nbsp; &nbsp;{" "}
          </Button>{" "}
          <Button
            href="https://drive.google.com/file/d/1-yo-W8dS0oIvdcGVTrKMhR_nY3_bFnU1/view"
            variant="secondary"
            size="lg"
          >
            &nbsp; &nbsp;Resume&nbsp; &nbsp;
          </Button>
        </div>
      </section>
      <section className="intro-image-section">
        <img src="https://i.ibb.co/59CR5Wz/DP.jpg" alt="Profile picture" />
      </section>
    </div>
  );
}
