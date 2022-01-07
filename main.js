import {Calculator} from "./Calculator.js";
import {PostFixDisplay} from "./PostFixDisplay.js";

const main = document.getElementById('main');

const calc = new Calculator(main);
const postFixResult = new PostFixDisplay(main);