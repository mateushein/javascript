let num = [3,4,5,6,7,8]
num.sort()
console.log(num)
/*console.log(`Nosso vetor é o ${num}`)
num[3] = 33
console.log(`Nosso vetor é o ${num}`)
num[5] = 99
console.log(`Nosso vetor é o ${num}`)]
*/
/*num.push(6)*/
//----------------------------------------------------------------------------------------------------
console.log(`O vetor ${num} tem ${num.length} elementos`)
console.log(`O primeiro valor do vetor é ${num[0]}`) 
let pos = num.indexOf(4)
console.log(`O valor 4 está na posição ${pos}`)
if (pos == -1) {
    console.log("valor não ncontrado")
}
//----------------------------------------------------------------------------------------------------
//for (let pos = 0; pos < num.length; pos++) {
//   console.log(`A posição ${pos} tem o valor ${num[pos]}`)
//}
//----------------------------------------------------------------------------------------------------
//for (let pos in num) {
//    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
//}
num.indexOf(2)
