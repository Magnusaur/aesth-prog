var weather;
var speed = 0;

function setup() {
  createCanvas(600, 400);
  loadJSON('https://api.openweathermap.org/data/2.5/weather?q=Mogan&units=metric&id=524901&APPID=272fdbead445cf89960311474cc311c9', gotData);
}

function gotData(data) {
  weather = data;
}

function draw() {
  background(255);
  sun();
  strand();
  waves();
  fugt();
}

function strand() {
  // Beach
  fill(235, 190, 100);
  rect(0, 250, 600, 200);
  // Sea
  fill(0, 0, 255);
  rect(0, 175, 600, 75);
}

function sun() {
  if (weather) {
    noStroke();
    fill(255, 255, 0, weather.main.humidity);
    ellipse(300, 100, weather.main.temp * 10, weather.main.temp * 10);
    fill(255, 255, 0);
    ellipse(300, 100, weather.main.temp * 5, weather.main.temp * 5);
  }
}

function waves() {
  if (weather) {
    speed = speed + weather.wind.speed;
    stroke(0);
    line(speed, 200, speed + 50, 190);
  }

}

function fugt() {
  if (weather) {
    fill(0, 0, 50, weather.main.humidity / 2);
    rect(0, 0, 600, 400);
  }
}
