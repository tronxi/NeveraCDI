function inicializar()
{
  nevera = document.getElementById("nevera");
  congelador = document.getElementById("congelador");
  estadoNevera = document.getElementById("estadoNevera");
  cajon1 = document.getElementById("cajon1");
  cajon1 = document.getElementById("cajon1");
  cajon1 = document.getElementById("cajon1");
  nevera.addEventListener("click",function(){controlNevera(nevera);});
  congelador.addEventListener("click",function(){controlCongelador(congelador);});
  cajon1.addEventListener("click",function(){controlCajon(cajon1);});
  cajon2.addEventListener("click",function(){controlCajon(cajon2);});
  cajon3.addEventListener("click",function(){controlCajon(cajon3);});

  if(sessionStorage.nevera == 1)
  {
    nevera.innerHTML = '<img class="list-group-image" src="imagenes/neveraAbiertaGrande.png" alt="" />'
  }
  else if(sessionStorage.nevera == 0)
  {
    nevera.innerHTML = '<img class="list-group-image" src="imagenes/neveraCerradaGrande.png" alt="" />';
  }
}

function controlCajon(boton)
{
  if(boton.innerHTML.localeCompare('<img class="list-group-image" src="imagenes/cajonCerrado.png" alt="">') == 0)
  {
    boton.innerHTML = '<img class="list-group-image" src="imagenes/cajonAbierto.png" alt="">';
  }
  else if(boton.innerHTML.localeCompare('<img class="list-group-image" src="imagenes/cajonAbierto.png" alt="">') == 0)
  {
    boton.innerHTML = '<img class="list-group-image" src="imagenes/cajonCerrado.png" alt="">';
  }
}

function controlNevera(boton)
{
  if(boton.innerHTML.localeCompare('<img class="list-group-image" src="imagenes/neveraAbiertaGrande.png" alt="">') == 0)
  {
    sessionStorage.nevera = 0;
    boton.innerHTML = '<img class="list-group-image" src="imagenes/neveraCerradaGrande.png" alt="">';
    estadoNevera.innerHTML = '<img class="list-group-image" src="imagenes/neveraCerrada.png" alt="" />';
  }
  else if(boton.innerHTML.localeCompare('<img class="list-group-image" src="imagenes/neveraCerradaGrande.png" alt="">') == 0)
  {
    sessionStorage.nevera = 1;
    boton.innerHTML = '<img class="list-group-image" src="imagenes/neveraAbiertaGrande.png" alt="">';
    estadoNevera.innerHTML = '<img class="list-group-image" src="imagenes/neveraAbierta.png" alt="" />';
  }
}
function controlCongelador(boton)
{
  if(boton.innerHTML.localeCompare('<img class="list-group-image" src="imagenes/congeladorAbiertoGrande.png" alt="">') == 0)
  {
    boton.innerHTML = '<img class="list-group-image" src="imagenes/congeladorCerradoGrande.png" alt="">';
    var cajones = document.getElementsByClassName("cajon");
    for(i = 0; i <cajones.length; i++)
    {
      cajones[i].style.display = "none";
      cajon1.innerHTML = '<img class="list-group-image" src="imagenes/cajonCerrado.png" alt="">';
      cajon2.innerHTML = '<img class="list-group-image" src="imagenes/cajonCerrado.png" alt="">';
      cajon3.innerHTML = '<img class="list-group-image" src="imagenes/cajonCerrado.png" alt="">';
    }
  }
  else if(boton.innerHTML.localeCompare('<img class="list-group-image" src="imagenes/congeladorCerradoGrande.png" alt="">') == 0)
  {
    boton.innerHTML = '<img class="list-group-image" src="imagenes/congeladorAbiertoGrande.png" alt="">';
    var cajones = document.getElementsByClassName("cajon");
    for(i = 0; i <cajones.length; i++)
    {
      cajones[i].style.display = "block";
    }
  }
}

function sub(elemento, propiedad, valor)
{
  document.getElementById(elemento).style[propiedad] = valor;
}
window.addEventListener('load', inicializar, false);
