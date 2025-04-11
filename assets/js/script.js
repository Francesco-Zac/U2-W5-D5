document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  const getStartedBtn = document.querySelector(".get-started");
  const hero = document.querySelector(".hero");

  if (!header || !getStartedBtn || !hero) {
    console.error("Elementi 'header', 'get-started' o '.hero' non trovati.");
    return;
  }

  header.style.position = "sticky";
  header.style.top = "0";
  header.style.width = "100%";
  header.style.zIndex = "1000";
  header.style.transition = "background-color 0.5s ease, box-shadow 0.5s ease";

  getStartedBtn.style.transition = "background-color 0.5s ease, color 0.5s ease";

  const heroHeight = hero.offsetHeight;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      header.style.position = "fixed";
      header.style.backgroundColor = "#ffffff";
      header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
      getStartedBtn.style.backgroundColor = "#1a8917";
    } else {
      header.style.position = "sticky";
      header.style.backgroundColor = "#ffc017";
      header.style.boxShadow = "none";
      getStartedBtn.style.backgroundColor = "#000";
    }
  });
});

window.onload = () => {
  const style = document.createElement("style");
  style.textContent = `
    .m-letter {
      /* Transizione solo per l'apparizione, non per la scomparsa */
      transition: opacity 0s ease-out 0s, opacity 0.5s ease-in 0s;
      opacity: 1;
      pointer-events: auto;
    }
    .m-letter.hidden {
      /* Scomparsa immediata (0s) */
      opacity: 0;
      transition: opacity 0s;
    }
  `;
  document.head.appendChild(style);

  function isLeaf(group) {
    if (!group.querySelector("path")) return false;

    const innerGroups = group.querySelectorAll(":scope > g");
    for (let g of innerGroups) {
      if (g.querySelector("path")) {
        return false;
      }
    }

    return true;
  }

  const mGroups = document.querySelectorAll(".m-pattern svg g");
  console.log("Gruppi <g> trovati:", mGroups.length);

  let count = 0;

  mGroups.forEach((group) => {
    if (isLeaf(group)) {
      if (!group.classList.contains("m-letter")) {
        group.classList.add("m-letter");
      }

      group.addEventListener("mouseenter", (e) => {
        e.stopPropagation();
        group.classList.add("hidden");
      });

      group.addEventListener("mouseleave", (e) => {
        e.stopPropagation();
        group.classList.remove("hidden");
      });

      count++;
    }
  });

  console.log("Elementi .m-letter dopo assegnazione foglia:", count);
};
