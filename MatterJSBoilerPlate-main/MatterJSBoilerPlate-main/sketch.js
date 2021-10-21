
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var w,wall2,ball;

function setup() {
	createCanvas(800, 900);


	engine = Engine.create();
	world = engine.world;



  var ball_op={
    //restitution:5,
    friction:0,
    density:1.2,
  }

  ball = Bodies.circle(200,200,20,ball_op);
  World.add(world,ball);
  keyPressed()
  
  
    

    w = new Wall(200,390,4000,10);
    wall2 = new Wall(400,350,4,200);
  wall21 = new Wall(600,350,4,200);


  Engine.run(engine);
    
   
  

	//Create the Bodies Here.



  
}

function keyPressed() 
{
 if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(ball,{x:0,y:0},{x:200,y:-100})

 }

}


function draw() {
  rectMode(CENTER);
  background("black");

  w.show();
  wall2.show();
  wall21.show();
  // ball.show1();

  ellipse(ball.position.x,ball.position.y,20);
  
  drawSprites();
}

 