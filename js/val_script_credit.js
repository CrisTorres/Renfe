function validate_credit(){
	var val_1 = validate_c_div1();
	var val_2 = validate_c_div2();

	if (val_1 == 1 && val_2 == 1){
		return true;
	} else {
		return false;
	}

}

//Valida el numero de la tarjeta y el titular.
function validate_c_div1(){
	var val_1 = validateNumber();
	var val_2 = validateName();

	if (val_1 == 1 && val_2 == 1){
		document.getElementById("c-div-1-err").style.display = "none";
		return 1;
	} else {
		document.getElementById("c-div-1-err").style.display = "block";
		return 0;
	}
}

function validateNumber(){
	var x = document.forms["credit_card"]["card_number_in"].value;
	if (x == "" || x == null){
		document.getElementById("card_number_in").style.borderColor = "red";
		return 0;
	} else {
		document.getElementById("card_number_in").style.borderColor = "white";
		return 1;
	}
}

function validateName(){
	var x = document.forms["credit_card"]["card_name_in"].value;
	if (x == "" || x == null){
		document.getElementById("card_name_in").style.borderColor = "red";
		return 0;
	} else {
		document.getElementById("card_name_in").style.borderColor = "white";
		return 1;
	}
}

//Valida el cvv de la tarjeta.
function validate_c_div2(){
	var x = document.forms["credit_card"]["card_cvv_in"].value;
	if (x == "" || x == null){
		document.getElementById("card_cvv_in").style.borderColor = "red";
		document.getElementById("c-div-2-err").style.display = "block";
		return 0;
	} else {
		document.getElementById("card_cvv_in").style.borderColor = "white";
		document.getElementById("c-div-2-err").style.display = "none";
		return 1;
	}
}