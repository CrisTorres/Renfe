function comprar(tipo, ciudadO, ciudadD, salida, llegada, tren, clase, precio, date) {

	comprobar(tipo);

	// Hacemos que el billete de ida siempre aparezca el primero
	if (tipo.localeCompare("IDA") == 0){
		var p = document.getElementsByClassName("elemCompra");
		if (p.length == 0){
			var child = document.getElementById("finCompra");
			
		} else{
			var child = p[0];
		}		
	}else {
		var child = document.getElementById("finCompra");
	}

	
	var element = document.createElement("div");
	element.setAttribute("class", "elemCompra");

	var tit = document.createElement("div");
	tit.setAttribute("class", "tipo");
	var node = document.createTextNode(tipo);
	tit.appendChild(node);
	element.appendChild(tit);

	var salida2 = document.createElement("div");
	salida2.setAttribute("class", "resaltado");
	var node2 = document.createTextNode("Salida:");
	salida2.appendChild(node2);
	element.appendChild(salida2);

	var ciudadS = document.createElement("div");
	ciudadS.setAttribute("class", "ciudad");
	var node3 = document.createTextNode(ciudadO);
	ciudadS.appendChild(node3);
	element.appendChild(ciudadS);

	var horaS = document.createElement("div");
	horaS.setAttribute("class", "hora");
	var node4 = document.createTextNode(salida);
	horaS.appendChild(node4);
	element.appendChild(horaS);

	var llegada2 = document.createElement("div");
	llegada2.setAttribute("class", "resaltado");
	var node5 = document.createTextNode("Llegada:");
	llegada2.appendChild(node5);
	element.appendChild(llegada2);

	var ciudadL = document.createElement("div");
	ciudadL.setAttribute("class", "ciudad");
	var node6 = document.createTextNode(ciudadD);
	ciudadL.appendChild(node6);
	element.appendChild(ciudadL);

	var horaL = document.createElement("div");
	horaL.setAttribute("class", "hora");
	var node7 = document.createTextNode(llegada);
	horaL.appendChild(node7);
	element.appendChild(horaL);

	var fecha = document.createElement("div");
	fecha.setAttribute("class", "resaltado");
	var node8 = document.createTextNode("Fecha:");
	fecha.appendChild(node8);
	element.appendChild(fecha);

	var fechaV = document.createElement("div");
	fechaV.setAttribute("class", "fecha");
	var node9 = document.createTextNode(date);
	fechaV.appendChild(node9);
	element.appendChild(fechaV);

	var tarifa = document.createElement("div");
	tarifa.setAttribute("class", "tren");
	var node10 = document.createTextNode(tren+" - "+clase);
	tarifa.appendChild(node10);
	element.appendChild(tarifa);

	var pre = document.createElement("div");
	pre.setAttribute("class", "precio");
	var node11 = document.createTextNode(precio);
	pre.appendChild(node11);
	element.appendChild(pre);

	ActualizarPrecio(precio);

	var element2 = document.getElementById("compra");
/*	if (tipo.localeCompare("IDA") == 0){
		if (element2.childre[0].)
	}
	
var child = document.getElementById("finCompra");	*/
element2.insertBefore(element,child);

cambiarTab(tipo);


}

function vaciarCompra(){
	var auxiliar = document.getElementsByClassName("elemCompra");
	var tam = auxiliar.length;
	for(i=0; i< tam; i++){		
		var parent = document.getElementById("compra"); 
		parent.removeChild(auxiliar[0]);
	}
	document.getElementById("finCompra").children[0].children[1].innerHTML = "0";
}
function ActualizarPrecio(precio){
	var auxiliar = document.getElementById("finCompra");
	var total = auxiliar.children[0].children[1];
	var x = parseFloat(total.innerHTML);
	precio = parseFloat(precio);
	x+=precio;
	auxiliar.children[0].children[1].innerHTML = x.toString();
}
function comprobar(tipo){

	var auxiliar = document.getElementsByClassName("elemCompra");
	for (i = 0; i < auxiliar.length; i++){
		var a = auxiliar[i].children[0].textContent;
		if(a.localeCompare(tipo) == 0){
			var p =auxiliar[i].children[10].innerHTML;
			ActualizarPrecio(-p);
			var parent = document.getElementById("compra"); 
			parent.removeChild(auxiliar[i]);


		}

	}

}

function cambiarTab (tipo){
	if (tipo.localeCompare("IDA") == 0) {
		document.getElementById("ida").className = "tab-pane";
		document.getElementById("vuelta").className = "tab-pane active";
		var p = document.getElementById("principal");
		var clase = p.children[0].children[0].getAttribute("class");
		p.children[0].children[0].className="";
		p.children[0].children[1].className="active";
	} /*else {
		document.getElementById("vuelta").className = "tab-pane";
		document.getElementById("ida").className = "tab-pane active";
	}*/

	 /*if (clase.localeCompare("active") == 0){
		
	}else {
		p.children[0].children[1].className="";
		p.children[0].children[0].className="active";
	}*/
}


function limpiarFormulario(){

	var array = document.getElementsByClassName("check");
	for (i = 0; i < array.length ; i++){
		array[i].checked = false; 
	}
	for (i = 1; i<5;i++){
		resetSlider(i);
	}
	resetSliderPrecio();
}

function resetSlider(id) {

	var $slider = $("#slider-range"+id);
	var $amount = $( "#amount"+id );
	$slider.slider("values", 0, 0);
	$slider.slider("values", 1, 24);
	$amount.val( "0h - 24h ");
}
function resetSliderPrecio(id) {

	var $slider = $("#slider-range5");
	var $amount = $( "#amount5");
	$slider.slider("values", 0, 0);
	$slider.slider("values", 1, 350);
	$amount.val( "0€ - 350€ ");
}


