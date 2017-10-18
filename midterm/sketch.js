var img1 = {
    loc: 0,
    size: 200,
    x: 100,
    y: 100,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
};

var img2 = {
    loc: 0,
    size: 200,
    x: 350,
    y: 100,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
};

var img3 = {
    loc: 0,
    size: 200,
    x: 100,
    y: 350,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
};

var img4 = {
    loc: 0,
    size: 200,
    x: 350,
    y: 350,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
};

var img5 = {
    loc: 0,
    size: 200,
    x: 100,
    y: 600,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
};

var img6 = {
    loc: 0,
    size: 200,
    x: 350,
    y: 600,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
};

var pup;
var cat;
var monkey;
var duck;
var dino;

//var img;
//var imageSize;
//
//var imgX = 200;
//var imgY = 100;
//var imgSize = 400;
//
//var imgLeft;
//var imgTop;
//var imgRight;
//var imgBottom;

var col = 200;

function preload(){
    img1.loc = loadImage("pup.png");
    pup = loadSound ("pup.mp3");
    img2.loc = loadImage("cat.png")
    cat = loadSound ("cat.mp3");
    img3.loc = loadImage("monkey.png");
    monkey = loadSound ("monkey.mp3");
    img4.loc = loadImage("duck.png");
    duck = loadSound ("duck.mp3");
    img5.loc = loadImage("dino.png");
    dino = loadSound ("dino.mp3");
    img6.loc = loadImage("cow.png");
    cow = loadSound ("cow.mp3");
}

function setup(){
    createCanvas(650,900);

}

function draw(){
    background(160, 102, 90);
    image(img1.loc, img1.x, img1.y, img1.size, img1.size);
    image(img2.loc, img2.x, img2.y, img2.size, img2.size);
    image(img3.loc, img3.x, img3.y, img3.size, img3.size);
    image(img4.loc, img4.x, img4.y, img4.size, img4.size);
    image(img5.loc, img5.x, img5.y, img5.size, img5.size);
    image(img6.loc, img6.x, img6.y, img6.size, img6.size);
}

function mousePressed(){
    img1.top = img1.y;
    img1.left = img1.x;
    img1.right = img1.x + img1.size;
    img1.bottom = img1.y + img1.size;
    
    img2.top = img2.y;
    img2.left = img2.x;
    img2.right = img2.x + img2.size;
    img2.bottom = img2.y + img2.size;
    
    img3.top = img3.y;
    img3.left = img3.x;
    img3.right = img3.x + img3.size;
    img3.bottom = img3.y + img3.size;
    
    img4.top = img4.y;
    img4.left = img4.x;
    img4.right = img4.x + img4.size;
    img4.bottom = img4.y + img4.size;
    
    img5.top = img5.y;
    img5.left = img5.x;
    img5.right = img5.x + img5.size;
    img5.bottom = img5.y + img5.size;
    
    img6.top = img6.y;
    img6.left = img6.x;
    img6.right = img6.x + img6.size;
    img6.bottom = img6.y + img6.size;

    if (mouseX > img1.left && mouseX < img1.right && mouseY > img1.top && mouseY < img1.bottom){
      pup.play();
   }else{
      col = 000;
   }
    
     if (mouseX > img2.left && mouseX < img2.right && mouseY > img2.top && mouseY < img2.bottom){
      cat.play();
   }else{
      col = 000;
   }
    
      if (mouseX > img3.left && mouseX < img3.right && mouseY > img3.top && mouseY < img3.bottom){
      monkey.play();
   }else{
      col = 000;
   }
    
      if (mouseX > img4.left && mouseX < img4.right && mouseY > img4.top && mouseY < img4.bottom){
      duck.play();
   }else{
      col = 000;
   }
    
    if (mouseX > img5.left && mouseX < img5.right && mouseY > img5.top && mouseY < img5.bottom){
      dino.play();
   }else{
      col = 000;
   }
    
    if (mouseX > img6.left && mouseX < img6.right && mouseY > img6.top && mouseY < img6.bottom){
      cow.play();
   }else{
      col = 000;
   }
}