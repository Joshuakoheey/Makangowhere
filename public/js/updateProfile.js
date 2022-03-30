function encode() {
 var selectedfile = document.getElementById("myinput").files;
 if (selectedfile.length > 0) {
  var imageFile = selectedfile[0];
  var fileReader = new FileReader();
  fileReader.onload = function (fileLoadedEvent) {
   picture = fileLoadedEvent.target.result;
   document.getElementById('target').src = picture;
  }
  fileReader.readAsDataURL(imageFile)
 }
}

function update() {
 var updateUser = new XMLHttpRequest();

 updateUser.open("PUT", "http://127.0.0.1:8080/UpdateUserDetails", true);
 updateUser.setRequestHeader("Content-Type", "application/json");
 updateUser.onload = function () {
  $('#successModal').modal('show');
  location.reload();
 }
 email = document.getElementById('emaily').value;
 firstname = document.getElementById('firstname').value;
 lastname = document.getElementById('lastname').value;
 gender = document.getElementById('gender').value;
 phonenumber = document.getElementById('phonenumber').value;
 address = document.getElementById('address').value;

 var payload = { token: token, user_email: email, user_firstname: firstname, user_lastname: lastname, user_gender: gender, user_address: address, user_phonenumber: phonenumber, user_profilepicture: picture }
 updateUser.send(JSON.stringify(payload));
}

function delacc() {
 var response = confirm("Are you sure you want to delete your account? This is irreversible");

 if (response == true) {
  var delProfile = new XMLHttpRequest();

  delProfile.open("DELETE", "http://127.0.0.1:8080/DeleteAcc", true);
  delProfile.setRequestHeader("Content-Type", "application/json");
  delProfile.onload = function () { }
  $('#successModal').modal('show');
  sessionStorage.removeItem("token")
  sessionStorage.removeItem("username")
  location.reload();
 }
 var payload = { token: token }
 delProfile.send(JSON.stringify(payload));
}