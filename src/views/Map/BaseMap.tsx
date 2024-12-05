import { useEffect } from "react";

const Index = () => {
  const BMapGL = window.BMapGL;
  useEffect(() => {
    const map = new BMapGL.Map("container");
    const point = new BMapGL.Point(116.404, 39.915);

    // 设初始化地图。 如果center类型为Point时，zoom必须赋值，范围3-19级，若调用高清底图（针对移动端开发）时，zoom可赋值范围为3-18级。如果center类型为字符串时，比如“北京”，zoom可以忽略，地图将自动根据center适配最佳zoom级别
    map.centerAndZoom(point, 15);

    // 允许地图可被鼠标滚轮缩放，默认禁用
    map.enableScrollWheelZoom(true); // 开启滚轮缩放
  }, []);
  return <div id="container" className="h-full w-full"></div>;
};
export default Index;
