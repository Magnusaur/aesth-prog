var ball = [];

function setup() {
  createCanvas(500, 500);
    background(150, 0, 0);
  ball[0] = new Ball(250, 250, 10, random(-5, 5), random(-5, 5));
}

function draw() {
background(150, 0, 0);
  for (let i = 0; i < ball.length; i = i + 1) {
    ball[i].show();
    ball[i].move();
    ball[i].bounce();
  }

}

class Ball {
  constructor(x, y, r, xspeed, yspeed) {
    this.x = x;
    this.y = y;
    this.xspeed = xspeed;
    this.yspeed = yspeed;
    this.r = 10;
    this.color = random(0, 255);

  }

  show() {
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, this.r, this.r);
  }
  move() {
    this.x = this.x + this.xspeed;
    this.y = this.y + this.yspeed;
  }
  bounce() {
    if (this.x > 500 || this.x < 0) {
      (this.xspeed = this.xspeed * -1)
      append(ball, new Ball(random(0, 500), random(0, 500), 10, random(-5, 5), random(-5, 5)));
    }
    if (this.y > 500 || this.y < 0) {
      (this.yspeed = this.yspeed * -1)
      append(ball, new Ball(random(0, 500), random(0, 500), 10, random(-5, 5), random(-5, 5)));
    }
  }
}
