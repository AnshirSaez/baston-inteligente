const btn = document.getElementById("sosBtn");
const alerta = document.getElementById("alerta");

btn.addEventListener("click", () => {

  // Activar animación del botón
  btn.classList.add("sos-active");

  // Mostrar alerta
  alerta.classList.add("show");

  // Quitar después de 3 segundos
  setTimeout(() => {
    alerta.classList.remove("show");
    btn.classList.remove("sos-active");
  }, 3000);

});
