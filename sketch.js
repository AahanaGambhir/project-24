
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400, 650, 800, 15);
	dustbin1 = new Dustbin(715, 610, 10, 60);
	dustbin2 = new Dustbin(645, 640, 150, 10);
	dustbin3 = new Dustbin(575, 610, 10, 60);
	paper = new Paper(200, 400, 25)
	Engine.run(engine);

	keyPressed(); 
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 // drawSprites();

ground.display();
dustbin1.display();
dustbin2.display();
dustbin3.display();
paper.display();
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.position,{x:20, y:-20})
	}
}


