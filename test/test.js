function Avatara(prName, sym){
    let nama = prName;
    let symbol = sym;
    this.throwWeapon = function(){
        console.log(`${nama} throws the ${symbol}`)
    }
}

let krsna = new Avatara('krsna', 'chakra')

console.log(krsna.nama) //undefined
console.log(krsna.symbol) //undefined
console.log(krsna.throwWeapon()) // krsna throws the chakra