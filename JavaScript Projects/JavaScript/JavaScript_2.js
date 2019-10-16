function validateForm() {
    var x = document.forms["myForm"]["firstname"].value;
    if (x =="") {
        alert("Please enter your name");
        return false;
    }
    var y = document.forms["myForm"]["lastname"].value;
    if (y=="") {
        alert("Please enter your last name");
        return false;
    }
    var z = document.forms["myForm"]["email"].value;
    if (z=="") {
        alert("Please enter your email")
        return false;
    }
}