
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbinObj, paperObject,groundObject	
var world;


function setup() {
	createCanvas(1200, 550);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	dustbinObj=new dustbin(1000,450);
	paperObject=new paper(200,350, 70);
	groundObject= new ground(width/2, 500, width, 40)
	Engine.run(engine);
	  
}
function draw() {
  rectMode(CENTER);
  background(255);
  
  paperObject.display();
  dustbinObj.display();
  groundObject.display();

}

function keyPressed() {
  	if (keyCode === UP_ARROW) {
 	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
    
  	}
}