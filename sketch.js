var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
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
	
	
	line1Sprite = createSprite(width / 2, 650, 200, 20);
	line1Sprite.shapeColor = ("red");

	line2Sprite = createSprite(300, 610, 20, 100);
	line2Sprite.shapeColor = ("red");

	line3Sprite = createSprite(500, 610, 20, 100);
	line3Sprite.shapeColor = ("red");

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
 
  line1Sprite.x= line1.position.x 
  line1Sprite.y= line1.position.y 
 
  line2Sprite.x= line2.position.x 
  line2Sprite.y= line2.position.y 
 
  line3Sprite.x= line3.position.x 
  line3Sprite.y= line3.position.y 


  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {

   Matter.Body.setStatic(packageBody,false)

	
 }
	 


}
