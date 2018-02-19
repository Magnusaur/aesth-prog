var eye = {
  iris: 100,
  pupil: 50,
};

var mario;

function preload() {
  mario = loadSound('marioloop.mp3');
}

function setup() {
createCanvas(600,600);
mario.loop();
}


function draw() {
background(0,0,0);
//Head
fill(255,255,0);
ellipse(300,300,550,600);

//Mouth
fill(255,0,0);
if (mouseIsPressed & mouseX>100 & mouseX<500 & mouseY>400) {
bezier(100,400,mouseX,mouseY,mouseX,mouseY,500,400);
} else {
bezier(100,400,200,500,400,500,500,400);
}

//Nose
fill(225,225,0);
if (mouseIsPressed & mouseY<400 & mouseY>200) {
  ellipse(mouseX,mouseY,150,50);
  line(mouseX-75,mouseY,225,300);
  line(mouseX+75,mouseY,375,300);
} else {
  ellipse(300,300,150,50);
}

//Left eye
fill(255,255,255);
ellipse(150,200,eye.iris, eye.iris);
fill(0,0,0);
if (mouseX>200) {
  ellipse(175,200,eye.pupil, eye.pupil);
} else if (mouseY>200) {
  ellipse(150,225,eye.pupil, eye.pupil);
} else if (mouseY<100) {
  ellipse(150,175,eye.pupil, eye.pupil);
} else if (mouseX<100) {
  ellipse(125,200,eye.pupil, eye.pupil);
} else {
  ellipse(150,200,eye.pupil, eye.pupil);
}

//Right eye
fill(255,255,255);
ellipse(450,200,eye.iris, eye.iris);
fill(0,0,0);
if (mouseX<400) {
  ellipse(425,200,eye.pupil, eye.pupil);
} else if (mouseY>200) {
  ellipse(450,225,eye.pupil, eye.pupil);
} else if (mouseY<100) {
  ellipse(450,175,eye.pupil, eye.pupil);
} else if (mouseX>500) {
  ellipse(475,200,eye.pupil, eye.pupil);
} else {
  ellipse(450,200,eye.pupil, eye.pupil);
}

}
