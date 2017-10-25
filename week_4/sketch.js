var circX;
var circY;
var circleX = 0;
var speed = 10;
var circDiameter = 350;
var circRadius = circDiameter / 2;
var d;
var redCol = 200;
var img;
var buttonClicked = false;
var rectX = 100;
var rectY = 100;
var rectSize = 100;
var rectTop = rectY;
var rectBottom = rectY + rectSize;
var rectLeft = rectX;
var rectRight = rectX + rectSize;

function preload() {
    img = loadImage("bun.png");
    swissliFont = loadFont("swissli.ttf");
    img2 = loadImage("bun2.png");
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
        text("Where are they is very sad", mouseX, mouseY, 200, 800);
    } else {
        redCol = 200;
           imageMode(CENTER);
            text("There are so many bunnies that's awesome", mouseX, mouseY, 200, 800);
        image(img, circleX, height/4, 100, 100);
        image(img, circleX, height/3, 100, 100);
        image(img, circleX, height/6, 100, 100);
        
        
        image(img2, width/2, height/2, 200, 200);
        
        
    if(circleX > width || circleX < 0){
        speed = speed *-1;
    }
    circleX = circleX + speed;
        
    }

function mousePressed(){
    if(d < circRadius && buttonClicked==true){
        redCol = 200;
           imageMode(CENTER);
    image(img, width/2, height/2, 200, 200);
            text("Oh yay he is back!", mouseX, mouseY, 200, 800);
    }else{
        redCol = 0;
    }
    }

}