function newuser(form) {
	registercode = new Array("907362", "432176");

	if(form.code.value == registercode[0]) {
		alert("Please contact Michael to recieve your admin username and password. The member site username is 'members' and password is 'ewbuccclub'")
	}
	else if(form.code.value == registercode[1]) {
		alert("Username - 'members', password - 'ewbuccclub'")
	}
	else {
		alert("Incorrect code. Please re-try or contact Michael for assistance.")
	}
}