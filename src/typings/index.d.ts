declare interface RenderRoutes {
  path: string;
  meat: { title: string; Icon?: React.ReactNode; hidden?: boolean };
  Component?: React.FC;
  children?: RenderRoutes[];
}

interface Window {
  BMapGL: BMapGL;
  InitFinished: () => void;
  MouseEnterMark: (markEnum: string) => void;
  MouseExitMark: (markEnum: string) => void;
  SelectMark: (markEnum: string) => void;
}

declare interface Result<T = null> {
  code: "200" | "500";
  message: string;
  data: T | null;
}
