function validate_renfe(){
	var val_1 = validate_r_div1();
	var val_2 = validate_r_div2();

	if (val_1 == 1 && val_2 == 1){
		return true;
	} else {
		return false;
	}

}

//Valida el tipo de tarjeta y el numero de la tarjeta renfe.
function validate_r_div1(){
	var val_1 = validateType();
	var val_2 = validateNo();

	if (val_1 == 1 && val_2 == 1){
		document.getElementById("r-div-1-err").style.display = "none";
		return 1;
	} else {
		document.getElementById("r-div-1-err").style.display = "block";
		return 0;
	}
}

function validateType(){
	var x = document.forms["renfe_plus"]["card_type_in"].value;
	if (x == "" || x == null){
		document.getElementById("card_type_in").style.borderColor = "red";
		return 0;
	} else {
		document.getElementById("card_type_in").style.borderColor = "white";
		return 1;
	}
}

function validateNo(){
	var x = document.forms["renfe_plus"]["card_no_in"].value;
	if (x == "" || x == null){
		document.getElementById("card_no_in").style.borderColor = "red";
		return 0;
	} else {
		document.getElementById("card_no_in").style.borderColor = "white";
		return 1;
	}
}

//Valida el dni del propietario de la tarjeta.
function validate_r_div2(){
	var x = document.forms["renfe_plus"]["card_dni_in"].value;
	if (x == "" || x == null){
		document.getElementById("card_dni_in").style.borderColor = "red";
		document.getElementById("r-div-2-err").style.display = "block";
		return 0;
	} else {
		document.getElementById("card_dni_in").style.borderColor = "white";
		document.getElementById("r-div-2-err").style.display = "none";
		return 1;
	}
}