const toggleMenu = document.querySelector(".toggleMenu");
const headerNav = document.querySelector(".headerNav ul");

toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("open");
  headerNav.classList.toggle("open");
});
