import cm from './CalcManager.js';

export class PostFixDisplay{
    constructor(main) {
        this.infix = document.createElement('div');
        this.postfix = document.createElement('div');
        const pfDisplay = document.createElement('div');
        pfDisplay.setAttribute('id', 'pfdisplay');

        main.append(pfDisplay)
        cm.pfdisplay = this;

        pfDisplay.append(this.infix)
        pfDisplay.append(this.postfix)
        this.setResults('0', '0')
    }

    clearResults(){
        this.infix.textContent = 'Infix: 0';
        this.postfix.textContent = 'Postfix: 0';
    }

    setResults(infix, postfix){
        this.infix.textContent = `Infix: ${infix}`;
        this.postfix.textContent = `Postfix: ${postfix}`;
    }
}