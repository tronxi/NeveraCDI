function inicializar()
{
  boton = document.getElementById("botonApagar")
  boton.addEventListener("click",function()
    {apagar();});

  var tCongelador = document.getElementById("sCongelador");
  var varCongelador = document.getElementById("varCongelador");
  var varNevera = document.getElementById("varNevera");

  var tNevera = document.getElementById("sNevera");

  if(isNaN(sessionStorage.temperaturaCongelador))
  {
    sessionStorage.temperaturaCongelador = -4;
  }

  if(isNaN(sessionStorage.temperaturaNevera))
  {
    sessionStorage.temperaturaNevera = 14;
  }

  varCongelador.innerHTML = '<input type="range" min="-10" max="-3" value="'+sessionStorage.temperaturaCongelador+'" class="slider" id="tCongelador">';
  varNevera.innerHTML = '<input type="range" min="10" max="18" value="'+sessionStorage.temperaturaNevera+'" class="slider" id="tNevera">';

  var congelador = document.getElementById("tCongelador");
  var nevera = document.getElementById("tNevera");

  tNevera.innerHTML = nevera.value  + " ℃";
  tCongelador.innerHTML = congelador.value  + " ℃";

  nevera.oninput = function()
  {
      tNevera.innerHTML = this.value + " ℃";
      sessionStorage.temperaturaNevera = this.value;
  }

  congelador.oninput = function()
  {
      tCongelador.innerHTML = this.value + " ℃";
      sessionStorage.temperaturaCongelador = this.value;
  }
  if(sessionStorage.apagada == 0)
  {
    boton.innerHTML = '<img class="list-group-image" src="imagenes/off.png" alt="" />';
  }
  else if(sessionStorage.apagada == 1)
  {
    boton.innerHTML ='<img class="list-group-image" src="imagenes/on.png" alt="" />';
  }
}

function apagar()
{
  console.log(sessionStorage.apagada);
  if(sessionStorage.apagada == 0)
  {
    boton.innerHTML = '<img class="list-group-image" src="imagenes/on.png" alt="" />';
    sessionStorage.apagada = 1;
  }
  else if(sessionStorage.apagada == 1)
  {
    boton.innerHTML = '<img class="list-group-image" src="imagenes/off.png" alt="" />';
    sessionStorage.apagada = 0;
  }
  //location.reload(true);
}

function sub(elemento, propiedad, valor)
{
  document.getElementById(elemento).style[propiedad] = valor;
}
window.addEventListener('load', inicializar, false);
