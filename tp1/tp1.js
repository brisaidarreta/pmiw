let correrImag = []
let saltarImag =[]
let cielo
let pasto
let frameActual = 0
let intervaloTiempo = 120
let ultimoCambio = 0
let estado ="correr"
//mov fondo
let xCielo = 0
let xPasto = 0
let vel = 1
//movimiento del dog
let posXdog = -100
let posYdog =320
let velDog =3

function preload(){
  for ( let i=0; i<3; i++){
  correrImag[i] = loadImage ("assets/correr"+i+".png")
  }
  for( let i=0; i<4; i++){
  saltarImag[i] = loadImage( "assets/saltar"+i+".png")
  }
  cielo = loadImage("assets/cielo.jpg")
  pasto = loadImage("assets/pasto.png")

  
}

function setup(){
  createCanvas(800,600)
}

function cambiarFrame(intervalo){
if (millis() - ultimoCambio>=intervalo){
  ultimoCambio  = millis()
  return true
} 
return false
}

function animarPerro(arregloImag, x, y){
  if( cambiarFrame (intervaloTiempo)){
    frameActual= (frameActual + 1) %arregloImag.length //.length sirve para saber la cantidad total de elementos que tiene un array o un texto.
  }
  image(arregloImag[frameActual], x, y)
}

function reinicio(){
  posXdog = -100
  estado= "correr"
  frameActual = 0
  ultimoCambio = millis()
  xCielo =0
  xPasto=0
}

function keyPressed(){
  if( key===" "){ //barra espaciadora
   reinicio()
  }
}
  
  
  
function draw(){
  //imagen del cielo
  image( cielo, xCielo, 0, width, height)
  image( cielo, xCielo+width, 0, width, height)
  xCielo= xCielo- vel
  if (xCielo <= -width) {
    xCielo = 0;
  }
  //imagen del pasto.
  image (pasto,xPasto, 400, width, 200)
  image( pasto, xPasto+width, 400, width, 200)
  xPasto= xPasto- vel*3
  if (xPasto <= -width) {
    xPasto = 0;
  }
  
  posXdog= posXdog + velDog
  
  if(posXdog>300 && posXdog<370){
    estado= "saltar" 
    posYdog=260
  }else{
    estado = "correr"
    posYdog=320
  }
  
  if (posXdog>width +100){
    reinicio()
  }
  
  if(estado==="correr"){
    animarPerro(correrImag, posXdog, posYdog)
  }else if(estado==="saltar"){
    animarPerro(saltarImag, posXdog, posYdog)
  }

}







/*
Resolución de 800x600.--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Carga de imágenes mediante loadImage().-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Uso de ciclos for para recorrer y/o construir los arrays de frames.---------------------------------------------------------------------------------------------------------------------------------------------
Construcción de arrays de imágenes para almacenar los frames de cada animación.---------------------------------------------------------------------------------------------------------------------------------
Al menos 2 animaciones/estados diferentes para el personaje. correr/saltar--------------------------------------------------------------------------------------------------------------------------------------
Al menos 2 funciones propias con parámetros, que permitan reutilizar el sistema de animación.--------------------------------------------------------------------------------------------------------------------
Al menos 1 función propia que retorne un valor.------------------------------------------------------------------------------------------------------------------------------------------------------------------
Implementación de una máquina de estados para controlar las diferentes animaciones, mediante uso de condicionales (if / else) o (switch).-----------------------------------------------------------------------
Modificación de la velocidad de animación mediante una variable o parámetros de función.------------------------------------------------------------------------------------------------------------------------
Uso de alguna estrategia de manejo temporal:  millis().---------------------------------------------------------------------------------------------------------------------------------------------------------
El sistema deberá permitir reiniciar las animaciones y/o volver al estado inicial.-------------------------------------------------------------------------------------------------------------------------------
*/
