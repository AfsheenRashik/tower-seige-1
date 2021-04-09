
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ball;
var polyImg,sling;


function preload(){

polyImg = loadImage("polygon.png");



}

function setup(){

    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Stand(511,385,1200,20);
    stand1 = new Stand(390,300,250,10);
    stand2 = new Stand(700,200,200,10);
   
    //level one
    block1 = new Block(300,275,30,40);
    console.log(block1);
    block2 = new Block(330,275,30,40);
    block3 = new Block(360,275,30,40);
    block4 = new Block(390,275,30,40);
    block5 = new Block(420,275,30,40);
    block6 = new Block(450,275,30,40);
    block7 = new Block(480,275,30,40);
    //level two
    block8 = new Block(330,235,30,40);
    block9 = new Block(360,235,30,40);
    block10 = new Block(390,235,30,40);
    block11 = new Block(420,235,30,40);
    block12 = new Block(450,235,30,40);
    //level three
    block13 = new Block(360,195,30,40);
    block14 = new Block(390,195,30,40);
    block15 = new Block(420,195,30,40);
    //top
    block16 = new Block(390,155,30,40);
  
    //set 2 for second stand
    //level one
    blocks1 = new Block(640,175,30,40);
    blocks2 = new Block(670,175,30,40);
    blocks3 = new Block(700,175,30,40);
    blocks4 = new Block(730,175,30,40);
    blocks5 = new Block(760,175,30,40);
    //level two
    blocks6 = new Block(670,135,30,40);
    blocks7 = new Block(700,135,30,40);
    blocks8 = new Block(730,135,30,40);
    //top
    blocks9 = new Block(700,95,30,40);


    ball = Bodies.circle(50,200,20);
    World.add(world,ball);
  
sling =  new SlingShot(this.ball,{x:100,y:200});
}



function draw (){
background(0);
text(mouseX+","+mouseY,mouseX,mouseY);
stroke("pink")
textSize(20);
fill("turquoise")

text("Drag and Release to shoot the polygon at the  blocks!!",100,30)
    Engine.update(engine);

   ground.display();
    stand1.display();
    stand2.display();
    strokeWeight(2);
    stroke(15);
    fill("skyblue");
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    fill("pink");
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    fill("turquoise");
    block13.display();
    block14.display();
    block15.display();
    fill("gold");
    block16.display();
    fill("lavender");
    blocks1.display();
    blocks2.display();
    blocks3.display();
    blocks4.display();
    blocks5.display();
    fill("turquoise");
    blocks6.display();
    blocks7.display();
    blocks8.display();
    fill("pink")
    blocks9.display();
    
    ball.display
    imageMode(CENTER)
    image(polyImg ,ball.position.x,ball.position.y,40,40);

sling.display();

}

function mouseDragged(){
Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY})

}

function mouseReleased(){

  sling.fly() ; 
}