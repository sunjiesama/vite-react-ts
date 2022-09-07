import React, { useEffect } from 'react'
import { BoxGeometry, Mesh, MeshBasicMaterial, PerspectiveCamera, Scene, WebGLRenderer } from 'three'

const Index: React.FC = () => {
  const scene = new Scene()

  // 创建透视摄像机
  // 第一个参数是视野角度（FOV）。视野角度就是无论在什么时候，你所能在显示器上看到的场景的范围，它的单位是角度(与弧度区分开)。
  // 第二个参数是长宽比（aspect ratio）。 也就是你用一个物体的宽除以它的高的值。比如说，当你在一个宽屏电视上播放老电影时，可以看到图像仿佛是被压扁的。
  const camera = new PerspectiveCamera(75, 500 / 500, 0.1, 1000)

  const renderer = new WebGLRenderer()

  // 创建立方体对象
  const geometry = new BoxGeometry(1, 1, 1)

  // 创建材质，这里只设置了颜色
  const material = new MeshBasicMaterial({ color: 0xffffff })

  // 创建网格
  const cube = new Mesh(geometry, material)
  scene.add(cube)

  camera.position.z = 5

  // 渲染场景(渲染循环,animate会一直调用自身)
  const animate = (): void => {
    // window.requestAnimationFrame() 告诉浏览器——你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行
    //  若你想在浏览器下次重绘之前继续更新下一帧动画，那么回调函数自身必须再次调用
    requestAnimationFrame(animate)

    cube.rotation.x += 0.01

    cube.rotation.y += 0.01

    renderer.render(scene, camera)
  }

  useEffect(() => {
    const divElement = document.getElementById('three')
    if (divElement !== null && divElement !== undefined) {
      const { height, width } = window.getComputedStyle(divElement)
      renderer.setSize(parseInt(height), parseInt(width))

      divElement.appendChild(renderer.domElement)
    }

    animate()
  }, [])
  return <div id="three" className="w-96 h-96" />
}
export default Index
