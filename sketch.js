var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render= Matter.Render;
var line1,line2,line3;
var line1Sprite,line2Sprite,line3Sprite;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
	
	
	

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;


	line1 = Bodies.rectangle(width / 2, 650, 200, 20 , {isStatic:true} );
	World.add(world, line1);

	line2 = Bodies.rectangle(300, 610, 20, 100 , {isStatic:true} );
	World.add(world, line2);

	line3 = Bodies.rectangle(500, 610, 20, 100 , {isStatic:true} );
	World.add(world, line3);     

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.8, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
 
	

	Engine.run(engine);
	


}


function draw() {
	

	Engine.update(engine);
	rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
 
rect(width / 2, 650, 200, 20 );
rect(300, 610, 20, 100);
rect(500, 610, 20, 100);
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {

   Matter.Body.setStatic(packageBody,false)

	
 }
	 


}
