var ball,database;
var position;
var backgroundImg
var hotAirBaloon

function preload(){
     
backgroundImg = loadImage("sprites/H2.png")
hotAirBaloon = loadAnimation("Sprites/H-1.png", "Sprites/H3.png", "Sprites/H4.png")
}


function setup(){
    database = firebase.database();
    createCanvas(800,400);
    ball = createSprite(200,390,10,10)
    ball.shapeColor = "red";
    ball.addAnimation(hotAirBaloon)
    ball.scale = 0.75;
    
    var ball = database.ref('position');
    ball.on("value", readPosition);
}

function draw(){
    background(backgroundImg)
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
        
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(+1,0);
        
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
       
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
      
    }
    drawSprites();
}

function writePosition(x,y){
    database.ref('position').set({
      'x': position.x + x ,
      'y': position.y + y
    })
  }
  
  function readPosition(data){
    position = data.val();
    console.log(position.x);
    ball.x = position.x;
    ball.y = position.y;
  }
  