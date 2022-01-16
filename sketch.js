const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, box3, box4, box5;
var suelo, bird, cerdo1, cerdo2;
var log1, log2, log3, log4;

function setup(){
    var canvas = createCanvas(1520,750);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(770,400,50,50);
    box2 = new Box(680,600,50,60);
    box3 = new Box(850,600,50,60);
    box4 = new Box(680,500,50,60);
    box5 = new Box(850,500,50,60);
    suelo = new Piso(760,750,1520,30);
    bird = new Pajaro (200,200,50,50);
    cerdo1 = new Pigs (770,600,50,50);
    cerdo2 = new Pigs (770,520,50,50);
    log1 = new Tablas (765,550,210,20,PI/2);
    log2 = new Tablas (765,450,210,20);
    log3 = new Tablas (650,20,210,20);
    log4 = new Tablas (850,20,210,20);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    suelo.display();
    bird.display();
    cerdo1.display();
    cerdo2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
}