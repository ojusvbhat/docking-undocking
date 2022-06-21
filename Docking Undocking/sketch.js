var backgroundImage;
var sleep ,bath, brush , drink , eat , gym ;
var astronaut;
var m23;

function preload(){
backgroundImage = loadImage("Img/iss.png");
sleep = loadImage("Img/sleep.png");
brush = loadAnimation("Img/brush.png");
bath = loadAnimation("Img/bath1.png","Img/bath2.png");
drink = loadAnimation("Img/drink1.png","Img/drink2.png");
eat = loadAnimation("Img/eat1.png","Img/eat2.png");
gym = loadAnimation("Img/gym1.png","Img/gym2.png","Img/gym11.png","Img/gym12.png");
m23 = loadAnimation("Img/sleep.png");
}

function setup() {
  createCanvas(800,400);
  
  astronaut = createSprite(400, 200, 50, 50);;
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale =0.095;
}

function draw() {
  background(backgroundImage);
  push();
  textSize(20); 
  text("Instructions:",50,60);
  pop();
  text(" Up Arrow = Brushing",50,75);
  text(" Down Arrow = Gymming",50,85);
  text(" Left Arrow = Eating",50,95);
  text(" Right Arrow = Bathing",50,105);
  text(" m key = move",50,115);

 var edges =  createEdgeSprites();
  astronaut.bounceOff(edges);

  if(keyDown(UP_ARROW)){
  astronaut.addAnimation("brushing",brush);
  astronaut.changeAnimation("brushing")
  astronaut.velocityX=0;
  astronaut.velocityY=0;
  }

  if(keyDown(DOWN_ARROW)){
   astronaut.addAnimation("gymming",gym);
   astronaut.changeAnimation("gymming");
   astronaut.velocityY=0;
   astronaut.velocityX=0;
  }

  if(keyDown(LEFT_ARROW)){
   astronaut.addAnimation("eating",eat);
   astronaut.changeAnimation("eating")
   astronaut.velocityX=0;
   astronaut.velocityY=0;
  }

  if(keyDown(RIGHT_ARROW)){
   astronaut.addAnimation("bathing",bath);
   astronaut.changeAnimation("bathing")
   astronaut.velocityX=0;
   astronaut.velocityY=0;
  }
  if(keyDown("m")){
   astronaut.addAnimation("Moving",m23);
   astronaut.changeAnimation("Moving");
   astronaut.velocityX=2;
   astronaut.velocityY=3;
  }      
    
  
  drawSprites();
}