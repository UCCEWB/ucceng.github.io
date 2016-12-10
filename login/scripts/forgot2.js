function account(form) {
	aaaaa = new Array("Michael Bateman", "James Liao", "Shaan Hooey", "Dustin Yang", "Ethan Williams", "Joey Fingold", "Manav Dhaliwal", "Nicholas Ng", "Chris Noh");

	if(form.name.value == aaaaa[0]||form.name.value == aaaaa[1]||form.name.value == aaaaa[2]||form.name.value == aaaaa[3]||form.name.value == aaaaa[4]||form.name.value == aaaaa[5]||form.name.value == aaaaa[6]||form.name.value == aaaaa[7]||form.name.value == aaaaa[8]) {
		alert("The password is 'ewbuccclub'")
	}
	else {
		alert("No such user exists. Please submit again e.x. FirstName LastName. If you are still having troubles, contact Michael")
	}
}