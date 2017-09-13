var state = 1;

function setup(){
    createCanvas(windowWidth, windowHeight);
     background(200);
}

function draw(){
    noStroke();
    
    if(state == 1){
    fill(255, 10, 180, 50);
    ellipse(mouseX, mouseY, 40, 40);
    }else if (state == 2){
        fill(0, 255, 255, 50);
    ellipse(mouseX, mouseY, 40, 40);  
    } else {
         fill(255, 255, 0, 50);
    ellipse(mouseX, mouseY, 40, 40);  
    }
  
}

function mousePressed (){
    if(state <= 3){
         state = state +1;
    }else{
        state = 1;
         }
   
}