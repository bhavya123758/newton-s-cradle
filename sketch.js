
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
bobDiameter=100
startBobPositionX=width/2;
	startBobPositionY=500;
	//Create the Bodies Here.
ground1=new Ground(400,50);
bob1=new Paper(startBobPositionX-bobDiameter*2,startBobPositionY,100);
bob2=new Paper(startBobPositionX-bobDiameter,startBobPositionY,100);
bob3=new Paper(startBobPositionX,startBobPositionY,100);
bob4=new Paper(startBobPositionX+bobDiameter,startBobPositionY,100);
bob5=new Paper(startBobPositionX+bobDiameter*2,startBobPositionY,100);

chain1=new Chain(bob1.body,ground1.body,-bobDiameter*2,0)
chain2=new Chain(bob2.body,ground1.body,-bobDiameter*1,0)
chain3=new Chain(bob3.body,ground1.body,-bobDiameter*0,0)
chain4=new Chain(bob4.body,ground1.body,bobDiameter*1,0)
chain5=new Chain(bob5.body,ground1.body,bobDiameter*2,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground1.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  drawSprites();
  keyPressed();
  
 
}
function keyPressed() {
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:+10});

  }
}




