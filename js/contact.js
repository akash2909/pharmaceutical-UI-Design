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
		document.getElementById("mobileerror").innerHTML="Invalid Mobile No.";
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
	
	
		var address = document.getElementById("address").value;
	address= address.trim();
	if(address=="")
	{
		status=false;
		document.getElementById("address").style.borderColor="red";
		document.getElementById("addresserror").innerHTML="Please Enter Address";
	}else{
		document.getElementById("address").style.borderColor="green";
		document.getElementById("addresserror").innerHTML="";
	}
	//address validation end
	
	var pincode = document.getElementById("pincode").value;
	pincode= pincode.trim();
	if(pincode=="")
	{
		status=false;
		document.getElementById("pincode").style.borderColor="red";
		document.getElementById("pincodeerror").innerHTML="Please Enter Pincode";
	}else{
		document.getElementById("pincode").style.borderColor="green";
		document.getElementById("pincodeerror").innerHTML="";
	}
	//pincode validation end
	
	
	
	
	return status;
}