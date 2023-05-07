import React from "react";
import Button from "react-bootstrap/Button";

export default function Resume() {
  return (
    // <div className="about-me">
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
    // </div>
    <div className="resume-section">
      <iframe
        className="resume-frame"
        src="https://drive.google.com/file/d/1-yo-W8dS0oIvdcGVTrKMhR_nY3_bFnU1/preview"
        width="50%"
        height="385"
        allow="autoplay"
      ></iframe>{" "}
      <Button
        variant="secondary"
        size="lg"
        href="https://drive.google.com/file/d/1-yo-W8dS0oIvdcGVTrKMhR_nY3_bFnU1/view"
      >
        Download
      </Button>
    </div>
  );
}
