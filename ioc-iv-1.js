function w(val){
  return width*val;
}

function h(val){
  return height*val;
}

turqoise = [195,78,62];
ochre = [20,60,59];
rust = [21,76,72];
lemony = [44,58,70];
navy = [221,98,34];

function drawStrip(y,dy,col,angle){
  fill(col);
  rotate(angle);
  rect(w(0),h(y),w(1.0),h(dy));
}


function setup() {
  createCanvas(450, 450);
  colorMode(HSB,360,100,100,1.0);
  noStroke();
  background(turqoise);
}

function draw() {
  noLoop();
  drawStrip(0.7,0.3,rust,0);
  fill(ochre);
  rect(w(0.4),h(0.15),w(0.2),h(0.7));
  drawStrip(0.3,0.2,navy,0); 
  drawStrip(0.5,0.2,lemony,0);
}
