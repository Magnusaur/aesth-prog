let frog = [];
var sot;
var kills = 0;
var on = false;
var froaks;
var scum;
var beat;

function preload() {
  froaks = loadSound('FROGS.mp3');
  scum = loadSound('scum.mp3');
  beat = loadSound('loop.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  knap();
  frog[0] = new Frog(100, 100, 50, 25, 5, 5);

  beat.loop();

}



function draw() {
  background(255, 200, 0);
  fill(0);
  textSize(24);
  text('Frogs Blasted: ' + kills, 50, 50);

  for (let i = 0; i < frog.length; i = i + 1) {
    frog[i].move();
    frog[i].show();
    frog[i].bounce();
    frog[i].aim();
  }
  shoot();
  noCursor();
  crosshair();
}

// The function(s) that add(s) more frogs
function knap() {
  button = createButton('Frogs!');
  button.position(width / 2, height / 20);
  button.mousePressed(froggo);
}

function froggo() {
  append(frog, new Frog(random(0, windowWidth), random(0, windowHeight), random(20, 100), random(5, 25), random(-10, 10), random(-10, 10)));
  froaks.play();
}

// The function that makes pointing look real cool
function crosshair() {
  fill(255, 0, 0);
  stroke(255, 0, 0);
  line(mouseX - 20, mouseY, mouseX + 20, mouseY);
  line(mouseX, mouseY - 20, mouseX, mouseY + 20);
  noFill();
  ellipse(mouseX, mouseY, 25, 25);
}
// Where I define what happens, when you click a frog
function shoot() {
  if (mouseIsPressed) {
    for (let i = 0; i < frog.length; i = i + 1) {
      if (frog[i].aim(mouseX, mouseY)) {
        frog.splice(i, 1);
        kills = kills + 1;
        scum.play();
      }
    }
  }
}

// Where I define what it means to be a frog
class Frog {
  constructor(bodyX, bodyY, bodyR, eyeR, Xspeed, Yspeed) {
    this.bodyX = bodyX;
    this.bodyY = bodyY;
    this.bodyR = bodyR;
    this.eyeR = eyeR;
    this.Xspeed = Xspeed;
    this.Yspeed = Yspeed;
    this.colorR = random(0, 200);
    this.colorG = 255;
    this.colorB = random(0, 50);
  }
// Where I define how the frog moves
  move() {
    this.bodyX = this.bodyX + this.Xspeed;
    this.bodyY = this.bodyY + this.Yspeed;
  }
// Where I make sure the frog does not stray too far
  bounce() {
    if (this.bodyX > windowWidth || this.bodyX < 0) {
      (this.Xspeed = this.Xspeed * -1)
    }
    if (this.bodyY > windowHeight || this.bodyY < 0) {
      (this.Yspeed = this.Yspeed * -1)
    }
  }
// Where I decide if a frog can be clicked
  aim(px, py) {
    let d = dist(px, py, this.bodyX, this.bodyY);
    if (d < this.bodyR) {
      return true;
    } else {
      return false;
    }
  }
// Where I define how the frog is created
  show() {
    fill(this.colorR, this.colorG, this.colorB);
    stroke(0);
    strokeWeight(4);
    ellipse(this.bodyX, this.bodyY, this.bodyR * 2); // The body
    fill(255);
    stroke(0);
    strokeWeight(2);
    ellipse((this.bodyX + this.bodyR) - this.eyeR, (this.bodyY - this.bodyR) + this.eyeR, this.bodyR); // The right eye
    line((this.bodyX + this.bodyR) - this.eyeR * 1.5, (this.bodyY - this.bodyR) + this.eyeR, (this.bodyX + this.bodyR) - this.eyeR * 0.5, (this.bodyY - this.bodyR) + this.eyeR);
    ellipse((this.bodyX - this.bodyR) + this.eyeR, (this.bodyY - this.bodyR) + this.eyeR, this.bodyR); // The left eye
    line((this.bodyX - this.bodyR) + this.eyeR * 1.5, (this.bodyY - this.bodyR) + this.eyeR, (this.bodyX - this.bodyR) + this.eyeR * 0.5, (this.bodyY - this.bodyR) + this.eyeR);
    fill(255, 0, 0);
    ellipse(this.bodyX, this.bodyY + this.eyeR, random(5, this.bodyR), random(5, this.bodyR/2)); // The mouth
  }
}
