function parImp(n){
    if(n % 2 === 0){
        return "Par!"
    } else {
        return "ímpar!"
    }
}
let verificador = parImp(223);
console.log(verificador);