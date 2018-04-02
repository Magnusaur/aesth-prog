var sourceText = "To be, or not to be, that is the question Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against Sea of troubles, And by opposing end them: to die, to sleep No more; and by sleep, to say we end the heart-ache, and the thousand natural shocks that Flesh is heir to? 'Tis a consummation devoutly to be wished. Be all my sins remember'd";
var words = sourceText.split(" ");
var TypeWriter;
var Ding;
var MonkeySound;
var taeller = 0;
var forskudtY = 0;


function preload() {
  TypeWriter = loadSound('TypeWriter.wav');
  Ding = loadSound('Ding.wav');
  bg = loadImage('Paper.jpg');
  MonkeySound = loadSound('Abelyd.mp3');
}
function setup() {
  createCanvas(550, 880);
image(bg, -50, -50);

}

function draw() {

  textSize(15);

}

function keyPressed() {
image(bg, -50, -50);
    if (keyCode === 13) {
       Ding.play();
       taeller = 0;
       forskudtY = 0;

       playMode = 'sustain';
     } else {
       for (let x = 50; x < width-100; x += 110) {
         for (let y = 60; y < height-10; y += 70) {
            fill(0);
            textStyle(BOLD);
             text(random(words), x, y + forskudtY);
          }
       TypeWriter.play();
       playMode = 'sustain';
       taeller = taeller + 1;
       b = 50;
       h = 60;
       if (taeller > 20) {
         forskudtY = 70;
         text('To', b, h), text('be,', b + 110, h), text('or', b + 110 * 2, h), text('not', b + 110 * 3, h);
       }

       if (taeller > 40) {
          forskudtY = 140;
          text('to', 50, 130), text('be,', 160, 130), text('that', 270, 130), text('is', 380, 130);
       }

       if (taeller > 60) {
          forskudtY = 210;
          text('the', 50, 200), text('question', 160, 200), text('Whether', 270, 200), text('tis', 380, 200)
       }

      if (taeller > 80) {
          forskudtY = 280;
          text('nobler', 50, 270), text('in', 160, 270), text('the', 270, 270), text('mind', 380, 270);
       }
      if (taeller > 100) {
          forskudtY = 350;
          text('to', 50, 340), text('suffer', 160, 340), text('the', 270, 340), text('slings', 380, 340);
       }
      if (taeller > 120) {
          forskudtY = 420;
          text('and', 50, 410), text('arrows', 160, 410), text('of', 270, 410), text('outrageous', 380, 410);
       }
      if (taeller > 140) {
          forskudtY = 490;
          text('fortune,', 50, 480), text('Or', 160, 480), text('to', 270, 480), text('take', 380, 480);
       }
      if (taeller > 160) {
          forskudtY = 560;
          text('Arms', 50, 550), text('against', 160, 550), text('a', 270, 550), text('Sea', 380, 550);
       }
      if (taeller > 180) {
          forskudtY = 630;
          text('of', 50, 620), text('troubles,', 160, 620), text('And', 270, 620), text('by', 380, 620);
       }
      if (taeller > 200) {
          forskudtY = 700;
          text('opposing', 50, 690), text('end', 160, 690), text('them:', 270, 690), text('to', 380, 690);
       }
       if (taeller > 220) {
          forskudtY = 770;
          text('die,', 50, 760), text('to', 160, 760), text('sleep', 270, 760), text('No', 380, 760);
       }

       if (taeller > 240) {
         forskudtY = 840;
         text('more;', 50, 830), text('and', 160, 830), text('by', 270, 830), text('a', 380, 830);
       }
       if (taeller == 248) {
         MonkeySound.play();
       }

//And by opposing end them: to die, to sleep
//No more; and by a sleep, to say we end
//the heart-ache, and the thousand natural shocks






       console.log(taeller.length);


}

}
}
