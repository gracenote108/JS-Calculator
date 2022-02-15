export class NumKey{
    constructor(symId, sym, type, onClick) {
        const key = document.createElement('div');
        const symType = type;
        key.setAttribute('id', symId)
        key.classList = 'numkey';
        key.textContent = sym;
        key.addEventListener("click", function(ev){
                onClick(this.textContent, symType);
            }
        )

        return key;
    }
}