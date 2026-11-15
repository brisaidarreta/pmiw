//leonel Russo: https://youtu.be/kExCGBjB0Po?si=0ULRkHG4hOKO0eEj
//Brisa Idarreta: https://youtu.be/SGzMZ_sSLZg
function setup() {
  createCanvas(800, 400);
  Juego.instancia = new Juego();
}

function draw() {
  Juego.instancia.actualizar();
  Juego.instancia.dibujar();
  }

function mousePressed() {
  Juego.instancia.click();
  }
