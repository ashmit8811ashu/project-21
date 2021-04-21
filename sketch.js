var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
   music= loadSound("music.mp3")
}


function setup(){
    canvas = createCanvas(800,600);
    edges=createEdgeSprites();

      block1 = createSprite(90,580,190,30);
    block1.shapeColor = "blue";

block2 = createSprite(290,580,190,30);
    block2.shapeColor = "orange";

    block3= createSprite(490,580,190,30);
block3.shapeColor="red";

block4= createSprite(690,580,190,30);
block4.shapeColor="yellow";

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    ball.setVelocity(random(3,6),random(3,6))
}

function draw() {
    background(rgb(169,169,169));
    
    ball.bounceOff(edges);

    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "blue";
        music.play();
    }

    
    if(block2.isTouching(ball) && ball.bounceOff(block2)){
        ball.shapeColor = "orange";
        music.play();
    }
    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = "red";
        music.play();
    }

    if(block4.isTouching(ball) ){
        ball.shapeColor = "yellow";
        music.stop();
        ball.setVelocity(0,0)
    }

drawSprites();
}
