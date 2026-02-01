var agora = new Date()
var time = agora.getHours()
console.log(`Agora são exatamente ${time} horas.`)
if (time >= 5 && time < 12) {
    console.log("Good morning!")
} else if (time >= 12 && time <= 18) {
    console.log("Good afternoon!")
} else if ( time >= 18 && time <= 24){
    console.log("Good evening!")
} else {
    console.log("Vai dormir madrugada")
} 