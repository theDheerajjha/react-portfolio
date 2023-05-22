import React from "react";
import { useEffect, useState } from "react";
import { Blocks, InfinitySpin} from "react-loader-spinner";
import Button from "react-bootstrap/Button";

export default function Resume() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 5000);
    }
  }, []);

  const bottomComponent = loading ? (
    <InfinitySpin width="100" color="#4fa94d" />
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
