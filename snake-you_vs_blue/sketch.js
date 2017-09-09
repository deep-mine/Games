var food_x,food_y;
var sq_size = 20;
var fc = "yellow";

function setup(){
	var canvas = createCanvas(600,600);
	canvas.parent("canvasp");
	frameRate(10);
	
	food_x = (floor(random(0,width-sq_size)/sq_size))*sq_size;
	food_y = (floor(random(0,height-sq_size)/sq_size))*sq_size;
	
	s = new Snake(food_x,food_y);
	ai = new AiSnake(food_x,food_y);
}

function keyPressed(){
	if(keyCode == UP_ARROW){
		s.x_speed = 0;
		s.y_speed = -1*s.snake_speed;
	}
	if(keyCode == RIGHT_ARROW){
		s.x_speed = s.snake_speed;
		s.y_speed = 0;
	}
	if(keyCode == DOWN_ARROW){
		s.x_speed = 0;
		s.y_speed = s.snake_speed;
	}
	if(keyCode == LEFT_ARROW){
		s.x_speed = -1*s.snake_speed;
		s.y_speed = 0;
	}
	
}

function endGame(){
	fill(color(100,255,100));
	textFont("verdana",100),
	text(s.snake_length+"-"+ai.snake_length,width/2-100,height/2);
	
	s.snake_speed = 0;
	s.x_speed = 0;
	s.y_speed = 0;
	ai.snake_speed = 0;
	fc = 51;
}

function draw(){
	background(51);
	
	
	ai.move(food_x,food_y);
	ai.update();
	ai.show();
	
	s.update();
	s.show();
	
	if(s.snake_x == food_x && s.snake_y == food_y){
		food_x = (floor(random(0,width-sq_size)/sq_size))*sq_size;
		food_y = (floor(random(0,height-sq_size)/sq_size))*sq_size;
		s.snake_length += 1;
	}
	
	if(ai.snake_x == food_x && ai.snake_y == food_y){
		food_x = (floor(random(0,width-sq_size)/sq_size))*sq_size;
		food_y = (floor(random(0,height-sq_size)/sq_size))*sq_size;
		ai.snake_length += 1;
	}
	
	fill(fc);
	noStroke();
	rect(food_x,food_y,sq_size,sq_size);
	
	textFont("verdana",20),
	text("YOU: "+s.snake_length,20,20);
	text("BLUE: "+ai.snake_length,20,height-5);
	
	if(s.snake_length==10){
		endGame();
	}
	
}
