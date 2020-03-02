function passwordValidator(username, password) {
  username = username.value;
  password = password.value;
  if (
    password.length >= 8 &&
    password.indexOf(username) < 0 &&
    password.indexOf(' ') < 0
  ) {
    document.getElementById(
      'result'
    ).innerHTML = `Welcome ${username}, to the page`;
    document.getElementById('result').style.color = 'green';
  } else {
    document.getElementById('result').style.color = 'red';
    document.getElementById(
      'result'
    ).innerHTML = `OH OH ${username}, you're password is incorrect! Look at the rules please and try again`;
  }
}
