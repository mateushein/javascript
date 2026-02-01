function contar() {
    var inicio = Number(document.getElementById('txt1').value)
    var fim = Number(document.getElementById('txt2').value)
    var passo = Number(document.getElementById('txt3').value)
    var res = document.getElementById('res')
    onclick =res.innerHTML = ""
    if (passo <= 0) {
        alert('Passo inválido! Considerando PASSO 1')
        passo = 1 
    }
    if (inicio == fim){
        alert('Os números de início e fim são iguais! Não é possível contar.')
        res.innerHTML = `Impossível contar! Os números de início e fim são iguais. \u{1F622}`
        return
    }
    if (inicio > fim){
        alert('Essa contagem será decrescente!')
        for (c = inicio; c >= fim; c-= passo) {
            res.innerHTML += ` ${c} \u{1F449} `
        }
        res.innerHTML += `\u{1F3C1}`
    } else {
    for (c = inicio; c <= fim; c+= passo) {
        res.innerHTML += ` ${c} \u{1F449} `
    }
    res.innerHTML += `\u{1F3C1}`
    } }
