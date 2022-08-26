declare interface RenderRoutes {
  path: string
  title: string
  hidden?: boolean
  component: React.FC
  children?: RenderRoutes[]
  default?: boolean
  icon: string | null | false
}
