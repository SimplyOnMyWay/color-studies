function w(val){
  return val*width;
}

function h(val){
  return val*height;
}

col1 = [0,90,50,1.0];
col2 = [30,90,90,0.75];
col3 = [0,70,90,0.5];
col4 = [190,100,100,1.0]

function setup() {
  createCanvas(400, 400);
  noStroke();
  colorMode(HSB,360,100,100,1.0);
}

function draw() {
  background(220);
  fill(col1);
  rect(w(0.2),h(0.2),w(0.5),h(0.5));
  fill(col4);
  rect(w(0.7),h(0.2),w(0.2),h(0.5));
  fill(col2);
  rect(w(0.1),h(0.4),w(0.8),h(0.2));
  fill(col3);
  rect(w(0.1),h(0.3),w(0.8),h(0.05));
  
}
