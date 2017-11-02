var counter = 0;
var speed = .5;
var speed2 = .5;
var img;
var img2;
var img3;
//var moon = {loc: 0, size: 400, x: 200, y: 100};
//        sun = loadImage("sun.png");
//        earth = loadImage("earth.png");

function preload(){
     img = loadImage("bijou.png");
img2 = loadImage("snooze.png");
img3 = loadImage("hamtoro.png");
    img4 =loadImage("boss.png");
        img5 =loadImage("ham.png");
    blanch = loadFont("blanch.otf");
  
}


function setup(){
    createCanvas(1000, 1000);
    textFont(blanch);
    textSize(36);
}


function draw(){
    fill(255);
    background(246, 220, 217);
        text("zuzuzuzuzuzuzuzu it's chaos", mouseX, mouseY, 200, 800);

    
    push(); 
    
    translate (400, 400);
    rotate(radians(counter));
    image(img2, 0, 0, 200, 200);
          imageMode(CENTER);
      
   pop(); 
        translate (400, 400);
      scale(.5);
        rotate(radians(counter));  
    image(img3, 500, 500, 300, 300);
        counter++;  
       
     push(); 
    fill(255, 100, 10);
     translate (800, 800);
         scale(1.0);
     rotate(radians(counter));
     image(img, 500, 500, 300, 300);   
    
    pop(); 
        translate (200, 200);
      scale(.92);
        rotate(radians(counter));  
    image(img4, 500, 500, 300, 300);
 
     pop(); 
        translate (700, 700);
      scale(1.1);
        rotate(radians(counter));  
    image(img5, 500, 500, 300, 300);
     
    
}

