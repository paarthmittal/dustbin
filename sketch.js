
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const page= this.body


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.

paper2=new paper(100,674,25,25)
cage1=new cage(500,670,20,80)
cage2=new cage(600,670,20,80)
cage3=new cage(550,700,80,20)
ground1=new ground(400,690,900,6)
	
  
}


function draw() {
 
  background(0);
  rectMode(CENTER);
  Engine.update(engine);
  paper2.display()
  cage1.display()
  cage2.display()
  cage3.display()
  ground1.display()
  if(keyWentDown('down')){
	Matter.Body.applyForce(paper2.body,paper2.body.position,{x:28,y:-28})
  }
  drawSprites();
 
}



