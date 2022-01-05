import CalcEngine from './CalcEngine.js';
// Simulating private variables.
// const dispMap = new WeakMap();

export class CalcDisplay{
    constructor(parent){
        let display = document.createElement('div');
        display.setAttribute('id', 'calcdisplay');

        // Assign to relevant areas
        parent.append(display);
        CalcEngine.display = this;

        this.clearDisplay = function (){
            display.textContent = '0';
        }

        this.addToDisplay = function (number){
            if (!isNaN(number)){
                if (display.textContent === '0'){
                    display.textContent = number;
                } else {
                    display.textContent += number
                }
            }
        }

        this.showDisplay = function (){
            return display.textContent;
        }
    }

}
