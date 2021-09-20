const birthDate = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-no");
const button = document.querySelector("#btn");
const outputText = document.querySelector("#output");


function calculateSum(dob) {
  dob = dob.replaceAll("-", "");
  let sum = 0;
  for (let i = 0; i < dob.length; i++) {
    sum = sum + Number(dob.charAt(i));
  }
  return sum;
}

 function checkBirthdayIsLucky() {
  if (birthDate.value, luckyNumber.value) {
    var dob = birthDate.value;
    var sum = calculateSum(dob);
    if (sum % luckyNumber.value === 0) {
      outputText.innerText = "Your birthday is lucky 🤩";
    } else {
      outputText.innerText = "You better go and make your own luck!✨";
    }
  } else {
    outputText.innerText = "Put the values first! 😩";
  }
  
};

button.addEventListener("click", checkBirthdayIsLucky);