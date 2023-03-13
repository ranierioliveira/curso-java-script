function contar(){
  let inicio = Number(document.getElementById("inicio").value);
  let fim = Number(document.getElementById("fim").value);
  let passo = Number(document.getElementById("passos").value);
  let res = document.getElementById("res");
  res.innerHTML = ""
  
  if (passo <= 0){
    alert("Passo inválido, considerando passo 1");
    passo = 1;
  }
  if(inicio == "" || fim == "" || passo == ""){
    res.innerHTML = "Impossível contar!"
  }else if (inicio > fim){
    //contagem regressiva
    for (inicio; inicio >= fim; inicio = inicio - passo){
      res.innerHTML +=  " " + inicio;
    }
  }else{
    //contagem crescente
    for (inicio; inicio <= fim; inicio = inicio + passo){
      res.innerHTML +=  " " + inicio;
    }
  }
}