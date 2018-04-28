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
  borrarP = [];
  comprado = document.getElementById("comprado");
  vaciado = document.getElementById("vaciado");
  if(isNaN(sessionStorage.total))
  {
    sessionStorage.total = parseFloat(0);
  }
  if(sessionStorage.total < 0)
  {
    sessionStorage.total = 0;
  }
  document.getElementById("precio").innerHTML = sessionStorage.total + "€";
  document.getElementById("vaciar").addEventListener("click",function()
    {vaciar();});
  document.getElementById("pagar").addEventListener("click",function()
    {pagar();});
  contenedor = document.getElementById("contenedor");
  listaContendor = "";

  for(i = 0; i < fruta.length; i++)
  {
    if(sessionStorage.getItem(fruta[i]) == null)
    {
      sessionStorage.setItem(fruta[i], 0);
    }
  }
  for(i = 0; i < fruta.length; i++)
  {
    if(sessionStorage.getItem(fruta[i]) > 0)
    {
      listaContendor += '<div class="media pt-3"><img class="list-group-image" src="imagenes/'+fruta[i]+'.png" alt="" /><div class="media-body pb-3 mb-0  lh-125 border-bottom border-gray"><strong>'+fruta[i]+'</strong> cantidad: '+sessionStorage.getItem(fruta[i])+'</div><button type="button" class="btn btn-lg center-block" id="'+fruta[i]+'B"><img class="list-group-image float-right" src="imagenes/borrar.png" alt="" /></button></div>';
    }
  }
  contenedor.innerHTML = listaContendor;
  for(i = 0; i < fruta.length; i++)
  {
    borrarP[i] = document.getElementById(fruta[i] + "B");
  }
  if(sessionStorage.getItem(fruta[0]) > 0)
  {
    borrarP[0].addEventListener("click",function() {borrar(fruta[0], 0);});
  }
  if(sessionStorage.getItem(fruta[1]) > 0)
  {
    borrarP[1].addEventListener("click",function() {borrar(fruta[1], 1);});
  }
  if(sessionStorage.getItem(fruta[2]) > 0)
  {
    borrarP[2].addEventListener("click",function() {borrar(fruta[2], 2);});
  }
  if(sessionStorage.getItem(fruta[3]) > 0)
  {
    borrarP[3].addEventListener("click",function() {borrar(fruta[3], 3);});
  }
  if(sessionStorage.getItem(fruta[4]) > 0)
  {
    borrarP[4].addEventListener("click",function() {borrar(fruta[4], 4);});
  }
  if(sessionStorage.getItem(fruta[5]) > 0)
  {
    borrarP[5].addEventListener("click",function() {borrar(fruta[5], 5);});
  }
  if(sessionStorage.getItem(fruta[6]) > 0)
  {
    borrarP[6].addEventListener("click",function() {borrar(fruta[6], 6);});
  }
  if(sessionStorage.getItem(fruta[7]) > 0)
  {
    borrarP[7].addEventListener("click",function() {borrar(fruta[7], 7);});
  }
  if(sessionStorage.getItem(fruta[8]) > 0)
  {
    borrarP[8].addEventListener("click",function() {borrar(fruta[8], 8);});
  }
  if(sessionStorage.getItem(fruta[9]) > 0)
  {
    borrarP[9].addEventListener("click",function() {borrar(fruta[9], 9);});
  }
  if(sessionStorage.getItem(fruta[10]) > 0)
  {
    borrarP[10].addEventListener("click",function() {borrar(fruta[10], 10);});
  }
  if(sessionStorage.getItem(fruta[11]) > 0)
  {
    borrarP[11].addEventListener("click",function() {borrar(fruta[11], 11);});
  }
  if(sessionStorage.getItem(fruta[12]) > 0)
  {
    borrarP[12].addEventListener("click",function() {borrar(fruta[12], 12);});
  }
  if(sessionStorage.getItem(fruta[13]) > 0)
  {
    borrarP[13].addEventListener("click",function() {borrar(fruta[13], 13);});
  }
  if(sessionStorage.getItem(fruta[14]) > 0)
  {
    borrarP[14].addEventListener("click",function() {borrar(fruta[14], 14);});
  }
  if(sessionStorage.getItem(fruta[15]) > 0)
  {
    borrarP[15].addEventListener("click",function() {borrar(fruta[15], 15);});
  }
  if(sessionStorage.getItem(fruta[16]) > 0)
  {
    borrarP[16].addEventListener("click",function() {borrar(fruta[16], 16);});
  }
  if(sessionStorage.getItem(fruta[17]) > 0)
  {
    borrarP[17].addEventListener("click",function() {borrar(fruta[17], 17);});
  }
  if(sessionStorage.getItem(fruta[18]) > 0)
  {
    borrarP[18].addEventListener("click",function() {borrar(fruta[18], 18);});
  }
  if(sessionStorage.getItem(fruta[19]) > 0)
  {
    borrarP[19].addEventListener("click",function() {borrar(fruta[19], 19);});
  }
  if(sessionStorage.getItem(fruta[20]) > 0)
  {
    borrarP[20].addEventListener("click",function() {borrar(fruta[20], 20);});
  }
  if(sessionStorage.getItem(fruta[21]) > 0)
  {
    borrarP[21].addEventListener("click",function() {borrar(fruta[21], 21);});
  }
  if(sessionStorage.getItem(fruta[22]) > 0)
  {
    borrarP[22].addEventListener("click",function() {borrar(fruta[22], 22);});
  }
  if(sessionStorage.getItem(fruta[23]) > 0)
  {
    borrarP[23].addEventListener("click",function() {borrar(fruta[23], 23);});
  }
  if(sessionStorage.getItem(fruta[24]) > 0)
  {
    borrarP[24].addEventListener("click",function() {borrar(fruta[24], 24);});
  }
  if(sessionStorage.getItem(fruta[25]) > 0)
  {
    borrarP[25].addEventListener("click",function() {borrar(fruta[25], 25);});
  }
  if(sessionStorage.getItem(fruta[26]) > 0)
  {
    borrarP[26].addEventListener("click",function() {borrar(fruta[26], 26);});
  }
}
function borrar(nombre, i)
{
  if(sessionStorage.getItem(fruta[i]) > 0)
  {
    sessionStorage.total -= precio[i];
    console.log(sessionStorage.getItem(fruta[i]));
    sessionStorage.setItem(fruta[i], parseInt(sessionStorage.getItem(fruta[i]) - 1));
    console.log(sessionStorage.getItem(fruta[i]));
    location.reload(true);
  }
}
function vaciar()
{
  sessionStorage.total = 0;
  for(i = 0; i < fruta.length; i++)
  {
    sessionStorage.setItem(fruta[i], 0);
  }
  document.getElementById("precio").innerHTML = sessionStorage.total + "€";
  contenedor.innerHTML = '';
  vaciado.className = "alert alert-warning show";
  setTimeout(function(){ vaciado.className = vaciado.className.replace("alert alert-warning show", "alert alert-success ocultar"); }, 1500);
}

function pagar()
{
  sessionStorage.total = 0;
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
    sessionStorage.setItem(fruta[i] + "T",
      parseInt(sessionStorage.getItem(fruta[i] + "T"))
      + parseInt(sessionStorage.getItem(fruta[i])));
    if(sessionStorage.getItem(fruta[i]) > 0)
    {
      sessionStorage.setItem(fruta[i] + "F", 10);
    }
  }
  for(i = 0; i < fruta.length; i++)
  {
    sessionStorage.setItem(fruta[i], 0);
  }
  sessionStorage.actualizar = 1;
  document.getElementById("precio").innerHTML = sessionStorage.total + "€";
  contenedor.innerHTML = '';

  comprado.className = "alert alert-success show";
  setTimeout(function(){ comprado.className = comprado.className.replace("alert alert-success show", "alert alert-success ocultar"); }, 1500);
}
function sub(elemento, propiedad, valor)
{
  document.getElementById(elemento).style[propiedad] = valor;
}
window.addEventListener('load', inicializar, false);
