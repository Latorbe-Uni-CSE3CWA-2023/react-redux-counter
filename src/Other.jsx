import React from "react";
import { useState } from "react";
import WindowWidthSize from "./Test";

const AppComponent = () => {
  const [showWindowSize, setShowWindowSize] = useState(true);

  return (
    <div style={{ textAlign: "center" }}>
      {showWindowSize && <WindowWidthSize />}
      <button onClick={() => setShowWindowSize(false)}>
        Click to set window size
      </button>
    </div>
  );
};

export default AppComponent;
