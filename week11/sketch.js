
var scriptFont;
var pups = ["Pinkachu", "Challizard", "Synterquil", "Jigglybuff (so close)", "Jigglytuff (so close again)", "Squirple", "The one tht looks like a dog", "No, the other one that looks like a dog", "Pickleman", "To be continued..."];
var index = 0;

function preload(){
    scriptFont = loadFont("script.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
    background(0);
    fill(255);
    textFont(scriptFont);
    textSize(50);
    line(250);
    text("Click for the complete list of  Pokemon names my dad made up", 36, height/2, 800);
}

function draw() {
  
}


function mousePressed(){
    background(random(255), random(150), random(255));
    fill(255);
    textSize(50);
    text(pups[index], 50, height/2);
    index = index +1;
    
    if(index == pups.length){
        index = 0;
    }
    
}