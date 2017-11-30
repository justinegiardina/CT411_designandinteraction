var circX;
var circY;
var circDiameter = 350;
var circRadius = circDiameter/2;
var circlX;
var circlY;
var circlDiameter = 350;
var circlRadius = circlDiameter/2;
var d;
var d2;
var img;
var img2;
var img3;
var buttonClicked = false;
var audio;
var index = 0;
var increment=280;
var xpos1 =-80;
var xpos2 = 60;
var isClicked = false;

var sun = ["A cow fed roses is still a cow.", "Punishment is longer remembered than reward.", "Anger is useful if channeled correctly.", "Being alone is productive, being isolated is detrimental.", "Honesty is uncomfortable.", "Adamant attachments stem from early inconsistencies.", "Kill your darlings, fast.", "Ambivalence will prevail.", "Considering posibilities isn't always useful.", "Remember to forget."];

var moon = ["Dreams are a medium for internal communications.", "1-Universal connection is objectively good.", "The most meaningful phenomena cannot be communicated.", "Passion is important but rare.", "Purity is always boring.", "Realism is difficult but necessary.", "Denial is sometimes good.", "Excess is over-dramatized.", "If it's important you can't afford to be shy about it.", "Suffering isn't worth it."];


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
    circX = windowWidth / 4;
    circY = windowHeight / 2;
    circlX = windowWidth/2;
    circlY = windowHeight/2-60;
}

function draw(){
    fill(255);
    background(img);
    background(random(240), random (30), random(200), random(75));
    
    
    for (var i=0; i<12;i++){
        draweyes(xpos2 + increment*i, random(300), 100);
        draweyes(xpos1 + increment*i, random(200), 100);
    }
//        draweyes(1180, random(300), 100);
//        draweyes(1040, random(200), 100);
//        
//        draweyes(900, random(300), 100);
//        draweyes(760, random(200), 100);
//        
//        draweyes(xpos2 + increment *2, random(300), 100);
//        draweyes(xpos1 + increment *2, random(200), 100);
//        
//        draweyes(xpos2 + increment*1, random(300), 100);
//        draweyes(xpos1 + increment*1, random(200), 100);
//        
//        draweyes(xpos2 + increment*0, random(300), 100);
//        draweyes(xpos1 + increment*0, random(200), 100);
//    
    
    fill (255, 255, 255, 0);
    noStroke();
    ellipse(circX, circY, circDiameter, circDiameter);
    d = dist(circX, circY, mouseX, mouseY);
    
      ellipse(circlX, circlY, circlDiameter, circlDiameter);
    d2 = dist(circlX, circlY, mouseX, mouseY);
    
    fill(255);
        if (d < circRadius) {
            image(img2, width/5, height/2, 230, 230);
        fill (5, 0, 0);
        text("Enlighten.", mouseX, mouseY, 200, 800);
            background(240, 60, 100, 75);
    } else if (d2 < circlRadius) {
            image(img3, windowWidth/2-100, windowHeight/2-100, 300, 305);
        fill (0, 0, 5);
        text("Illuminate.", mouseX, mouseY, 200, 800);
            background(70, 60, 240, 70);} else {    
    image(img2, width/5, height/2, 250, 250);
                    image(img3, windowWidth/2-100, windowHeight/2-100, 330, 335);
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
    //MOUSEPRESSED+ENCLOSED AREA=ARRAY?? HOW?
    if(d < circRadius && isClicked == false){
        text(random(sun[index]), 50, height/2);
        isClicked = !isClicked;
        }
    
    if (d2 < circlRadius && isClicked == false) {
        text(random(moon[index]), 50, height/2);
        isClicked = !isClicked;
        }   
    }




