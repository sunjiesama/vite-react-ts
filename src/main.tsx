import { createRoot } from "react-dom/client";
import "./index.css";
import routes from "@/router/index";
import { worker } from "./mock/browser";
import RenderRouter from "@/renderRouter";

if (import.meta.env.DEV) {
  void worker.start({ onUnhandledRequest: "bypass" });
}

createRoot(document.getElementById("root")!).render(RenderRouter(routes));
