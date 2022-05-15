
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var groundObj, rightSide, leftSide;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ball = new Ball (100,350,20);
	groundObj = new Ground(width/2,670,width,20);
	rightSide = new Ground(750,600,20,120);
	leftSide = new Ground(550,600,20,120);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  
 
  Engine.update(engine);
  

  ball.display();
  groundObj.show();
  leftSide.show();
  rightSide.show();

  keyPressed();

  drawSprites();
}


function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,{x:0,y:0},{x:0.5,y:0.5})
	}

}


