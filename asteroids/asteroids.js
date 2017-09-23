function Asteroids(x,y,r){
	this.x = x  ;
	this.y = y ;
	if(r>2){
		this.r = r ;
	}
	
	this.speed = 3;
	this.xspeed = random(-1,1);
	this.yspeed = random(-1,1);
	this.vertices = floor(random(5,15));
	this.offset = [];

	for(var i = 0; i <this.vertices ; i++){
		this.offset[i] = random(5,15);
	}


	this.move = function(f){
		if(f!=-1){
			this.x += this.xspeed*this.speed;
			this.y += this.yspeed*this.speed;
		}
	}

	this.update = function(f){
		if(f!=-1){
			if(this.x<-this.r){
				this.x = width;
			}
			if(this.x>width+this.r){
				this.x = 0;
			}
			if(this.y<-this.r){
				this.y = height;
			}
			if(this.y>height+this.r){
				this.y = 0;
			}
		}
	}


	this.show = function(f){
		if(f!=-1){
			fill(51);
			stroke(255);
			push();
			beginShape();
			translate(this.x,this.y);
			for(var i = 0; i < this.vertices ; i++){
				var angle = map(i, 0,this.vertices, 0,2*PI);
				var x = (this.r +this.offset[i])* cos(angle);
				var y = (this.r +this.offset[i])* sin(angle);
				vertex(x,y);
			}
			endShape(CLOSE);
			pop();
			//ellipse(this.x,this.y,2*this.r,2*this.r);
		}
	}

	this.hit = function(other){
		var d = dist(this.x,this.y,other.x,other.y);
		if(d<this.r+other.r){
			return true;
		}else{
			return false;
		}
	}
}
