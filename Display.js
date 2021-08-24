const displayMap = new WeakMap();
export class Display{
    constructor(){
        let display = document.createElement("div");
        display.setAttribute("id", "display");
        display.textContent = "0";
        displayMap.set(this, display);
    }
    get display(){
        return dispArray.get(this);
    }
    set display(value){
        let disp = displayMap.get(this);
        disp.textContent = value;
    }
    clearDisplay(){
        displayMap.get(this).textContent = "0";
    }
    getInstance(){
        return displayMap.get(this);
    }
}