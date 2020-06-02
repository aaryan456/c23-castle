const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var car;


function setup() {
  createCanvas(1537,720)
  engine = Engine.create();
  world = engine.world;
  
  gr = new Ground(770,730,1300,30)
  a = new Box(780,650, 550, 250);
  b = new Box(446,565,118,420);
  c = new Box(1082, 310, 25, 25);
  d = new Box(416, 310, 25, 25);

  e = new Box(476, 310, 25, 25);

  f = new Box(1495, 1345, 80, 80);
  g = new Box(446,340,140,30);
  h = new Box(1114,565, 118, 420)
  i = new Box(1114,340,140,30)
  
}

function draw() {
  background(0);
  Engine.update(engine);
 
 gr.display()
 a.display()
  b.display()
  c.display()
  d.display()
  e.display()
  f.display()
  g.display()
  h.display()
  i.display()
  
 
}