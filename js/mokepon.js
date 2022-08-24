
//Se crea la funcion para que la escuhe el evento 'load'

function iniciarJuego(){
    let botonMascotaJugador = document.getElementById('boton-mascota')                  //Se crea variable para invocar al "id=boton-mascota" de HTML

botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador)                 //Se le agrega un evento a la variable "botonMascotaJugador" para que invoque la funcion "seleccionarMascotaJugador" al hacer click

}

//Se crea una funcion para guardar el evento de mostrar mascota segun el input seleccionado

function seleccionarMascotaJugador(){            
    
    //Se crean variables para llamarlas al crear condiciones
    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')

    //Se crea la condicion para notificar al usuario la mascota segun el input seleccionado

    if (inputHipodoge.checked){                 //checked siginifca si el input, en este caso 'radio' es falso o verdadero (si esta seleccionado o no)
        alert('Seleccionaste a Hipodoge')
    } else if (inputCapipepo.checked){
        alert('Seleccionaste a Capipepo')
    } else if (inputRatigueya.checked){
        alert('Seleccionaste a Ratigueya')
    } else {
        alert('Selecciona una mascota')                //Alert por si no se selecciona ninguna mascota 
    }
}

        
//Se crea un evento para que el codigo JS arranque apenas se cargue la pagina 

window.addEventListener('load', iniciarJuego)