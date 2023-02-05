function carregar(){
    var msg = document.getElementById("msg")
    var imagem = document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
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

