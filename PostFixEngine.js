import { Stack } from "./Stack.js";
import { Queue } from "./Queue.js";

const Associativity = {
  RightToLeft: 1,
  LeftToRight: 2,
};
Object.freeze(Associativity);

const opArray = ["+", "-", "/", "*", "(", ")"];

class PostFixEngine {
  constructor() {
    this.solveProblem = function (equation) {
      const converted = convertToPostfix(equation)
      return calculatePostfix(converted)
    }
  }
}

function convertToPostfix (array) {
  const exprArray = [...array];
  const opStack = new Stack();
  const postFixQueue = new Queue();

  for (let i = 0; i < exprArray.length; i++) {
    const current = exprArray[i];

    if (!isOperator(current)) {
      postFixQueue.enqueue(current);
    } else if (current === "(") {
      opStack.push(current);
    } else if (current === ")") {
      while (opStack.peek() !== "(") {
        postFixQueue.enqueue(opStack.pop());
      }
      opStack.pop();
    } else {
      const currPrec = getPrecedence(current);
      processOperator(current, currPrec, opStack, postFixQueue);
    }
  }

  while (!opStack.isEmpty()) postFixQueue.enqueue(opStack.pop());

  return postFixQueue.toArray();
}

function calculatePostfix (pfArray) {
  const stack = new Stack();
  const origArr = [...pfArray];
  console.log(origArr)

  for (let i = 0; i < origArr.length; i++) {
    stack.push(origArr[i]);
    if (isOperator(stack.peek())) {
      let operator = stack.pop();
      let rightOper = stack.pop();
      let leftOper = stack.pop();
      stack.push(performMath(operator, leftOper, rightOper));
      console.log(stack.toArray());
    }
  }
  return stack.toArray();
}


function performMath(arithOperator, leftOperand, rightOperand) {
  let result = 0;
  switch (arithOperator) {
    case "+":
      result = Number(leftOperand) + Number(rightOperand);
      break;
    case "-":
      result = Number(leftOperand) - Number(rightOperand);
      break;
    case "*":
      result = Number(leftOperand) * Number(rightOperand);
      break;
    case "/":
      result = Number(leftOperand) / Number(rightOperand);
      break;
    case "^":
      result = Number(leftOperand) ** Number(rightOperand);
      break;
  }

  return result;
}

function isOperator(symbol) {
  for (let x of opArray) {
    if (x === symbol) return true;
  }
  return false;
}

function processOperator(value, valPrec, stack, queue) {
  if (stack.size === 0) {
    stack.push(value);
    return;
  }
  const topPrec = getPrecedence(stack.peek());

  if (valPrec > topPrec || topPrec === 4) stack.push(value);
  else if (valPrec < topPrec) {
    queue.enqueue(stack.pop());
    processOperator(value, valPrec, stack, queue);
  } else {
    const valAsc = getAssociativity(value);
    if (valAsc === Associativity.RightToLeft) stack.push(value);
    else {
      queue.enqueue(stack.pop());
      processOperator(value, valPrec, stack, queue);
    }
  }
}

function getPrecedence(operator) {
  if (operator === "(" || operator === ")") return 4;
  else if (operator === "^") return 3;
  else if (operator === "*" || operator === "/") return 2;
  else if (operator === "+" || operator === "-") return 1;
}

function getAssociativity(operator) {
  if (operator === "^") return Associativity.RightToLeft;
  else if (
    operator === "+" ||
    operator === "-" ||
    operator === "*" ||
    operator === "/"
  )
    return Associativity.LeftToRight;
}

const instance = new PostFixEngine()

export default instance;