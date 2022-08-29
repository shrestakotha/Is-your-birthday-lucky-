const dateOfBirth = document.querySelector("#dateOfBirth");
const luckyNumber = document.querySelector('#luckyNumber');
const check = document.querySelector("#checkButton");
const message = document.querySelector("#message");
check.addEventListener('click', checkBirthday);
function checkBirthday() {
  var dob = dateOfBirth.value;
  var lNumber = luckyNumber.value;
  var lengthDob = birthdaySum(dob);
  if (dob && lNumber) {
    if (lengthDob % lNumber == 0) {
      message.innerText = "Yeaaah your birthday is lucky!!"
    }
    else {
      message.innerText = 'oops your birthday is not so lucky!!'
    }

  }
  else {
    message.innerText = 'do enter the required values'
  }

}
function birthdaySum(dob) {
  var dob = dob.replaceAll("-", '');
  let sum = 0;
  for (var i = 0; i < dob.length; i++) {
    sum = sum + Number(dob.charAt(i));
  }
  return sum;
}