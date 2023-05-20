import React from "react";
import Button from "react-bootstrap/Button";

export default function Resume() {
  return (
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
