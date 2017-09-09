function Player(){
	this.x = width/2;
	this.y = height-80;
	this.steer = 0;
	this.width = 30;
	this.height = 50;
	
	this.move = function(push){
		this.steer = push;
	}
	
	this.update = function(){
		this.x += this.steer;
		this.x = max(min(this.x,width-this.width),0);
	}
	
	this.show = function(){
		rectMode(CORNER);
		noStroke();
		fill(color(100,150,250)); //bluish
		/* fill(color(250,100,150)); */
		rect(this.x,this.y,this.width,this.height);
	}
}

