function change_button_value(){
    var button_value;
    button_value = Number(document.getElementById("button_value").innerHTML);
    document.getElementById("button_value").innerHTML = button_value + 1;
}

function change_radio_value(input){
	document.getElementById("radio_value").innerHTML = input;
}

function change_check_value(input){

	var check_value_1;
	var check_value_2;
	var check_value_3;

	check_value_1 = document.sample.test_checkbox_1.checked;
	check_value_2 = document.sample.test_checkbox_2.checked;
	check_value_3 = document.sample.test_checkbox_3.checked;
	
	if (input == 0){
		document.getElementById("check_value_1").innerHTML = check_value_1;
	}
	else if (input == 1){
		document.getElementById("check_value_2").innerHTML = check_value_2;
	}
	else if (input == 2){
		document.getElementById("check_value_3").innerHTML = check_value_3;
	}
}

