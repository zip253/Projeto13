
const Engine = Matter.Engine;
	const World = Matter.World;
const Bodies = Matter.Bodies;
	const Body = Matter.Body;

//
var world;
	var engine;
var p1;
	var p2;
var p3;
	var bola;

function setup() {
	createCanvas(600,600);

	engine = Engine.create();
	world = engine.world;

//P1
p1=new paredes(0,500,1400,20);

//P2
p2=new paredes(430,440,20,120);

//P3
p3=new paredes(530,440,20,120);

//Bola

             //Propriedades da bola
             var propriedades_bola={
            
				restitution:0.05
			  }
  
				  //Criando bola
				  bola=Bodies.circle(150,300,20,propriedades_bola);
  
  
					//Adicionando corpo ao mundo
					World.add(world,bola);
  
}


function draw() {
  background("green");
  
  Engine.update(engine);

  //Exibindo paredes
p1.show();
  p2.show();
p3.show();

//Desenhando bola
push();
ellipseMode(RADIUS);
ellipse(bola.position.x,bola.position.y,20,20);
pop();
 
}

function keyPressed(){
if (keyCode==UP_ARROW){
	Matter.Body.applyForce(bola,{x:0,y:0},{x:0.035,y:-0.05})
	}
}

