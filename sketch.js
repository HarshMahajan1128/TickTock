var hr, mn, sc;
var hr2, mn2, sc2;

function setup() {
  createCanvas(displayWidth, displayHeight - 105);
  angleMode(DEGREES);
  }

function draw() {
  background(0,0,0);  

  hr = hour();
  mn = minute();
  sc = second();

  if(sc < 10){
    sc2 = '0' + sc;
  } else {
    sc2 = sc;
  }

  if(mn < 10){
    mn2 = '0' + mn;
  } else {
    mn2 = mn;
  }

  if(hr < 10){
    hr2 = '0' + hr;
  } else {
    hr2 = hr;
  }

  push()
  fill(255,255,255)
  textSize(50)
  textFont('Brush Script MT')
  text('The Coded Clock', 480, 60)
  pop()

  push()
  fill(255,255,255)
  textSize(40)
  textFont("Brush Script MT")
  text("The Current Time according to your Computer is ", 555, 255)
  text(hr2 + ' : ' + mn2 + ' : ' + sc2, 800, 310)
  pop()

  scAngle = map(sc, 0, 60, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  hrAngle = map(hr, 0, 12, 0, 360);

  translate(300,300);
  rotate(-90);
  push()
  // translate(- 175,425)
  rotate(scAngle);
  stroke('red');
  strokeWeight(7);
  line(0,0,120,0);
  pop()

  push()
  stroke('red');
  noFill();
  strokeWeight(10);
  // arc(-180, 425, 342, 342, 0, scAngle, OPEN);
  arc(0, 0, 342, 342, 0, scAngle, OPEN);
  pop()

  push()
  // translate(- 175,425)
  rotate(mnAngle);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop()

  push()
  stroke(0,255,0);
  noFill();
  strokeWeight(10);
  // arc(-180, 425, 321, 321, 0, mnAngle, OPEN);
  arc(0, 0, 321, 321, 0, mnAngle, OPEN);
  pop()

  push()
  // translate(- 175,425)
  rotate(hrAngle);
  stroke('blue');
  strokeWeight(7);
  line(0, 0, 80,0);
  pop()

  push()
  stroke('blue');
  noFill();
  strokeWeight(10);
  // arc(-180, 425, 300, 300, 0, hrAngle, OPEN);
  arc(0, 0, 300, 300, 0, hrAngle, OPEN);
  pop()

  drawSprites();
}