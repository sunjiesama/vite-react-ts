declare interface RenderRoutes {
  path: string
  title: string
  hidden?: boolean
  component: React.FC
  children?: RenderRoutes[]
  default?: boolean
  icon: string | null | false
}

interface Window {
  BMapGL: BMapGL
  InitFinished: () => void
  MouseEnterMark: (markEnum: string) => void
  MouseExitMark: (markEnum: string) => void
  SelectMark: (markEnum: string) => void
}
