function gerarTabuada(){
    let numeroInserido = Number(document.getElementById("inumero").value);
    let tabuada = document.getElementById("tabuada");
    tabuada.innerHTML = "";
    if(numeroInserido != ""){
        for(let c = 1; c <= 10; c++){
            let resultado = numeroInserido * c;
            tabuada.innerHTML += `${numeroInserido} X ${c} = ${resultado} <br>`; 
        }  
    }else{
        alert("Digite algum número, por favor.");
    }
}