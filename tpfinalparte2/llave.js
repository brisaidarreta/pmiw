class Llave {

  constructor(){
    this.x = 0;
    this.y = 0;
    this.ancho = 90;
    this.alto= 90;
    this.agarrada = false;
    this.visible=false;
    this.tiempoVisible=2000;
    this.tiempoOculta=1500;
    this.ultimoCambio=0
    
    this.imagen=loadImage("assets/llave.png");
  }
 
  actualizar() {
    if (this.agarrada) {
      return;
    }
    let pasado = millis() - this.ultimoCambio;

    if (this.visible && pasado > this.tiempoVisible) {
      this.visible = false;
      this.ultimoCambio = millis();
    } else if (!this.visible && pasado > this.tiempoOculta) {
      this.aparecer();
    }
  }
  
    aparecer() {
    this.x = random(20, 800 - this.ancho - 20);
    this.y = random(20, 400 - this.alto - 20);
    this.visible = true;
    this.ultimoCambio = millis();
  }
  
  dibujar(){
    if(this.agarrada){
      image(this.imagen,740,10,40,40);
    }else if(this.visible){
      image(this.imagen, this.x, this.y, this.ancho, this.alto);
    }
  }
  
  agarrar(){
  this.agarrada=true;
  }
  reiniciar(){
    this.agarrada=false;
    this.visible=false;
    this.ultimoCambio=millis();
}
mouseEncima(){
  return this.visible && !this.agarrada && 
         mouseX>this.x && mouseX< this.x + this.ancho &&
         mouseY>this.y && mouseY<this.y+this.alto;
}
}
