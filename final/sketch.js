var circX = 400;
var circY = 400;
var circDiameter = 400;
var circRadius = circDiameter/2;
var circlX = 600;
var circlY = 100;
var circlDiameter = 400;
var circlRadius = circlDiameter/2;
var d;
var d2;
var img;
var img2;
var img3;
var isClicked = false;
var audio;

var increment=280;
var xpos1 =-80;
var xpos2 = 60;
var rectX = 400;
var rectY = 400;
var rectSize = 400;
var rectTop = rectY;
var rectBottom = rectY + rectSize;
var rectLeft = rectX;
var rectRight = rectX + rectSize;
var buttonClicked = false;
var randomPull;
var Pull;
var fortuneRendered = false;
var fortuneTrue = false;


var sun = ["A cow fed roses is still a cow.", "Punishment is longer remembered than reward.", "Anger is useful if channeled correctly.", "Being alone is productive, being isolated is detrimental.", "Honesty is uncomfortable.", "Adamant attachments stem from early inconsistencies.", "Kill your darlings, fast.", "Ambivalence will prevail.", "Considering posibilities isn't always useful.", "Remembering is sometimes unnecessary martyrdom."];

var moon = ["Dreams are a medium for internal communications.", "Universal connection is objectively good.", "The most meaningful phenomena cannot be communicated.", "Passion is important but rare.", "Purity is always boring.", "Realism is difficult but necessary.", "Denial is sometimes good.", "Excess is over-dramatized.", "If it's important you can't afford to be shy.", "Suffering isn't worth it."];

var index = 9;

function preload(){
            regina = loadFont("swissli.ttf");
            img = loadImage("bg.jpg");
            audio = loadSound("audio.mp3");
             img2 = loadImage("sun.png");
                img3 = loadImage("moon.png");
}

function setup(){
    createCanvas(windowWidth, windowHeight);
    textFont(regina);
    textSize(36);
    audio.play();
    audio.loop();
    circX = 400;
    circY = 400;
    circlX = 600;
    circlY = 100;

}

function draw(){
    fill(255);
    background(img);
    background(random(240), random (30), random(200), random(75));
    
    
    for (var i=0; i<12;i++){
        draweyes(xpos2 + increment*i, random(300), 100);
        draweyes(xpos1 + increment*i, random(200), 100);
    }
    
    fill (255, 255, 255, 0);
    noStroke();
    ellipse(400, 400, 400, 400);
    d = dist(circX, circY, mouseX, mouseY);
      ellipse(600, 100, 400, 400);
    d2 = dist(circlX, circlY, mouseX, mouseY);
    
    fill(255);
        if (d < circRadius) {
            image(img2, 400, 400, 230, 230);
        fill (5, 0, 0);
        text("Enlighten.", mouseX, mouseY, 200, 800);
            background(240, 60, 100, 75);
            fill(255);
            
        if(fortuneRendered){
            text(sun[randomPull], width/4, height/2);
        }

            
    } else if (d2 < circlRadius) {
            image(img3, 600, 100, 300, 300);
        fill (0, 0, 5);
        text("Illuminate.", mouseX, mouseY, 200, 800);
        background(70, 60, 240, 70);
        fill(255);

        if(fortuneTrue){
            text(moon[randomPull], width/4, height/2);
        }

            } else {    
    image(img2, 400, 400, 250, 250);
                    image(img3, 600, 100, 335, 335);
       text("Click one to have your fortune told.", mouseX, mouseY, 400, 800);    
    }
}

function draweyes(x,y,onresize){    
fill (204, random(51), 0, 100);
    noStroke();
            triangle(x+153.14, y+297.482, x+140.149, y+319.982, x+166.13, y+319.982, 100);
                ellipse(x+153.14, y+327.708, 30, 30, 100);
}

function mousePressed(){
    if (d < circRadius) {
        randomPull = floor(random(0,sun.length));
        fortuneRendered = !fortuneRendered;
        
    } if (d < circlRadius) {
        randomPull = floor(random(0,moon.length));
        fortuneTrue = !fortuneTrue;
    }
}

