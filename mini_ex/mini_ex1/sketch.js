function setup() {
  createCanvas(displayWidth, displayHeight);
}

function draw() {

if (mouseIsPressed) {
  ellipse(mouseX, mouseY, 150, 150);
} else {
  ellipse(mouseX, mouseY, 50, 50);
}
}
