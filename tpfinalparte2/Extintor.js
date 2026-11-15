class Extintor {
  constructor() {
    this.imgApagado = loadImage("assets/matafuego_apagado.png");
    this.imgPrendido = loadImage("assets/matafuego_activado.png");

    this.ancho = 240;            
    this.tiempoActivo = 400;     
    this.ultimoDisparo = -1000;  
  }

  activar() {
    this.ultimoDisparo = millis();
  }

  estaDisparando() {
    return millis() - this.ultimoDisparo < this.tiempoActivo;
  }

  dibujar() {
    let img = this.imgApagado;
    if (this.estaDisparando()) {
      img = this.imgPrendido;
    }

    let alto = this.ancho * img.height / img.width;

    let x = constrain(mouseX - this.ancho / 2, 0, 800 - this.ancho);

    image(img, x, 400 - alto, this.ancho, alto);
  }
}
