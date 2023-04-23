import Figure from "react-bootstrap/Figure";

function AboutMe() {
  return (
    <div className="about-me">
      <Figure className="figure-box">
        <Figure.Image
          className="figure-img"
          width={171}
          height={180}
          alt="171x180"
          src="https://avatars.githubusercontent.com/u/52864945?v=4"
        />
        <Figure.Caption className="figure-caption">
          <div class="description">
            <h2>Software Developer</h2>
            <p>
              With industry experience building Web Applications and Websites. I
              specialize in JavaScript and have professional experience working
              with Frontend technologies like Vue 3, Angular, JQuery, and HTML.
              I am also familiar with Backend technologies like Node.Js,
              Express.JS, and No-SQL Databases.
            </p>
          </div>
        </Figure.Caption>
      </Figure>
      <div class="card">
        <div class="card-body skill-section">
          <h2 class="card-title">Skills</h2>
          <div class="row">
            <div class="col-md-4">
              <div class="skill text-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg"
                  class="img-fluid"
                  alt="Vue"
                />
              </div>
            </div>
            <div class="col-md-4">
              <div class="skill text-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                  class="img-fluid"
                  alt="React"
                />
              </div>
            </div>
            <div class="col-md-4">
              <div class="skill text-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg"
                  class="img-fluid"
                  alt="Angular"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
