document.addEventListener("DOMContentLoaded", () => {
  const buscador = document.getElementById("busqueda");
  const articulos = document.querySelectorAll(".side-menu .articulo");
  const menuToggle = document.getElementById("menu-toggle");

  // Filtrar artículos en el side-menu
  buscador.addEventListener("input", () => {
    const filtro = buscador.value.toLowerCase();
    articulos.forEach(item => {
      const texto = item.textContent.toLowerCase();
      item.style.display = texto.includes(filtro) ? "block" : "none";
    });
  });

  // Abrir menú lateral al enfocar la búsqueda
  buscador.addEventListener("focus", () => {
    menuToggle.checked = true;
  });
});

