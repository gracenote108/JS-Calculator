import {NumKey} from './NumKey.js';
import CalcEngine from "./CalcEngine.js";

export class NumPad{
    constructor(parent) {
        const padBox = document.createElement('div');
        parent.append(padBox)

        generatePad(padBox);
    }

}

const numbers = {
    'zero': 0,
    'one':  1,
    'two':  2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven':7,
    'eight':8,
    'nine':9,
}

const mathsymbols = {
    'plus':'+',
    'minus':'-',
    'multiply':'*',
    'divide':'/',
    'lparen': '(',
    'rparen':')',
}

const displayCntrls = {
    'backspace':'CE',
    'clear':'C',
    'equal':'=',
}

function generatePad(box){
    for (let key in numbers){
        box.append(new NumKey(key,numbers[key], CalcEngine.display.addToDisplay))
    }
}