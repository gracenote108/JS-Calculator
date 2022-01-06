const stackArray = new WeakMap();
const stackSize = new WeakMap();
export class Stack{
    constructor(){
        stackArray.set(this, []);
        stackSize.set(this, { size: 0 });
        const arr = [];
    }
    push(value){
        stackArray.get(this).push(value);
        stackSize.get(this).size++;
    }
    pop(){
        stackSize.get(this).size--;
        return stackArray.get(this).pop();
    }
    peek(){
        const val = stackArray.get(this);
        return val[val.length-1];
    }
    get size(){
        return stackSize.get(this).size;
    }
    isEmpty(){
        return stackSize.get(this).size === 0;
    }
    toArray(){
        return stackArray.get(this);
    }
}