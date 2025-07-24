// Este script maneja la funcionalidad del menú lateral y el buscador de artículos
document.addEventListener("DOMContentLoaded", () => {
  const buscador = document.getElementById("busqueda");
  const articulos = document.querySelectorAll(".side-menu .articulo");
  const menuToggle = document.getElementById("menu-toggle");
  const sideMenu = document.querySelector('.side-menu');
  const menuIcon = document.querySelector('.menu-icon');


  // Filtrar artículos en el side-menu
  buscador.addEventListener("input", () => {
    const filtro = buscador.value.toLowerCase();
    articulos.forEach(item => {
      const texto = item.textContent.toLowerCase();
      item.style.display = texto.includes(filtro) ? "block" : "none";
    });
  });

  // Mostrar el menú lateral al enfocar la barra de búsqueda
  buscador.addEventListener("focus", () => {
    if (!menuToggle.checked) {
      menuToggle.checked = true;
    }
  });

  // Cerrar el menú lateral al hacer clic fuera, solo si está abierto
  document.addEventListener('click', function(event) {
  
  // No cerrar si el clic es sobre el input del toggle o el input de búsqueda
    if (
      menuToggle.checked &&
      !sideMenu.contains(event.target) &&
      !menuIcon.contains(event.target) &&
      event.target !== menuToggle &&
      event.target !== buscador
    ) {
      menuToggle.checked = false;
    }
  });
});

