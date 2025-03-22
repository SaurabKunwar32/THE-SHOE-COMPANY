const menu = document.getElementById("menu");
const nav = document.getElementById("nav");
const cross = document.getElementById("cross");
const navItems = document.querySelectorAll("#nav a");

// Function to show nav
menu.addEventListener("click", (event) => {
  nav.classList.add("flex");
  nav.classList.remove("hidden");
});

function hideNav() {
  nav.classList.add("hidden");
  nav.classList.remove("flex");
}

navItems.forEach((item) => {
  item.addEventListener("click", hideNav);
});

cross.addEventListener("click", hideNav);

document.addEventListener("click", (event) => {
  if (!nav.contains(event.target) && !menu.contains(event.target)) {
    hideNav();
  }
});
