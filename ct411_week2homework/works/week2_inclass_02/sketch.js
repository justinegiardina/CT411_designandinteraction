var x = 5;

function setup () {
    createCanvas(1000, 750);
   // x = width/2;
}

function draw ()
{
    background (230);
//    line (x, 0, x, height);
//    x = 5;
//    line (x, 0, x, height);
//      x += 5;
//    line (x, 0, x, height);
//      x += 5;
//    line (x, 0, x, height);
//      x += 5;
//    line (x, 0, x, height);
//      x += 5;
//    line (x, 0, x, height);
//      x += 5;
//    line (x, 0, x, height);
//      x += 5;
//    line (x, 0, x, height);
//      x += 5;
//    line (x, 0, x, height);
//      x += 5;
//    line (x, 0, x, height);

for(var i= 25; i< width; i+=50){
    for (var j = 25; j < height; j+=50){
//    line (i, 0, i, height);
    ellipse(i, j, 60, 60);
        rect(i-21, j-21, 60, 60)
    fill(56, 186, 182, 60);
 stroke(255);
    strokeWeight(3);
    }
}
}

