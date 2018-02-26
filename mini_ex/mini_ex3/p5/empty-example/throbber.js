var x = 300
var y
var x2 = 50
var y2 = 50
var low = -10
var high = 10


function setup() {
  createCanvas(600, 400);
  background(255, 0, 0);
}

function draw() {



x2 = random(0, 50);
y2 = random(0, 50);

x = x + random(low, high);


if (x < 0) {
  background(255, 0, 0);
  textSize(42);
  fill(0, 0, 0);
  text('Sorry! Try again!', 125, 200);

  x = x - 1000;
}

if (x > 600) {
  background(255, 0, 0);
  textSize(42);
  text('Your video is ready!', 125, 200);
  x = x + 1000;
}
//Throbber
  fill(255);
  ellipse(x, 200, x2, y2);

//Header
  fill(255);
  rect(0, 0, 599, 35);
  textSize(22);
  fill(0, 0, 0);
  text('MyPipe', 10, 25);
  textSize(12);
  text('Improved connection at the low price of: your soul', 325, 25);
  line(90, 0, 90, 35);

//Increase button
  fill(255);
  rect(475, 325, 100, 50);
  fill(0);
  textSize(12);
  text('Increase speed', 485, 355);

  if (mouseIsPressed & mouseX > 475 & mouseX < 575 & mouseY > 325 & mouseY < 375) {
    high = 20;
  }


//Decrease button
  fill(255);
  rect(25, 325, 100, 50);
  fill(0);
  textSize(12);
  text('Decrease speed', 30, 355);
if (mouseIsPressed & mouseX > 25 & mouseX < 125 & mouseY > 325 & mouseY < 375) {
  low = -20;
}
}
