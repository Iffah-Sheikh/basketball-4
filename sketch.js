const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var basketballPlayerImg, courtImg, hoopImg, basketballImg;
var basketballPlayer, basketball;
var ground;
var gameState;
var hoop;
var score = 0;
var fiveHearts, fourHearts, threeHearts, twoHearts, oneHearts; 
var fiveImg, fourImg, threeImg, twoImg, oneImg;

function preload() {
  basketballImg = loadImage("Images/basketball.png");
  basketballPlayerImg = loadImage("Images/basketball-player.png");
  courtImg = loadImage("Images/Court.png");
  hoopImg = loadImage("Images/hoop-2.png");
  fiveImg = loadImage("Images/full-hearts.png");
  fourImg = loadImage("Images/four-hearts.png");
  threeImg = loadImage("Images/three-hearts.png");
  twoImg = loadImage("Images/two-hearts.png");
  oneImg = loadImage("Images/one-hearts.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,10);

  

  var options ={
    isStatic :true
  }
  
  basketballPlayer = Bodies.rectangle(width/4 + 100, height/2, 100, 200, options);
  World.add(world, basketballPlayer);

  hoop = Bodies.rectangle(width/10, height/4.5, 200, 200, options);
  World.add(world, hoop);
  
  /*basketballPlayer = createSprite(400, 400, 10, 10);
  basketballPlayer.addImage("player", basketballPlayerImg);
  basketballPlayer.scale = 0.19*/

  basketball = new Basketball(basketballPlayer.position.x +30, basketballPlayer.position.y + 20);
}
function draw() {
  background(courtImg);
  Engine.update(engine);
  textSize(30);
  text("Score: " +score, width/2, 50);
  ground.display();
  //imageMode(CENTER);
  image(hoopImg, hoop.position.x, hoop.position.y, 200, 200);
  image(basketballPlayerImg, basketballPlayer.position.x, basketballPlayer.position.y, 100, 200);
  //drawSprites();
  basketball.display();
}

function keyReleased() {
  if (keyIsDown(UP_ARROW)) {
    Matter.Body.setStatic(basketball.body, false);
    basketball.shoot();
  }
}

function collide () {
  var collision = Matter.SAT.collides(hoop, basketball);
  if(collision.collided) {
    console.log("collided");
    score = score + 5;
  }
}