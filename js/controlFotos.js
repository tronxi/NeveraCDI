function inicializar()
{
  fruta = ["naranja", "manzana", "pera", "platano", "sandia",
          "chuleta", "costilla", "jamon", "pavo", "pollo", "salami", "ternera",
          "gamba", "langosta", "merluza", "pulpo", "salmon",
          "helado", "huevo", "leche", "queso", "yogurt",
          "berenjena", "lechuga", "pimiento", "tomate", "zanahoria"];
  caducan = document.getElementById("caducan");
  listaCaducan = "";
  for(i = 0; i <fruta.length; i++)
  {
    if(sessionStorage.getItem(fruta[i] + "F") == 2 && sessionStorage.getItem(fruta[i] + "T") > 0)
    {
      listaCaducan += '<div id="caducan" class="row grid-groud-item"><form name="f'+fruta[i]+'" id="f'+fruta[i]+'"><div class="item col-xs-9 col-lg-9 itemAlimentos" id="'+fruta[i]+'E"><div class="thumbnail"><div class="caption"><h4 class="group inner list-group-item-heading">'+fruta[i]+'</h4><img class="group list-group-image" src="imagenes/'+fruta[i]+'.png" alt="" /><img class="group list-group-image alerta" id="'+fruta[i]+'A" src="imagenes/alerta.png" alt="" /><p class="group inner list-group-item-text"><div class="input-group input-group-lg-6"><p><strong>cantidad:'+sessionStorage.getItem(fruta[i] + "T")+' caduca en: '+sessionStorage.getItem(fruta[i] + "F")+' dias</strong></p></div></p></div></div></div></form></div>';
    }
  }
  caducan.innerHTML = listaCaducan;
}

function sub(elemento, propiedad, valor)
{
  document.getElementById(elemento).style[propiedad] = valor;
}
window.addEventListener('load', inicializar, false);
