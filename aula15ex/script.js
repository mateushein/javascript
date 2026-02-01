function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var Fano = document.getElementById("txtano")
  var res = document.getElementById("res")

  if (Fano.value.length == 0 || Number(Fano.value) > ano) {
    window.alert("[ERRO] Verifique os dados e tente novamente")
  } else {
    var fsex = document.getElementsByName("radsex")
    var idade = ano - Number(Fano.value)
    var genero = ""
    var Imagem = document.getElementById("foto")

    if (fsex[0].checked) {
      genero = "Homem"
      if (idade < 10) {
        Imagem.src = "hbebe.jpg"
      } else if (idade < 21) {
        Imagem.src = "hjovem.jpg"
      } else if (idade < 50) {
        Imagem.src = "hadulto.jpg"
      } else {
        Imagem.src = "hidoso.jpg"
      }
    } else if (fsex[1].checked) {
      genero = "Mulher"
      if (idade < 10) {
        Imagem.src = "fbebe.jpg"
      } else if (idade < 21) {
        Imagem.src = "fjovem.jpg"
      } else if (idade < 50) {
        Imagem.src = "fadulta.jpg"
      } else {
        Imagem.src = "fidosa.jpg"
      }
    }

    res.innerHTML = `Você é ${genero} e tem ${idade} anos.`
  }
}