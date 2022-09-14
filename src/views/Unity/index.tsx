import { useUnmount } from 'ahooks'
import React from 'react'
import { Unity, useUnityContext } from 'react-unity-webgl'

const Index: React.FC = () => {
  const { unityProvider, loadingProgression, isLoaded, sendMessage } = useUnityContext({
    loaderUrl: '/unity3D/Build/BuddlePackage.loader.js',
    dataUrl: '/unity3D/Build/BuddlePackage.data',
    frameworkUrl: '/unity3D/Build/BuddlePackage.framework.js',
    codeUrl: '/unity3D/Build/BuddlePackage.wasm',
  })

  const unityInitTheme = {
    // 内环
    // InnerCircle: '7100FFFF',
    // 外环
    // OuterCircle: 'FFA100FF',
    // 向上的流线
    Line: '#ffd700FF',
    // 地面网格（网格本身有颜色，颜色添加后并非会特别明显）
    Ground: 'E000FFFF',
    // River
    // River: '00FFF7FF',
    // OutLine
    OutLine: '65A2F2FF',

    // ThinOutLine
    ThinOutLine: '65A2F2FF',
  }
  useUnmount(() => {
    console.log('unload')
    // unload from useUnityContext()
    // await unload()
  })
  window.InitFinished = () => {
    const data = '-0.03098886_0_0.03925267'
    sendMessage('Net', 'SetEnvironmentColor', JSON.stringify(unityInitTheme))
    // 显示整个江苏省的地图
    sendMessage('Net', 'SetVisiableOfModel', '江苏')

    // 设置地图显示标签
    sendMessage('Net', 'SetVisiableOfMark', '江苏')
    sendMessage('Net', 'SetCirclePos', data)
    sendMessage('Net', 'SetCircleSize', '5')
  }

  // 鼠标移入标签
  window.MouseEnterMark = (_markEnum: string): void => {}

  // 鼠标移出标签
  window.MouseExitMark = (_markEnum: string): void => {}

  // 选中某个标签
  window.SelectMark = (_markEnum: string): void => {}

  return (
    <React.Fragment>
      {!isLoaded && <p>Loading Application... {Math.round(loadingProgression * 100)}%</p>}
      <Unity
        unityProvider={unityProvider}
        style={{ visibility: isLoaded ? 'visible' : 'hidden', width: '100%', height: '100%' }}
      />
    </React.Fragment>
  )
}
export default Index
