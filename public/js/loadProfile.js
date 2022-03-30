function updateprofile() {
  $(function () {
    if (token != null) {
      var getProfile = new XMLHttpRequest();

      getProfile.open("POST", "http://127.0.0.1:8080/Retrievedeets", true);
      getProfile.setRequestHeader("Content-Type", "application/json");
      getProfile.onload = function () {
        //console.log(getProfile.responseText);
        var profile = JSON.parse(getProfile.responseText);
        picture = profile[0].user_profilepicture;
        username = profile[0].user_username;
        email = profile[0].user_email;
        firstname = profile[0].user_firstname;
        lastname = profile[0].user_lastname;
        gender = profile[0].user_gender;
        phonenumber = profile[0].user_phonenumber;
        address = profile[0].user_address;

        document.getElementById('firstname').value = firstname;
        document.getElementById('lastname').value = lastname;
        document.getElementById('gender').value = gender;
        document.getElementById('emaily').value = email;
        document.getElementById('phonenumber').value = phonenumber;
        document.getElementById('address').value = address;
        document.getElementById('target').src = picture;
      }
      var payload = { token: token }
      getProfile.send(JSON.stringify(payload));
    }
  });
}

