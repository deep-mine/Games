function Snake(fx,fy){

	this.snake_x = 100;
	this.snake_y = 100;
	this.x_speed = 0;
	this.y_speed = 0;
	this.snake_speed = 20;
	this.sq_size = 20;

	this.tail = [];
	this.snake_length = 0;
	
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
	
	
	this.show = function(){
		
		fill(255);
		noStroke();
		for(var i = 0;i<this.snake_length;i++){
			rect(this.tail[i].x,this.tail[i].y,this.sq_size,this.sq_size);
		}
	
		fill(255);
		noStroke();
		rect(this.snake_x,this.snake_y,this.sq_size,this.sq_size);
	}
		
}