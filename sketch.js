var mRect , fRect;

function setup() {
  createCanvas(1200,400);
 
  mR = createSprite(275, 200, 50, 100);
  fR = createSprite(200, 200, 100, 50);

  mR.shapeColor = "red";
  fR.shapeColor = "yellow";

  mR1 = createSprite(375, 300, 50, 100);
  fR1 = createSprite(200, 300, 100, 50);

  mR1.shapeColor = "red";
  fR1.shapeColor = "yellow";
  
  mR1.velocityX = -5;
  fR1.velocityX = 5;
}

function draw() {
  background(0);  
  mR.x = mouseX;
  mR.y = mouseY;
  console.log(mR.x);
   //isTouching()
 //creating algorithm for isTouching() using the sprites mR and fr
   if (mR.x - fR.x <= mR.width/2 + fR.width/2
    && fR.x - mR.x <= mR.width/2 + fR.width/2
    && mR.y - fR.y <= mR.height/2 + fR.height/2 
      && fR.y - mR.y <= mR.height/2 + fR.height/2){
    mR.shapeColor = "blue";
    fR.shapeColor = "blue";
   }
   else{
    mR.shapeColor = "red";
    fR.shapeColor = "yellow";
   }
  //bounce off algorithm with sprites mR1 and fR1
   if (mR1.x - fR1.x <= mR1.width/2 + fR1.width/2
    && fR1.x - mR1.x <= mR1.width/2 + fR1.width/2
    && mR1.y - fR1.y <= mR1.height/2 + fR1.height/2 
      && fR1.y - mR1.y <= mR1.height/2 + fR1.height/2){
    mR1.shapeColor = "blue";
    fR1.shapeColor = "blue";
    mR1.velocityX = mR1.velocityX * -1;
    fR1.velocityX = fR1.velocityX * -1;
   }
   else{
    mR1.shapeColor = "red";
    fR1.shapeColor = "yellow";
   }
   




  drawSprites();

}