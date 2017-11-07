function check(form)
{
 
 if(form.userid.value == "admin" && form.pswrd.value == "akash")
  {
    window.open('home.html')
  }
 else
 {
   alert("Please enter correct username or password!!")
  }
}
