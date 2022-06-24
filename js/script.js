let firstNum, secondNum, result, operator;
simpleCalculator = (firstNum, secondNum, result, operator) => {
  operator = prompt("Enter an operator: + - /");
  firstNum = prompt("Enter first number");
  secondNum = prompt("Enter second number");
  if (operator == "+") {
    result = Number(firstNum) + Number(secondNum);
  } else if (operator == "/") {
    result = Number(firstNum) / Number(secondNum);
  } else if (operator == "*") {
    result = Number(firstNum) * Number(secondNum);
  } else if (operator == "-") {
    result = Number(firstNum) - Number(secondNum);
  }

  return alert(result);
};
