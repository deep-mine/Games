function Asteroids(){
	this.x = random(width)|| random(width,2*width);
	this.y = random(height) || random(height,2*height);
	this.r = random(15,30);
	this.xspeed = random(-1,1);
	this.yspeed = random(-1,1);


	this.move = function(f){
		if(f!=-1){
			this.x += this.xspeed;
			this.y += this.yspeed;
		}
	}

	this.show = function(f){
		if(f!=-1){
			fill(51);
			stroke(255);
			ellipse(this.x,this.y,2*this.r,2*this.r);
		}
	}

	this.hit = function(other){
		var d = dist(this.x,this.y,other.x,other.y);
		if(d<this.r){
			return true;
		}else{
			return false;
		}
	}
}
