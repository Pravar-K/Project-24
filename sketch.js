
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,ground,dustbin;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	var paper = new Paper(20,20,20,20);
	var ground=new Ground(400,700,2000,2000);
	var dustbin=new Dustbin(85,-85,20,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  keyPressed();
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	}
}


