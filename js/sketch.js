console.log("reading from js");



// variables of x and y
var x=1;
var y=1;
var x2=1, y2=1;

function setup() {
	var myCanvas=createCanvas(1920,250);
	//link to id mySketch from header tag
	myCanvas.parent('mySketch');
stroke(68,191,203);
}

function draw() {
  // draws rectangle with a low opacity each time in order to fade out each
  // bolt of lighting over time
  fill(255, 45);
  rect(-10, -10, width+20, height+20);
if (mouseIsPressed){
stroke(255,173,64);
} else {
stroke(68,191,203);
}

  // randomizes the thickness of each bolt
  strokeWeight(random(0, 2));
  // randomizes the location of each bolt
  x = mouseX;
  // draws each line for the length of the height
  while (y<height) {
    // iterates length of bolt
    y2 = y + 2;
    // randomizes each section along bolt iteration so they move back and forth x-axis
    x2 = x +  int(random(-4, 4));
    // draws the section of the line
    line(x, y, x2, y2);

    // assigns the end value of the line section to the beginning of the next
    // line section
    x = x2;
    y = y2;
  }

  // returns y to 0 for the next bolt
  y = 0;
  // slows down frame rate
  frameRate(13);


}