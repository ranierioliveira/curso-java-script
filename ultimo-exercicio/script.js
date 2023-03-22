function adicionar(){
    let numeroAdicionado = document.getElementById("inum");
    let mostrador = document.getElementById("iselecionados");

    if(numeroAdicionado.value.length == 0){
        alert("Digite algum número para ser adicionado!")
    }else{
        let valor = Number(numeroAdicionado.value);
        if(valor >= 1 && valor <= 100){
            guardaValores.push(valor);

            let item = document.createElement('option');
            item.text += `valor ${valor} foi adicionado`;
            mostrador.appendChild(item); 
        }else{
            alert("Digite um valor entre 0 e 100");
        } 
    }  
    }
let guardaValores = [];

function finalizar(){
    console.log(guardaValores);
}