function registerMe(){
 var registerUser = new XMLHttpRequest();

 registerUser.open("POST", "http://127.0.0.1:8080/Signup", true);
 registerUser.setRequestHeader("Content-Type", "application/json");
 registerUser.onload=function(){
  $('#registerModal').modal('hide');
  $('#successModal').modal('show');
 }

 var username = document.getElementById("usernamey").value;
 var password = document.getElementById("passwordy").value;
 var profile = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiBjbGFzcz0iYmkgYmktcGVyc29uLWNpcmNsZSIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTEgNmEzIDMgMCAxIDEtNiAwIDMgMyAwIDAgMSA2IDB6Ii8+CiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMCA4YTggOCAwIDEgMSAxNiAwQTggOCAwIDAgMSAwIDh6bTgtN2E3IDcgMCAwIDAtNS40NjggMTEuMzdDMy4yNDIgMTEuMjI2IDQuODA1IDEwIDggMTBzNC43NTcgMS4yMjUgNS40NjggMi4zN0E3IDcgMCAwIDAgOCAxeiIvPgo8L3N2Zz4="
 var payload = {user_username: username, user_password: password, user_profilepicture: profile}
 registerUser.send(JSON.stringify(payload));
}