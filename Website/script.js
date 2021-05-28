function validate()
		{
			var uname = document.getElementById("name");
			var uemail = document.getElementById("email");

			if(uname.value.trim() =="")
			{
				alert("Name is necessary");
				uname.focus();
				return false;
			}
			if(uemail.value.trim()=="") 
			{
               alert("Enter valid email address");
               uemail.focus();
               return false;
			}
			var emails = f1.email.value;
			atpos = emails.indexOf("@");
			dotpos = emails.lastIndexOf(".");
			if(atpos < 1 || (dotpos - atpos < 2))
			{
				alert("Invalid Email");
				return false;
			}
			var uphone = f1.phone.value; 
			if(uphone == "" || isNaN(uphone) || uphone.length != 10)
			{
				alert("Enter Phone number of length 10");
				return false;
			} 
			var post = f1.postalcode.value;
            if (post == "" || isNaN(post) || post.length != 5) 
            {
                alert("Enter 5 digit postal code in format #####");
                return false;
            }
			else
			{
				alert("Thank You For Your Time!!!")
				return true;
			}
		}