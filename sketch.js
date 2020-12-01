var fixedRect,movingRect;
var rect1,rect2;
var fixedRect2;
var rect3,rect4;

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 50);
  fixedRect.shapeColor="green";
  movingRect=createSprite(600,200,80,30);
  movingRect.shapeColor="green"
  movingRect.debug=true;
  fixedRect.debug=true;

  fixedRect2=createSprite(200,200,50,50);
  fixedRect2.shapeColor="green";
  fixedRect2.debug=true;


  rect1=createSprite(200,350,50,50);
  rect1.shapeColor="blue";
  rect1.debug=true;
  rect1.velocityX=3;


rect2=createSprite(700,350,50,50);
rect2.shapeColor="blue";
rect2.debug=true;
rect2.velocityX=-3;

rect3=createSprite(200,100,50,50);
rect3.shapeColor="blue";
rect3.debug=true;
rect3.velocityX=3;

rect4=createSprite(700,100,50,50);
rect4.shapeColor="blue";
rect4.debug=true;
rect4.velocityX=-3;


  
}

function draw() {
  background(255,255,255); 

  
  movingRect.x=mouseX; 
  movingRect.y=mouseY;
 

  isTouching(fixedRect2,movingRect);
  
  
  bounce(rect1,rect2);
  bounce(rect3,rect4);
  drawSprites();
}

