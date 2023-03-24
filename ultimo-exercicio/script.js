let numeroAdicionado = document.getElementById("inum");
let mostrador = document.getElementById("iselecionados");
let res = document.getElementById("resultados");
let guardaValores = [];

function adicionar(){
    if(numeroAdicionado.value.length == 0){
        alert("Digite algum número para ser adicionado!")
    }else{
        let valor = Number(numeroAdicionado.value);
        if(valor >= 1 && valor <= 100){
            //confere a posição do valor na lista, se não -1 não existe ainda
            if(guardaValores.indexOf(valor) === -1){
                guardaValores.push(valor);

                let item = document.createElement('option');
                item.text += `valor ${valor} foi adicionado`;
                mostrador.appendChild(item); 

                res.innerHTML = "";
            } else{
                alert("Valor já encontrado na lista!")
            }
        }else{
            alert("Digite um valor entre 0 e 100!");
        } 
    }  
    numeroAdicionado.value = "";
}

function finalizar(){

    if(guardaValores.length == 0){
        alert("Adicione valores antes de finalizar!")
    }else{
        res.innerHTML = "";
        let soma = 0;
    
        for(let pos in guardaValores){
            soma += guardaValores[pos];
        }
        let media = soma/guardaValores.length
    
        res.innerHTML = `Ao todo temos ${guardaValores.length} números cadastrados.<br>`
        res.innerHTML += `O maior número informado foi ${Math.max.apply(null, guardaValores)}.<br>`;
        res.innerHTML += `O menor número informado foi ${Math.min.apply(null, guardaValores)}.<br>`;
        res.innerHTML += `A soma dos valores é de ${soma}.<br>`;
        res.innerHTML += `A média dos valores é de ${media.toFixed(2)}.`; 
    }

}
//Math.max.apply(null, meuArray)