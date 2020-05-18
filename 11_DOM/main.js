let titulo = document.getElementById('titulo')
let parrafo = document.getElementById('parrafo')
let boton = document.getElementById('boton')

const cambio = () => {
    titulo.innerHTML = 'Titulo Cambiado'
    parrafo.innerHTML = 'parrafo cambiado'
    respuesta.innerHTML = texto.value

}

boton.addEventListener('click', cambio)

