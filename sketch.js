function setup() { 
  createCanvas(500, 400);
} 

var circles = []; // create an array to hold the DrawCircle objects
var rectangles = [];

function setup() { 
  createCanvas(windowWidth, windowHeight);
  noStroke();

  for (var i = 0; i < 50; i++) {
    var x = random(width);
    var x1 = random(width);
    var y = random(height/3);
    var y1 = random(height);
    var d = random(20, 150);
    var c = color(random(255), random(255), 255);
    var s = random(0.2, 3);
  	circles[i] = new DrawCircle(x, y, d, c, s);
    rectangles[i] = new DrawRectangle(x1, y1, d, c, s);
  }
} 

function draw() { 
  background(220);

  // draws the circle
  for (var i = 0; i < circles.length; i++) {
  	circles[i].move();
    circles[i].display();    
  }
  
  // keep the number of circles on the canvas under 60
  if (circles.length > 60) {
  	circles.shift();
  }
  
  //draws the rectangles
  for (var i = 0; i < rectangles.length; i++) {
    rectangles[i].move();
    rectangles[i].display();
  }
  
  // keep the number of rectangles on the canvas under 60
  if (rectangles.length > 60) {
    rectangles.shift();
  
  }
}

function mousePressed() {
  // click the mouse to create a new DrawCircle object and add it to the circles array
  var d = random(20, 150);
  var c = color(random(255), 240, random(255));
  var s = random(0.2, 3);
  
  var ram = int(random(0,2));
  
  
  if(ram == 0){
  var newCircle = new DrawCircle(mouseX, mouseY, d, c, s);
  circles.push(newCircle);
  }
  
  if(ram == 1){
  var newRectangle = new DrawRectangle(mouseX, mouseY, d, c, s)
  rectangles.push(newRectangle);
  }
  
}


function DrawCircle( x, y, d, c, s ) {
  // declare the properties
  this.xPos = x;
  this.yPos = y;
  this.diameter = d;
	this.color = c;
  this.speed = s;
}

function DrawRectangle( x, y, d, c, s ) {
  // declare the properties
  this.xPosR = x;
  this.yPosR = y;
  this.diameterR = d;
	this.color = c;
  this.speedR = s;
}

DrawCircle.prototype = {
	constructor: DrawCircle,
  // *** Method: display the circle on the canvas *** 
  display: function() {
    fill(this.color);
    ellipse(this.xPos,this.yPos, this.diameter, this.diameter);
    
  },
  
  move: function() {
		this.yPos += this.speed;

    if (this.yPos - this.diameter/2 > height) {
    	this.yPos = -this.diameter/2;
    }
	}
}

DrawRectangle.prototype = {
	constructor: DrawRectangle,
  // *** Method: display the rectangle on the canvas *** 
  display: function() {
    fill(this.color);
    rect(this.xPosR, this.yPosR, this.diameterR, this.diameterR);
  },
  
  move: function() {
		this.yPosR += this.speedR;

    if (this.yPosR - this.diameterR/2 > height) {
    	this.yPosR = -this.diameterR/2;
    }
	}
}