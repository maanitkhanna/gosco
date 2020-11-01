var car,wall;
var speed,weight;


function setup() {
  createCanvas(1700,700);
  car=createSprite(100, 500, 50, 50);
  wall=createSprite(1500,200,300,height/2)
  speed=random(55,90);
  weight=random(400,1500);
}

function draw() {
  background(255,255,255);  
  car.velocityX = speed;
if(wall.x-car.x <(car.width+wall.width)/2);
{
  car.velocityX=0;
  var deformation=0.5*weight*speed*speed/22509;
  if(deformation>180);
  {
    car.shapecolor=color(225,0,0);
  }
  if(deformation<180 && deformation>100);
  {
    car.shapecolor=color(230,230,0);
  }
  if(deformation<100);
  {
    car.shapecolor=color(0,225,0);
  }
}



  drawSprites();
}