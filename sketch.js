var hr = hour();
var mn = minute();
var sc = second();

function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);
  }

function draw() {
  background(255,255,255);  

  scAngle = map(sc, 0, 60, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  hrAngle = map(hr, 0, 12, 0, 360);

  push()
  rotate(scAngle);
  stroke('red');
  strokeWeight(7);
  line(0,0,100,0);
  arc(575, 200, 100, 100, 0, scAngle, OPEN);
  pop()

  push()
  rotate(mnAngle);
  stroke('green');
  strokeWeight(7);
  line(0,0,100,0);
  arc(575, 200, 100, 100, 0, mnAngle, OPEN);
  pop()

  push()
  rotate(hrAngle);
  stroke('blue');
  strokeWeight(7);
  line(0,0,100,0);
  arc(575, 200, 100, 100, 0, hrAngle, OPEN);
  pop()
  // translate(0,0);



  text('Current hour:\n' + hr, 475,50)
  text('Current minute:\n' + mn, 575,50)
  text('Current second:\n' + sc, 675,50)

  drawSprites();
}