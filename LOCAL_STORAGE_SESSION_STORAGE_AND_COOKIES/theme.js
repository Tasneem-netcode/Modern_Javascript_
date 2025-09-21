// Helper: apply theme to body
function applyTheme(theme) {
  document.body.classList.remove("light", "dark");
  document.body.classList.add(theme);
}

// Detect OS preference
function getSystemTheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

// Apply saved or system theme
let savedTheme = localStorage.getItem("theme");
applyTheme(savedTheme || getSystemTheme());

// React to system theme changes (only if user hasn't chosen manually)
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event) => {
  if (!localStorage.getItem("theme")) {
    applyTheme(event.matches ? "dark" : "light");
    console.log("Theme changed to " + (event.matches ? "dark" : "light"));
  }
});

// Toggle button
document.querySelector("#theme-toggle").addEventListener("click", () => {
  let currentTheme = document.body.classList.contains("dark") ? "dark" : "light";
  let newTheme = currentTheme === "dark" ? "light" : "dark";
  applyTheme(newTheme);
  localStorage.setItem("theme", newTheme);
});
console.log("Theme toggled to " + newTheme);