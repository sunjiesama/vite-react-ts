declare interface RenderRoutes {
  path: string
  component: React.FC
  children?: RenderRoutes[]
}
