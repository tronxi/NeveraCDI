function inicializar()
{
  agua = document.getElementById("agua");
  hielo = document.getElementById("hielo");

  agua.addEventListener("mousedown", function() {sub("alertaAgua", "display", "block");});
  agua.addEventListener("mouseup", function() {sub("alertaAgua", "display", "none");});
  agua.addEventListener("mouseout", function() {sub("alertaAgua", "display", "none");});
  agua.addEventListener("touchstart",function() {sub("alertaAgua", "display", "block");});
  agua.addEventListener("touchend",function() {sub("alertaAgua", "display", "none");});

  hielo.addEventListener("mousedown", function() {sub("alertaHielo", "display", "block");});
  hielo.addEventListener("mouseup", function() {sub("alertaHielo", "display", "none");});
  hielo.addEventListener("mouseout", function() {sub("alertaHielo", "display", "none");});
  hielo.addEventListener("touchstart",function() {sub("alertaHielo", "display", "block");});
  hielo.addEventListener("touchend",function() {sub("alertaHielo", "display", "none");})
}

function sub(elemento, propiedad, valor)
{
  document.getElementById(elemento).style[propiedad] = valor;
}
window.addEventListener('load', inicializar, false);
