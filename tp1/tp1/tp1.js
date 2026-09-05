let cielo
let pasto
let correr=[]
let saltar=[]
let vel=1
let xCielo=0
let frameActual=0
let xPasto=0
let tiempoPerros=100
let ultimoCambio=0

function preload() {
  cielo = loadImage("assets/cielo.jpg")
  pasto = loadImage("assets/pasto.png")
   //cargar imágenes de perros
  for(let i=0; i<9; i++){
    let img =loadImage("assets/perro" +(i+1)+ ".png")
    correr[i]= img
  }
 
}

function setup() {
  createCanvas(800, 600)

}

function draw() {
  //cargar imagen del cielo
  image( cielo, xCielo, 0, width, height)
  image( cielo, xCielo+width, 0, width, height)
  xCielo= xCielo- vel
  if (xCielo <= -width) {
    xCielo = 0;
  }
  //cargar imagen del pasto.
  image (pasto,xPasto, 400, width, 200)
  image( pasto, xPasto+width, 400, width, 200)
  xPasto= xPasto- vel*3
  if (xPasto <= -width) {
    xPasto = 0;
  }
  if(millis() - ultimoCambio >=tiempoPerros){
  frameActual++
  ultimoCambio = millis();
   if (frameActual >= correr.length) {
    frameActual = 0;
   }
  }
    image(correr[frameActual], 300, 300);
  
}

/*Resolución de 800x600. --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Carga de imágenes mediante loadImage().------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Uso de ciclos for para recorrer y/o construir los arrays de frames.--------------------------------------------------------------------------------------------------------------------------------------------
Construcción de arrays de imágenes para almacenar los frames de cada animación.--------------------------------------------------------------------------------------------------------------------------------
Al menos 2 animaciones/estados diferentes para el personaje.---------------------------------------------------------------------------------------------------------------------------------------------------
Al menos 2 funciones propias con parámetros, que permitan reutilizar el sistema de animación.
Al menos 1 función propia que retorne un valor.
Implementación de una máquina de estados para controlar las diferentes animaciones, mediante uso de condicionales (if / else) o (switch).
Modificación de la velocidad de animación mediante una variable o parámetros de función.---------------------------------------------------------------------------------------------------------------
Uso de alguna estrategia de manejo temporal: frameCount, contadores, millis().-----------------------------------------------------------------------------------------------------------------------------------
El sistema deberá permitir reiniciar las animaciones y/o volver al estado inicial.
