declare interface RenderRoutes {
  key: string
  label: string
  hidden?: boolean
  component: React.FC
  children?: RenderRoutes[]
  default?: boolean
  icon?: any
}
