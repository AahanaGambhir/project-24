
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
	dustbin1 = new Dustbin(715, 595, 10, 80);
	dustbin2 = new Dustbin(645, 640, 150, 10);
	dustbin3 = new Dustbin(575, 595, 10, 80);
	paper = new Paper(100, 500, 2)
	Engine.run(engine);
  
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



