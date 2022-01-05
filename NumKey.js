export class NumKey{
    constructor(symId, sym, onClick) {
        const key = document.createElement('div');
        key.setAttribute('id', symId)
        key.textContent = sym;
        key.addEventListener("click", () => {

            onClick(sym);
        })

        return key;
    }
}