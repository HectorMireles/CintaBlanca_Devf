let P1 = prompt('Jugador 1 ingresa piedra, papel o tijera').toLowerCase()
let P2 = prompt('Jugador 2 ingresa piedra, papel o tijera').toLowerCase()

if (P1 === 'piedra' && P2 === 'tijera'){
   console.log('Gana Jugador 1')
}else if(P1 === 'piedra' && P2 === 'papel'){
   console.log('Gana Jugador 2')
}else if(P1 === 'piedra' && P2 === 'piedra'){
    console.log('Empate')
}else if (P1 === 'tijera' && P2 === 'tijera'){
    console.log('Empate')
}else if(P1 === 'tijera' && P2 === 'papel'){
    console.log('Gana Jugador 1')
}else if(P1 === 'tijera' && P2 === 'piedra'){
    console.log('Gana Jugador 2')
}else if (P1 === 'papel' && P2 === 'tijera'){
    console.log('Gana Jugador 2')
}else if(P1 === 'papel' && P2 === 'papel'){
    console.log('Empate')
}else if(P1 === 'papel' && P2 === 'piedra'){
    console.log('Gana jugador 1')
}else if(P1 !== papel || piedra || tijera){
    console.error('Jugador 1 no ingresaste bien tu jugada')
}else if(P2 !== papel || piedra || tijera){
    console.error('Jugador 2 no ingresaste bien tu jugada')
}
else{
    console.error('Datos incorrectos')
}