 function carregar() {
    var msg = window.document.getElementById("div1")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    div1.innerHTML = `Agora são ${hora} horas e ${min} minutos.` 
    if (hora >= 0 && hora < 12) {
        //Bom dia
        img.src = "fotomanha.jpg"
        document.body.style.background = "#e2cd9f"
        div2.style.background = "rgba(255, 201, 8, 0.25)"
    } else if (hora >= 12 && hora < 18) {
        //Boa tarde
        img.src = "fototarde.jpg"
        document.body.style.background = "#b9846f"
        div2.style.background = "rgba(255, 73, 0, 0.25)"
    } else {
        //Boa noite
        img.src = "fotonoite.jpg"
        document.body.style.background = "#020241ff"
        div2.style.background = "rgba(2, 35, 143, 0.72)"
    } }