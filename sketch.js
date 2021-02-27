var database; 
var balloon, balloonImage;                                                                                                                                                                                                                         
var bg, bgImg;                                                                                                                                                                                                                         

function preload(){                                                                                                                                                                                                                        

	bgImg = loadImage("Background.png");                                                                                                                                                                                                                         
	balloonImage = loadImage("Hot Air Ballon-01.png");                                                                                                                                                                                                                        
}                                                                                                                                                                                                                        
function setup() {                                                                                                                                                                                                                        
	createCanvas(1000,500);                                                                                                                                                                                                                        

	database = firebase.database;

	bg = createSprite(500,250,1000,500);                                                                                                                                                                                                                        
	bg.addImage(bgImg);                                                                                                                                                                                                                        
	bg.scale = .4;                                                                                                                                                                                                                        

	balloon = createSprite(250, 200, 50, 50);                                                                                                                                                                                                                        
	balloon.addImage(balloonImage);                                                                                                                                                                                                                        
	balloon.scale = .7;                
	


	
}                                                                                                                                                                                                                        
                                                                                                                                                                                                                                
function draw() {                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
  	background(0);                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
  	                                                                                                                                                                                                                                        
	// no "else if" because I want to be able to move up/down and right/left at the same time.                                                                                                                                                                                                                                                  
	                                                                                                                                                                                                                                    
	if(keyDown("right")){                                                                                                                                                                                                                                                 
		changePos(2,0);                                                                                                                                                                                                                                                 
	}                                                                                                                                                                                                                                                 
	if(keyDown("left")){                                                                                                                                                                                                                                                 
		changePos(-2,0);                                                                                                                                                                                                                                                 
	}                                                                                                                                                                                                                                                 
	if(keyDown("up")){                                                                                                                                                                                                                                                 
		changePos(0,-2);                                                                                                                                                                                                                                                 
	}                                                                                                                                                                                                                                                 
	if(keyDown("down")){                                                                                                                                                                                                                                                 
		changePos(0,2);                                                                                                                                                                                                                                                 
	}                                                                                                                                                                                                                                                 
	drawSprites();                                                                                                                                                                                                                                                   
                                                                                                                                                                                                                                
	textSize(10);                                                                                                                                                                                                                                                 
	text("**Use the arrow keys to move Hot Air Balloon!")                                                                                                                                                                                                                                                 
}           
                                                                                                                                                                                                                                         
                                                                                                                                                                                                                                
function changePos(x, y){                                                                                                                                                                                                                                                 
	balloon.x= balloon.x + x;
	balloon.y= balloon.y + y;
}; 