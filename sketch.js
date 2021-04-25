var canvas;
var music;
var surface,surface1,surface2,surface3;
var ball;

function preload(){
   // music = loadSound("music.mp3");
}
function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface=createSprite(100,600,125,30);
    surface.shapeColor="blue";

    surface1=createSprite(250,600,125,30);
    surface1.shapeColor="orange";

    surface2=createSprite(400,600,125,30);
    surface2.shapeColor="maroon";

    surface3=createSprite(550,600,125,30);
    surface3.shapeColor="green";


    //create box sprite and give velocity
    ball=createSprite(100,550,20,20);
   ball.velocity.y=0.5;

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    createEdgeSprites()
    if(surface.isTouching(ball)&& ball.bounceOff(surface)){
        ball.shapeColor="blue";
        ball.velocityX=0;
    }

    if(surface1.isTouching(ball)&& ball.bounceOff(surface1)){
        ball.shapeColor="orange";
        ball.velocityX=0;
    }

    if(surface2.isTouching(ball)&& ball.bounceOff(surface2)){
        ball.shapeColor="maroon";
        ball.velocityX=0;
    }

    if(surface3.isTouching(ball)&& ball.bounceOff(surface3)){
        ball.shapeColor="green";
        ball.velocityX=0;
    }
    drawSprites();



    //add condition to check if box touching surface and make it box
}
function keyPressed() {

	if (keyCode === LEFT_ARROW) {
	 ball.x=ball.x-20;
	}

    if (keyCode === RIGHT_ARROW) {
        ball.x=ball.x+20;
       }

       if (keyCode === DOWN_ARROW) {
        ball.y=ball.y+20;
      
          }
}