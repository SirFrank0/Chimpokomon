const botonMascotaJugador = document.getElementById('boton-mascota')                  //Se crea variable para invocar al "id=boton-mascota" de HTML
const botonFuego = document.getElementById('boton-fuego')
const sectionSeleccionarAtaque = document.getElementById('sel-ataque')            //Se crea variable para llamar a la seccion seleccionar-ataque de HTML
const sectionReiniciar = document.getElementById('reiniciar')            //Se crea variable para llamar a la seccion reiniciar de HTML
const botonAgua = document.getElementById('boton-agua')
const botonTierra = document.getElementById('boton-tierra')
const botonReiniciar = document.getElementById('boton-reiniciar')                 //Se crea variable para llmar al boton reiniciar desde HTML

const sectionSeleccionarMascota = document.getElementById('sel-mascota')            //Se crea variable para llamar a la seccion seleccionar-mascota de HTML
//Se crean variables para llamarlas al crear condiciones
const inputHipodoge = document.getElementById('hipodoge')
const inputCapipepo = document.getElementById('capipepo')
const inputRatigueya = document.getElementById('ratigueya')
const spanMascotaJugador = document.getElementById('mascota-jugador')             //Se crea variable para llamar al span HTML de mascota-jugador para mostrar las vidas restantes de la moscota seleccionada

const spanMascotaEnemigo = document.getElementById('mascota-enemigo')        // Se crea variable que invoca el ID 'mascota-enemigo' para modificarlo con .innerHTML

const spanVidasJugador = document.getElementById('vidas-jugador')  //Se crea variable para llamar el elemento vidas-juagdor de HTML
const spanVidasEnemigo = document.getElementById('vidas-enemigo')  // Se crea variable para llamar el elemento vidas-enemigo de HTML

const sectionMensajes = document.getElementById('resultado')                  //Se crea variable para llamar al ID de HTML 
const ataquesDelJugador = document.getElementById('ataques-del-jugador')     
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo') 


let ataqueJugador                   //Se crea varibale global (variables globales, se crean fuera de cualquier método, y las pueden usar todos. (las pueden usar cualquier método y se pueden leer desde la consola))
let ataqueEnemigo
let vidasJugador = 3             // Se crean variables globales para el contador de vidas.
let vidasEnemigo = 3

class Mokepon {                     //Creamos la primera clase, se tiene que emepezar por Mayuscula
    constructor(nombre, foto, vida) {           //Usamos contrcutor para definir los atributos que tendrán nuestros futuros objetos.
        this.nombre = nombre                    //Con this.atributo = atributo vamos ligando cada uno de los atributos a la clase
        this.foto = foto
        this.vida = vida
        this.ataques = []                       // se coloca [] porque posteriormente le vamos a inyectar ataques con objetos literales
    }                      
}                                      

let hipodoge = new Mokepon ('Hipodoge','/assets/pHqhVfx.png',5)   // con new Clase creamos un nuevo objeto de esa clase

let capipepo = new Mokepon ('Capipepo', '/assets/Ic_unlock_cpm_snakat.png',5)

let ratigueya = new Mokepon ('Ratigueya','/assets/Ic_unlock_cpm_velocirapstar.png',5)

// console.log(hipodoge)                               // Sirve para ver valores o mapear errores


 //let mokepones = []                   //creamos un arreglo o array para llamar a varios elementos (en este caso objetos) de una vez

 //mokepones.push(hipodoge,capipepo,ratigueya)            // con .push inyectamos objetos al array  let mokepones = [] , esto cuando la cantidad de onjetos camabia a lo largo del proyecto, ejemplo; agregar mas chimpokomones

 hipodoge.ataques.push(                             //Se inyectan valores al atibuto this.ataques de la clase Mokepon
    {nombre: '💧', id: 'boton-agua'},                   // Se usa : para diferenciar variables
    {nombre: '💧', id: 'boton-agua'},                   // Se crean 3 del mismo ataque dependiendo de la especialidad del chimpokomon
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🌳', id: 'boton-tierra'}
 )

 capipepo.ataques.push(                             
 {nombre: '🌳', id: 'boton-tierra'},
 {nombre: '🌳', id: 'boton-tierra'},
 {nombre: '🌳', id: 'boton-tierra'},
 {nombre: '💧', id: 'boton-agua'},
 {nombre: '🔥', id: 'boton-fuego'}
)


ratigueya.ataques.push(                             
{nombre: '🔥', id: 'boton-fuego'},
{nombre: '🔥', id: 'boton-fuego'},
{nombre: '🔥', id: 'boton-fuego'},
{nombre: '💧', id: 'boton-agua'},
{nombre: '🌳', id: 'boton-tierra'}
)

//console.log(Mokepones)



//Se crea la funcion para que la escuhe el evento 'load'

function iniciarJuego(){
    sectionSeleccionarAtaque.style.display = 'none'                                         //Se oculta etiqueta de HTML con JS
    sectionReiniciar.style.display = 'none'                                         //Se oculta etiqueta de HTML con JS
    botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador)                 //Se le agrega un evento a la variable "botonMascotaJugador" para que invoque la funcion "seleccionarMascotaJugador" al hacer click
    botonFuego.addEventListener('click',ataqueFuego)
    botonAgua.addEventListener('click',ataqueAgua)
    botonTierra.addEventListener('click',ataqueTierra)
    botonReiniciar.addEventListener('click',reiniciarJuego)
}

//Se crea una funcion para guardar el evento de mostrar mascota segun el input seleccionado

function seleccionarMascotaJugador(){      
    
    sectionSeleccionarMascota.style.display = 'none'                                //Se oculta etiqueta de HTML con JS 
    sectionSeleccionarAtaque.style.display = 'flex'                                //Se muestra etiqueta de HTML con JS... Se cambia de block a flex porque es la tecnologia que usamos
    
    //Se crea la condicion para notificar al usuario la mascota segun el input seleccionado

    if (inputHipodoge.checked){                 //.checked siginifca si el input, en este caso 'radio' es falso o verdadero (si esta seleccionado o no)
        spanMascotaJugador.innerHTML = 'Hipodoge'   //.innetHTML permite modificar el HTML desde Javascript o (o manipular el DOM como se dice técnicamente)
    } else if (inputCapipepo.checked){
        spanMascotaJugador.innerHTML = 'Capipepo'
    } else if (inputRatigueya.checked){
        spanMascotaJugador.innerHTML = 'Ratigueya'
    } else {
        alert('Selecciona una mascota')                //Alert por si no se selecciona ninguna mascota 
        location.reload()                               // Se recarga la pagina si no se selecciona una mascota
    }

    seleccionarMascotaEnemigo()                     // Llamamos a la funcion seleccionarMascotaEnemigo()  creada mas abajo
}


//Se crea la funcion seleccionarMascotaEnemigo() para que el enemigo seleccione su mascota aleatoriamente

function seleccionarMascotaEnemigo(){
    let mascotaAleatorio = aleatorio(1,3)                                    //Se crea la variable aleatorio para que el enemigo selccione su mascota

    if(mascotaAleatorio==1){
        spanMascotaEnemigo.innerHTML = 'Hipodoge'       // El ID de HTML 'mascota-enemigo' se mofiica con .innerHTML segun la opcion del if

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
        ataqueEnemigo = 'FUEGO'                 //La varitante global ataqueEnemigo toma el valor segun la condicion
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
        crearMensaje("Empataste este turno")          //Se llama a la funcion 'crearMensaje' y que lo que esta dentro del parentesis cambie la variable 'resultado'
      } else if (ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') {
        crearMensaje("Ganaste este turno")

        vidasEnemigo--                                  //Se resta 1 a la variante global vidasEnemigo caada vez que ganamos
        spanVidasEnemigo.innerHTML = vidasEnemigo       // Se agrega el valor restado al ID de HTML
        
      } else if (ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') {
        crearMensaje("Ganaste este turno")

        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
        
      } else if (ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA') {
        crearMensaje("Ganaste este turno")

        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
       
      } else {
        crearMensaje("Perdiste este turno") 

        vidasJugador--                                  //Se resta 1 a la vairabte global 3 cada vez que se pierde
        spanVidasJugador.innerHTML = vidasJugador      // Se agrega el valor restado al ID de HTML
        
      }

      // Revisar numero de vidas para determinar ganador

      revisarVidas()

    }


function revisarVidas(){

    if(vidasEnemigo==0){

        crearMensajeFinal("Felicitaciones!<br>Ganaste la partida!")

    } else if (vidasJugador==0){

        crearMensajeFinal("Perdiste la partida.<br>Vuelve a intentarlo")

    }
}


//Se crea funcion para mostrar el hotorial dinamico

function crearMensaje(resultado){                                            // Se guarda la variable 'resultado' como argumento para utilizarla en la funcion 'combate'
    
    let nuevoAtaqueDelJugador = document.createElement('p')               //Se crea variable 'parrafo' para crear elmento 'p' de HTML para luego ser moficada en la siguiente linea
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo



    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)  //Se usa .appendChild para insertar variable 'parrafo' dentro de la etiqueta con iD=mensajes de HTML para mostrar el historial de la batalla
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)

}

//Se crea funcion para crear mensaje de si se gano o se perdio la partida

function crearMensajeFinal(resultadoFinal){  

    sectionMensajes.innerHTML = resultadoFinal
 

    // Se desabilitan los botonenes de ataque cuando se pierde o se gana
    
    botonFuego.disabled = true

    botonAgua.disabled = true

    botonTierra.disabled = true

    sectionReiniciar.style.display = 'block'  
}


// Se crea la funcion para reiniciar el juego

function reiniciarJuego(){
    location.reload()                   //Reinicia la URL
}




//Se crea la funcion aleatorio para dar un numero aletorio entre 1 y 3 (mascotas)

function aleatorio(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}

        
//Se crea un evento para que la funcion iniciarJuego arranque despues de que se cargue la pagina 

window.addEventListener('load', iniciarJuego) 