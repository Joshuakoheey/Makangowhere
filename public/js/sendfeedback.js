function sendEmail() {

 var emailUser = new XMLHttpRequest();
 emailUser.open("POST", "/email", true);
 emailUser.setRequestHeader("Content-Type", "application/json");
 emailUser.onload = function () {
  var token = JSON.parse(emailUser.responseText);
  //console.log(token.result)

  if (token.result == "success") {

   alert("Email successfully sent ");
   window.location.href = 'contact.html'

  } else {

   alert("email unsuccessful, Please try again")

  }

 }

 var email = document.getElementById("email").value;
 var comment = document.getElementById("feedback").value;
 var title = document.getElementById("title").value;



 var payload = { email: email, content: comment, title: title }

 emailUser.send(JSON.stringify(payload));

 //console.log(payload)
}