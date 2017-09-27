function Player(x,p){
    this.pos = createVector(x, height);
	this.vel = createVector(0, 0);
	this.acc = createVector(0, 0);
	this.r = 75;
	
    this.applyForce = function(force) {
		this.vel.add(force);
	}

    this.update = function(){
        this.vel.add(this.acc);
		this.pos.add(this.vel);
		this.acc.set(0, 0);
		
		this.pos.y = max(min(this.pos.y,height),this.r);
		
		if(p==1){
			this.pos.x = max(min(this.pos.x,width-this.r),width/2+this.r);
		}
		else{
			this.pos.x = max(min(this.pos.x,width/2-this.r-30),this.r);	
		}
    }

    this.show = function(){
        push();
        angleMode(DEGREES);
        noStroke();
		if(p==1){
			fill("orange");
		}else{
			fill(color(255,100,200));
		}
        translate(this.pos.x,this.pos.y);
        arc(0,0,this.r*2,this.r*2,180,360);
        pop();
    }
}
