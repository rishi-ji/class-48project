var hunter,hunterImg,background,backgroundImg,tiger,tigerImg,bullet,bulletIMG,bursting,burstingIMG;
var bulletGroup,lyingTiger,lyingTigerIMG,bg,bgImage

function preload(){
  hunterImg=loadAnimation("1.png","2.png","3.png","4.png","5.png","6.png")
  bgImage=loadImage("Background.jpg")
  tigerImg=loadAnimation("tiger1.png","tiger2.png","tiger3.png","tiger4.png","tiger5.png","tiger6.png","tiger7.png","tiger8.png")
  bulletIMG=loadImage("Bullet(1).png","Bullet(2).png","Bullet(3).png","Bullet(4).png")
  burstingIMG=loadImage("burstingImage1.png","burstingImage2.png","burstingImage3.png","burstingImage4.png")
  lyingTigerIMG=loadAnimation("tigerLying.png") 

}


function setup() {
  createCanvas(displayWidth,displayHeight);
  bg=createSprite(200,330,2000,1000);
bg.scale=6;
bg.velocityX=-2;
bg.x=bg.width/6;
bg.addImage("moving",bgImage)

  
  hunter=createSprite(100, 700, 50, 50);
  hunter.addAnimation("shooting",hunterImg)
  tiger=createSprite(550,640,50,50)
 
  tiger.addAnimation("running",tigerImg)
  tiger.addAnimation("lying",lyingTigerIMG)
  //tiger.velocityX=5
//tiger.velocityY=random(5,-5)
  edges=createEdgeSprites()
  bulletGroup=new Group()
}

function draw() {
  

  background("black")
  if (bg.x < 0) {
    bg.x = bg.width/2;
    }
  fill("white")
  textSize(20)
  
  Bullet()
  //hunter.velocityX=0
  //hunter.velocityY=0

  


//if(keyDown("RIGHT_ARROW")){
  //hunter.velocityX=5
  //hunter.velocityY=0

//}
//if(keyDown("LEFT_ARROW")){
  //hunter.velocityX=-5
  //hunter.velocityY=0

//}

hunter.collide(edges[3])
hunter.collide(edges[1])
hunter.collide(edges[0])

//iger.velocityX=5
//tiger.velocityY=random(0,0)
tiger.bounceOff(edges)

  drawSprites();
  if(bulletGroup.isTouching(tiger)){

    tiger.changeAnimation("lying",lyingTiger)
    tiger.scale=0.2
    tiger.velocityX=0
    tiger.velocityY=0 
    bulletGroup.destroyEach()
    tiger.destroy()


    textSize(100)
    text("GameOver",200,200)

  }


}
function Bullet(){
  if(keyDown("space")){
    bullet=createSprite(hunter.x+80,hunter.y-80,55,55)
    bullet.addAnimation("missile",bulletIMG)
    bullet.scale=0.5
    bullet.velocityX=10
    bulletGroup.add(bullet)
     
  
  }
 

}
