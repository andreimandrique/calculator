//make a function that return the result depending on the operator used
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

//get display
const display = document.getElementById("display");
const operatorDisplay = document.getElementById("operatorDisplay");
const step = document.getElementById("step");
//get all button
const btn = document.querySelectorAll("#btn");

//make variable needed for the calculator
let firstNumberContainer;
let secondNumberContainer;
let operatorContainer;

let haveFirstNumber;
let haveSecondNumber;

let haveOutput = false;

let haveOperator = false;

//forEeach button 
btn.forEach((button) => {

  //add class btn-design
  button.classList.add("btn-design");

  //add event listener
  button.addEventListener("click", () => {

    //make a variable that take the content of the button
    buttonContent = button.textContent;

    //when i click the operator
    if((buttonContent == '+')||(buttonContent == '-')||
      (buttonContent == 'X')||(buttonContent == '/')){
      //if I have the first number 
      if(haveFirstNumber){
        //if I have the first and second number
        if(haveFirstNumber && haveSecondNumber){
          console.log("Invalid you can only press = or Clear");
        }else{
          //make a operator container
          operatorContainer = buttonContent;
          console.log(`Your operator ${operatorContainer}`);
          operatorDisplay.textContent = `Operator: ${operatorContainer}`;
          display.textContent = '';
          haveOperator = true;
        }
      }else{
        //if the calculator start and there is no operator
        console.log("no operator");
      }
    }
    //if i press equal or clear button
    else if((buttonContent == '=')||(buttonContent == 'C')){
      if(buttonContent == 'C'){
        display.textContent = '';
        haveOperator = false;
        haveFirstNumber = false;
        haveSecondNumber = false;
        operatorDisplay.textContent = "Operator: ";
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
    //make the number in the display
    else{
      //if i have a output
      if(haveOutput){
        haveOperator = false;
        haveFirstNumber = false;
        haveSecondNumber = false;
        display.textContent = '';
      }
      //if there is operator make the second number
      if(haveOperator){
        display.append(buttonContent);
        secondNumberContainer = display.textContent;
        console.log(`SecondNumber: ${secondNumberContainer}`);
        step.textContent = "secondNumber";
        haveSecondNumber = true;
        haveOutput = false;
      }
      //if there is no operator make the first number
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