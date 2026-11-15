class Fuego{
  
  constructor(x, y, ancho, alto, imgPrendido, imgApagado){
    this.x = x;
    this.y =y;
    this.ancho =ancho;
    this.alto =alto;
    
    this.apagandose=false;
    this.apagado = false;
    
    this.frame=0;
    this.contador=0;
    this.velocidad=6;
    
    this.imagenPrendido=imgPrendido;
    this.imagenApagado=imgApagado;

 this.frame = floor(random(this.imagenPrendido.length));  
    this.contador = 0;
    this.velocidad = floor(random(5, 9));
  }
  
  dibujar(){
    if (this.apagado && millis() - this.tiempoApagado > 4000) {
  this.apagado = false;
  this.apagandose = false;
  this.frame = 0;
}
    if (this.apagado){
      return;
    }
    
    this.contador++;
      if (this.contador >= this.velocidad) {
    this.contador = 0;
    this.frame++;
    
    if (this.apagandose) {
        if (this.frame >= this.imagenApagado.length) {
          this.apagado = true;
          this.tiempoApagado = millis();
          this.frame = this.imagenApagado.length - 1;
        }
      } else {
        if (this.frame >= this.imagenPrendido.length) {
          this.frame = 0;
        }
      }
  }
   if (this.apagandose) {
    image(this.imagenApagado[this.frame], this.x, this.y, this.ancho, this.alto);
  } else {
    image(this.imagenPrendido[this.frame], this.x, this.y, this.ancho, this.alto);
  }
}
  
  apagar(){
    if(!this.apagado && !this.apagandose){
      this.apagandose=true;
      this.frame=0;
      this.contador=0;
    }
  }
  
  mouseEncima(){
    return mouseX>this.x 
    && mouseX< this.x + this.ancho &&
    mouseY>this.y && mouseY<this.y+this.alto;
}
}
