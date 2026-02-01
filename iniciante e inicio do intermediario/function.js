function identificarTipo(valor) {
    if (Array.isArray(valor)) {
        return "Array";
    } else if (typeof valor === "number") {
        return "Número";
    } else if (typeof valor === "string") {
        return "Texto";
    } else {
        return "Outro";
    }
} 
console.log(identificarTipo(10));          // Número
console.log(identificarTipo("Olá"));       // Texto
console.log(identificarTipo([1, 2, 3]));   // Array
console.log(identificarTipo({ a: 1 }));    // Outro
console.log(identificarTipo(true));        // Outro
