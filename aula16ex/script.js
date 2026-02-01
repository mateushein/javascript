function Adicionar() {
    let num = document.getElementById('n1')
    let lista = document.getElementById('selnum')
    let n = Number(num.value)
    if (n < 1 || n > 100 || num.value.length == 0) {
        alert('Número inválido! Digite um número entre 1 e 100.')
        return
    }
    for (let c = 0; c < lista.length; c++) {
        if (Number(lista.options[c].value.replace('num', ' ')) === n) {
            alert('Número já adicionado à lista!')
            return
        }
    }
    {
        let item = document.createElement('option')
        item.text = `Valor ${n} adicionada à lista`
        item.value = `num${n}`
        lista.appendChild(item)

        num.value = ''
        num.focus()
    }

}
function Finalizar() {
    let lista = document.getElementById('selnum')
    let res = document.getElementById('res')
    res.innerHTML = ''
    if (lista.length == 0) {
        alert('Por favor adicione valores antes de finalizar!')
    } 
    if (lista.length > 0) {
        let valores = []
        for (let c = 0; c < lista.length; c++) {
            valores.push(Number(lista.options[c].value.replace('num', ' ')))
            let resultado = `Ao todo foram cadastrados ${valores.length} números.<br>`}
            let maior = Math.max.apply(null, valores)
            res.innerHTML += `O maior valor da lista é ${maior}.<br>`
            let menor = Math.min.apply(null, valores)
            res.innerHTML += `O menor valor da lista é ${menor}.<br>`
            var soma = 0
            for (let pos = 0; pos < valores.length; pos++) {
                soma += valores[pos]
            }
            res.innerHTML += `A soma dos valores da lista é ${soma}.<br>`
            let media = soma / valores.length
            res.innerHTML += `A média dos valores da lista é ${media}.`
        }
    }
    
    
