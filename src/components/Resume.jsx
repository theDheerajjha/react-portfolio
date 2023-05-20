import React from "react";
import { useEffect, useState } from "react";
import { Blocks } from "react-loader-spinner";
import Button from "react-bootstrap/Button";

export default function Resume() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        console.log("hello");
        setLoading(false);
      }, 5000);
    }
  }, []);

  const bottomComponent = loading ? (
    <Blocks
      visible={loading}
      height="80"
      width="80"
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass="blocks-wrapper"
    />
  ) : (
    <Button
      variant="secondary"
      size="lg"
      href="https://drive.google.com/file/d/1-yo-W8dS0oIvdcGVTrKMhR_nY3_bFnU1/view"
    >
      Download
    </Button>
  );
  return (
    <div className="resume-section">
      <iframe
        className="resume-frame"
        src="https://drive.google.com/file/d/1-yo-W8dS0oIvdcGVTrKMhR_nY3_bFnU1/preview"
        width="60%"
        height="385"
        allow="autoplay"
      ></iframe>{" "}
      {bottomComponent}
    </div>
  );
}
