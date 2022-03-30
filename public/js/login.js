function loginMe() {
 var loginUser = new XMLHttpRequest();

 loginUser.open("POST", "http://127.0.0.1:8080/Login", true);
 loginUser.setRequestHeader("Content-Type", "application/json");
 loginUser.onload = function () {
  $('#loginModal').modal('hide');

  var token = JSON.parse(loginUser.responseText);
  //console.log(token.result);

  if (token.result == undefined) {
   $('#failModal').modal('show');
  }
  else {
   $('#successModal').modal('show');
   document.getElementById("registerMenu").style.display = "none";
   document.getElementById("loginMenu").style.display = "none";
   document.getElementById("logoutMenu").style.display = "block";
   sessionStorage.setItem("token", token.result)
   sessionStorage.setItem("username", username)

   location.reload();
   //localStorage.setItem("token", token.result) // May cause probs later on
  }
 }

 var username = document.getElementById("usernameLogin").value;
 var password = document.getElementById("passwordLogin").value;
 var payload = { user_username: username, user_password: password }
 loginUser.send(JSON.stringify(payload));
}