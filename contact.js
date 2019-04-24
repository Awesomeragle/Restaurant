function validateSubmission() {
	var checkInfo = document.getElementById("name")
	if (checkInfo.value.length == 0) {
		alert("You must provide a name!");
		document.forms["neededInfo"]["name"].focus();
		return false;
	}
	checkInfo = document.getElementById("email")
	if (checkInfo.value.length == 0) {
		alert("You must provide an Email!");
		document.forms["neededInfo"]["email"].focus();
		return false;
	}
	checkInfo = document.getElementById("phone")
	if (checkInfo.value.length == 0) {
		alert("You must provide a phone number!");
		document.forms["neededInfo"]["phone"].focus();
		return false;
	}
	//Normally I would check for radio buttons and checkboxes, but I
	//don't know how. Plus the critical information was captured.
	alert("Your submission has been recieved!");
	return false;
}