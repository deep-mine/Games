function Ship(){
	this.x = width/2;
	this.y = height/2;
	this.xspeed = 0;
	this.yspeed = 0;
	this.speed = 0;

	this.angle = 0;
	this.anglespeed = 0;

	this.update = function(){

		if(this.x>width)this.x=0;
		if(this.x<0)this.x=width;

		if(this.y>height)this.y=0;
		if(this.y<0)this.y=height;

	}

	this.move = function(f){

		if(f!=-1){
			this.angle += this.anglespeed;
		}
	}

	this.show = function(f){

		if (f != -1){
			push();

			translate(this.x,this.y);
			rotate(this.angle);

			this.x += this.xspeed;
			this.y += this.yspeed;

			fill(255);
			noStroke();
			triangle(0,0,-15,30,15,30);

			if(f==1){
				stroke("yellow");
				for(var i = 0;i<30;i++){
					line(-15+i,30,-15+i,30+random(15));
				}
			}

			fill("orange");
			noStroke();
			triangle(0,0,-5,10,5,10);

			pop();
		}
	}
}
