var fcube
var mcube

function setup() {
  createCanvas(800,400);
  fcube = createSprite(400, 200, 50, 50);
  mcube = createSprite(200,300,40,40);
  fcube.shapeColor = "lime"
  mcube.shapeColor = "lime"
}

function draw() {
  background(255,255,255);  
  drawSprites();
  mcube.x = World.mouseX
  mcube.y = World.mouseY

  if(mcube.x - fcube.x < mcube.width/2 + fcube.width/2 && 
    fcube.x - mcube.x < mcube.width/2 + fcube.width/2 &&
    mcube.y - fcube.y < mcube.width/2 + fcube.width/2 && 
    fcube.y - mcube.y < mcube.width/2 + fcube.width/2){
    fcube.shapeColor = "red"
    mcube.shapeColor = "red"
  }

   else{fcube.shapeColor = "lime"
        mcube.shapeColor = "lime"}

}