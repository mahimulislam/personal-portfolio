import { refresh } from "./motion/motion.js";
import { mount } from "./moments/moments.js";

function refreshPortfolio() {
  refresh();
  for (const element of document.querySelectorAll("[data-moment]")) {
    void mount(element)
      .then((api) => {
        if (!element.isConnected) api.destroy?.();
      })
      .catch(() => document.documentElement.classList.add("mo-safe"));
  }
}

window.addEventListener("portfolio:refresh", refreshPortfolio);
refreshPortfolio();
