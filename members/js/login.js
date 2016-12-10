function check(form) {
    username = new Array("michaelbateman", "admin", "members");
    password = new Array("michael8bateman", "uccewbclubadmin", "ewbuccclub");

	if(form.userid.value == username[0] && form.pswrd.value == password[0]||form.userid.value == username[1] && form.pswrd.value == password[1]) {
		location.replace('admin/home.html')/* The Admin Link */
	}
	else if(form.userid.value == username[2] && form.pswrd.value == password[2]) {
		location.replace('members/home.html')/* The Password Protected Area members */
	}
	else if(form.userid.value == username[0]||form.userid.value == username[1]||form.userid.value == username[2]) {
		alert("Incorrect Password")
	}
	else {
		alert("Incorrect Username or Password")
	}
}