const openMenu = document.getElementById("menu");
const navList = document.getElementById("nav-list");

openMenu.addEventListener("click", () => {
  navList.classList.toggle("hidden");
});
