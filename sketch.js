
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var upRoof;
var chain;
var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	upRoof = new Roof(400,200,300,20);
	
	bob1 = new bob(300,400,25);
	bob2 = new bob(350,400,25);
	bob3 = new bob(400,400,25);
	bob4= new bob(450,400,25);
	bob5 = new bob(500,400,25);

	rope1 = new rope(bob1.x,upRoof.gr,300);
	rope2 = new rope(bob2.x,upRoof.gr,350);
	rope4 = new rope(bob3.x,upRoof.gr,400);
	rope5 = new rope(bob4.x,upRoof.gr,450);
	rope3 = new rope(bob5.x,upRoof.gr,500);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("#C0C0C0");

  upRoof.display();
  bob1.display();
  bob3.display();
  bob4.display();
  bob5.display();
  bob2.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
  keyPressed();
  
 
}

function keyPressed() {
	if(keyCode === 38) {
		Matter.Body.applyForce(bob1.x,bob1.x.position,{x:95,y:-95});
	}
}

