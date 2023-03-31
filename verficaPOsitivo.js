const numeroDigitado = verificaInteiro(Number(prompt("Digite um número: ")));

function verificaInteiro(numero){
  if (Number.isInteger(numero)){
    verificaPositivo(numero);
} else {
   alert("Digite um número inteiro!")
 }
}

function verificaPositivo(n){
  if (n === 0){
     alert("Número digitado foi o 0!");
  } else if (n < 0){
     alert("Núemro negartivo!");
  } else {
     alert("Número positivo!");
  }
}