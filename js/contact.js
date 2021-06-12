function validation() {
	var fname = document.forms["contactform"]["fname"].value;
	var lname = document.forms["contactform"]["lname"].value;
	var address = document.forms["contactform"]["address"].value;
	var contact = document.forms["contactform"]["contact"].value;
	var email = document.forms["contactform"]["email"].value;
	var message = document.forms["contactform"]["message"].value;

	if (fname =="" || lname =="" || address=="" || contact=="" || email=="") {
		alert("Insufficient input!!");
	}else{
		alert("Thank you!!" + fname+""+lname);
	}
}

function display_ct() {
    document.getElementById('ct').innerHTML = new Date();
    setTimeout('display_ct()',1000);
}
