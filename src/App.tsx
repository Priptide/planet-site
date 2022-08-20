import "./App.css";

import React, { useEffect } from "react";

import SceneInit from "./lib/SceneInit";

function App() {
  useEffect(() => {
    let test = new SceneInit();
    test.initScene();
    test.animate();
  });
  return (
    <div className="App">
      <canvas id="threeJsCanvas" />
    </div>
  );
}

export default App;
