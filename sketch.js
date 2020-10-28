
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
	side1 = new Side(700, 590, 20, 100);
	side2 = new Side(600, 590, 20, 100);
	bottomSide = new Side(650, 620, 120, 20);
	dustbin1 = new Dustbin(650, 590, 100, 100)
	ground1 = new Ground(400, 640, 800, 20);
	paper1 = new Paper(200, 550, 20);

	Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine);
  ground1.display();    
  paper1.display(); 
  dustbin1.display();
}



function keyPressed()
{
    if (keyCode == UP_ARROW)
    {
        Matter.Body.applyForce(paper1.body, paper1.body.position, {x:15, y:-50});
    }
}

