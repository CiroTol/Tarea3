let blanco = true;

function oscuro() {
  document.body.style.backgroundColor = blanco ? "black" : "#FFF5E1";
  document.body.style.color = blanco ? "black" : "#A67C52";
  blanco = !blanco;
}

function copyright() {
  alert(
    "Desarrollado por: Ciro Toledo --- Mail:cirotoledo2009@hotmail.com --- Todos los derechos reservados. ©"
  );
}
