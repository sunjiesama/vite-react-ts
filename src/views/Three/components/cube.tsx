import React, { useEffect } from "react";

import {
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
  LineBasicMaterial,
  Vector3,
  BufferGeometry,
  Line,
} from "three";

const Index: React.FC = () => {
  const renderer = new WebGLRenderer();
  const camera = new PerspectiveCamera(75, 500 / 500, 0.1, 1000);
  camera.position.set(0, 0, 100);
  camera.lookAt(0, 0, 0);

  const scene = new Scene();

  const material = new LineBasicMaterial({ color: "fff" });

  const points = [];
  points.push(new Vector3(-10, 0, 0));
  points.push(new Vector3(0, 10, 0));
  points.push(new Vector3(10, 0, 0));

  const geometry = new BufferGeometry().setFromPoints(points);
  const line = new Line(geometry, material);

  scene.add(line);

  useEffect(() => {
    const divElement = document.getElementById("threeLine");
    if (divElement !== null && divElement !== undefined) {
      const { height, width } = window.getComputedStyle(divElement);
      renderer.setSize(parseInt(height), parseInt(width));

      divElement.appendChild(renderer.domElement);
    }
    renderer.render(scene, camera);
  }, []);

  return <div id="threeLine" className="w-96 h-96" />;
};
export default Index;
