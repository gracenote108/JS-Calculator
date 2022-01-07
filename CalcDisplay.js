import ce from './CalcManager.js';
import pe from './PostFixEngine.js';
import {symType} from './referenceData.js';

// Used to manage if we are inside a parenthesis or not.
let parenToggle = false;

export class CalcDisplay{
    constructor(parent){
        const display = document.createElement('div');
        display.setAttribute('id', 'calcdisplay');
        parent.append(display);
        ce.display = this;
        ce.state.push(symType.initial);
        display.textContent = '0';

        this.manageDisplay = function (val, type){
            switch (val){
                case '=':
                    solve(display)
                    break;
                case 'CE':
                    doBackSpace(display)
                    break;
                case 'C':
                    clearDisplay(display)
                default:
                    break;
            }
        }

        this.addToDisplay = function (val, type){
            switch (type) {
                case symType.number:
                    processNumType(val, display)
                    break;
                case symType.mathSymbol:
                    processMathSymbol(val, display)
                    break;
                case symType.lparen:
                case symType.rparen:
                    processParens(val,display, type)
                    break;
                default:
                    break;
            }
        }
    }
}

function solve(display){
    if (!ce.solvable)
        return;
    const equation = prepareEquation(display.textContent);
    clearDisplay(display)
    const solved = pe.solveProblem(equation)
    display.textContent = solved;
}

function prepareEquation(rawEq){
    const equation = []
    let num = '';
    for (let char of rawEq){
        if (!isNaN(char))
            num += char;
        else {
            if (num.length > 0){
                equation.push(num);
                num = '';
            }
            equation.push(char)
        }
    }
    if (num)
        equation.push(num)
    console.log(equation)
    return equation
}

function processNumType(val, display){
    if (ce.state.lastPeek() === symType.initial){
        display.textContent = val
    } else {
        display.textContent += val
    }
    ce.state.push(symType.number);
}

function processMathSymbol(val, display) {
    const lastType = ce.state.lastPeek();

    if (lastType !== symType.mathSymbol){
        switch (lastType) {
            case symType.mathSymbol:
            case symType.number:
            case symType.rparen:
                display.textContent += val;
                break;
        }
    }
    ce.state.push(symType.mathSymbol);
}

function processParens(val, display, curType){
    const lastType = ce.state.lastPeek();

    if (curType === symType.lparen && !parenToggle){
        switch (lastType){
            case symType.initial:
                display.textContent = val;
                break;
            case symType.mathSymbol:
            case symType.rparen:
                display.textContent += val;
                break;
            case symType.number:
                display.textContent += `*${val}`
                break;
        }
        parenToggle = true;
        ce.solvable = false;
        ce.state.push(curType);
    }

    if (curType === symType.rparen && parenToggle) {
        switch (lastType){
            case symType.mathSymbol:
                doBackSpace(display)
                display.textContent += val
                break;
            case symType.number:
                display.textContent += val
                break;
        }
        parenToggle = false;
        ce.solvable = true;
        ce.state.push(curType);
    }
}

function clearDisplay(display){
    display.textContent = '0';
    ce.state.clear();
    ce.state.push(symType.initial);
    ce.pfdisplay.clearResults();
}

function doBackSpace(display){
    if (ce.state.lastPeek() !== symType.initial)
        ce.state.pop();

    if (ce.state.lastPeek() === symType.initial)
        display.textContent = '0';
    else {
        let currentText = display.textContent;
        display.textContent = currentText.slice(0, currentText.length-1)
    }
}