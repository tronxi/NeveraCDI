function inicializar()
{
  if(isNaN(sessionStorage.apagada))
  {
    sessionStorage.apagada = 1;
    console.log(sessionStorage.apagada);
  }
  desactivar = document.getElementsByClassName("opcionDesactivar");
  alerta = document.getElementById("alertaApagada");
  if(sessionStorage.apagada == 0)
  {
    for(i = 0; i < desactivar.length; i++)
    {
      console.log(sessionStorage.apagada);
      desactivar[i].style.display = "none";
    }
    sub("alertaApagada", "display", "block");
  }
  else if(sessionStorage.apagada == 1)
  {
    for(i = 0; i < desactivar.length; i++)
    {
      console.log(sessionStorage.apagada);
      desactivar[i].style.display = "block";
    }
    sub("alertaApagada", "display", "none");
  }
}

function sub(elemento, propiedad, valor)
{
  document.getElementById(elemento).style[propiedad] = valor;
}
window.addEventListener('load', inicializar, false);
