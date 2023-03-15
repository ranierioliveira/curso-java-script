let num = [5, 8, 2, 9, 3, 4, 1];
console.log(num)
num.sort()

/*for(let c = 0; c < num.length; c++){
    console.log(" O elemento na posição " + c + " é o " + num[c]);
}*/
for(let pos in num){
    console.log(num[pos]);
}  