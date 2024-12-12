import React, { useEffect } from "react";
import {
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
  DirectionalLight,
  AmbientLight,
} from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
const Index: React.FC = () => {
  //  初始化场景
  const scene = new Scene();
  //  初始化相机
  const camera = new PerspectiveCamera(75, 500 / 500, 0.1, 1000);

  camera.position.z = 5;
  //  初始化加载器
  const loader = new GLTFLoader();
  // 初始化WebGl渲染器
  const renderer = new WebGLRenderer();
  // 初始化轨道控制器
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.autoRotate = true;

  loader.load(
    "/public/glb/girl.glb",
    (gltf) => {
      scene.add(gltf.scene);
    },
    undefined,
    (error) => {
      console.error("An error occurred123:", error);
    },
  );

  const light = new DirectionalLight(0xffffff, 20); // 添加方向光
  light.position.set(10, 10, 5);
  scene.add(light);

  const ambientLight = new AmbientLight(0x404040, 20); // 添加环境光
  scene.add(ambientLight);

  // 渲染场景(渲染循环,animate会一直调用自身)
  function animate() {
    requestAnimationFrame(animate);
    controls.update();

    renderer.render(scene, camera);
  }

  useEffect(() => {
    const divElement = document.getElementById("girlScene");
    if (divElement !== null && divElement !== undefined) {
      const { height, width } = window.getComputedStyle(divElement);
      renderer.setSize(parseInt(height), parseInt(width));

      if (divElement.children.length === 0) {
        divElement.appendChild(renderer.domElement);
      }

      animate();
    }
  }, []);

  return <div id="girlScene" className="w-96 h-96" />;
};

export default Index;
