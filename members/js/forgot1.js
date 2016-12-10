function password(form) {
	username = new Array("michaelbateman", "admin", "members");

	if(form.userid.value == username[0]) {
		alert("Sorry... Please contact Michael to recover your password")
	}
	else if(form.userid.value == username[1]) {
		alert("Admin passwords cannot be reset. Please contact Michael to recover your password")
	}
	else if(form.userid.value == username[2]) {
		location.replace('find-account.html')
	}
	else {
		alert("No such user found")
	}
}