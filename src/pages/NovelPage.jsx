import React, { useState, useEffect } from "react";

const containerStyle = {
  justifyContent: "center",
  alignItems: "flex-start",
  minHeight: "100vh",
  width: "fit-content",
  margin: "0 auto",
  padding: "20px",
};

const verticalTextStyle = {
  writingMode: "vertical-rl",
  textOrientation: "upright",
  whiteSpace: "pre-wrap",
  lineHeight: "2",
  maxHeight: "calc(100vh - 40px)",
  overflowY: "auto",
  textAlign: "left",
  fontSize: "2rem",
  fontWeight: "400",
  letterSpacing: "0.05em",
};

const NovelPage = () => {
  const [textContent, setTextContent] = useState("");
  const [animatedText, setAnimatedText] = useState("");

  useEffect(() => {
    fetch("message.txt")
      .then((response) => response.text())
      .then((data) => setTextContent(data.replace(/<br\/>/g, "\n")))
      .catch((error) => console.error("Error loading text file:", error));
  }, []);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < textContent.length) {
        setAnimatedText((prev) => prev + textContent[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [textContent]);

  return (
    <div style={containerStyle}>
      <div style={verticalTextStyle}>
        {animatedText.split("\n").map((line, index) => (
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
