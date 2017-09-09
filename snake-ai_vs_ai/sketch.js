var food_x,food_y;
var sq_size = 20;
var fc = "yellow";
var ai1col = "green";
var ai2col = "blue";

/* aimovs -> xfirst,yfirst,snakeline */
var ai1mov = "xfirst";
var ai2mov = "yfirst";

function setup(){
	createCanvas(600,600);
	frameRate(10);
	
	food_x = (floor(random(0,width-sq_size)/sq_size))*sq_size;
	food_y = (floor(random(0,height-sq_size)/sq_size))*sq_size;
	
	var snk1x = (floor(random(0,width-sq_size)/sq_size))*sq_size;
	var snk1y = (floor(random(0,height-sq_size)/sq_size))*sq_size;
	
	var snk2x = (floor(random(0,width-sq_size)/sq_size))*sq_size;
	var snk2y = (floor(random(0,height-sq_size)/sq_size))*sq_size;
	
	s = new Snake(food_x,food_y);
	ai1 = new AiSnake(food_x,food_y,snk1x,snk1y,ai1mov);
	ai2 = new AiSnake(food_x,food_y,snk2x,snk2y,ai2mov);
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

/* function endGame(){
	fill(color(100,255,100));
	textFont("verdana",100),
	text(s.snake_length+"-"+ai.snake_length,width/2-100,height/2);
	
	s.snake_speed = 0;
	s.x_speed = 0;
	s.y_speed = 0;
	ai.snake_speed = 0;
	fc = 51;
} */

function draw(){
	background(51);
	
	
	ai1.move(food_x,food_y);
	ai1.update();
	ai1.show(ai1col);
	
	ai2.move(food_x,food_y);
	ai2.update();
	ai2.show(ai2col);
	
	
	if(ai1.snake_x == food_x && ai1.snake_y == food_y){
		food_x = (floor(random(0,width-sq_size)/sq_size))*sq_size;
		food_y = (floor(random(0,height-sq_size)/sq_size))*sq_size;
		ai1.snake_length += 1;
	}
	
	if(ai2.snake_x == food_x && ai2.snake_y == food_y){
		food_x = (floor(random(0,width-sq_size)/sq_size))*sq_size;
		food_y = (floor(random(0,height-sq_size)/sq_size))*sq_size;
		ai2.snake_length += 1;
	}
	
	fill(fc);
	noStroke();
	rect(food_x,food_y,sq_size,sq_size);
	
	textFont("verdana",20),
	text("AI1-- Movement:"+ai1mov+"     Points: "+ ai1.snake_length,20,20);
	text("AI2-- Movement:"+ai2mov+"     Points: "+ ai2.snake_length,20,height-5);

	
	/* if(ai.snake_length==2||s.snake_length==10){
		endGame();
	} */
	
	
}
