var canvas;

function setup() {
  // create a canvas with 640px width, 480 height
  canvas = createCanvas(700, 700);
  canvas.parent('sketch-container');
  noStroke();
  background(100);
}

function draw() {
  // conditionally set fill color based on whether mouse is pressed down
  // http://p5js.org/reference/#/p5/mouseIsPressed

  if (mouseIsPressed) {
    // fill color: http://p5js.org/reference/#/p5/fill
    fill(4);
  } else {
    fill(255);
  }
  // draw an ellipse, that's centered at the current mouse location
  // with 80px width, and 80px height
  if(mouseX != 0 && mouseY != 0) {
    ellipse(mouseX, mouseY, 30, 30);
  }
}
