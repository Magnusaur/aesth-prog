var mic;
var button;
var i;
var t = 600;
var texts = ['Of course', 'Of course', 'Of course', 'Of course',
  'Absolutely', 'Absolutely', 'Absolutely', 'Absolutely',
  'Your security is our primary concern', 'Your security is our primary concern',
  'We are always listening', 'We are always listening',
  'We hear you', 'We hear you', 'We hear you',
  'Have faith in us', 'Have faith in us',
  'We only want what is best', 'We only want what is best',
  'We appreciate your honesty', 'We appreciate your honesty',
  'No complaint goes unnoticed', 'No complaint goes unnoticed',
  'We are eternal',
  'The Lord Inquisitor is on his way',
  'We have nothing but hate for your kind'
];


function setup() {
  createCanvas(600, 400);
  background(0);

  mic = new p5.AudioIn();
  mic.start();



  button = createButton('Submit');
  button.position(30, 350);
  button.mousePressed(displayText);

}

function draw() {
  fill(255);
  var d = map(mic.getLevel(), 0, 0.5, 1, 150);
  ellipse(width/2, height/2, d, d);

  i = random(texts);

  // Text
  textSize(24);
  text('Voice your privacy concerns', 150, 50);

}

function displayText() {
  background(0);
  textSize(20);
  text(i, 100, 368);
}
