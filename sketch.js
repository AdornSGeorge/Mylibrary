var fixedRect, movingRect;
var gameobj1,gameobj2,gameobj3


function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameobj1 = createSprite(100,300,50,50);
  gameobj1.shapeColor="yellow";

  gameobj2 = createSprite(200,300,50,50);
  gameobj2.shapeColor = "blue";

  gameobj3 = createSprite(300,300,50,50)
  gameobj3.shapeColor= "orange";


  movingRect.velocityX = 3;
  gameobj2.velocityX= -3;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

if (isTouching(movingRect,gameobj1)){
  movingRect.shapeColor = "red";
  gameobj1.shapeColor = "red";
}
 else{
  movingRect.shapeColor = "green";
  gameobj1.shapeColor = "green";

 }

  bounceOff(movingRect,gameobj2);


  drawSprites();
  

}



