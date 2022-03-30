$(function () {
 var token = sessionStorage.getItem("token");
 var username = sessionStorage.getItem("username");

 if (token != null) {
  //console.log(username)
  $('#registerMenu').hide();
  $('#loginMenu').hide();
  $('#unloggedinmsg').hide();
  $('#logoutMenu').show();
  $('#loggedinmsg').show();
  $('#profileMenu').show();
 }
});


