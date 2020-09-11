const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;




var rain;
var umbrella;
var mu;


function preload(){
    mu = loadImage("images/mu.jpg");
}

function setup(){
    createCanvas(600,800);
    engine = Engine.create();
    world = engine.world;
    
    Engine.run(engine);
}

function draw(){
    background("white")
}   

tint(255,this.Visiblity);




