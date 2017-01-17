// p5 file

// open the console window of any browser to see console.log() messages,
// like print() messages in Processing
console.log("this is a js comment");
var y = 0;
var x = 100;

function setup() {
  var myCanvas = createCanvas(800, 250);
  background('black');
  myCanvas.parent('mySketch');
  frameRate(20);

}

function draw() {

  if(mouseIsPressed){
    if(x == 100){
      y = y+25;
      if(y==500){
        x = 200;
      }
    }
    if(x ==200) {
      y = y-25;
      if(y == 0){
        x = 100;
      }
    }

    fill(color(0+x,y,200));
    ellipse(width*0.5, height*0.5, 25+y, 25+y);
  }

}
