const padMap = new WeakMap();
const calcMap = new WeakMap();
export class Pad{
    constructor(){
        const padContainer = document.createElement("div");
        padContainer.setAttribute("id", "pad");
        padMap.set(this, padContainer);    
    }
    getInstance(){
        return padMap.get(this);
    }
    setParent(parent){
        calcMap.set(this, parent);
        createPad(this);
    }
}

function createPad(callObj){
    const calc = calcMap.get(callObj);
    const padContainer = padMap.get(callObj);

    padContainer.appendChild(createButton("zero", 0, (e) => {
        calc.insertToCurrentExpression(e.target.textContent);
    }));
    padContainer.appendChild(createButton("one", 1, (e) => {
        calc.insertToCurrentExpression(e.target.textContent);
    }));
    padContainer.appendChild(createButton("two", 2, (e) => {
        calc.insertToCurrentExpression(e.target.textContent);
    }));
    padContainer.appendChild(createButton("three", 3, (e) => {
        calc.insertToCurrentExpression(e.target.textContent);
    }));
    padContainer.appendChild(createButton("four", 4, (e) => {
        calc.insertToCurrentExpression(e.target.textContent);
    }));
    padContainer.appendChild(createButton("five", 5, (e) => {
        calc.insertToCurrentExpression(e.target.textContent);
    }));
    padContainer.appendChild(createButton("six", 6, (e) => {
        calc.insertToCurrentExpression(e.target.textContent);
    }));
    padContainer.appendChild(createButton("seven", 7, (e) => {
        calc.insertToCurrentExpression(e.target.textContent);
    }));
    padContainer.appendChild(createButton("eight", 8, (e) => {
        calc.insertToCurrentExpression(e.target.textContent);
    }));
    padContainer.appendChild(createButton("nine", 9, (e) => {
        calc.insertToCurrentExpression(e.target.textContent);
    }));
    padContainer.appendChild(createButton("add", "+", (e) => {
        calc.insertOperator(e.target.textContent);
    }));
    padContainer.appendChild(createButton("subtract", "-", (e) => {
        calc.insertOperator(e.target.textContent);
    }));
    padContainer.appendChild(createButton("multiply", "*", (e) => {
        calc.insertOperator(e.target.textContent);
    }));
    padContainer.appendChild(createButton("divide", "/", (e) => {
        calc.insertOperator(e.target.textContent);
    }));
    padContainer.appendChild(createButton("lparen", "(", (e) => {
        calc.insertOperator(e.target.textContent);
    }));
    padContainer.appendChild(createButton("rparen", ")", (e) => {
        calc.insertOperator(e.target.textContent);
    }));
    padContainer.appendChild(createButton("CE", "CE", () => {
        calc.backSpace();
    }));
    padContainer.appendChild(createButton("C", "C", () => {
        calc.clearDisplay();
    }));
    padContainer.appendChild(createButton("equal", "=", () => {
        calc.calculate();
    }));

    padMap.set(callObj, padContainer);
}

function createButton(identifier, content, event){
    let padButton = document.createElement("div");
    padButton.setAttribute("id", identifier);
    padButton.textContent = content;
    padButton.classList.add("pad-button");
    padButton.addEventListener("click", event)
    return padButton;
}