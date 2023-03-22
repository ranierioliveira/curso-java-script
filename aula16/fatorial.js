function fatorial(a){
    let fat = 1;
    for (c = a; c > 1; c--){
        fat *= c;
    }
    return fat;
}
let res = fatorial(4);
console.log(res);