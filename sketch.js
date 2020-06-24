var bed;
var bedImg;
var bedgroup;
var chair;
var chairImg;
var centretable;
var centretableImg;
var computer;
var computerImg;
var dad;
var dadImg;
var food1;
var food1Img;
var food2;
var food2Img;
var food3;
var food3Img;
var food4;
var food4Img;
var me;
var meImg;
var plant;
var plantImg;
var poster1;
var posterImg;
var poster2;
var poster2Img;
var shelve;
var shelveImg;
var shelve2;
var shelve2Img;
var sofa;
var sofaImg;
var table;
var tableImg;
var tv;
var tvImg;
var background;
var backgroundImg;
var end;
var endImg;
var gameState="serve";
var timer = 100;


function setup() {
  createCanvas(1360, 620);


end=createSprite(50,50);
end.addImage(endImg);
end.scale=0.5;
}
function preload(){
  bedImg=loadImage("bed.png");
  chairImg=loadImage("chair.png");
  centretableImg=loadImage("centretable.png");
 computerImg=loadImage("computer.png");
 dadImg=loadImage("dad.png");
 food1Img=loadImage("food1.png");
 food2Img=loadImage("food1.png");
 food3Img=loadImage("food3.png");
 food4Img=loadImage("food4.png");
 meImg=loadImage("me.png");
 plantImg=loadImage("plant.png");
 poster1Img=loadImage("poster1.png");
 poster2Img=loadImage("poster2.png");
 shelveImg=loadImage("shelve.png");
 shelve2Img=loadImage("shelve2.png");
 sofaImg=loadImage("sofa.png");
 tableImg=loadImage("table.png");
 tvImg=loadImage("tv.png")
backgroundImg=loadImage("background.png");
endImg=loadImage("end.png");
}
function draw() {
  background(backgroundImg);
 // fill("black"); textSize(25); text(mouseX+","+mouseY,mouseX,mouseY);
  
  textSize(18);
  textFont("Georgia");
  textStyle(BOLD);
 if(gameState ==="serve"){
   textSize(20);
   fill("red");
   text("INSTRUCTIONS : When objects are spawned, click on the object to make the house to a home!!!",150,100)
text("HINT: When object clicked after will be overlaping the 1 clicked before if their positions are close or same.",120,140);
text("Click anywhere on the background to start the game",400,180)
text("Click on end button to end the game",470,220);
textSize(40);
fill("blue")
text("Press Space to Serve",450,300);
}
if(keyDown("space")){
  gameState ="play";
 
}
if (mousePressedOver(end) ) {
 gameState ="end";

}
if(gameState ==="end"){
  endGame();
}

console.log(frameCount)
drawSprites();
if(gameState ==="play"){
   timer = timer - 0.1;
   textSize(50);
   fill("red");
text("Timer:"+Math.round(timer),1000,100);
spawnBed();
spawnchair();
spawncentretable();
spawncomputer();
spawndad();
spawnfood1();
spawnfood2();
spawnfood3();
spawnfood4();
spawnme();
spawnplant();
spawnposter1();
spawnposter2();
spawnshelve();
spawnshelve2();
spawnsofa();
spawntable();
spawntv();
}
if(timer <=0){
  endGame();
}
}
function endGame(){
background(backgroundImg);
textSize(70);
fill("red");
text("DO YOU WANT TO REPLAY",230,170);
}
function spawnBed(){
  if (frameCount%60===0){
    bed=createSprite(random(100,1360),0,10,10);
  bed.velocityY=14;
  bed.addImage("bed",bedImg);
  bed.scale=0.4;
 
  }
  if(mousePressedOver(bed)){
    bed.x=600;
    bed.y=450;
  bed.velocityY=0;
  bed.velocityX=0;
  bed.scale=0.9;
  }
}
function spawnfood1(){
  if (frameCount%90===0){
food1=createSprite(random(100,1360),0,10,10);
food1.velocityY=14;
food1.addImage("food1",food1Img);
food1.scale=0.7;

  }
  if(mousePressedOver(food1)){
    food1.x=220;
    food1.y=490;
  food1.velocityY=0;
  food1.velocityX=0;
  food1.scale=0.6;
  }
}
function spawnfood2(){
  if (frameCount%60===0){
food2=createSprite(random(100,1360),0,10,10);
food2.velocityY=14;
food2.addImage("food2",food2Img);
food2.scale=0.7;

  }
  if(mousePressedOver(food2)){
    food2.x=280;
    food2.y=490;
  food2.velocityY=0;
  food2.velocityX=0;
  food2.scale=0.6;
  }
}
function spawnfood3(){
  if (frameCount%80===0){
food3=createSprite(random(100,1360),0,10,10);
food3.velocityY=14;
food3.addImage("food3",food3Img);
food3.scale=0.7;

  }
  if(mousePressedOver(food3)){
    food3.x=220;
    food3.y=460;
  food3.velocityY=0;
  food3.velocityX=0;
  food3.scale=0.6;
  }
}
function spawnfood4(){
  if (frameCount%100===0){
food4=createSprite(random(100,1360),0,10,10);
food4.velocityY=14;
food4.addImage("food4",food4Img);
food4.scale=0.7;

  }
  if(mousePressedOver(food4)){
    food4.x=280;
    food4.y=460;
  food4.velocityY=0;
  food4.velocityX=0;
  food4.scale=0.6;
  }
}
function  spawntable (){
  if (frameCount%80===0){
    table=createSprite(random(100,1360),0,10,10);
    table.velocityY=14;
    table.addImage("table",tableImg);
    table.scale=0.4;
  
  }
  if(mousePressedOver(table)){
    table.x=244;
    table.y=490;
  table.velocityY=0;
  table.velocityX=0;
  table.scale=0.9
  }
}


function spawncentretable(){
  if (frameCount%90===0){
   centretable=createSprite(random(100,1360),0,10,10);
  centretable.velocityY=14;
  centretable.addImage("centretable",centretableImg);
  centretable.scale=0.4;

  }
  if(mousePressedOver(centretable)){
    centretable.x=990;
    centretable.y=500;
  centretable.velocityY=0;
  centretable.velocityX=0;
  centretable.scale=0.7;
  }
}
function spawnchair(){
  if (frameCount%100===0){
   chair=createSprite(random(100,1360),0,10,10);
  chair.velocityY=14;
  chair.addImage("chair",chairImg);
  chair.scale=0.7;

  }
  if(mousePressedOver(chair)){
    chair.x=100;
    chair.y=500;
  chair.velocityY=0;
  chair.velocityX=0;
  chair.scale=0.8
  }
}
function spawncomputer(){
  if (frameCount%100===0){
computer=createSprite(random(100,1360),0,10,10);
computer.velocityY=14;
  computer.addImage("computer",computerImg);
  computer.scale=0.4;
 
  }
  if(mousePressedOver(computer)){
    computer.x=440;
    computer.y=350;
  computer.velocityY=0;
  computer.velocityX=0;
  computer.scale=0.6;
  }
}
function spawndad(){
  if (frameCount%100===0){
dad=createSprite(random(100,1360),0,10,10);
dad.velocityY=14;
dad.addImage("dad",dadImg);
dad.scale=0.7;

  }
  if(mousePressedOver(dad)){
    dad.x=800;
    dad.y=500;
  dad.velocityY=0;
  dad.velocityX=0;
  dad.scale=0.9;
  }
}


function spawnme(){
  if (frameCount%60===0){
me=createSprite(random(100,1360),0,10,10);
me.velocityY=14;
me.addImage("me",meImg);
me.scale=0.7;

  }
  if(mousePressedOver(me)){
    me.x=400;
    me.y=560;
  me.velocityY=0;
  me.velocityX=0;
  me.scale=0.7;
  }
}
function spawnplant(){
  if (frameCount%70===0){
plant=createSprite(random(100,1360),0,10,10);
plant.velocityY=14;
plant.addImage("plant",plantImg);
plant.scale=0.8;

  }
  if(mousePressedOver(plant)){
    plant.x=1150;
    plant.y=420;
  plant.velocityY=0;
  plant.velocityX=0;
  plant.scale=0.8;
  }
}
function spawnposter1(){
  if (frameCount%70===0){
poster1=createSprite(random(100,1360),0,10,10);
poster1.velocityY=14;
poster1.addImage("poster1",poster1Img);
poster1.scale=0.4;

  }
  if(mousePressedOver(poster1)){
    poster1.x=550;
    poster1.y=250;
  poster1.velocityY=0;
  poster1.velocityX=0;
  poster1.scale=0.5
  }
}
function  spawnposter2 (){
  if (frameCount%70===0){
    poster2=createSprite(random(100,1360),0,10,10);
    poster2.velocityY=14;
    poster2.addImage("poster2",poster2Img);
    poster2.scale=0.4;

  }
  if(mousePressedOver(poster2)){
    poster2.x=650;
    poster2.y=250;
  poster2.velocityY=0;
  poster2.velocityX=0;
  poster2.scale=0.5
  }
}

function  spawnshelve (){
  if (frameCount%70===0){
    shelve=createSprite(random(100,1360),0,10,10);
    shelve.velocityY=14;
    shelve.addImage("shelve",shelveImg);
    shelve.scale=0.4;
 
  }
  if(mousePressedOver(shelve)){
    shelve.x=450;
    shelve.y=400;
  shelve.velocityY=0;
  shelve.velocityX=0;
  shelve.scale=0.5
  }
}
function  spawntv (){
  if (frameCount%80===0){
    tv=createSprite(random(100,1360),0,10,10);
    tv.velocityY=14;
    tv.addImage("tv",tvImg);
    tv.scale=0.4;
  
  }
  if(mousePressedOver(tv)){
    tv.x=750;
    tv.y=360;
  tv.velocityY=0;
  tv.velocityX=0;
  tv.scale=0.5
  }
}
function  spawnshelve2 (){
  if (frameCount%60===0){
    shelve2=createSprite(random(100,1360),0,10,10);
    shelve2.velocityY=14;
    shelve2.addImage("shelve2",shelve2Img);
    shelve2.scale=0.4;
  
  }
  if(mousePressedOver(shelve2)){
    shelve2.x=750;
    shelve2.y=400;
  shelve2.velocityY=0;
  shelve2.velocityX=0;
  shelve2.scale=0.5;
  }
}
function spawnsofa (){
  if (frameCount%70===0){
    sofa=createSprite(random(100,1360),0,10,10);
    sofa.velocityY=14;
    sofa.addImage("sofa",sofaImg);
    sofa.scale=0.4;

  }
  if(mousePressedOver(sofa)){
    sofa.x=990;
    sofa.y=400;
  sofa.velocityY=0;
  sofa.velocityX=0;
  sofa.scale=0.9;
  }
}
