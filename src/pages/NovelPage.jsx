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

// import React, { useState, useEffect } from "react";

// const NovelPage = () => {
//   const [textContent, setTextContent] = useState("");
//   const [displayedText, setDisplayedText] = useState("");
//   const [isAnimating, setIsAnimating] = useState(true);

//   // テキストを読み込む
//   useEffect(() => {
//     fetch("/message.txt")
//       .then((response) => response.text())
//       .then((data) => setTextContent(data))
//       .catch((error) => console.error("Error loading text file:", error));
//   }, []);

//   // アニメーション効果
//   useEffect(() => {
//     if (!textContent || !isAnimating) return;

//     let currentIndex = 0;
//     const characters = textContent.split("");

//     const animationInterval = setInterval(() => {
//       if (currentIndex < characters.length) {
//         setDisplayedText((prev) => prev + characters[currentIndex]);
//         currentIndex++;
//       } else {
//         clearInterval(animationInterval);
//         setIsAnimating(false);
//       }
//     }, 50); // 表示速度（ミリ秒）

//     return () => clearInterval(animationInterval);
//   }, [textContent, isAnimating]);

//   return (
//     <div className="flex justify-center items-start min-h-screen p-5">
//       <div className="writing-vertical-rl whitespace-pre-wrap leading-loose max-h-[calc(100vh-40px)] overflow-y-auto m-0 text-left text-2xl font-normal tracking-wider">
//         {displayedText.split("<br/>").map((line, index) => (
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

const NovelPage = () => {
  const [textContent, setTextContent] = useState("");
  const [displayedText, setDisplayedText] = useState("");
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    fetch("/message.txt")
      .then((response) => response.text())
      .then((data) => setTextContent(data))
      .catch((error) => console.error("Error loading text file:", error));
  }, []);

  useEffect(() => {
    if (!textContent || !isAnimating) return;

    let currentIndex = 0;
    const characters = textContent.split("");

    const animationInterval = setInterval(() => {
      if (currentIndex < characters.length) {
        setDisplayedText((prev) => prev + characters[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(animationInterval);
        setIsAnimating(false);
      }
    }, 50);

    return () => clearInterval(animationInterval);
  }, [textContent, isAnimating]);

  return (
    <div className="flex justify-center items-start min-h-screen bg-slate-50 p-5">
      <div
        className="
          writing-vertical-rl
          text-right
          h-[90vh]
          max-w-full
          overflow-x-auto
          bg-white
          p-8
          shadow-md
          rounded-lg
          text-xl
          leading-loose
          tracking-wider
          whitespace-pre-wrap
        "
        style={{
          writingMode: "vertical-rl",
          textOrientation: "upright",
          fontFamily: '"Noto Serif JP", serif',
        }}
      >
        {displayedText.split("<br/>").map((line, index) => (
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
