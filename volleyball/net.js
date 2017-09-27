function Net(){
	this.w = 30;
	this.h = 150;
	this.x = width/2-this.w;
	this.y = height-this.h;
	
	this.show = function(){
		noStroke();
		fill(255);
		rect(this.x,this.y,this.w,this.h);
	}
}