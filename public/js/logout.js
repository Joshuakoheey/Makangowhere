function logoutMe(){
  $('#registerMenu').show();
  $('#loginMenu').show();
  $('#unloggedinmsg').show();
  $('#logoutMenu').hide();
  $('#loggedinmsg').hide();
  sessionStorage.removeItem("token")
  sessionStorage.removeItem("username")
  location.reload();
}