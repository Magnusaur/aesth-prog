function setup() {
  createCanvas(displayWidth, displayHeight);
}

function draw() {

if (mouseIsPressed) {
  fill(255,255,0);
  ellipse(mouseX, mouseY, 150, 150);
} else {
  fill(255,0,255);
  ellipse(mouseX, mouseY, 50, 50);
}
}
