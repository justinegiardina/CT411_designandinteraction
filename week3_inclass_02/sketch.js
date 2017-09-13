var isPink = false;

function setup(){
    createCanvas(windowWidth, windowHeight);
    
}

function draw(){
    if(isPink == false) {
        background(200);
    }
    else{ 
        background(255, 10, 130);
         }
}

function mousePressed(){
    isPink = !isPink;

}
