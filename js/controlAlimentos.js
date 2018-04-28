function inicializar()
{
  fruta = ["naranja", "manzana", "pera", "platano", "sandia",
          "chuleta", "costilla", "jamon", "pavo", "pollo", "salami", "ternera",
          "gamba", "langosta", "merluza", "pulpo", "salmon",
          "helado", "huevo", "leche", "queso", "yogurt",
          "berenjena", "lechuga", "pimiento", "tomate", "zanahoria"];
  precio = [2.00, 5.00, 10.00, 1.50, 5.25,
            2.00, 5.00, 10.00, 1.50, 5.25, 2.00, 4.00,
            5.25, 2.00, 4.00, 8.50, 10.00,
            5.25 ,8.25, 4.50, 2.50, 2.00,
            2.25 ,9.25, 9.50, 4.50, 10.00];
  cantidad = [];
  elemento = [];
  congelado = [];
  estado = [];
  alimentos = document.getElementById("products");
  if(sessionStorage.getItem(fruta[0] + "F") == null)
  {
    for(i = 0; i < fruta.length; i++)
    {
      fechaCad = Math.floor(Math.random() * (10 - 2)) + 2;
      sessionStorage.setItem(fruta[i] + "F", fechaCad);
    }
  }
  if(sessionStorage.getItem(fruta[0] + "T") == null)
  {
    for(i = 0; i < fruta.length; i++)
    {
      sessionStorage.setItem(fruta[i] + "T", 2);
      sessionStorage.setItem(fruta[i] + "C", 0);
    }
  }
  for(i = 0; i < fruta.length; i++)
  {
    cantidad[i] = parseInt(sessionStorage.getItem(fruta[i] + "T"));
  }
  listaAlimentos = "";
  for(i = 0; i <fruta.length; i++)
  {
    if(cantidad[i] > 0)
    {
      listaAlimentos += '<form name="f'+fruta[i]+'" id="f'+fruta[i]+'"><div class="item col-xs-9 col-lg-9 itemAlimentos" id="'+fruta[i]+'E"><div class="thumbnail"><div class="caption"><h4 class="group inner list-group-item-heading">'+fruta[i]+'</h4><img class="group list-group-image" src="imagenes/'+fruta[i]+'.png" alt="" /><img class="group list-group-image alerta" id = "'+fruta[i]+'A"src="imagenes/alerta.png" alt="" /><p class="group inner list-group-item-text"><div class="input-group input-group-lg-6"><p><strong>cantidad:'+cantidad[i]+' caduca en: '+sessionStorage.getItem(fruta[i] + "F")+' dias</strong></p></div></p><div class="row"><div class="col-xs-12 col-md-6"><strong>'+precio[i]+'€</strong></div><div class="col-sm-12 text-center container"><a id="'+fruta[i]+'C" name="'+fruta[i]+'C" class="btn botonCarrito"><img class="list-group-image" src="imagenes/congelar.png" alt="" /></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a id="'+fruta[i]+'" name="'+fruta[i]+'" class="btn botonCarrito"><img class="list-group-image" src="imagenes/hand.png" alt="" /></a></div></div></div></div></div></form>';
    }
  }


  alimentos.innerHTML = listaAlimentos;
  for(i = 0; i < fruta.length; i++)
  {
    elemento[i] = document.getElementById(fruta[i]);
    congelado[i] = document.getElementById(fruta[i] + "C");
  }
  if(cantidad[0])
  {
    elemento[0].addEventListener("click",function() {sumatotal(elemento[0].name, 0);});
    congelado[0].addEventListener("click",function() {estadoCongelador(elemento[0].name, 0);});
  }
  if(cantidad[1])
  {
    elemento[1].addEventListener("click",function() {sumatotal(elemento[1].name, 1);});
    congelado[1].addEventListener("click",function() {estadoCongelador(elemento[1].name, 1);});
  }
  if(cantidad[2])
  {
    elemento[2].addEventListener("click",function() {sumatotal(elemento[2].name, 2);});
    congelado[2].addEventListener("click",function() {estadoCongelador(elemento[2].name, 2);});
  }
  if(cantidad[3])
  {
    elemento[3].addEventListener("click",function() {sumatotal(elemento[3].name, 3);});
    congelado[3].addEventListener("click",function() {estadoCongelador(elemento[3].name, 3);});
  }
  if(cantidad[4])
  {
    elemento[4].addEventListener("click",function() {sumatotal(elemento[4].name, 4);});
    congelado[4].addEventListener("click",function() {estadoCongelador(elemento[4].name, 4);});
  }
  if(cantidad[5])
  {
    elemento[5].addEventListener("click",function() {sumatotal(elemento[5].name, 5);});
    congelado[5].addEventListener("click",function() {estadoCongelador(elemento[5].name, 5);});
  }
  if(cantidad[6])
  {
    elemento[6].addEventListener("click",function() {sumatotal(elemento[6].name, 6);});
    congelado[6].addEventListener("click",function() {estadoCongelador(elemento[6].name, 6);});
  }
  if(cantidad[7])
  {
    elemento[7].addEventListener("click",function() {sumatotal(elemento[7].name, 7);});
    congelado[7].addEventListener("click",function() {estadoCongelador(elemento[7].name, 7);});
  }
  if(cantidad[8])
  {
    elemento[8].addEventListener("click",function() {sumatotal(elemento[8].name, 8);});
    congelado[8].addEventListener("click",function() {estadoCongelador(elemento[8].name, 8);});
  }
  if(cantidad[9])
  {
    elemento[9].addEventListener("click",function() {sumatotal(elemento[9].name, 9);});
    congelado[9].addEventListener("click",function() {estadoCongelador(elemento[9].name, 9);});
  }
  if(cantidad[10])
  {
    elemento[10].addEventListener("click",function() {sumatotal(elemento[10].name, 10);});
    congelado[10].addEventListener("click",function() {estadoCongelador(elemento[10].name, 10);});
  }
  if(cantidad[11])
  {
    elemento[11].addEventListener("click",function() {sumatotal(elemento[11].name, 11);});
    congelado[11].addEventListener("click",function() {estadoCongelador(elemento[11].name, 11);});
  }
  if(cantidad[12])
  {
    elemento[12].addEventListener("click",function() {sumatotal(elemento[12].name, 12);});
    congelado[12].addEventListener("click",function() {estadoCongelador(elemento[12].name, 12);});
  }
  if(cantidad[13])
  {
    elemento[13].addEventListener("click",function() {sumatotal(elemento[13].name, 13);});
    congelado[13].addEventListener("click",function() {estadoCongelador(elemento[13].name, 13);});
  }
  if(cantidad[14])
  {
    elemento[14].addEventListener("click",function() {sumatotal(elemento[14].name, 14);});
    congelado[14].addEventListener("click",function() {estadoCongelador(elemento[14].name, 14);});
  }
  if(cantidad[15])
  {
    elemento[15].addEventListener("click",function() {sumatotal(elemento[15].name, 15);});
    congelado[15].addEventListener("click",function() {estadoCongelador(elemento[15].name, 15);});
  }
  if(cantidad[16])
  {
    elemento[16].addEventListener("click",function() {sumatotal(elemento[16].name, 16);});
    congelado[16].addEventListener("click",function() {estadoCongelador(elemento[16].name, 16);});
  }
  if(cantidad[17])
  {
    elemento[17].addEventListener("click",function() {sumatotal(elemento[17].name, 17);});
    congelado[17].addEventListener("click",function() {estadoCongelador(elemento[17].name, 17);});
  }
  if(cantidad[18])
  {
    elemento[18].addEventListener("click",function() {sumatotal(elemento[18].name, 18);});
    congelado[18].addEventListener("click",function() {estadoCongelador(elemento[18].name, 18);});
  }
  if(cantidad[19])
  {
    elemento[19].addEventListener("click",function() {sumatotal(elemento[19].name, 19);});
    congelado[19].addEventListener("click",function() {estadoCongelador(elemento[19].name, 19);});
  }
  if(cantidad[20])
  {
    elemento[20].addEventListener("click",function() {sumatotal(elemento[20].name, 20);});
    congelado[20].addEventListener("click",function() {estadoCongelador(elemento[20].name, 20);});
  }
  if(cantidad[21])
  {
    elemento[21].addEventListener("click",function() {sumatotal(elemento[21].name, 21);});
    congelado[21].addEventListener("click",function() {estadoCongelador(elemento[21].name, 21);});
  }
  if(cantidad[22])
  {
    elemento[22].addEventListener("click",function() {sumatotal(elemento[22].name, 22);});
    congelado[22].addEventListener("click",function() {estadoCongelador(elemento[22].name, 22);});
  }
  if(cantidad[23])
  {
    elemento[23].addEventListener("click",function() {sumatotal(elemento[23].name, 23);});
    congelado[23].addEventListener("click",function() {estadoCongelador(elemento[23].name, 23);});
  }
  if(cantidad[24])
  {
    elemento[24].addEventListener("click",function() {sumatotal(elemento[24].name, 24);});
    congelado[24].addEventListener("click",function() {estadoCongelador(elemento[24].name, 24);});
  }
  if(cantidad[25])
  {
    elemento[25].addEventListener("click",function() {sumatotal(elemento[25].name, 25);});
    congelado[25].addEventListener("click",function() {estadoCongelador(elemento[25].name, 25);});
  }
  if(cantidad[26])
  {
    elemento[26].addEventListener("click",function() {sumatotal(elemento[26].name, 26);});
    congelado[26].addEventListener("click",function() {estadoCongelador(elemento[26].name, 26);});
  }

  for(i = 0; i < fruta.length; i++)
  {
    if(cantidad[i] > 0)
    {
      if(sessionStorage.getItem(fruta[i] + "C") == 0)
      {
        sub(fruta[i] + "E", "background", "rgba(226, 226, 226, 1)");
      }
      else if(sessionStorage.getItem(fruta[i] + "C") == 1)
      {
        sub(fruta[i] + "E", "background", "rgba(98, 180, 227, 1)");
      }
    }
    if(cantidad[i] == 1)
    {
      sub(fruta[i] + "A", "display", "inline");
    }
  }
}

function sumatotal(nombre, i)
{
  var nombreTotal = "f" + nombre;
  cantidad[i] -= 1;
  sessionStorage.setItem(fruta[i] + "T", cantidad[i]);
  location.reload(true);
}

function estadoCongelador(nombre, i)
{
  if(sessionStorage.getItem(fruta[i] + "C") == 0)
  {
    sessionStorage.setItem(fruta[i] + "C", 1);
    sub(fruta[i] + "E", "background", "rgba(98, 180, 227, 1)");
  }
  else if(sessionStorage.getItem(fruta[i] + "C") == 1)
  {
    sessionStorage.setItem(fruta[i] + "C", 0);
    sub(fruta[i] + "E", "background", "rgba(226, 226, 226, 1)");
  }
}

function sub(elemento, propiedad, valor)
{
  document.getElementById(elemento).style[propiedad] = valor;
}
window.addEventListener('load', inicializar, false);
