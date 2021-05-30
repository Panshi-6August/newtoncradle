
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var roof, b1,b2,b3,b4,b5,b6;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     roof=new Roof(400,200,600,10)

b1 = new Ball(150,400,50,50)
b2 = new Ball(230,400,50,50)
b3 = new Ball(310,400,50,50)
b4 = new Ball(390,400,50,50)
b5 = new Ball(470,400,50,50)
b6 = new Ball(550,400,50,50)

s1=new Rope(b1.body,{x:150,y:200});
s2=new Rope(b2.body,{x:230,y:200});
s3=new Rope(b3.body,{x:310,y:200});
s4=new Rope(b4.body,{x:390,y:200});
s5=new Rope(b5.body,{x:470,y:200});
s6=new Rope(b6.body,{x:550,y:200});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(20,30,10);
  roof.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();

  s1.display()
  s2.display()
  s3.display()
  s4.display()
  s5.display()
  s6.display()
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode==UP_ARROW){
		Matter.Body.applyForce(b1.body,b1.body.position,{x:-200,y:-40});
	}
}

