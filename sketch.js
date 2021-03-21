var forest,forestImg;
var mouse1,mouse1Img,mouse2A,mouse3Img;
var cat,cat1Img,cat2A,cat3Img;

function preload() {
    //load the images here
    forestImg = loadImage("images/garden.png");
    mouse1Img = loadImage("images/mouse1.png");
    mouse2A = loadAnimation("images/mouse2.png","images/mouse3.png")
    mouse3Img = loadImage("images/mouse4.png");
    cat1Img = loadImage("images/cat1.png");
    cat2A = loadAnimation("images/cat2.png","images/cat3.png")
    cat3Img = loadImage("images/cat4.png");
}

function setup(){
    createCanvas(1000,800);
    forest = createSprite(500,400,1000,800);
    forest.addImage("garden",forestImg);
    //create tom and jerry sprites here
mouse1 = createSprite(100,600,20,20);
mouse1.addImage("jerry",mouse1Img);
mouse1.scale = 0.2;
cat = createSprite(800,600,20,20);
cat.addImage("tom",cat1Img);
cat.scale = 0.2;
}

function draw() {

    background(255);
     keyPressed();
     console.log(cat);
    //Write condition here to evalute if tom and jerry collide
if(cat.x - mouse1.x<(cat.width - mouse1.width)/2){
    cat.velocityX = 0;
    cat.addImage("catSit",cat3Img);
    cat.changeAnimation("catSit");
    cat.x = 200;
    mouse1.addImage("last",mouse3Img);
    mouse1.changeAnimation("last");
}
    drawSprites();
}
function keyPressed(){

  //For moving and changing animation write code here
    if(keyCode===LEFT_ARROW){
     cat.velocityX = -5;
     cat.addAnimation("catRunning",cat2A);
     cat.changeAnimation("catRunning");
     mouse1.addAnimation("ratDance",mouse2A);
     mouse1.changeAnimation("ratDance");
    }

}
