// import React, { useState, useEffect } from "react";

// const containerStyle = {
//   justifyContent: "center",
//   alignItems: "flex-start",
//   minHeight: "100vh",
//   width: "auto",
//   padding: "20px",
// };

// const verticalTextStyle = {
//   writingMode: "vertical-rl",
//   textOrientation: "upright",
//   whiteSpace: "pre-wrap",
//   lineHeight: "2",
//   maxHeight: "calc(100vh - 40px)",
//   overflowY: "auto",
//   margin: "0",
//   textAlign: "left",
//   fontSize: "2rem",
//   fontWeight: "400",
//   letterSpacing: "0.05em",
// };

// const NovelPage = () => {
//   const [textContent, setTextContent] = useState("");

//   useEffect(() => {
//     fetch("/message.txt")
//       .then((response) => response.text())
//       .then((data) => setTextContent(data))
//       .catch((error) => console.error("Error loading text file:", error));
//   }, []);

//   return (
//     <div style={containerStyle}>
//       <div style={verticalTextStyle}>
//         {textContent.split("<br/>").map((line, index) => (
//           <React.Fragment key={index}>
//             {line}
//             <br />
//           </React.Fragment>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default NovelPage;

import React, { useState, useEffect } from "react";

const AnimatedNovelPage = () => {
  const [textContent, setTextContent] = useState("");
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  // スタイル定義
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    minHeight: "100vh",
    width: "auto",
    padding: "20px",
  };

  const verticalTextStyle = {
    writingMode: "vertical-rl",
    textOrientation: "upright",
    whiteSpace: "pre-wrap",
    lineHeight: "2",
    maxHeight: "calc(100vh - 40px)",
    overflowY: "auto",
    margin: "0",
    textAlign: "left",
    fontSize: "2rem",
    fontWeight: "400",
    letterSpacing: "0.05em",
  };

  // テキストファイルの読み込み
  useEffect(() => {
    fetch("/message.txt")
      .then((response) => response.text())
      .then((data) => {
        setTextContent(data.replace(/<br\/>/g, "\n"));
      })
      .catch((error) => console.error("Error loading text file:", error));
  }, []);

  // 文字のアニメーション処理
  useEffect(() => {
    if (textContent && currentIndex < textContent.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + textContent[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 50); // 50ミリ秒ごとに1文字表示

      return () => clearTimeout(timer);
    }
  }, [textContent, currentIndex]);

  return (
    <div style={containerStyle}>
      <div style={verticalTextStyle}>
        {displayedText.split("\n").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default AnimatedNovelPage;
