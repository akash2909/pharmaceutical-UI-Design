function pagetest()
{
	var status=true;
	var name = document.getElementById("fname").value;
	name= name.trim();
	if(name=="")
	{
		status=false;
		document.getElementById("fname").style.borderColor="red";
		document.getElementById("nameerror").innerHTML="Invalid Name";
	}else{
		document.getElementById("fname").style.borderColor="green";
		document.getElementById("nameerror").innerHTML="";
	}
	//name validation end
	
	
	var mobile = document.getElementById("mobile").value;
	mobile= mobile.trim();
	if(mobile==""||(mobile.length<10)||(isNaN(mobile)) )
	{
		status=false;
		document.getElementById("mobile").style.borderColor="red";
		document.getElementById("mobileerror").innerHTML="Invalid Mobile";
	}else{
		document.getElementById("mobile").style.borderColor="green";
		document.getElementById("mobileerror").innerHTML="";
	}
	// mobile vlidation end
	
	var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
	var email = document.getElementById("email").value;
	email= email.trim();
	if(email==""||(!reg.test(email)))
	{
		status=false;
		document.getElementById("email").style.borderColor="red";
		document.getElementById("emailerror").innerHTML="Invalid Email-Id";
	}else{
		document.getElementById("email").style.borderColor="green";
		document.getElementById("emailerror").innerHTML="";
	}
	// EMAIL vlidation end
	
	var message = document.getElementById("message").value;
	message= message.trim();
	if(message=="")
	{
		status=false;
		document.getElementById("message").style.borderColor="red";
		document.getElementById("messageerror").innerHTML="Please Enter the Message";
	}else{
		document.getElementById("message").style.borderColor="green";
		document.getElementById("messageerror").innerHTML="";
	}
	//address validation end

	return status;
}

