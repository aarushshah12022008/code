var mario,mario_running,hospital,rect1,rect2,rect3,rect4,rect5,rect6,rect7,rect8,rect9,rect10,rect11,reat12,rect13,rect14,rect15,rect16
var rect17,rect18
function preload(){
  mario_running=loadAnimation("mario1.png","mario2.png","mario3.png","mario4.png")
  hospitalimg=loadImage("images.jpg")
  obstacleimg=loadAnimation("obstacle1.png","obstacle2.png","obstacle3.png","obstacle4.png")
}
function setup() {
createCanvas(1600,800);
mario=createSprite(100,100,50,50)
mario.addAnimation("run",mario_running)
hospital=createSprite(1350,710,50,50)
hospital.addImage("Hi",hospitalimg)
mario.scale=2
obstacle=createSprite(100,135,10,10)
obstacle=createSprite(200,200,10,10)
obstacle.addAnimation("Hello",obstacleimg)
rect1=createSprite(130,20,600,20)
rect1.shapeColor=("green")
rect2=createSprite(100,150,400,20)
rect2.shapeColor=("green")
rect3=createSprite(485,400,410,20)
rect3.shapeColor=("green")
rect4=createSprite(290,265,20,250)
rect4.shapeColor=("green")
rect5=createSprite(420,150,20,270)
rect5.shapeColor=("green")
rect6=createSprite(485,290,150,20)
rect6.shapeColor=("green")
rect7=createSprite(670,320,20,190)
rect7.shapeColor=("green")
rect8=createSprite(960,230,600,20)
rect8.shapeColor=("green")
rect9=createSprite(550,200,20,200)
rect9.shapeColor=("green")
rect10=createSprite(953,105,825,20)
rect10.shapeColor=("green")
rect11=createSprite(1085,630,20,150)
rect11.shapeColor=("green")
rect12=createSprite(1110,790,300,20)
rect12.shapeColor=("green")
rect13=createSprite(1090,450,300,20)
rect13.shapeColor=("green")
rect14=createSprite(950,700,20,500)
rect14.shapeColor=("green")
rect15=createSprite(1174,700,200,20)
rect15.shapeColor=("green")
rect16=createSprite(1225,560,300,20)
rect16.shapeColor=("green")
rect17=createSprite(1370,332,20,475)
rect17.shapeColor=("green")
rect18=createSprite(1250,346,20,230)
rect18.shapeColor=("green")
}

function draw() {
  background(238,238,238);  
  if(keyIsDown(LEFT_ARROW)){
    mario.x=-2
  }
  if(keyIsDown(RIGHT_ARROW)){
    mario.x=2
  }
  drawSprites();
  
  
}