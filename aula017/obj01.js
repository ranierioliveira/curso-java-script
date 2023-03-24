let amigo = {nome:'Ranieri', 
sexo: 'M',
peso: 68,
aumentarPeso(p=0){
    this.peso += p;
}
}
amigo.aumentarPeso(2);
console.log(`${amigo.nome} pesa ${amigo.peso} kg.`)