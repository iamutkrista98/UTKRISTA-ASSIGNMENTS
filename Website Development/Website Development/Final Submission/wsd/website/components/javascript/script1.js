/*JAVASCRIPT ON PRODUCTS PAGE: FORM VALIDATION FOR EMAIL ADDRESS PROVIDED ON BUILD DESKTOP SECTION*/
function validate(){

	var uemail = document.getElementById("email");
	if(uemail.value.trim()==""){

        alert("Enter valid email address");
        uemail.focus();
        return false;
	}
	var emails = f2.email.value;
	atpos = emails.indexOf("@");
	dotpos = emails.lastIndexOf(".");
	if(atpos < 1 || (dotpos - atpos < 2)){

		alert("Invalid Email");
		return false;
	}
	else{

		alert("Thank You For Your Submission, We Will Get Back To You With Price Quotations! Via Email");
        return true;
	}
}