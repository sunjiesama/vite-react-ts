import React, { useEffect } from 'react'

const Index: React.FC = () => {
  const BMapGL = window.BMapGL
  useEffect(() => {
    const map = new BMapGL.Map('container')
    const point = new BMapGL.Point(116.404, 39.915)
    map.centerAndZoom(point, 15)

    map.enableScrollWheelZoom(true) // 开启滚轮缩放
  }, [])
  return <div id="container" className="h-full w-full"></div>
}
export default Index
