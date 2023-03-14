function carregar(){
    let msg = document.getElementById("msg")
    let imagem = document.getElementById("imagem")
    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML = "Agora são " + hora + " horas"

    if (hora >= 0 && hora < 12){
        imagem.src = "fotomanha.jpg"
        document.body.style.background = "#819ab6"
    } else if (hora >= 12 && hora <=17){
        imagem.src = "fototarde.jpg" 
        document.body.style.background = "#0061A7"
    } else {
        imagem.src = "fotonoite.jpg"
        document.body.style.background = "#403255"
    }
}

