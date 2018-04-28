function inicializar()
{
  estadoNevera = document.getElementById("estadoNevera");

  if(isNaN(sessionStorage.nevera))
  {
    sessionStorage.nevera = 0;
  }

  if(sessionStorage.nevera == 1)
  {
    estadoNevera.innerHTML = '<img class="list-group-image" src="imagenes/neveraAbierta.png" alt="" />';
  }
  else if(sessionStorage.nevera == 0)
  {
    estadoNevera.innerHTML = '<img class="list-group-image" src="imagenes/neveraCerrada.png" alt="" />';
  }
}

function sub(elemento, propiedad, valor)
{
  document.getElementById(elemento).style[propiedad] = valor;
}
window.addEventListener('load', inicializar, false);
