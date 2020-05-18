//if(condicion){
   //accion que se ejecuta sis e cumple la condicion
//}

//}else{
    //accion que se ejecuta sino se cumple la condicion
//}
//let num2= Number(pprompt ('Pon un numero'))
//if(num2 % 2 ===0){
  //  console.log('Par')
//}else{
  //  console.log('Impar')
//}

let edad = Number(prompt('Ingresa tu edad'))

if(edad >= 18 && edad <= 80){
    console.log('Puedes conducir')
}else if(edad < 16 || edad > 80){
    console.log('No puedes conducir')
}else if(edad === 16 || edad === 17){
    console.log('Puedes sacar tu permiso')
}else{
    console.error('Datos incorrectos')
}



