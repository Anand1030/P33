const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var background1,character;
var edge1,edge2;
var snowflakes=[];
function preload(){
  background1=loadImage("snow1.jpg")
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  character = createSprite(350, 250, 50, 100);
  edge1 = createSprite(0, 200, 20, 800);
  edge2 = createSprite(800, 200, 20, 800);
  edge1.visible=false;
  edge2.visible=false;
  character.shapeColor="blue";
  createEdgeSprites();
  character.velocityX=10;
  snow=new Snow(10,10,10);

}


function draw() {
  background(background1); 

  snow.display;
  console.log(snow.y)

  character.bounceOff(edge1);
  character.bounceOff(edge2);
  drawSprites();
}