class Juego{
  static instancia = null;
constructor(){
  this.estado = "instrucciones";
  this.fondo = loadImage("assets/fondo.jpg");
  this.sonidoApagaFuego =loadSound("assets/extintor.mp3");
  this.sonidoClick =loadSound("assets/click.mp3");
  this.musica= loadSound("assets/fondo.mp3")
  this.musica.setVolume(0.3);
  
  this.imagenPrendido=[]
   for(let i=0; i<7;i++){
    this.imagenPrendido[i]= loadImage("assets/fuego_prendido_" +i+".png");
    }
    
    this.imagenApagado=[]
   for(let i=0; i<5;i++){
   this.imagenApagado[i]= loadImage("assets/fuego_apagandose_"+i+".png"); 
  }
  
  this.pisoMin = 280;
  this.pisoMax = 395;
  
 this.fuegos =[]; 
 this.llave = new Llave();
 this.amigo = new Amigo(350, 230,80, 120);
 this.extintor = new Extintor();
 
 this.btnJugar =new Boton( 340, 250, 120, 40,"Jugar");
 this.btnCreditos =new Boton( 340, 300, 120, 40, "Créditos");
 this.btnVolver =new Boton(340, 330, 120, 40,"Volver");
 this.btnReiniciar =new Boton(10, 355, 110, 35,"Reiniciar");
 
 this.tiempoInicio =0;
 this.tiempoLimite =30000;
 this.mensaje="";
 
 this.tiempoMensaje=0;
 for (let i = 0; i < 3; i++) {
      let tam = random(90, 130);
      let x = this.amigo.x + random(-40, 20);
      let base = this.amigo.y + this.amigo.alto + random(0, 40);
      this.agregarFuego(x, base, tam);
    }
    
    for (let i = 0; i < 11; i++) {
      let base = random(this.pisoMin, this.pisoMax);
      let tam = map(base, this.pisoMin, this.pisoMax, 80, 160) + random(-15, 15);
      let x = random(0, 800 - tam);   
      this.agregarFuego(x, base, tam);
}
}
agregarFuego(x, base, tam) {
  this.fuegos.push(
    new Fuego( x, base - tam, tam, tam, this.imagenPrendido, this.imagenApagado)
  )
}

iniciar(){
  //this.crearFuegos()
  this.llave.reiniciar();
  this.amigo.reiniciar();
  this.mensaje="";
  this.tiempoInicio = millis();
  this.estado ="jugando";
  if(!this.musica.isPlaying()){
    this.musica.loop();
}
}

actualizar(){
  if (this.estado != "jugando") {
    return;
  }
  if (this.llave.agarrada && this.amigo.agarrado) {
    this.estado = "ganaste";
    this.musica.stop();
  } else if (millis() - this.tiempoInicio > this.tiempoLimite) {
    this.estado = "perdiste";
    this.musica.stop();
  }
  
 if (frameCount % 300 == 0) {
  let base = random(this.pisoMin, this.pisoMax);
  let tam = random(80, 140);
  let x = random(0, 800 - tam);

  this.agregarFuego(x, base, tam);
}
}

dibujar(){
  if(this.estado=="instrucciones"){
    this.dibujarInstrucciones();
  }else if(this.estado=="creditos"){
    this.dibujarCreditos();
  }else if(this.estado=="jugando"){
    this.dibujarJuego();
  }else {
    this.dibujarFin();
  }
}

dibujarInstrucciones(){
  background(30,20,20);
  fill(255);
  noStroke();
  textAlign(CENTER,TOP);
  textSize(32);
  text("Salva y escapa", 400,40);
  textSize(14);
  //POR ALGÚN MOTIVO, NO MEJÓ PONER TODO EN UNA MISMA LÍNEA CON SALTOS DE RENGLÓN.
  text("Hay un incendio en la prisión ¡Es tu oportunidad!", 400, 100);
  text("1. Hacé click en los fuegos para apagarlos.", 400, 130);
  text("2. Agarrá la llave (aparece 2 segundos en un lugar aleatorio).", 400, 160);
  text("3. Después de agarrar la llave, rescata a tu amigo escondido detrás del fuego (puese rescatarlo siempre y cuando no haya fuego tocándolo)", 150, 190,500,100);
  text("4.Si la habitación se llena de fuego perdés.", 400, 230);
  this.btnJugar.dibujar();
  this.btnCreditos.dibujar();
}

dibujarCreditos(){
  background(30, 20,20);
  fill(255);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(28);
  text("Créditos", 400, 60);
  textSize(16);
  text("Brisa Idarreta - 125598/5", 400,150);
  text("Leonel Russo - 122884/5",400, 170);
  this.btnVolver.dibujar();
}

dibujarJuego(){
  image(this.fondo,0,0,800,400);
  this.amigo.dibujar();
  for (let i=0; i<this.fuegos.length;i++){
    this.fuegos[i].dibujar();
  }
this.extintor.dibujar()
this.llave.actualizar();
this.llave.dibujar();
  
  let tiempoTranscurrido =millis() - this.tiempoInicio;
  let transparencia =map(tiempoTranscurrido,0, this.tiempoLimite,0,150);
  noStroke();
  fill(255, 60, 0, transparencia);
  rect(0,0,800,400);
  
  if (millis() - this.tiempoMensaje < 2000) {
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(22);
  text(this.mensaje, 400, 40);
}
}


dibujarFin(){
  image(this.fondo, 0, 0, 800, 400);
  noStroke();
  fill(0,0,0,170);
  rect(0,0,800,400);
  
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(40);
  if(this.estado =="ganaste"){
    text("¡Escapaste!", 400, 150);
  } else{
    text("Te quedaste sin salida", 400, 150);
  }
  this.btnReiniciar.dibujar();
}

click(){
  if(this.estado=="instrucciones"){
    if(this.btnJugar.mouseEncima()){
      this.iniciar();
    }else if(this.btnCreditos.mouseEncima()){
      this.estado="creditos";
    }
  }else if(this.estado =="creditos"){
    if(this.btnVolver.mouseEncima()){
      this.estado="instrucciones";
    }
  }else{
    if(this.btnReiniciar.mouseEncima()){
      this.iniciar();
      return;
    }
    if(this.estado =="jugando"){
      this.clickJuego();
    }
  }
   this.btnReiniciar.dibujar();
}

clickJuego(){
 let clickEnFuego = false;
 this.extintor.activar();
  for (let i = this.fuegos.length -1; i>=0;i--) {
    let f = this.fuegos[i];
    if (f.mouseEncima() && !f.apagado && !f.apagandose) {
      f.apagar();
      this.sonidoApagaFuego.play();
      clickEnFuego = true;
    }
  }
  if (clickEnFuego) {
    return;
  }

  if (this.llave.mouseEncima() && !this.llave.agarrada) {
    this.llave.agarrar();
    this.sonidoClick.play();
    return;
  }

  if (this.amigo.mouseEncima() && !this.amigo.agarrado) {
    let hecho = this.amigo.agarrar(this.llave, this.fuegos);
    if (!hecho) {
      if (!this.amigo.libre(this.fuegos)) {
        this.mensaje = "Hay fuego delante de tu amigo";
      } else {
        this.mensaje = "Necesitas la llave";
      }
      this.tiempoMensaje = millis();
    }
  }
if (clickEnFuego){
  return;
}
this.extintor.activar();
}


}
