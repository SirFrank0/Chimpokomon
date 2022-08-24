//En JS no se puede utilizar "-" para separar nombres

function seleccionarMascotaJugador(){                   
    alert("Selccionaste tu mascota")
}


//Se crea la funcion para que la escuhe el evento 'load'

function iniciarJuego(){
    let botonMascotaJugador = document.getElementById('boton-mascota')                  //Se crea variable para invocar al "id=boton-mascota" de HTML

botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador)                 //Se le agrega un evento a la variable "botonMascotaJugador" para que invoque la funcion "seleccionarMascotaJugador" al hacer click

}

        
//Se crea un evento para que el codigo JS arranque apenas se cargue la pagina 

window.addEventListener('load', iniciarJuego)