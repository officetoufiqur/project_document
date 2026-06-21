function initSidebar() {
  const sections = document.querySelectorAll("section[id]");
  const links = document.querySelectorAll(".sidebar-link");

  function setActiveMenu() {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 200;
      const sectionHeight = section.offsetHeight;

      if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight
      ) {
        current = section.id;
      }
    });

    links.forEach((link) => {
      link.classList.remove("active");

      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", setActiveMenu);

  setActiveMenu();
}