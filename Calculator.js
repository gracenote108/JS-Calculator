import {CalcMath} from './CalcMath.js';

const displayMap = new WeakMap();
const padMap = new WeakMap();
const calcMap = new WeakMap();

const currentArray = new WeakMap();
const expressionArray = new WeakMap();
const opArray = ["+", "-", "/", "*"];

export class Calculator{
    constructor(display, pad){
        let calcObj = document.createElement("div");
        calcObj.setAttribute("id", "calculator");
        calcObj.appendChild(display.getInstance());
        calcObj.appendChild(pad.getInstance());

        pad.setParent(this);

        displayMap.set(this, display);
        padMap.set(this, pad);
        calcMap.set(this, calcObj);

        currentArray.set(this, []);
        expressionArray.set(this, []);
    }
    insertToCurrentExpression(value){
        const currArr = currentArray.get(this);
        const exprArr = expressionArray.get(this);
        currArr.push(value);
        this.updateDisplay(exprArr.join("") + currArr.join(""));
    }
    insertOperator(value){
        const currArr = currentArray.get(this);
        const exprArr = expressionArray.get(this);
        if (exprArr.length === 0 && currArr.length === 0 && value !== "(")
            return;
        if (!lastExprIsOperator.call(this) || currArr.length > 0 || value === "(" || value === ")"){

            if (value === "("){
                if (currArr.length > 0)
                        exprArr.push(currArr.join(""));

                if (exprArr.length === 0 || lastExprIsOperator.call(this)){
                    exprArr.push(value);
                }
                else {
                    exprArr.push("*");
                    exprArr.push(value);
                }
            } else {
                if (currArr.length > 0)
                    exprArr.push(currArr.join(""));
                exprArr.push(value);
            }
    
            clearCurrArray.call(this);
            this.updateDisplay(exprArr.join(""));
        }
    }
    updateDisplay(value){
        let disp = displayMap.get(this);
        disp.display = value;
    }
    clearDisplay(){
        const disp = displayMap.get(this);
        clearCurrArray.call(this);
        clearExprArray.call(this);
        disp.clearDisplay();
    }
    backSpace(){
        const currArr = currentArray.get(this);
        const exprArr = expressionArray.get(this);
        currArr.pop();
        this.updateDisplay(exprArr.join("") + currArr.join(""));
    }
    getInstance(){
        return calcMap.get(this);
    }
    calculate(){
        const exprArr = expressionArray.get(this);
        const currArr = currentArray.get(this);
        if (lastExprIsOperator.call(this) && currArr.length === 0)
            exprArr.pop();

        if (exprArr[exprArr.length-1] !== ")")
            exprArr.push(currArr.join(""));

        const postFix = CalcMath.convertToPostfix(exprArr);
        const final = CalcMath.calculatePostfix(postFix);
        
        this.clearDisplay();
        this.updateDisplay(final);
        clearCurrArray.call(this);
        clearExprArray.call(this);
    }
}

function clearExprArray(){
    const exprArr = expressionArray.get(this);
    while (exprArr.length > 0)
        exprArr.pop();
}

function clearCurrArray(){
    const currArr = currentArray.get(this);
    while (currArr.length > 0)
        currArr.pop();
}

function lastExprIsOperator(){
    const exprArr = expressionArray.get(this);
    if (exprArr.length === 0)
        return false;
    const lastVal = exprArr[exprArr.length - 1];
    for (let x of opArray)
        if (x === lastVal)
            return true;
    return false;
}