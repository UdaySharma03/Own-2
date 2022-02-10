var bg,car,car2,car3,car4,ground;
var count=[];
var rank=0;
var gamestate="play";
function preload(){
  bgimg=loadImage("Background.png")
  car1img=loadImage("Car1.png")
  car2img=loadImage("Car2.png")
  car3img=loadImage("Car3.png")
  car4img=loadImage("Car4.png")
  groundimg=loadImage("Land.png")
}
function setup(){
  createCanvas(windowWidth,400)
car2 = createSprite(20, 100,10,10);
car2.addImage(car2img);
car2.velocityX=3;
car2.scale=0.3;
car2.velocityY=10;
car3 = createSprite(20, 100,10,10);
car3.addImage(car3img);
car3.velocityX=6;
car3.scale=0.3;
car3.velocityY=10;
car4 = createSprite(20, 100,10,10);
car4.addImage(car4img);
car4.velocityX=8;
car4.scale=0.3;
car4.velocityY=10;
car = createSprite(5, 100,10,10);
car.addImage(car1img);
car.scale=0.3;
car.velocityY=10;
ground = createSprite(0, height - 5,width,10);
ground.visible = false;

}
function draw() {
background("blue");
console.log(car.x)
if(gamestate=="play"){
image(bgimg,-width,0, width*6,height)
camera.position.x = car.x;
car.collide(ground);
car2.collide(ground);
car3.collide(ground);
car4.collide(ground);

if (keyWentDown(RIGHT_ARROW)) {
car.velocityX=10;
}
if (keyWentUp(RIGHT_ARROW)){
  car.velocityX=0;
}
if (keyWentDown(LEFT_ARROW)) {
car.velocityX=-10;
}
if (keyWentUp(LEFT_ARROW)){
  car.velocityX=0;
}
const finishLine=6365
if(car2.x>finishLine){
  count.push("car2")
}
if(car3.x>finishLine){
  count.push("car3")
}
if(car4.x>finishLine){
  count.push("car4")
}
if(car.x>finishLine){
  gamestate="end"
}
drawSprites();
}
else{
  textSize(40);
  fill("yellow");
  if(count.length==0){
  rank=1
  }
  if(count.length==1){
    rank=2
    }
  if(count.length==2){
   rank=3
  }
  if(count.length==3){
     rank=4
  }
        
  text("Your Rank is:-"+rank,width/2,height/2);
      }

}