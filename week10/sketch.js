//
//var circX = 0;
//var speed = 10;
//
//function setup(){
//    createCanvas(windowWidth, windowHeight);
//    
//}
//
//function draw(){
//    background(255, 10, 100);
//    drawball();
//    bounceball();
//    moveball();
////    ellipse(circX, 300, 100, 100);
////    if(circX > width || circX < 0){
////        speed = speed * -1;
////    }
//////    if(circX > width || circX < 0){
//////        speed = speed *-1;
//////    }
////    
//////    circX = circX + speed;
////    
//}
//
//function drawball(){
//       ellipse(circX, 300, 100, 100);
//}
//
//function bounceball(){
//    if(circX > width || circX < 0){
//        speed = speed * -1;}
//}
//
//function moveball(){
//       circX = circX + speed; 
//}
function preload(){
            regina = loadFont("swissli.ttf");
}

function setup(){
    createCanvas(windowWidth, windowHeight);
    textFont(regina);
    textSize(36);
    
}

function draw(){
    background(random(240), random (90), random(200), random(50));
    text("ONE VERY SAD EYE!", mouseX, mouseY, 200, 800);
//    drawflower(100,100,random(20));
//    drawflower(200,200,random(20))
//    drawflower(300,300,random(20))
    
        draweyes(150, random(80));
            draweyes(220, random(200));
    
        fill(0, 0, 0);
      strokeWeight(0);
 triangle(149.651, 250.116, 224.651, 206.815, 224.651, 293.418);
     ellipse(250,250,100,100);
     triangle(275.508, 207.042, 350.508, 250.343, 275.508, 293.645);
    
    stroke(0);
     strokeWeight(10);
    line (169.605, 191.977,201.388, 223.76);
     line (250, 155.839, 250, 200.786);
        line (330.395, 191.977, 298.612, 223.76);
    line (201.388, 275.259, 169.605, 307.042);
        line (250, 298.232, 250, 343.18);
            line (298.612, 275.259, 330.395, 307.042);
   
 strokeWeight(0);
fill(218, 229, 229);
     triangle(169.657, 250.093, 229.657, 215.452, 229.657, 284.734);
        ellipse(250,250,80,80);
            triangle(270.343, 215.634, 330.343, 250.275, 270.343, 284.916);
     strokeWeight(0);
    
fill(75, 175, 172);
    ellipse(250,250,60,60);
    
fill(0, 0, 0);
    ellipse(250,250,30,30);
    
fill(255, 255, 255);
    ellipse(234,234,10,10);
    ellipse(267,265,10,10);
    

    
}
function draweyes(x, y, size){    
fill (49, 192, 192, 100);    
            triangle(x+153.14, y+297.482, x+140.149, y+319.982, x+166.13, y+319.982, 100);
                ellipse(x+153.14, y+327.708, 30, 30, 100);
}
//    var x = 100;
//    var y = 100;
//    var size = 25;
    

    


//    function drawflower(x,y,size){
//    strokeWeight(size/5);
//    rectMode(CORNERS);
//    fill(random(240));
//    rect(x, y, x-size*2, y-size*2);
//    rect(x, y, x+size*2, y-size*2);
//    rect(x, y, x+size*2, y+size*2);
//    rect(x, y, x-size*2, y+size*2);
//    stroke(0, 255, 0);
//    strokeWeight(size*.85);
//    line(x, y, x, y+size*8);
//    line(x, y+size*4, x-size*2, y+size*4);
//    line(x, y+size*6, x-size*2, y+size*4);
//    line(x, y+size*5, x+size*2, y+size*4);
//    line(x, y+size*3, x+size*2, y+size*4);
//    stroke(0);
//    fill(0);
//    strokeWeight(size/5);
//    ellipse(x, y, size*2, size*2);
//}