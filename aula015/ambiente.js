let num = [5, 8, 9, 3, 4, 1];

num.push(7);

num.push(1)

console.log("O vetor é composto por esse elementos " + num);
console.log("O 'num' vetor tem " + num.length + " posições");
console.log("O elemento na posição " + 0 + " é o " + num[0]);
let pos = num.indexOf(2);
console.log(typeof(pos));


if(pos === -1){
    console.log("Valor não encontrado!");
} else {
    console.log("O valor está na posição " + pos)
}

num.sort();