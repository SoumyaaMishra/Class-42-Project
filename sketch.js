var hr, min, sc;

function setup() {
  createCanvas(400,400);
  angleMode(DEGREES);
}

function draw() {
  background("black"); 
  translate(200,200) 
  rotate(-90);
  drawSprites();
  hr = hour();
  min = minute();
  sc = second();
  scAngle = map(sc, 0, 60, 0, 360);
  scMin = map(min, 0, 60, 0, 360);
  hrAngle = map(hr%12, 0 , 12 , 0 , 360);
  console.log(hr);
  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  push();
  rotate(scMin);
  stroke("blue");
  strokeWeight(7);
  line(0,0,75,0);
  pop();

  push();
  rotate(hrAngle);
  stroke("yellow");
  strokeWeight(7);
  line(0,0,50,0);
  pop();

  point(0,0)
  strokeWeight(10);
  noFill();
  stroke(255,0,0);
  strokeWeight(10);
  noFill();
  arc(0,0,300,300,0,0,scAngle);
  stroke(0,0,255);
  arc(0,0,280,280,0,0,scMin);
  stroke("yellow");
  arc(0,0,260,260,0,0,hrAngle);
}