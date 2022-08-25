
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

    let spanMascotaJugador = document.getElementById('mascota-jugador')             //Se crea variable para llamar al span HTML de mascota-jugador para mostrar las vidas restantes de la moscota seleccionada


    //Se crea la condicion para notificar al usuario la mascota segun el input seleccionado

    if (inputHipodoge.checked){                 //.checked siginifca si el input, en este caso 'radio' es falso o verdadero (si esta seleccionado o no)
        spanMascotaJugador.innerHTML = 'Hipodoge'   //.innetHTML permite modificar el HTML desde Javascript o (o manipular el DOM como se dice técnicamente)
    } else if (inputCapipepo.checked){
        spanMascotaJugador.innerHTML = 'Capipepo'
    } else if (inputRatigueya.checked){
        spanMascotaJugador.innerHTML = 'Ratigueya'
    } else {
        alert('Selecciona una mascota')                //Alert por si no se selecciona ninguna mascota 
    }

    seleccionarMascotaEnemigo()                     // llamamos a la funcion seleccionarMascotaEnemigo()  creada mas abajo
}


//Se crea la funcion seleccionarMascotaEnemigo() para que el enemigo seleccione su mascota aleatoriamente

function seleccionarMascotaEnemigo(){
    let mascotaAleatorio = aleatorio(1,3)                                    //Se crea la variable aleatorio para que el enemigo selccione su mascota
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')        // Se crea variable que invoca el ID 'mascota-enemigo' para modificarlo con .innerHTML

    if(mascotaAleatorio==1){
        spanMascotaEnemigo.innerHTML = 'Hipodoge'       // el ID de HTML 'mascota-enemigo' se mofiica con .innerHTML segun la opcion del if

    } else if(mascotaAleatorio==1){
        spanMascotaEnemigo.innerHTML = 'Capipepo'
        
    } else {
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
    }
}




function aleatorio(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}

        
//Se crea un evento para que el codigo JS arranque apenas se cargue la pagina 

window.addEventListener('load', iniciarJuego)