import { lazy } from "react";
import App from "@/layout/index";
import NotFound from "../views/404NotFound";

const routes: RenderRoutes[] = [
  {
    path: "/",
    meat: { title: "Immer", Icon: false, hidden: true },
    Component: App,
    children: [
      {
        path: "/echarts",
        meat: { title: "echarts", Icon: false },
        children: [
          {
            path: "/echarts/BarCharts",
            meat: { title: "BarCharts", Icon: false },
            Component: lazy(
              async () => await import("@/views/Echarts/BarCharts"),
            ),
          },
          {
            path: "/echarts/pieCharts",
            meat: { title: "pieCharts", Icon: false },
            Component: lazy(
              async () => await import("@/views/Echarts/PieCharts"),
            ),
          },
        ],
      },
      {
        path: "/nested",
        meat: { title: "nested", Icon: false },
        Component: lazy(async () => await import("@/views/Nested/index")),
        children: [
          {
            path: "/nested/nest-1",
            meat: { title: "nest-1", Icon: false },
            Component: lazy(
              async () => await import("@/views/Nested/Nest-1/index"),
            ),
            children: [
              {
                path: "/nested/nest-1/nest-1-1",
                meat: { title: "nest-1-1", Icon: false },
                Component: lazy(
                  async () =>
                    await import("@/views/Nested/Nest-1/Nest-1-1/index"),
                ),
              },
            ],
          },
          {
            path: "/nested/nest-2",
            meat: { title: "nest-2", Icon: false },
            Component: lazy(async () => await import("@/views/Nested/Nest-2")),
          },
        ],
      },
      {
        path: "/map",
        meat: { title: "map", Icon: false },
        children: [
          {
            path: "/map/base-demo",
            meat: { title: "base-demo", Icon: false },
            Component: lazy(async () => await import("@/views/Map/BaseMap")),
          },
          {
            path: "/map/mark-demo",
            meat: { title: "mark-demo", Icon: false },
            Component: lazy(async () => await import("@/views/Map/MarkMap")),
          },
        ],
      },
      {
        path: "/three",
        meat: { title: "three", Icon: false },
        children: [
          {
            path: "/three/first",
            meat: { title: "first", Icon: false },
            Component: lazy(async () => await import("@/views/Three/First")),
          },
          {
            path: "/three/second",
            meat: { title: "second", Icon: false },
            Component: lazy(async () => await import("@/views/Three/Second")),
          },
        ],
      },
      {
        path: "/unity3D",
        meat: { title: "unity3D", Icon: false },
        Component: lazy(async () => await import("@/views/Unity/index")),
      },
    ],
  },
  {
    path: "*",
    meat: { title: "Immer", Icon: false, hidden: true },
    Component: NotFound,
  },
];

export default routes;
