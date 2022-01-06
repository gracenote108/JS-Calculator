class CalcManager {
    constructor() {
        this.display = undefined;
        this.pad = undefined;
        this.state = []

        this.state.lastPeek = function(){
            const last = this.length - 1;
            return this[last];
        }

        this.state.clear = function(){
            this.length = 0;
        }
    }
}

const instance = new CalcManager();

export default instance;