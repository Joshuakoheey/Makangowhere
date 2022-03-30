if (token != null) {
 var getProfilepic = new XMLHttpRequest();

 getProfilepic.open("POST", "http://127.0.0.1:8080/pfp", true);
 getProfilepic.setRequestHeader("Content-Type", "application/json");
 getProfilepic.onload = function () {
  //console.log(getProfilepic.responseText);
  var profile = JSON.parse(getProfilepic.responseText);
  picture = profile[0].user_profilepicture;

  document.getElementById('heynow').src = picture;
 }
 var payload = { token: token }
 getProfilepic.send(JSON.stringify(payload));
}