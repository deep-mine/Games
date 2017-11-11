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
		this.x = max(min(this.x,width-this.width),40);
	}

	this.show = function(){
		rectMode(CORNER);

		/* fill(color(250,100,150)); */
		push();
		translate(this.x,this.y)
		noStroke();

		//lights
		angleMode(DEGREES);
		fill(color(200,200,0,100))
		arc(15,20,100,100,-135,-45)

		//tyres
		fill(10)
		ellipse(0,5,5,10);
		ellipse(30,5,5,10);
		ellipse(0,45,5,10);
		ellipse(30,45,5,10);

		//body
		fill(color(100,150,250)); //bluish
		rect(0,0,this.width,this.height,5);

		//top
		fill(10);
		rect(1,this.height/3,this.width-2,this.height/2,5);


		pop();
	}
}
