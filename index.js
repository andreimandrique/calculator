function operate(operator, firstNum, secondNum) {

  let result;

  switch (operator) {
    case "+":
      result = firstNum + secondNum;
      break;
    case "-":
      result = firstNum - secondNum;
      break;
    case "X":
      result = firstNum * secondNum;
      break;
    case "/":
      result = firstNum / secondNum;
      break;
    default:
      break;
  }
  return result;
}

const display = document.getElementById("display");
const btn = document.querySelectorAll("#btn");

let haveFirstNum = false;
let haveOperator = false;
let haveSecondNum = false;

let firstNumberContainer;
let secondNumberContainer;

btn.forEach((button) => {
  button.classList.add("btn-design");

  button.addEventListener("click", () => {

    buttonContent = button.textContent;
    const buttonNumber = Number(buttonContent);

    if((buttonContent == '+')||(buttonContent == '-')||
        (buttonContent == 'X')||(buttonContent == '/')){
          console.log(buttonContent);
          display.textContent = '';
          haveOperator = true;
    }
    else if(haveFirstNum == false){
      display.append(buttonContent);
      firstNumberContainer = display.textContent;
      console.log(firstNumberContainer);
      haveFirstNum = true;
    }
    else if(haveFirstNum== true){
      display.append(buttonContent);
      secondNumberContainer = display.textContent;
      console.log(secondNumberContainer);
      haveSecondNum = true;
    }



  });
});
