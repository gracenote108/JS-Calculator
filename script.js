import {Calculator} from './Calculator.js';
import {Display} from './Display.js';
import {Pad} from './Pad.js';
import {CalcMath} from './CalcMath.js';

const pad = new Pad();
const display = new Display();
const calc = new Calculator(display, pad);

const body = document.getElementsByTagName("body");
body[0].appendChild(calc.getInstance());