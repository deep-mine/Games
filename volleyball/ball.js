function Ball(x,y){
    this.pos = createVector(x, 200);
	this.vel = createVector(0, 0);
	this.acc = createVector(0, 0);
	this.r = 25;

    this.applyForce = function(force) {
		this.acc.add(force);
	}

    this.update = function(){
        this.vel.add(this.acc);
		this.pos.add(this.vel);
		this.acc.set(0, 0);

		if(this.pos.x<this.r || this.pos.x>width-this.r){
			this.vel.x *= -1;
		}
		if(this.pos.y<this.r || this.pos.y>height-this.r){
			this.vel.y *= -1;
			//this.pos.y = 0;
		}
    }

    this.show = function(){
        push();
        angleMode(DEGREES);
        noStroke();
        fill("yellow");
        translate(this.pos.x,this.pos.y);
        arc(0,0,this.r*2,this.r*2,0,360);
        pop();
    }

    this.hit = function(other){
		var d = dist(this.pos.x,this.pos.y,other.pos.x,other.pos.y);
		if(d<this.r+other.r && other.pos.y>=this.pos.y){
			return true;
		}else{
			return false;
		}
	}

	this.netHit = function(net){
		var dx = max(min(this.pos.x,net.x+net.w),net.x);
		var dy = max(min(this.pos.y,net.y+net.h),net.y);
		
		var d = dist(dx,dy,this.pos.x,this.pos.y);
		
		return(d<this.r);
	}

}

