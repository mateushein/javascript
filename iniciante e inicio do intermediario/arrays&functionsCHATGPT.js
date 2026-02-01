/*var numeros = [5,10,15,20]
console.log(numeros)
console.log(`O primeiro valor do array é ${numeros[0]}`)
console.log(`O último valor do array é ${numeros[3]}`)
*/
/*
let frutas = ['maçã', 'banana', 'laranja', 'uva']
for (let c = 0; c < frutas.length; c++) {
    console.log(`${frutas[c]}`)
}
frutas.forEach(function(valor, indice) {
    console.log(`${valor}`)
})
for (let c in frutas) {
    console.log(`${frutas[c]}`)
}
*/
/*
array = [10,20,30,40,50]
soma = 0
for(let c = 0; c < array.length; c++) {
    soma+=array[c]
}
console.log(`A soma dos valores do array é ${soma}`)
*/
/*
function mostrarMensagem( mensagem ) {
    console.log(mensagem)
} mostrarMensagem("Olá, mundo!")
*/
/*
function soma(a,b) {
    return a + b
} //soma(document.getElementById("num1").value, document.getElementById("num2").value)
console.log(soma(5,10))
*/
/*
let arr = [1,2,3,4,5]
function maiorValor(array) {
    let maior = array[0]
    for (let c = 0; c < array.length; c++) {
        if (array[c] > maior) {
            maior = array[c]
        }
    }
    return maior
}
console.log(maiorValor(arr))
*/
/*
function contarElementos(array) {
    let contador = 0
    for ( let c of array) {
        contador = contador + 1
    } return contador
} let valor = [10,20,30,40,50,60,70]
console.log(contarElementos(valor))
*/
/*
function numerosPares(array) {
    let pares = []
    for (let c = 0; c < array.length; c++) {
        if (array[c] %2 == 0) {
            pares.push(array[c])
        } else {
            continue
        }}
    return pares
} let valores = [2,3,4,5,6,7,8,9,0]
console.log(numerosPares(valores))
*/
/*
function calcularMedia(array) {
    let soma = 0
    for (let c of array) {
        soma += c
    } return soma / array.length
} console.log(calcularMedia([10,20,30,4,50])) 
*/
let vetor = [5,7.5,7,8,10]
function calcularMedia(array) {
    let soma = 0
    for (let c of array) {
        soma += c
    } return soma / array.length
} console.log(`${calcularMedia(vetor)} é a média das notas dos alunos.`)
 function maiorNota(array) {
    let maior = array[0]
    for (let c of array) {
        if (c > maior) {
            maior = c 
        }
 }   return maior
} console.log(`${maiorNota(vetor)} é a maior nota.`)
function menorNota(array) {
    let menor = array[0]
    for (let c of array) {
        if (c < menor) {
            menor = c 
        }
 }   return menor
} console.log(`${menorNota(vetor)} é a menor nota.`)
function notasAcimaDaMedia(array) {
    let media = 7
    let acima = []
    for (let c of array) {
        if (c >= media) {
            acima.push(c)
        }
 }   return acima
} console.log(`Como a nota mínima pra passar é 7, as notas acima da média são ${notasAcimaDaMedia(vetor)}.`)
//2w