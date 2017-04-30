function validate(){
	var val_1 = validateForm1();
	var val_2 = validateForm2();
	var val_3 = validateTotal();

	if (val_1 == 1 && val_2 == 1 && val_3 == 1){
		return true
	} else {
		return false;
	}
}

//Valida que el total de tarjetas no sea mayor que el número de pasajeros.
function validateTotal(){
	var ad = document.getElementById("adulto").value;
	var n1 = document.getElementById("nino1").value;
	var n2 = document.getElementById("nino2").value;
	var joven = document.getElementById("renfe-joven").value;
	var tarjeta = document.getElementById("tarjeta-dorada").value;

	var total1 = ad + n1 + n2;
	var total2 = joven + tarjeta;

	if (total1 >= total2){
		return 1;
	} else {
		alert("El número de tarjetas añadidas debe ser menor o igual al número de pasajeros.");
		return 0;
	}
}

//Valida el origen y el destino de un viaje.
function validateForm1(){
	var val_1 = validateOrigin();
	var val_2 = validateDest();
	
	if (val_1 == 1 && val_2 == 1){
		document.getElementById("err-ori-dest").style.display = "none";
		return 1;
	} else {
		document.getElementById("err-ori-dest").style.display = "block";
		return 0;
	}
}

function validateOrigin(){
	var x = document.forms["form-1"]["origin"].value;
	if (x == null || x == ""){
		document.getElementById("origin").style.borderColor = "red";
		return 0;
	} else {
		document.getElementById("origin").style.borderColor = "white";
		return 1;
	}
}

function validateDest(){
	var x = document.forms["form-1"]["destination"].value;
	if (x == null || x == ""){
		document.getElementById("destination").style.borderColor = "red";
		return 0;
	} else {
		document.getElementById("destination").style.borderColor = "white";
		return 1;
	}
}

//Valida el dia de salida y el de llegada.
function validateForm2(){
	var val_1 = validateSalida();
	var val_2 = validateRegreso();
	
	if (val_1 == 1 && val_2 == 1){
		document.getElementById("err-sal-reg").style.display = "none";
		return 1;
	} else if (val_1 == 0 && val_2 == 1){
		document.getElementById("err-sal-reg").style.display = "block";
		return 0;
	} else if (val_1 == 1 && val_2 == 0){
		document.getElementById("err-sal-reg").style.display = "none";
		document.getElementById("regreso").style.borderColor = "white";
		return 1;
	} else {
		document.getElementById("err-sal-reg").style.display = "block";
		return 0;
	}
}

function validateSalida(){
	var x = document.forms["form-2"]["salida"].value;
	if (x == null || x == ""){
		document.getElementById("salida").style.borderColor = "red";
		return 0;
	} else {
		document.getElementById("salida").style.borderColor = "white";
		return 1;
	}
}

function validateRegreso(){
		var x = document.forms["form-2"]["regreso"].value;
	if (x == null || x == ""){
		document.getElementById("regreso").style.borderColor = "red";
		return 0;
	} else {
		document.getElementById("regreso").style.borderColor = "white";
		return 1;
	}
}