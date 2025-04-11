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
