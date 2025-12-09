import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Fix viewport height untuk iOS Safari & Chrome
const setViewportHeight = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
};

setViewportHeight();
window.addEventListener("resize", setViewportHeight);
window.addEventListener("orientationchange", setViewportHeight);

// Handle iOS Safari address bar
document.addEventListener(
  "touchmove",
  (e) => {
    if ((e.target as HTMLElement).closest(".phone-container")) {
      return;
    }
  },
  { passive: false }
);

createRoot(document.getElementById("root")!).render(<App />);
