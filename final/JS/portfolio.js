  function validation() {
    var name = document.forms["valid"]["Name"];
    var email = document.forms["valid"]["EMail"];
    if (name.value == "") {
      window.alert("Please enter your name.");
      name.focus();
      return false;
    }
    if (email.value == "") {
      window.alert(
      "Please enter a valid e-mail address.");
      email.focus();
      return false;
    }

    return true;
  }