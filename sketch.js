//namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body

var engine, world;
var ball, ground;

function setup() {
    createCanvas(400,400);
    ellipseMode(RADIUS);
    rectMode(CENTER);

    engine = Engine.create();
    world = engine.world;


    

    //criar bola
    //JSON 
    var optionsB = {
        density: 1,
        restitution: 1
    }

    ball = Bodies.circle(200 /*x*/, 100 /*y*/, 50, optionsB);


    World.add(world, ball)


    var groundOptions = {
        isStatic: true
    }

    //criar chao
    ground = Bodies.rectangle(200, 380, 400, 50, groundOptions);
    World.add(world, ground);

}

function draw() 
{
    background(255);
    Engine.update(engine);

    ellipse(ball.position.x, ball.position.y, 50, 50)

    rect(200, 380, 400, 50);
}
