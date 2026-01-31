function setLanguage(lang) {
  document.querySelectorAll("[data-lang]").forEach(el => {
    if (el.getAttribute("data-lang")) {
      el.style.display = el.getAttribute("data-lang") === lang ? "block" : "none";
    }
  });
  localStorage.setItem("lang", lang);
}

// Ajouter un switch de langue dans le header ou autre
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "en";
  setLanguage(savedLang);

  // Si tu veux un menu switch, par exemple avec des boutons ayant data-lang-btn
  document.querySelectorAll("[data-lang-btn]").forEach(btn => {
    btn.addEventListener("click", () => {
      const chosenLang = btn.getAttribute("data-lang-btn");
      setLanguage(chosenLang);
    });
  });
});
