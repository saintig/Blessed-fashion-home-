
/* =====================================
   BLESSED FASHION HOME
   Website JavaScript
   ===================================== */

document.addEventListener("DOMContentLoaded", function () {

  // MOBILE NAVIGATION MENU
  const menuToggle = document.getElementById("menu-toggle");
  const mainNav = document.getElementById("main-nav");

  if (menuToggle && mainNav) {

    menuToggle.addEventListener("click", function () {
      const isOpen = mainNav.classList.toggle("open");

      menuToggle.setAttribute("aria-expanded", isOpen);
      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
      );

      menuToggle.textContent = isOpen ? "✕" : "☰";
    });

    // Close the menu after a visitor selects a page.
    const navLinks = mainNav.querySelectorAll("a");

    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        mainNav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute(
          "aria-label",
          "Open navigation menu"
        );
        menuToggle.textContent = "☰";
      });
    });

    // Close the menu when the visitor taps outside it.
    document.addEventListener("click", function (event) {
      const clickedInsideMenu = mainNav.contains(event.target);
      const clickedToggle = menuToggle.contains(event.target);

      if (!clickedInsideMenu && !clickedToggle) {
        mainNav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute(
          "aria-label",
          "Open navigation menu"
        );
        menuToggle.textContent = "☰";
      }
    });

    // Reset the menu when the screen becomes wider.
    window.addEventListener("resize", function () {
      if (window.innerWidth > 650) {
        mainNav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute(
          "aria-label",
          "Open navigation menu"
        );
        menuToggle.textContent = "☰";
      }
    });

  }

  // AUTOMATIC COPYRIGHT YEAR
  const currentYear = document.getElementById("current-year");

  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }

});
