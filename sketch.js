const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,side1,side2,side3,ground;
function preload()
{
	
}

function setup() {
	createCanvas(1350, 655);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Ball(250,610,20);
	side1 = new Bin(1150,620,150,20);
	side2 = new Bin (1070,555,20,150);
	side3 = new Bin (1230,555,20,150);
	ground = new Ground (630,640,1500,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball.display();
  side1.display();
  side2.display();
  side3.display();
  ground.display();
  drawSprites();
 
}
function keyPressed() {
	if(keyCode===UP_ARROW){
	  Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
	} }


