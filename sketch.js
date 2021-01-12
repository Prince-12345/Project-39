//DEFINING VARIABLES
var bird, birdI, birdflying, branch, branch2, branchI, branchI2, coin, coinI, sky, sky2, skyI;

//DEFINING GROUPS
var coinGroup,branchGroup,branch2Group;

//DEFINING AND ASSIGNING VALUE
var play=1;
var end=0;
var gameState = play;
var life=3;
function preload(){
    birdflying=loadAnimation("bird-flying.gif");
    branchI=loadImage("branch.png");
    branchI2=loadImage("branch.png");
    powerI=loadImage("heart.png");
    coinI=loadImage("coin.png");
    skyI=loadImage("sky.jpg");
}




function setup() {
  
  //CREATING THE CANVAS
  createCanvas(displayWidth-740, displayHeight-150);
  
  bird=createSprite(width/2,height-150,50,50);
  bird.scale=0.07;
  bird.setCollider("rectangle",0,0,800,800);
  
  //CREATING THE GROUPS
  coinGroup=createGroup();
  branchGroup=createGroup();
  branch2Group=createGroup();
  //for(var i = 300; i<1000; i--){
    sky=createSprite(width/2,300);//300
  sky.addImage(skyI);
  //}
 
    sky2=createSprite(width/2,height-900);//-300
    sky2.addImage(skyI);
    sky3=createSprite(width/2,height-1500);//-900
    sky3.addImage(skyI);
    sky4=createSprite(width/2,height-2100);//-1500
    sky4.addImage(skyI);
    sky5=createSprite(width/2,height-2700);//-300
    sky5.addImage(skyI);
    sky6=createSprite(width/2,height-3300);//-900
    sky6.addImage(skyI);
    sky7=createSprite(width/2,height-3900);//-1500
    sky7.addImage(skyI);

}




function draw() {  
  
  
  
    if(gameState===play){
      background(105,201,228);
    bird.addAnimation("flying bird",birdflying);
     
        camera.position.x= width/2;
        camera.position.y = bird.y;

     if(keyDown("space")){
       bird.velocityY=-5
     }else{
       bird.velocityY=3
     }
    
     if(keyDown("left_Arrow")){
      bird.velocityX=-3;
     }
    
     if(keyDown("right_Arrow")){
      bird.velocityX=3;
     }
    
    if(bird.isTouching(coinGroup)){
      coinGroup.destroyEach();
     }

     if(bird.isTouching(branchGroup)&&life===3){
      bird.x=width/2
      bird.y=height-150
      life=2;
   }
   
   if(bird.isTouching(branchGroup)&&life===2){
      bird.x=width/2
      bird.y=height-150
      life=1;
   }
   
   if(bird.isTouching(branchGroup)&&life===1){   
      gameState=end;
      life=0;
   }
   
   if(bird.isTouching(branch2Group)&&life===3){
      bird.x=width/2
      bird.y=height-150
      life=2;
   }
   
   if(bird.isTouching(branch2Group)&&life===2){
      bird.x=width/2
      bird.y=height-150
      life=1;
   }
   
   if(bird.isTouching(branch2Group)&&life===1){   
      gameState=end;
      life=0;
   }
   
   if(bird.y>height&& life===3){
     bird.x=width/2;
     bird.y=height-150;
     life=2;
   }
   
   if(bird.y>height&& life===2){
      bird.x=width/2;
      bird.y=height-150;
      life=1;
   }
   
   if(bird.y>height&& life===1){
      gameState=end;
      life=0;
   }
   
    
    sky.depth=bird.depth;
    sky.depth=sky.depth-1;
    sky3.depth=bird.depth;
    sky3.depth=sky3.depth-1;
    sky4.depth=bird.depth;
    sky4.depth=sky4.depth-1;
    sky2.depth=bird.depth;
    sky2.depth=sky2.depth-1;
    sky5.depth=bird.depth;
    sky5.depth=sky5.depth-1;
    sky6.depth=bird.depth;
    sky6.depth=sky6.depth-1;
    sky7.depth=bird.depth;
    sky7.depth=sky7.depth-1;

    branches();
    coins();
    drawSprites();
  }
  if(gameState===end){
    background(0);
    fill(255);
    textSize(20);
text("You Lose",200,200);
  }
  console.log(life);
}




function branches(){

  if(World.frameCount%140===0){
    branch=createSprite(90,camera.position.y-random(100,1000));
    branch.addImage(branchI)
    branch.scale=0.3;
    //branch.velocityY=2;
    branch.setCollider("rectangle",-10,10,500,1)
    branchGroup.add(branch);
    }
  
  if(World.frameCount%180===0){
    branch2=createSprite(540,camera.position.y-random(100,1000));
    branch2.addImage(branchI2)
    branch2.scale=0.3;
   // branch2.velocityY=2;
    branch2.rotation=180;
    branch2.setCollider("rectangle",-10,-40,500,1)
    branch2Group.add(branch2);
    }
}




function coins(){
  if(World.frameCount%150===0){
    coin=createSprite(Math.round(random(20,580)),camera.position.y-random(100,1000))
    coin.addImage(coinI);
    coin.scale=0.06;
    coin.setCollider("circle",0,0,5);
    coinGroup.add(coin);
    }
}
