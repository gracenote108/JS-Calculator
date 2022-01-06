import {NumKey} from './NumKey.js';
import ce from "./CalcEngine.js";
import * as refData from './referenceData.js';

const numbers = refData.numbers;
const mathSymbols = refData.mathSymbols
const displayCntrls = refData.displayCntrls;
const symType = refData.symType;
const parenSyms = refData.parenSyms;

export class NumPad{
    constructor(parent) {
        const padBox = document.createElement('div');
        parent.append(padBox)

        generatePad(padBox);
    }
}

function generatePad(box){
    const addToDisplay = ce.display.addToDisplay;
    const manageDisplay = ce.display.manageDisplay

    for (let id in numbers){
        box.append(new NumKey(id,numbers[id], symType.number , addToDisplay))
    }

    for (let id in mathSymbols){
        box.append(new NumKey(id,mathSymbols[id], symType.mathSymbol, addToDisplay))
    }

    for (let id in displayCntrls){
        box.append(new NumKey(id,displayCntrls[id], symType.displayCntrl, manageDisplay))
    }

    box.append(new NumKey(parenSyms.lparen.name, parenSyms.lparen.sym, symType.lparen, addToDisplay))
    box.append(new NumKey(parenSyms.rparen.name, parenSyms.rparen.sym, symType.rparen, addToDisplay))
}