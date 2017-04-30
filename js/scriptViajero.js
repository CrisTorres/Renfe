function validate(){
	var val_1 = validate_name();
	var val_2 = validate_doc();

	if (val_1 == 1 && val_2 == 1){
		return true;
	} else {
		return false;
	}
}

//Valida los campos del nombre. Nombre y apellido 1.
function validate_name(){
	var val_1 = validate_name1();
	var val_2 = validate_name2();

	if (val_1 == 1 && val_2 == 1){
		document.getElementById("name-err").style.display="none";
		return 1;
	} else {
		document.getElementById("name-err").style.display="block";
		return 0;
	}
}

function validate_name1(){
	var x = document.getElementById("name1").value;

	if (x == "" || x == null) {
		document.getElementById("name1").style.borderColor="red";
		return 0;
	} else {
		document.getElementById("name1").style.borderColor="white";
		return 1;	
	}
}

function validate_name2(){
	var x = document.getElementById("name2").value;

	if (x == "" || x == null) {
		document.getElementById("name2").style.borderColor="red";
		return 0;
	} else {
		document.getElementById("name2").style.borderColor="white";
		return 1;	
	}
}

//Valida el campo del documento de identidad.
function validate_doc(){
	var x = document.getElementById("doc").value;

	if (x == "" || x == null){
		document.getElementById("doc").style.borderColor="red";
		document.getElementById("doc-err").style.display="block";
		return 0;
	} else {
		document.getElementById("doc").style.borderColor="white";
		document.getElementById("doc-err").style.display="none";
		return 1;
	}
}