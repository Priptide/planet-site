import "tailwindcss/tailwind.css";

import * as THREE from "three";

import React, { useEffect } from "react";

import SceneInit from "./lib/SceneInit";

function App() {
  useEffect(() => {
    let test = new SceneInit();
    test.initScene();
    test.animate();

    const sunGeometry = new THREE.SphereGeometry(8, 32, 32);
    const sunMaterial = new THREE.MeshNormalMaterial();
    const sunMesh = new THREE.Mesh(sunGeometry, sunMaterial);
    sunMesh.position.set(10, 0, 0);
    sunMesh.castShadow = true;
    const solarSystem = new THREE.Group();
    solarSystem.add(sunMesh);

    const moonGeometry = new THREE.SphereGeometry(8, 32, 32);
    const moonMaterial = new THREE.MeshNormalMaterial();
    const moonMesh = new THREE.Mesh(moonGeometry, moonMaterial);
    moonMesh.position.set(-10, 0, 0);
    moonMesh.castShadow = true;
    solarSystem.add(moonMesh);
    test.scene?.add(solarSystem);
  });

  return (
    <div className="flex flex-col items-center justify-center">
      <canvas id="myThreeJsCanvas" />
    </div>
  );
}

export default App;
