function inicializar()
{
  fruta = ["naranja", "manzana", "pera", "platano", "sandia",
          "chuleta", "costilla", "jamon", "pavo", "pollo", "salami", "ternera",
          "gamba", "langosta", "merluza", "pulpo", "salmon",
          "helado", "huevo", "leche", "queso", "yogurt",
          "berenjena", "lechuga", "pimiento", "tomate", "zanahoria"];
  recetas = document.getElementById("recetas");
  listaRecetas = "";
  if(sessionStorage.getItem("manzanaT") > 0 && sessionStorage.getItem("peraT") > 0
    && sessionStorage.getItem("platanoT") > 0 && sessionStorage.getItem("naranjaT") > 0)
  {
      listaRecetas += '<div  class="row grid-groud-item"><div class="item col-xs-9 col-lg-9 itemAlimentos"><div class="thumbnail"><div class="caption"><h4 class="group inner list-group-item-heading">Macedonia</h4><div class="input-group input-group-lg-6"><p><br /> Manzana<img class="group list-group-image" src="imagenes/manzana.png" alt="" /><br /><br /> Naranja<img class="group list-group-image" src="imagenes/naranja.png" alt="" /><br /><br /> Pera<img class="group list-group-image" src="imagenes/pera.png" alt="" /><br /><br /> Platano<img class="group list-group-image" src="imagenes/platano.png" alt="" /></p></div></p></div></div></div></div>';
  }
  if(sessionStorage.getItem("lechugaT") > 0 && sessionStorage.getItem("tomateT") > 0)
  {
      listaRecetas += '<div class="row grid-groud-item"><div class="item col-xs-9 col-lg-9 itemAlimentos"><div class="thumbnail"><div class="caption"><h4 class="group inner list-group-item-heading">Ensalada</h4><div class="input-group input-group-lg-6"><p><br /> Lechuga<img class="group list-group-image" src="imagenes/lechuga.png" alt="" /><br /><br /> Tomate<img class="group list-group-image" src="imagenes/tomate.png" alt="" /></p></div></p></div></div></div></div>';
  }
  if(sessionStorage.getItem("terneraT") > 0 && sessionStorage.getItem("pimientoT") > 0
    && sessionStorage.getItem("zanahoriaT") > 0)
  {
      listaRecetas += '<div  class="row grid-groud-item"><div class="item col-xs-9 col-lg-9 itemAlimentos"><div class="thumbnail"><div class="caption"><h4 class="group inner list-group-item-heading">Redondo de Ternera</h4><div class="input-group input-group-lg-6"><p><br /> Ternera<img class="group list-group-image" src="imagenes/ternera.png" alt="" /><br /><br /> Pimiento<img class="group list-group-image" src="imagenes/pimiento.png" alt="" /><br /><br /> Zanahoria<img class="group list-group-image" src="imagenes/zanahoria.png" alt="" /></p></div></p></div></div></div></div>';
  }
  recetas.innerHTML = listaRecetas;
}

function sub(elemento, propiedad, valor)
{
  document.getElementById(elemento).style[propiedad] = valor;
}
window.addEventListener('load', inicializar, false);
