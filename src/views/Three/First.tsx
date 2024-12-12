import React, { useEffect } from "react";
import {
  BoxGeometry,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
  Clock,
  TextureLoader,
  AxesHelper,
} from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const Second: React.FC = () => {
  /**
   * 场景
   */
  const scene = new Scene();
  // 创建背景纹理，加载一张图片作为背景
  const loader = new TextureLoader();
  loader.load("/src/assets/WechatIMG59.jpg", function (texture) {
    scene.background = texture;
  });

  /**
   * 时间跟踪
   */
  const clock = new Clock();
  // 创建透视摄像机
  // 第一个参数是视野角度（FOV）。视野角度就是无论在什么时候，你所能在显示器上看到的场景的范围，它的单位是角度(与弧度区分开)。
  // 第二个参数是长宽比（aspect ratio）。 也就是你用一个物体的宽除以它的高的值。比如说，当你在一个宽屏电视上播放老电影时，可以看到图像仿佛是被压扁的。
  const camera = new PerspectiveCamera(75, 500 / 500, 0.1, 1000);

  const renderer = new WebGLRenderer();
  renderer.autoClear = true;
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.autoRotate = true;
  // 创建立方体对象
  const geometry = new BoxGeometry(1, 1, 1);

  // 创建材质，这里只设置了颜色
  const material = new MeshBasicMaterial({ color: "#ccc" });

  // 创建网格
  const cube = new Mesh(geometry, material);
  cube.position.set(2, 0, 2);
  const axesHelper = new AxesHelper(5);
  scene.add(axesHelper);
  scene.add(cube);

  camera.position.z = 5;

  // 渲染场景(渲染循环,animate会一直调用自身)
  const animate = (): void => {
    // window.requestAnimationFrame() 告诉浏览器——你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行
    //  若你想在浏览器下次重绘之前继续更新下一帧动画，那么回调函数自身必须再次调用
    requestAnimationFrame(animate);

    // requestAnimationFrame函数的调用频率取决于浏览器的刷新率，实际的刷新率可能因浏览器、硬件性能以及当前页面的负载而有所不同。
    // 可以使用three.js中内置的Clock来解决这个问题，通过使用Clock就能保证两秒自转一圈。
    const elapsedTime = clock.getElapsedTime();
    cube.rotation.y = elapsedTime * Math.PI;
    controls.update();
    renderer.render(scene, camera);
  };

  useEffect(() => {
    const divElement = document.getElementById("three");
    if (divElement !== null && divElement !== undefined) {
      const { height, width } = window.getComputedStyle(divElement);
      renderer.setSize(parseInt(height), parseInt(width));
      if (divElement.children.length === 0) {
        divElement.appendChild(renderer.domElement);
      }
    }

    animate();
  }, []);
  return <div id="three" className="w-96 h-96" />;
};
export default Second;
