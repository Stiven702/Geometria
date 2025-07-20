console.log('i don not know how to speak English');


document.addEventListener("DOMContentLoaded", () => {
  const buscador = document.getElementById("buscador");
  const articulos = document.querySelectorAll(".side-menu .articulo");
  const menuToggle = document.getElementById("menu-toggle");

  // Busqueda
  buscador.addEventListener("input", () => {
    const filtro = buscador.value.toLowerCase();
    
    articulos.forEach((item) => {
      const texto = item.textContent.toLowerCase();
      item.style.display = texto.includes(filtro) ? "block" : "none";
    });
  });

  // Abrir el menú cuando el buscador recibe clic
  buscador.addEventListener("focus", () => {
    menuToggle.checked = true;
  });
});
