function Enemy(col,pass){
	this.width = 30;
	this.height = 50;
	this.x = random(this.width+80,width-this.width);
	this.y = -this.height;
	this.col = col;

	var dirs = [-1,1];
	this.dir = random(dirs);
	this.start = this.x;
	this.end = 0;

	if(this.col == "red"){
		this.speed = 8;
	}
	if(this.col == "blue"){
		this.speed = 8+pass;
	}
	if(this.col == "yellow"){
		this.speed = 8+pass;
	}

	this.move = function(){
		if(col=="blue"){
			if(abs(this.x-this.start)<70 && this.y > height/4){
				this.x+=this.dir*3;
			}
		}

		if(col=="red"){
			if(/* abs(this.x-this.start)<70 &&  */this.y > height/30 && this.y < height/3){
				this.x+=this.dir*3;
			}
			if(/*abs( this.x-this.start)<70 &&  */this.y > height/3 && this.y < height-this.height*3){
				this.x+=this.dir*-3;
			}
		}
	}

	this.update = function(){
		this.x = max(min(this.x,width-this.width),40);
		this.y += this.speed;
	}

	this.show = function(){
		rectMode(CORNER);
		noStroke();
		// fill(col);
		// rect(this.x,this.y,this.width,this.height,5);

		push();
		translate(this.x,this.y)
		noStroke();

		//lights
		angleMode(DEGREES);
		fill(color(200,200,0,100))
		arc(15,20,80,80,-135,-45)

		//tyres
		fill(10)
		ellipse(0,5,5,10);
		ellipse(30,5,5,10);
		ellipse(0,45,5,10);
		ellipse(30,45,5,10);

		//body
		fill(col);
		rect(0,0,this.width,this.height,5);

		//top
		fill(10);
		rect(1,this.height/3,this.width-2,this.height/2,5);


		pop();
	}

	this.offscreen = function() {
    if (this.y > height) {
      return true;
    } else {
      return false;
    }
  }

  this.hits = function(player){
	  if(this.x<player.x+player.width && this.y<player.y+player.height && player.x<this.x+this.width && player.y<this.y+this.height){
		  return true;
	  }else{
		  return false;
	  }
  }
}
