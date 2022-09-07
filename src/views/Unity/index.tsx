import { useUnmount } from 'ahooks'
import React from 'react'
import { Unity, useUnityContext } from 'react-unity-webgl'

const Index: React.FC = () => {
  const { unityProvider, loadingProgression, isLoaded } = useUnityContext({
    loaderUrl: '/unity3D/Build/BuddlePackage.loader.js',
    dataUrl: '/unity3D/Build/BuddlePackage.data',
    frameworkUrl: '/unity3D/Build/BuddlePackage.framework.js',
    codeUrl: '/unity3D/Build/BuddlePackage.wasm',
  })

  useUnmount(() => {
    console.log('unload')
    // unload from useUnityContext()
    // await unload()
  })
  window['InitFinished'] = () => {}

  // 鼠标移入标签
  window['MouseEnterMark'] = (markEnum: string): void => {}

  // 鼠标移出标签
  window['MouseExitMark'] = (markEnum: string): void => {}

  // 选中某个标签
  window['SelectMark'] = (markEnum: string): void => {}

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
