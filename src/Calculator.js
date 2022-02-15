import {CalcDisplay} from "./CalcDisplay.js";
import {NumPad} from './NumPad.js';

export class Calculator{
    constructor(parent){
        const calcBody = document.createElement('div');
        calcBody.setAttribute('id', 'calcbody')
        parent.append(calcBody)

        const calcDisplay = new CalcDisplay(calcBody);
        calcDisplay.addToDisplay(0)

        const numPad = new NumPad(calcBody)
    }
}