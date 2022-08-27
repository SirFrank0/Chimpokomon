
let ataqueJugador                   //Se crea varibale global (variables globales, se crean fuera de cualquier método, y las pueden usar todos. (las pueden usar cualquier método y se pueden leer desde la consola))

let ataqueEnemigo

//Se crea la funcion para que la escuhe el evento 'load'

function iniciarJuego(){
    let botonMascotaJugador = document.getElementById('boton-mascota')                  //Se crea variable para invocar al "id=boton-mascota" de HTML

    botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador)                 //Se le agrega un evento a la variable "botonMascotaJugador" para que invoque la funcion "seleccionarMascotaJugador" al hacer click

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click',ataqueFuego)

    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click',ataqueAgua)

    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click',ataqueTierra)
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


//Funciones para cambiar el contenido de la variante global ataqueJugador

function ataqueFuego(){
    ataqueJugador = 'FUEGO'

    //Se llama a la funcion ataqueAleatorioEnemigo() despues de que el jugador selccione su propio ataque
    ataqueAleatorioEnemigo()
}

function ataqueAgua(){
    ataqueJugador = 'AGUA'
    ataqueAleatorioEnemigo()
}

function ataqueTierra(){
    ataqueJugador = 'TIERRA'
    ataqueAleatorioEnemigo()
}

// Se crea la funcion ataqueAleatorioEnemigo() para que se selccionen aleatoriamente los ataques del enemigo

function ataqueAleatorioEnemigo() {

    let ataqueAleatorio = aleatorio(1,3)

    if (ataqueAleatorio==1){
        ataqueEnemigo = 'FUEGO'                 //la varitante global ataqueEnemigo toma el valor segun la condicion
    } else if (ataqueAleatorio==2) {
        ataqueEnemigo = 'AGUA'
    } else {
        ataqueEnemigo = 'TIERRA'
    }

    combate ()                              //Se llama la funcion 'combate' en este momento porque aqui es cuando los dos ataques (juagdor y enemigo) ya han sido selccionados
}


//Se crea funcion para hacer el combate

function combate(){


    if (ataqueEnemigo == ataqueJugador) {
        crearMensaje("EMPATE")          //Se llama a la funcion 'crearMensaje' y que lo que esta dentro del parentesis cambie la variable 'resultado'
      } else if (ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') {
        crearMensaje("GANASTE")
        
      } else if (ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') {
        crearMensaje("GANASTE")
        
      } else if (ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA') {
        crearMensaje("GANASTE")
       
      } else {
        crearMensaje("PERDISTE")
        
      }

    }





//Se crea funcion para mostrar el hotorial dinamico

function crearMensaje(resultado){   // Se guarda la variable 'resultado' como argumento para utilizarla en la funcion 'combate'
    let sectionMensajes = document.getElementById('mensajes')       //Se crea variable para llamar al ID de HTML 'mensajes'
    
    let parrafo = document.createElement('p')               //Se crea variable 'parrafo' para crear elmento 'p' de HTML para luego ser moficada en la siguiente linea
    
    parrafo.innerHTML ='Tu mascota atacó con ' + ataqueJugador + ', la mascota del enemigo atacó con ' + ataqueEnemigo + ' - ' + resultado  //Se agrega el parrado para modificarlo con innetHTML mediante contatenacions de texto y variables globales

    sectionMensajes.appendChild(parrafo)            //Se usa .appendChild para insertar variable 'parrafo' dentro de la etiqueta con iD=mensajes de HTML para mostrar el historial de la batalla
}


//Se crea la funcion aleatorio para dar un numero aletorio entre 1 y 3 (mascotas)

function aleatorio(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}

        
//Se crea un evento para que la funcion iniciarJuego arranque despues de que se cargue la pagina 

window.addEventListener('load', iniciarJuego)