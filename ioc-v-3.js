function w(val){
  return width*val;
}

function h(val){
  return height*val;
}

function strip(y,col){
  fill(col);
  xpos = random(0.05,0.15);
  ypos = y + random(-0.03,0.03);
  rotate(random(-0.05,0.05));
  rect(w(xpos),h(ypos),w(0.75),h(0.1));
}

function setupStrips(hu){
r1 = [hu,100,90,1.0];
r2 = [hu,100,85,1.0];
r3 = [hu,100,80,1.0]; 
r4 = [hu,100,75,1.0];
r5 = [hu,100,70,1.0];
r6 = [hu,100,65,1.0];
r7 = [hu,100,60,1.0];
r8 = [hu,100,55,1.0];
}

function drawStrips(){
  strip(0.1,r1);
  strip(0.2,r2);
  strip(0.3,r3);
  strip(0.4,r4);
  strip(0.5,r5);
  strip(0.6,r6);
  strip(0.7,r7);
  strip(0.8,r8);
}

function setup() {
  createCanvas(450, 450);
  colorMode(HSB,360,100,100,1.0);
  noStroke();
}

function draw() {
  noLoop();
  background(220);
  //hu = random(0,360);
  hu = 190;
  setupStrips(hu);
  drawStrips();
}
