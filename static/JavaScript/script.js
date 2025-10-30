document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");
  const dropdownBtn = document.querySelector(".dropdown-btn");
  const dropdown = document.querySelector(".dropdown");

  // Alternar menú hamburguesa
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  // Abrir/cerrar dropdown con clic
  dropdownBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdown.classList.toggle("active");
  });

  // Cerrar todo si se hace clic fuera
  document.addEventListener("click", (e) => {
    if (!navLinks.contains(e.target) && e.target !== menuToggle) {
      navLinks.classList.remove("show");
      dropdown.classList.remove("active");
    }
  });

  // Cerrar menú al seleccionar una opción
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("show");
    });
  });
});

// Cerrar dropdown al seleccionar una opción
document.querySelectorAll(".dropdown a").forEach(link => {
  link.addEventListener("click", () => {
    document.querySelector(".dropdown").classList.remove("active");
  });
});