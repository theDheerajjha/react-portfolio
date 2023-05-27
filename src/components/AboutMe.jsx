// function AboutMe() {
//   return (
//     <p>About Me</p>
//       );
// }

// export default AboutMe;
import React from "react";
function IntroSection() {
  const skills = [
    "React.Js",
    "Vue.Js",
    "TypeScript",
    "JavaScript",
    "HTML",
    "CSS",
    "Git",
  ];

  return (
    <>
      {/* <div className="intro-section">
        <h1 className="intro-section__title">Hi, I'm Dheeraj!</h1>
        <p className="intro-section__subtitle">
          A <span className="engineer">Frontend Developer</span> with expertise
          in:
        </p>
        <ul className="intro-section__skill-list">
          {skills.map((skill) => (
            <li key={skill} className="intro-section__skill-item">
              {skill}
            </li>
          ))}
        </ul>
      </div> */}

      {/* <div class="card">
        <div class="card-body skill-section">
          <div class="row">
            <div class="col-md-4">
              <div class="skill text-center">
                <img
                  src="https:upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg"
                  class="img-fluid"
                  alt="Vue"
                />
              </div>
            </div>
            <div class="col-md-4">
              <div class="skill text-center">
                <img
                  src="https:upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                  class="img-fluid"
                  alt="React"
                />
              </div>
            </div>
            <div class="col-md-4">
              <div class="skill text-center">
                <img
                  src="https:upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg"
                  class="img-fluid"
                  alt="Angular"
                />
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

function ExperienceSection() {
  return (
    <></>
    // <div className="experience-section">
    //   <h2 className="experience-section__title">Experience</h2>
    //   <div className="experience-section__item">
    //     <h3 className="experience-section__item-title">Frontend Engineer 1</h3>
    //     <p className="experience-section__item-subtitle">
    //       Axxess Technology Solutions | May 2022 - Present
    //     </p>
    //     <ul className="experience-section__item-list">
    //       <li>
    //         Developed and maintained web applications using React, JavaScript,
    //         HTML, and CSS
    //       </li>
    //       <li>
    //         Collaborated with designers and backend developers to implement new
    //         features and improvements
    //       </li>
    //       <li>Worked with Git for version control and project management</li>
    //     </ul>
    //   </div>
    //   <div className="experience-section__item">
    //     <h3 className="experience-section__item-title">
    //       Associate Software Developer (UI Team)
    //     </h3>
    //     <p className="experience-section__item-subtitle">
    //       Wolken Software, Bangalore | August 2021 - May 2022
    //     </p>
    //     <ul className="experience-section__item-list">
    //       <li>
    //         Developed single page applications via Angular 7 and UI tools like
    //         Material UI, Integrated web application logics.
    //       </li>
    //       <li>
    //         Fixed bugs in the Frontend to ensure smooth operation of the
    //         applications.
    //       </li>
    //       <li>
    //         Developed components to enhance the user experience integrated APIs
    //         to make connection with Back-end database.
    //       </li>
    //     </ul>
    //   </div>
    // </div>
  );
}

function AboutSection() {
  return (
    <>
      <div className="about-section">
        Hello, My name is Dheeraj Jha. I have been working as a front-end
        developer for the past two years. In terms of academics, I completed a
        B.Tech in IT in 2021 from Punjab Technical University. Currently, I am
        working on a project called Axxess Homecare, which is used by healthcare
        agencies in the US to provide homecare services. In the front-end
        development of this project, we utilize technologies such as Vue.js,
        Knockout.js, and jQuery, with a primary focus on jQuery. On the backend,
        we employ C# and use MySQL as our database. My role within the project
        involves gathering front-end requirements from the product team,
        collaborating with designers and the backend team to implement the
        desired features, conducting code reviews to ensure high code quality,
        maintaining documentation, and mentoring associates. That's a brief
        overview of my experience and responsibilities in my current role.
        <br />
        <br />
        <p className="about-section__text">
          If you have any questions, please feel free to{" "}
          <a
            onClick={() => (window.location = "mailto:write4dheeraj@gmail.com")}
            className="about-section__link"
          >
            contact me
          </a>
          !
        </p>
      </div>
    </>
    // <div className="about-section">
    //   <h2 className="about-section__title">About Me</h2>
    //   <p className="about-section__text">
    //     I have 2+ years of experience developing web applications using React,
    //     JavaScript, HTML, CSS, and Git. I'm passionate about creating beautiful
    //     and responsive user interfaces that provide a great user experience.
    //   </p>
    //   <p className="about-section__text">
    //     In my free time, I enjoy Playing Chess, Badminton and staying up-to-date
    //     with the latest developments in the frontend development world.
    //   </p>
    //   <p className="about-section__text">
    //     If you have any questions, please feel free to{" "}
    //     <a
    //       onClick={() => (window.location = "mailto:write4dheeraj@gmail.com")}
    //       className="about-section__link"
    //     >
    //       contact me
    //     </a>
    //     !
    //   </p>
    // </div>
  );
}

export default function AboutMe() {
  return (
    <div>
      <IntroSection />
      <ExperienceSection />
      <AboutSection />
    </div>
  );
}
