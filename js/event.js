//======= Top =======

$(function(){
	$("#html4_disp").change(function(){

		if ($(this).prop('checked')){
			$("#html4").slideDown('slow');
		}
		else{
			$("#html4").slideUp('slow');
		}
	});

    $("#html5_disp").change(function(){

        if ($(this).prop('checked')){
            $("#html5").slideDown('slow');
        }
        else{
            $("#html5").slideUp('slow');
        }
    });

    $("#javascript_disp").change(function(){

        if ($(this).prop('checked')){
            $("#javascript").slideDown('slow');
        }
        else{
            $("#javascript").slideUp('slow');
        }
    });
});


//======= HTML4 Components =======

//----- 1st line -----

function change_button_value(){
    var button_value;
    button_value = Number(document.getElementById("button_value").innerHTML);
    document.getElementById("button_value").innerHTML = button_value + 1;
}


//----- 2nd line -----

function change_radio_value(input){
    document.getElementById("radio_value").innerHTML = input;
}

//----- 3rd line -----

function change_check_value(input){

    var check_value_1;
    var check_value_2;
    var check_value_3;

    check_value_1 = document.html4_form.label_checkbox_1.checked;
    check_value_2 = document.html4_form.label_checkbox_2.checked;
    check_value_3 = document.html4_form.label_checkbox_3.checked;

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


//----- 1st line -----

function change_select_value(){
    document.getElementById("select_value").innerHTML = document.html4_form.label_select.value;
}

//----- 2nd line -----

function change_text_value(){
    document.getElementById("text_value").innerHTML = document.html4_form.label_text.value;
}

//----- 3rd line -----

function change_textarea_value(){
    document.getElementById("textarea_value").innerHTML = document.html4_form.label_textarea.value;
}


//======= HTML5 Components =======

//----- 1st line -----

function change_datalist_value(){
    var datalist_value;
    document.getElementById("datalist_value").innerHTML = document.html5_form.datalist.value;
}


//======= Javascript Components =======

//----- 1st line -----

$(function(){
    $('#jstree').jstree();
});
