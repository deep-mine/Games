function AiSnake(fx,fy,snakex,snakey,mov){

	this.snake_x = snakex;
	this.snake_y = snakey;
	this.x_speed = 0;
	this.y_speed = 0;
	this.snake_speed = 20;
	this.sq_size = 20;
	
	this.tail = [];
	this.snake_length = 0;
	
	var food_x = fx;
	var food_y = fy;
	
	var dx1,dx2,dy1,dy2 = 0;
	var xDir,yDir = 0;
	
	var movement = mov;
	
	this.move = function(food_x,food_y){
		
			dx1 = abs(food_x - this.snake_x);
			dx2 = abs(this.snake_x + width - food_x);
			
			dy1 = abs(food_y - this.snake_y);
			dy2 = abs(this.snake_y + height - food_y);
			
		if(movement == "xfirst"){
			if(food_x > this.snake_x){
				if(dx1<=dx2){
					xDir = this.snake_speed;
					yDir = 0;
				}
				else{
					xDir = -1*this.snake_speed;
					yDir = 0;
				}
			}
			if(food_x < this.snake_x){
				if(dx1<=dx2){
					xDir = -1*this.snake_speed;
					yDir = 0;
				}
				else{
					xDir = this.snake_speed;
					yDir = 0;
				}
			}
			
			if(food_x == this.snake_x && food_y < this.snake_y){
				if(dy1<=dy2){
					yDir = -1*this.snake_speed;
					xDir = 0;
				}
				else{
					yDir = this.snake_speed;
					xDir = 0;
				}
			}
			
			if(food_x == this.snake_x && food_y > this.snake_y){
				if(dy1<=dy2){
					yDir = this.snake_speed;
					xDir = 0;
				}
				else{
					yDir = -1*this.snake_speed;
					xDir = 0;
				}
			}
		}
		
		if(movement == "yfirst"){
			if(food_y > this.snake_y){
				if(dy1<=dy2){
					yDir = this.snake_speed;
					xDir = 0;
				}
				else{
					yDir = -1*this.snake_speed;
					xDir = 0;
				}
			}
			if(food_y < this.snake_y){
				if(dy1<=dy2){
					yDir = -1*this.snake_speed;
					xDir = 0;
				}
				else{
					yDir = this.snake_speed;
					xDir = 0;
				}
			}
			
			if(food_y == this.snake_y && food_x < this.snake_x){
				if(dx1<=dx2){
					xDir = -1*this.snake_speed;
					yDir = 0;
				}
				else{
					xDir = this.snake_speed;
					yDir = 0;
				}
			}
			
			if(food_y == this.snake_y && food_x > this.snake_x){
				if(dx1<=dx2){
					xDir = this.snake_speed;
					yDir = 0;
				}
				else{
					xDir = -1*this.snake_speed;
					yDir = 0;
				}
			}
		}
		
		if(movement == "snakelike"){
			if(this.snake_x!=food_x && this.snake_y!=food_y ){
				if(food_x > this.snake_x){
					if(dx1<=dx2){
						xDir = this.snake_speed;
						//yDir = 0;
					}
					else{
						xDir = -1*this.snake_speed;
						//yDir = 0;
					}
				}
				if(food_x < this.snake_x){
					if(dx1<=dx2){
						xDir = -1*this.snake_speed;
						//yDir = 0;
					}
					else{
						xDir = this.snake_speed;
						//yDir = 0;
					}
				}
				
				if(food_y < this.snake_y){
					if(dy1<=dy2){
						yDir = -1*this.snake_speed;
						//xDir = 0;
					}
					else{
						yDir = this.snake_speed;
						//xDir = 0;
					}
				}
				
				if(food_y > this.snake_y){
					if(dy1<=dy2){
						yDir = this.snake_speed;
						//xDir = 0;
					}
					else{
						yDir = -1*this.snake_speed;
						//xDir = 0;
					}
				}
			}else{
				if(food_y > this.snake_y){
				if(dy1<=dy2){
					yDir = this.snake_speed;
					xDir = 0;
				}
				else{
					yDir = -1*this.snake_speed;
					xDir = 0;
				}
			}
			if(food_y < this.snake_y){
				if(dy1<=dy2){
					yDir = -1*this.snake_speed;
					xDir = 0;
				}
				else{
					yDir = this.snake_speed;
					xDir = 0;
				}
			}
			
			if(food_y == this.snake_y && food_x < this.snake_x){
				if(dx1<=dx2){
					xDir = -1*this.snake_speed;
					yDir = 0;
				}
				else{
					xDir = this.snake_speed;
					yDir = 0;
				}
			}
			
			if(food_y == this.snake_y && food_x > this.snake_x){
				if(dx1<=dx2){
					xDir = this.snake_speed;
					yDir = 0;
				}
				else{
					xDir = -1*this.snake_speed;
					yDir = 0;
				}
			}
			}
			
		}
		this.x_speed = xDir;
		this.y_speed = yDir;
	}
	
	this.update = function(){
		
		
		if(this.snake_length == this.tail.length){
			for(var i = 0;i<this.snake_length-1;i++){
				this.tail[i] = this.tail[i+1];
			}
		}
		this.tail[this.snake_length-1] = createVector(this.snake_x,this.snake_y);
	
		this.snake_x += this.x_speed;
		this.snake_y += this.y_speed;
	
		if(this.snake_x < 0){
			this.snake_x = width-this.sq_size;
		}
	
		if(this.snake_x > width-this.sq_size){
			this.snake_x = 0;
		}
	
		if(this.snake_y < 0){
			this.snake_y = height-this.sq_size;
		}
	
		if(this.snake_y > height-this.sq_size){
			this.snake_y = 0;
		}
	}
	
	
	this.show = function(aicol){
		
		fill(aicol);
		noStroke();
		for(var i = 0;i<this.snake_length;i++){
			rect(this.tail[i].x,this.tail[i].y,this.sq_size,this.sq_size);
		}
	
		fill(aicol);
		noStroke();
		rect(this.snake_x,this.snake_y,this.sq_size,this.sq_size);
	}
		
}