import Figure from "react-bootstrap/Figure";

function AboutMe() {
  return (
    // <div className="about-me">
    //   <Figure className="figure-box">
    //     <Figure.Image
    //       className="figure-img"
    //       width={171}
    //       height={180}
    //       alt="171x180"
    //       src="https://avatars.githubusercontent.com/u/52864945?v=4"
    //     />
    //     <Figure.Caption className="figure-caption">
    //       <div class="description">
    //         <h2>Frontend <span className="engineer">Engineer</span> </h2>
    //         <p>
    //           Building Web Applications.
    //         </p>
    //       </div>
    //     </Figure.Caption>
    //   </Figure>
    //   <div class="card">
    //     <div class="card-body skill-section">
    //       <h2 class="card-title">Skills</h2>
    //       <div class="row">
    //         <div class="col-md-4">
    //           <div class="skill text-center">
    //             <img
    //               src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg"
    //               class="img-fluid"
    //               alt="Vue"
    //             />
    //           </div>
    //         </div>
    //         <div class="col-md-4">
    //           <div class="skill text-center">
    //             <img
    //               src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
    //               class="img-fluid"
    //               alt="React"
    //             />
    //           </div>
    //         </div>
    //         <div class="col-md-4">
    //           <div class="skill text-center">
    //             <img
    //               src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg"
    //               class="img-fluid"
    //               alt="Angular"
    //             />
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>,
    <div className="intro-container">
      <div className="intro-text">
        <h1 className="intro-heading">Hi, I'm Dheeraj</h1>
        <p className="intro-subheading">
          <h2>
            <span className="engineer">Frontend</span> {'<'} Engineer {'/'}{'>'}{" "}
          </h2>
          with a passion for creating user-friendly Web experiences.
        </p>
        <p className="intro-description"></p>
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

export default AboutMe;
