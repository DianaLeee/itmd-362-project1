function formCheck() {

  var userEmail = document.userForm.emailAddress.value;
  var vaildEmail = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;

  if(document.userForm.firstName.value == "") {
    alert("Please enter your first name");
    document.userForm.firstName.focus();
    return false;
  } else if(document.userForm.lastName.value == "") {
    alert("Please enter your last name");
    document.userForm.lastName.focus();
    return false;
  } else if(vaildEmail.test(userEmail) ==  false) {
    alert("Please enter a vaild email address");
    document.userForm.emailAddress.focus();
    return false;
  } else {
    alert("Thanks for signing up!");
    return true;
  }
}
