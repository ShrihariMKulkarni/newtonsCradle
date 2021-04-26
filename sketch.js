
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var roof , world;
var bob1,bob2,bob3,bob4,bob5,bob6;
var chain1,chain2,chain3,chain4,chain5;
var bobDiameter;

function preload()
{
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	

	engine = Engine.create();
	world = engine.world;

	roof = new Roof(740,150,350,30);
	World.add(world,roof);

	bobDiameter = 40;
	
	//bob1 = new Bob(windowWidth-700,windowHeight-350,40);
	bob2 = new Bob(windowWidth-740,windowHeight-350,40);
	bob3 = new Bob(windowWidth-780,windowHeight-350,40);
	bob4 = new Bob(windowWidth-820,windowHeight-350,40);
	bob5 = new Bob(windowWidth-860,windowHeight-350,40);
	bob6 = new Bob(windowWidth-900,windowHeight-350,40);

	//chain1 = new Rope(bob1.body,roof.body,+bobDiameter*2,0);
	chain2 = new Rope(bob2.body,roof.body,+bobDiameter*1,0);
	chain3 = new Rope(bob3.body,roof.body,0,0);
	chain4 = new Rope(bob4.body,roof.body,-bobDiameter*1,0);
	chain5 = new Rope(bob5.body,roof.body,-bobDiameter*2,0);
	chain6 = new Rope(bob6.body,roof.body,-bobDiameter*3,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");
  
  //bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  bob6.display();
  roof.display();
  
  //chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  chain6.display();
  drawSprites();
 
}

function keyPressed(){  
    if(keyCode===38)
    Matter.Body.applyForce(bob6.body,bob6.body.position,{x:-70,y:-70});
}



