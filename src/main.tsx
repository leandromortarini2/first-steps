import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import FristStepsApp from "./FristStepsApp";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FristStepsApp />
  </StrictMode>
);
