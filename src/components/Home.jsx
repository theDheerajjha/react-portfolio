import React from "react";

export default function Home() {
  return (
    <div className="intro-container">
      <div className="intro-text">
        <h1 className="intro-heading">Hi, I'm Dheeraj</h1>
        <p className="intro-subheading">
          <h2>
            <span className="engineer">Front End</span> {"<"} Engineer {"/"}
            {">"}
          </h2>
          With a passion for creating User-friendly Web Experiences.
        </p>
      </div>
      <div className="intro-image">
        <img
          src="https://avatars.githubusercontent.com/u/52864945?v=4"
          alt="Profile picture"
        />
      </div>
    </div>
  );
}
