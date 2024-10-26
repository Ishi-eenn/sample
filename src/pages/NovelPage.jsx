import React, { useState, useEffect } from "react";

const containerStyle = {
  display: "flex",
  justifyContent: "center", // Center content horizontally
  alignItems: "center", // Center content vertically
  minHeight: "100vh",
  width: "100%",
  padding: "20px",
  overflow: "hidden", // Hide any overflow
};

const verticalTextStyle = {
  writingMode: "vertical-rl",
  textOrientation: "upright",
  whiteSpace: "pre-wrap",
  lineHeight: "2",
  maxHeight: "100%", // Use full height of the container
  overflowY: "auto",
  textAlign: "center", // Center align text horizontally within its container
  fontSize: "2rem",
  fontWeight: "400",
  letterSpacing: "0.05em",
  padding: "0", // Remove any padding
  margin: "0", // Remove any margin
};

const NovelPage = () => {
  const [textContent, setTextContent] = useState("");

  useEffect(() => {
    fetch("/message.txt")
      .then((response) => response.text())
      .then((data) => setTextContent(data))
      .catch((error) => console.error("Error loading text file:", error));
  }, []);

  return (
    <div style={containerStyle}>
      <div style={verticalTextStyle}>
        {textContent.split("<br/>").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default NovelPage;
