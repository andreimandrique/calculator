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
const step = document.getElementById("step");

let firstNumberContainer;
let secondNumberContainer;
let operatorContainer;

let haveFirstNumber;
let haveSecondNumber;

let haveOutput = false;

let haveOperator = false;

btn.forEach((button) => {
  button.classList.add("btn-design");

  button.addEventListener("click", () => {

    buttonContent = button.textContent;

    if((buttonContent == '+')||(buttonContent == '-')||
      (buttonContent == 'X')||(buttonContent == '/')){

      if(haveFirstNumber){
        
        if(haveFirstNumber && haveSecondNumber){
          console.log("Invalid you can only press = or Clear");
        }else{
          operatorContainer = buttonContent;
          console.log(`Your operator ${operatorContainer}`);
          step.textContent = `Operator ${operatorContainer}`;
          display.textContent = '';
          haveOperator = true;
        }
        
      }else{
        console.log("no operator");
      }
    }
    else if((buttonContent == '=')||(buttonContent == 'C')){
      if(buttonContent == 'C'){
        display.textContent = '';
        haveOperator = false;
        haveFirstNumber = false;
        haveSecondNumber = false;
        step.textContent = "cleared";
      }
      if(buttonContent == '='){
        const firstNum = Number(firstNumberContainer);
        const secondNum = Number(secondNumberContainer);
        const output = operate(operatorContainer, firstNum, secondNum);
        step.textContent = "Output";
        console.log(output);
        display.textContent = output;
        haveOutput = true;
      }
    }
    else{
      
      if(haveOutput){
        haveOperator = false;
        haveFirstNumber = false;
        haveSecondNumber = false;
        display.textContent = '';
      }

      if(haveOperator){
        display.append(buttonContent);
        secondNumberContainer = display.textContent;
        console.log(`SecondNumber: ${secondNumberContainer}`);
        step.textContent = "secondNumber";
        haveSecondNumber = true;
        haveOutput = false;
      }
      else{
        display.append(buttonContent);
        firstNumberContainer = display.textContent;
        console.log(`FirstNumber: ${firstNumberContainer}`);
        step.textContent = "firstNumber";
        haveFirstNumber = true;
        haveOutput = false;
      }
    }

  });
});
