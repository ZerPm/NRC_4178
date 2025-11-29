const btn = document.querySelector(".menu-toggle");
const menu = document.querySelector(".Menu-horizontal");

// Toggle del menú
btn.addEventListener("click", () => {
  menu.classList.toggle("active");

  // Mostrar/ocultar botón de cerrar sesión en móviles
  const mobileLogout = document.querySelector(".mobile-logout");
  if (menu.classList.contains("active")) {
    mobileLogout.style.display = "block";
  } else {
    mobileLogout.style.display = "none";
  }
});

// Cerrar sesión en el menú horizontal normal
const logout = document.getElementById("logout");
logout.addEventListener("click", (e) => {
  e.preventDefault();
  if (confirm("¿Deseas cerrar sesión?")) {
    window.location.href = "../index.html";
  }
});

// Cerrar sesión en el menú móvil
const mobileLogout = document.getElementById("mobile-logout");
mobileLogout.addEventListener("click", (e) => {
  e.preventDefault();
  if (confirm("¿Deseas cerrar sesión?")) {
    window.location.href = "../index.html";
  }
});
