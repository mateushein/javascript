function fatorial(n) {
    let fat = 1
    for (let c = n; c > 1; c--) {
        fat *= c 
    }
    return fat
}
console.log(fatorial(5))
//----------------------------------------------
//outra forma de fazer
function fatorial(n1) {
    if (n1 == 1) {
        return 1
    } else {
        return n1 * fatorial(n1 - 1)
    }
}
console.log(fatorial(4))
