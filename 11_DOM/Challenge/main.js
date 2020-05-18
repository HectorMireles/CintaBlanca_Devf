let Nombre = document.getElementById('Nombre')
let Direccion = document.getElementById('Direccion')
let Pizza = document.getElementById('Pizza')
let Telefono = document.getElementById('Telefono')

let NombreH = document.getElementById('NombreH')
let DireccionH = document.getElementById('DireccionH')
let TelefonoH = document.getElementById('TelefonoH')
let PizzaH = document.getElementById('PizzaH')

let pedir = document.getElementById('pedir')

let card = document.getElementById('card')

let Pepper = document.getElementById('Pepper')
let Pina = document.getElementById('Pina')



const cambio = () => {
    NombreH.innerHTML = 'Cliente: ' + Nombre.value
    DireccionH.innerHTML = 'Dirección: ' + Direccion.value
    TelefonoH.innerHTML = 'Teléfono: ' + Telefono.value
    PizzaH.innerHTML = 'Estilo: ' + Pizza.value

    card.classList.remove('none')

    let pizzaReal = Pizza.value
    let compararPizza = pizzaReal.toLowerCase()

    if(compararPizza === 'si'){
        Pina.classList.remove('Pina')
        Pepper.classList.add('Pepper')
        PizzaH.innerHTML = 'Estilo: Hawaiina'
    }else if(compararPizza ==='no'){
        Pepper.classList.remove('Pepper')
        Pina.classList.add('Pina')
        PizzaH.innerHTML = 'Estilo: Pepperoni'
    }else{
        PizzaH.innerHTML = 'Datos incorrectos'
    }

   

}

pedir.addEventListener('click', cambio)

/* if (Piña.value === 'si'){
    console.log('bien')
}else{
    console.error('mal')
}
 */