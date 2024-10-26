import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import NovelPage from "./pages/NovelPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <a
        href="https://bungei-zorozoro.com/2/1729169756/c"
        className="btn btn-svg"
      >
        <svg width="200" height="50" role="img">
          <title>SvgButton</title>
          <rect x="2" y="2" rx="0" width="200" height="50" fill="none" />
        </svg>
        <span>PUSH！</span>
      </a> */}
      <NovelPage />
    </>
  );
}

export default App;
