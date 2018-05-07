var diam1;
diam1=0;
function setup() {
    createCanvas (500,500);
  // put setup code here
}

function draw() {
    background ("#33FAFF")
    fill ("#F09812");
    stroke("FFFF00");
    strokeWeight(5);
    ellipse (0,0,diam1,diam1);
    fill ("#0D57B7");
    rect (240,50,55,20,20)
    fill ("#0D57B7");
    rect (120,50,55,20,20)
    rect (350,50,60,20,20)
    fill("#6FBC84");
    rect(random(width),random(height), 55, 55, 20);
    
    
  // put drawing code here
}
function mousePressed(){
    diam1= diam1+5;
}