function inicializar()
{
  carne = ["chuleta", "costilla", "jamon", "pavo", "pollo", "salami", "ternera"];
  precio = [2.00, 5.00, 10.00, 1.50, 5.25, 2.00, 4.00];
  cantidad = [0, 0, 0, 0, 0, 0, 0];
  elemento = [];
  mas = [];
  menos = [];
  lista = document.getElementById("products");
  document.getElementById("carritoId").addEventListener("click",function()
    {irCarrito();});

  if(isNaN(sessionStorage.total))
  {
    total = 0;
  }
  else
  {
    total = parseFloat(sessionStorage.total);
  }
  for(i = 0; i < carne.length; i++)
  {
    if(sessionStorage.getItem(carne[i]) == null)
    {
      sessionStorage.setItem(carne[i], 0);
    }
  }

  var listaCarne = "";


  for(i = 0; i < carne.length; i++)
  {
    listaCarne += '<form name="f'+carne[i]+'" id="f'+carne[i]+'"><div class="item  col-xs-5 col-lg-5"><div class="thumbnail"><div class="caption"><h4 class="group inner list-group-item-heading">'+carne[i]+'</h4><img class="group list-group-image" src="imagenes/'+carne[i]+'.png" alt="" /><p class="group inner list-group-item-text"><div class="input-group input-group-lg-6"><span class="input-group-addon container"><strong>Cantidad </strong></span><p><input id="cantidad" nombre = "cantidad"type="number" class="form-control" value="1" disabled></p><a id="'+carne[i]+'Menos" class="btn"><img class="list-group-image" src="imagenes/menos.png" alt="" /></a><a id="'+carne[i]+'Mas" class="btn"><img class="list-group-image" src="imagenes/mas.png" alt="" /></a></div></p><div class="row"><div class="col-xs-12 col-md-6"><strong>'+precio[i]+'€</strong></div><div  class="col-xs-12 col-md-6"><a id="'+carne[i]+'" name="'+carne[i]+'" class="btn btn-success"><img class="list-group-image" src="imagenes/añadirCarrito.png" alt="" /></a></div></div></div></div></div></form>';
  }
  lista.innerHTML = listaCarne;
  for(i = 0; i < carne.length; i++)
  {
    elemento[i] = document.getElementById(carne[i]);
    mas[i] = document.getElementById(carne[i] + "Mas");
    menos[i] = document.getElementById(carne[i] + "Menos");
  }

  elemento[0].addEventListener("click",function() {sumatotal(elemento[0].name, 0);});
  elemento[1].addEventListener("click",function() {sumatotal(elemento[1].name, 1);});
  elemento[2].addEventListener("click",function() {sumatotal(elemento[2].name, 2);});
  elemento[3].addEventListener("click",function() {sumatotal(elemento[3].name, 3);});
  elemento[4].addEventListener("click",function() {sumatotal(elemento[4].name, 4);});
  elemento[5].addEventListener("click",function() {sumatotal(elemento[5].name, 5);});
  elemento[6].addEventListener("click",function() {sumatotal(elemento[6].name, 6);});

  mas[0].addEventListener("click",function() {calculoMas(elemento[0].name, 0);});
  mas[1].addEventListener("click",function() {calculoMas(elemento[1].name, 1);});
  mas[2].addEventListener("click",function() {calculoMas(elemento[2].name, 2);});
  mas[3].addEventListener("click",function() {calculoMas(elemento[3].name, 3);});
  mas[4].addEventListener("click",function() {calculoMas(elemento[4].name, 4);});
  mas[5].addEventListener("click",function() {calculoMas(elemento[5].name, 5);});
  mas[6].addEventListener("click",function() {calculoMas(elemento[6].name, 6);});

  menos[0].addEventListener("click",function() {calculoMenos(elemento[0].name, 0);});
  menos[1].addEventListener("click",function() {calculoMenos(elemento[1].name, 1);});
  menos[2].addEventListener("click",function() {calculoMenos(elemento[2].name, 2);});
  menos[3].addEventListener("click",function() {calculoMenos(elemento[3].name, 3);});
  menos[4].addEventListener("click",function() {calculoMenos(elemento[4].name, 4);});
  menos[5].addEventListener("click",function() {calculoMenos(elemento[5].name, 5);});
  menos[6].addEventListener("click",function() {calculoMenos(elemento[6].name, 6);});
}
function irCarrito()
{
  for(i = 0; i < carne.length; i++)
  {
    sessionStorage.setItem(carne[i],sessionStorage.getItem(carne[i]));
  }
  document.location.href='carrito.html';
}
function sumatotal(nombre, i)
{
  var nombreTotal = "f" + nombre;
  valorCantidad = document.getElementById(nombreTotal).cantidad.value;
  total +=  valorCantidad * precio[i];
  cantidad[i] += parseFloat(valorCantidad);
  sessionStorage.total = total;
  console.log(sessionStorage.total);
  valor = parseInt(document.getElementById(nombreTotal).cantidad.value) + parseInt(sessionStorage.getItem(carne[i]));
  sessionStorage.setItem(carne[i], valor);
}
function calculoMas(nombre, i)
{
  var nombreTotal = "f" + nombre;
  valorCantidad = document.getElementById(nombreTotal).cantidad.value;
  valorCantidad = parseInt(parseInt(valorCantidad) + parseInt(1));
  document.getElementById(nombreTotal).cantidad.setAttribute("value", valorCantidad);
}
function calculoMenos(nombre, i)
{
  var nombreTotal = "f" + nombre;
  valorCantidad = document.getElementById(nombreTotal).cantidad.value;
  valorCantidad = parseInt(parseInt(valorCantidad) - parseInt(1));
  if(parseInt(valorCantidad) < 0)
  {
    valorCantidad = parseInt(0);
  }
  document.getElementById(nombreTotal).cantidad.setAttribute("value", valorCantidad);
}
function sub(elemento, propiedad, valor)
{
  document.getElementById(elemento).style[propiedad] = valor;
}
window.addEventListener('load', inicializar, false);
