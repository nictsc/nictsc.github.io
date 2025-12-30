// Get elements from the page
const hamburgerButton = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobile-nav");

// Safety check (prevents errors on pages without the menu)
if (hamburgerButton && mobileNav) {
  hamburgerButton.addEventListener("click", () => {
    mobileNav.classList.toggle("is-open");
  });
 
}
