//Idarreta Brisa: https://youtu.be/_EsqFB_g34k 
//Russo Leonel: https://www.youtube.com/watch?v=Bx0PS1wgfEY 

let pantalla = 0;
let fuentetit; // fuente para el título
let fuentegral; // fuente general
let cargarImagen = [];
let loopSonido 
let clickSonido
let yCreditos= 450
let velCreditos=1
let yFondo= 0
let velFondo = 0.5;       
let creditosFin = false;
let lineasCreditos = [
"El Conde Nikola",
"  ",
"Autores",
"Brisa Idarreta (125598/5)",
"Leonel Russo (122884/5)",
"   ",
"Ilustraciones",
"MetaIA",
"   ",
"Soundtrack",
"Ezel 'Eyşan Unutamıyorum'- Toygar Işıklı",
"   ",
"¡Gracias por jugar! ;)"
]

function preload() {
    for (let i = 0; i < 16; i++) {
        cargarImagen[i] = loadImage("assets/imagen" + i + ".jpg");
    }
    fuentetit=loadFont('assets/JMHTypewriterBold.ttf')
    fuentegral= loadFont('assets/JMHTypewriter.ttf')
    
    loopSonido=loadSound('assets/loop.mp3')
    clickSonido= loadSound('assets/click.mp3')
    
}

function setup() {
    createCanvas(800, 450);
    loopSonido.loop() 
}

function draw() {

    // Pantalla de inicio
    if (pantalla == 0) {
        pantallaOrigen(0);
        texto(fuentetit, 70);
        text("El conde Nikola", width / 2, 150);
        texto(fuentegral, 35);
        fill(255,0,0)
        text("Empezar", width / 2, 390);
    }

    // Pantalla 1
    if (pantalla == 1) {
        pantallaOrigen(1);
        texto(fuentegral, 16);

        text("Eres Félix, un joven marinero a punto de ser ascendido a capitán y de casarse con su gran amor, Miranda.Por envidia y ambición, tus dos amigos (Alí y Nacho) y Miranda, te acusan falsamente de un robo y asesinato. Mientras cumples tu cadena perpetua, conoces en prisión a un hombre sabio y millonario llamado Conrado, quien se convierte en tu mentor.",  50, 100, 700, 250)
    texto(fuentetit, 16)
    fill(255,0,0)
    text("siguiente",650, 375) 
  }
  if (pantalla == 2) {
        pantallaOrigen(2)
        texto(fuentegral, 16)
        text("Tras un incendio y un atentado contra tu vida en prisión, Conrado te propone aprovechar el caos para escapar y planear una venganza juntos. Debes decidir si:",  50, 100, 700, 250)
         texto(fuentetit, 16)
        fill(185, 198, 255)
        text("Te quedas en prisión a cumplir tu condena", 420, 350, 330, 80)
        fill(185, 255, 186)
        text("Escapas junto a Conrado y te vengas de tus amigos", 50, 350, 330, 80)
  }
  
  if (pantalla==3){ 
    pantallaOrigen(3)
    texto(fuentegral, 16)
    text("FINAL A. Eres trasladado a otra prisión y separado de su mentor. Tras quedar solo, pasas todo el tiempo pensando en la traición que sufriste y en lo miserable que es tu vida . Decides terminar con ella ahorcándote con una sábana", 50, 100, 700, 250)
   texto(fuentetit, 16)
   fill(255,0,0)
    text("Ir a créditos", width / 2, 390)
}
  if(pantalla==4){
    pantallaOrigen(4)
    texto(fuentegral, 16)
    text("Tú y Conrado fingen su muerte en prision. Escapan y con el dinero de Conrado,  te sometes a una cirugía estética  total que cambie tu rostro y voz . Regresas baio la nueva identidad de 'Nikola', un hombre rico,elegante y  experto jugador de Poker.",50, 100, 700, 250)
    texto(fuentetit, 16)
    fill(255,0,0)
    text("siguiente",650, 375)
  }
  if(pantalla==5){
    pantallaOrigen(5)
    texto(fuentegral, 16)
    text("Al investigar sobre tus viejos amigos, descubres que Nacho es el nuevo capitán de tu barco y se casó con Miranda, mientras Alí maneja el dinero. Ahora debes decidir cómo empezar tu venganza.",50, 100, 700, 250)
    texto(fuentetit, 16)
     fill(185, 255, 186)
    text("Sabotear las cargas del barco para forzar a Nacho a negociar",  50, 350, 330, 80)
    fill(185, 198, 255)
    text("Infiltrarte en el negocio marino mediante apuestas de póker",420, 350, 330, 80)
}
if (pantalla==6){
  pantallaOrigen(13)
  texto(fuentegral, 16)
  text("Saboteas los suministros del barco varias veces, provocando grandes pérdidas a la empresa de Nacho y Alí. En medio de la desesperación, Alí busca financiación externa, pero nadie  acepta el pedido. Acude a vos a través de recomendaciones y te cuenta angustiado que está a punto de irse a la quiebra. Decides ayudarlo a cambio de un porcentaje de la empresa. Sin otra opción, te da un porcentaje.",50, 100, 700, 250)
 texto(fuentetit, 16)
 fill(255,0,0)
  text("siguiente",650, 375)
}

if (pantalla==7){
  pantallaOrigen(14)
  texto(fuentegral, 16)
  text("Mejoras la economía de la empresa y, luego un tiempo, se hacen buenos socios. Incluso te presentan a Miranda. Un día, ellos te invitan a un club a jugar póker y decides ir, pensando en cómo obtener ventaja de ello.",50, 100, 700, 250)
texto(fuentetit, 16)
fill(255,0,0)
text("siguiente",650, 375)
}
if (pantalla==8){
  pantallaOrigen(6)
  texto(fuentegral, 16)
  text("Te presentas como un multillonario en club VIP. Nacho, Alí y Miranda se acercan a tí, están muy atraídos por tu estatus. En las mesas de juego, notas que Nacho tiene una debilidad compulsiva por las apuestas. Aprovechas la situación y debes elegir una forma de arruinarlo:",50, 100, 700, 250)
 texto(fuentetit, 16)
 fill(185, 255, 186)
  text("Minimizar su riqueza hasta que se vea obligado a apostar su barco para demostrar lo contrario", 50, 350, 330, 80)
  fill(185, 198, 255)
  text("Seducir sutilmente a Miranda mientras Nacho apuesta.", 420, 350, 330, 80)
}
if (pantalla==9){
  pantallaOrigen (12)
  texto(fuentegral, 16)
  text("Le dices a Nacho que es cobarde por apostar tan poco y que creías que él tenía más dinero. Intentado demostrar lo contrario, Nacho apuesta uno de los barcos que más ganancia le da. Le ganas y Nacho (lejos de retirarse) sigue apostando para recuperar el barco. Alí lo detiene, ya los metió en suficientes problemas. Ambos se van desesperados a un bar, olvidándose por completo de Miranda. Tu aprovechas y entablas conversación con ella que estaba angustiada por toda la situación. Le dices que les regresarás el barco para tranquilizarla (spoiler: no lo haces).Ella te agradece, siguen hablando y pasan la noche juntos.",50, 100, 700, 250)
texto(fuentetit, 16)
fill(185, 255, 186)
text("siguiente",650, 375)
}
if(pantalla==10){
  pantallaOrigen(7)
  texto(fuentegral, 16)
  text("Después de esa noche, tú y Miranda comienzan a verse en secreto. Una noche, mientras Nacho y alí se había ido a navegar unos días, la emborrachas demasiado y ella empieza a contar cosas de su pasado. La guías discretamente a que te cuente sobre Félix  y ella, fuera de sí misma, empieza a llorar y te confiesa el crimen cometido. Llegaste a grabarlo todo.  Ahora debes pensar en cómo continuar:",50, 100, 700, 250)
   texto(fuentetit, 16)
   fill(185, 255, 186)
  text("Usar la grabación en su contra",50, 350, 330, 80)
  fill(185, 198, 255)
  text("Continuar apostando en el póker para arruinarlos de a poco", 420, 350, 330, 80)
}
 if(pantalla==11){
  pantallaOrigen(9)
  texto(fuentegral, 16)
  text("Tener la grabación te da un gran poder sobre ellos. Puedes controlarlos de la manera que quieras y arruinarles la vida en un instante. Debes elegir cómo hacerlo:",50, 100, 700, 250)
texto(fuentetit, 16)
  fill(185, 255, 186)
 text("Entregar la grabación a la policía anónimamente", 50, 350, 330, 80)
fill(185, 198, 255)
 text("Acorralarlos y chantajearlos", 420, 350, 330, 80)
 }
 if(pantalla==12){
   pantallaOrigen(11)
   texto(fuentegral, 16)
   text("FINAL B. Entregas la  grabación a la policía anónimamente y se reabre tu caso. Declaran la inocencia de Félix y a tus 3 amigos los condenan de por vida a prisión. Un día vas a prisión y les cuentas a uno por uno la verdad: tu eres Félix y fue Miranda quien te dio toda la información de cómo lo hicieron y porqué. Ellos intentan justificarse y pedir perdón (menos Nacho, que está cegado por la ira por lo que hiciste con su esposa y no se arrepiente de nada), vos los ignorás y te vas en paz. Decidís comenzar una nueva vida lejos con Conrado. Lograste justicia, pero la soledad de tu triunfo te deja un vacío imborrable y la traición se volvió parte de personalidad. En tu nueva vida, tienes dificultades para saber quién eres realmente y cómo seguir. Afortunadamente, tu mentor nunca te abandona y te guiará siempre que pueda.",50, 100, 700, 250)
 texto(fuentetit, 16)
 fill(255,0,0)
 text("Ir a créditos", width / 2, 390)
}

if (pantalla==13){
 pantallaOrigen(10) 
 texto(fuentegral, 16)
 text("FINAL C. Reúnes a los 3 para una “partida de póker”. Muestras la confesión de Miranda que demuestra tu inocencia y pone a ellos como los culpables. Ellos no entienden por qué te importa tanto, entonces revelas tu identidad y los amenazas con hacer pública la grabación. Tus viejos amigos no lo podían creer ya que realmente pensaban que estabas muerto. Te preguntan que quieres a cambio y les pides TODO lo que tienen: sus propiedades, sus acciones en empresas, dinero en el banco y, lo más importante, quieres todos los barcos para tomar el puesto de capitán al que te estaban por ascender antes de ir a prisión. Al principio se resignan, pero se dan cuenta de que no tienen otra forma de escapar: es entregarte todo o sufrir el resto de sus vidas en una celda. Te lo dan todo. Retomas el mando de tu buque como capitán. Decides no encarcelarlos y los dejas en absoluta miseria moral y económica. Nacho y Miranda se divorcian. Alí queda viviendo en la calle, endeudado por apuestas anteriores. Zarpas al mar con Conrado dejando todo atrás para empezar una nueva vida.",50, 100, 700, 250)
texto(fuentetit, 16)
 fill(255,0,0)
 text("Ir a créditos", width / 2, 390)
}
if (pantalla==14){
  pantallaOrigen(9)
  texto(fuentegral, 16)
  text("Días después, se reúnen para otra partida. Nacho y Alí van determinados a recuperar el barco, pero saben que no podrán contigo, un gran profesional. Entonces deciden hacer trampa. Eventualmente te terminan ganando y recuperan el barco. Tú te diste cuenta del engaño, pero decides callarlo, de todas formas, tienes una “trampa” mejor en la grabadora de tu teléfono y decides usarla",50, 100, 700, 250)
  texto(fuentetit, 16)
  fill(255,0,0)
  text("siguiente",650, 375)
}

if (pantalla == 15) {
    creditos();
}

//fill(255);
//text( mouseX + " / " + mouseY, mouseX, mouseY );
}


function texto(tipo, tamaño) {
    fill(255);
    textSize(tamaño);
    textAlign(CENTER, CENTER);
    if (tipo) {
        textFont(tipo); 
    }
}

function pantallaOrigen(numImagen) {
    if (numImagen>=0 && numImagen < cargarImagen.length) {
        image(cargarImagen[numImagen], 0, 0, width, height);
    }
}

function mousePressed() {
   userStartAudio();
    if (!loopSonido.isPlaying()) {
        loopSonido.loop();
    }
    let pantallaAnterior = pantalla
 
    if (empezar(0)) {
         pantalla = 1;
    } else if(siguiente(1)) {
          pantalla=2
          
        } else if(opcionBseleccionada(2)) {
          pantalla=3
        }  else if(empezar(3)){
          pantalla=15
        }else if (opcionAseleccionada(2)){
          pantalla=4
        }else if(siguiente(4)){
          pantalla=5
        }else if(opcionAseleccionada(5)){
         pantalla=6
        }else if(opcionBseleccionada(5)){
          pantalla=8
        } else if(siguiente(6)){
          pantalla= 7
        }else if(siguiente(7)){
          pantalla=8
        }else if (opcionAseleccionada(8)){
          pantalla=9
        }else if (opcionBseleccionada(8)){
          pantalla= 10
        }else if(siguiente(9)){
          pantalla=10
        }else if(opcionAseleccionada(10)){
          pantalla=11
        }else if(opcionBseleccionada(10)){
          pantalla=14
        }else if(siguiente(14)){
          pantalla=11
        }else if(opcionAseleccionada(11)){
          pantalla=12
        }else if(opcionBseleccionada(11)){
          pantalla=13
        }else if(empezar(12)){
          pantalla=0
        }else if( empezar(13)){
          pantalla=15
        }else if( empezar(14)){
          pantalla=15
        } else if(creditosFin && empezar(15)){
          pantalla=0
        }
    if (pantalla != pantallaAnterior) {
        clickSonido.play()
    }
}

function opcionBseleccionada(num){
  return  mouseX > 420 &&
        mouseX < 750 &&
        mouseY > 350 &&
        mouseY < 430 &&
        pantalla == num
}
  function siguiente(pantallaActual){
    return mouseX > 606 &&   
        mouseX < 692 &&
        mouseY > 370 &&
        mouseY < 386 &&
        pantalla == pantallaActual
  }
  
  function opcionAseleccionada(pantallaNum){
   return mouseX > 50 &&
   mouseX < 380 &&
   mouseY > 350 &&
   mouseY < 430 &&
   pantalla == pantallaNum
  }
  
  //para empezar, ver créditos,  volver al inicio
  function empezar(ultimaPantalla){
      return mouseX > 313 &&
        mouseX < 481 &&
        mouseY > 378 &&
        mouseY < 419 &&
        pantalla == ultimaPantalla
  }
 
 function reiniciarCreditos() {
    yCreditos = 450;
    xFondo = 0;
    creditosFin = false;
}

function creditos() {
    image(cargarImagen[15], 0, yFondo, width, height);
image(cargarImagen[15], 0, yFondo + height, width, height);
yFondo = yFondo - velFondo;
if (yFondo <= -height) {
    yFondo = 0;
    }

    fill(0, 170);
    noStroke();
    rect(0, 0, width, height);

    let espacio = 40;
    texto(fuentegral, 18);
    for (let i = 0; i < lineasCreditos.length; i++) {
        text(lineasCreditos[i], width / 2, yCreditos + i * espacio);
    }
    if (yCreditos + (lineasCreditos.length - 1) * espacio > 200) {
        yCreditos = yCreditos - velCreditos;
    } else {
        creditosFin = true;
    }
    if (creditosFin) {
        fill(255, 0, 0);
        text("Ir al inicio", width / 2, 390);
    }
}
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
