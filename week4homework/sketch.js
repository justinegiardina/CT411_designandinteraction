var circX;
var circY;
var circDiameter = 350;
var circRadius = circDiameter / 2;
var d;
var redCol = 200;
var img;


var isClicked = false;

function preload() {
    img = loadImage("bun.png");
    swissliFont = loadFont("swissli.ttf");
}


function setup() {
    createCanvas(windowWidth,windowHeight); 
    circX = windowWidth / 2;
    circY = windowHeight / 2;
      textFont(swissliFont);
    textSize(30);
}

function draw() {
    background(redCol, 10, 100);
    fill (255);
    noStroke();
    ellipse(circX, circY, circDiameter, circDiameter);
    d = dist(circX, circY, mouseX, mouseY);
    

    if (d < circRadius) {
        redCol = 0;
        fill(150, 123, 195);
        text("Where is he this is very sad", mouseX, mouseY, 200, 800);
    } else {
        redCol = 200;
           imageMode(CENTER);
    image(img, width/2, height/2, 200, 200);
            text("There is a bunny that's awesome", mouseX, mouseY, 200, 800);
    }
    
}

function mousePressed() {
    if (d < circRadius) {
        redCol = 0;
    } else {
        redCol = 200;
    }
    


}