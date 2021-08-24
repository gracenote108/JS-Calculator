const qMap = new WeakMap();
const qSize = new WeakMap();

export class Queue{
    constructor(){
        qMap.set(this, []);
        qSize.set(this, 0);
    }
    enqueue(value){
        qMap.get(this).push(value);
    }
    dequeue(){
        const queue = qMap.get(this);
        return queue.shift();
    }
    peek(){
        const queue = qMap.get(this);
        return queue[0];
    }
    toArray(){
        return qMap.get(this);
    }
}