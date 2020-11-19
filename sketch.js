
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bin1,bin2,bin3;
var ball,g;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	ball = new Paper(280,670,40,40);

	g = new Ground(400,680,400,10);

	bin1 = new Dustbin(350,760,200,20)
	bin2=new Dustbin(360,720,20,100);
	bin3=new Dustbin(550,720,20,100);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  
  bin1.display();
  bin2.display();
  bin3.display();

  ball.display();

  g.display();
  
  drawSprites();
 
}

function keyPressed(){
if (keyCode===UP_ARROW){
Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
}

}



