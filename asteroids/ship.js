function Ship(){
	this.x = width/2;
	this.y = height/2;
	this.r = 15;
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
		
		//this.xspeed *= 0.99;
		//this.yspeed *= 0.99;

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

			noFill();
			stroke(255);
			//triangle(0,0,-15,30,15,30);
			triangle(0,-1*this.r, -1*this.r,this.r, this.r,this.r)

			if(f==1){
				stroke("yellow");
				for(var i = 0;i<2*this.r;i++){
					line(-1*this.r+i, this.r, -1*this.r+i, this.r+random(15));
				}
			}

			/* fill("orange");
			noStroke();
			triangle(0,0,-5,10,5,10);
 */
			pop();
		}
	}
}
