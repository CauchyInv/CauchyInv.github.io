// Mobile navigation
const navToggle = document.getElementById("navToggle");
const mainNav = document.getElementById("mainNav");

navToggle?.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll("#mainNav a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    navToggle?.setAttribute("aria-expanded", "false");
  });
});

// Dark mode
const root = document.documentElement;
const themeToggle = document.getElementById("themeToggle");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark" || savedTheme === "light") {
  root.setAttribute("data-theme", savedTheme);
} else if (window.matchMedia?.("(prefers-color-scheme: dark)").matches) {
  root.setAttribute("data-theme", "dark");
}

themeToggle?.addEventListener("click", () => {
  const current = root.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
});

// News show more
const newsToggle = document.getElementById("newsToggle");
const newsList = document.getElementById("newsList");

newsToggle?.addEventListener("click", () => {
  const expanded = newsList.classList.toggle("expanded");
  newsToggle.textContent = expanded ? "Show less" : "Show more";
});

// Back to top
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 700) {
    backToTop.classList.add("visible");
  } else {
    backToTop.classList.remove("visible");
  }
});

backToTop?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Current year
const currentYear = document.getElementById("currentYear");
if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}
