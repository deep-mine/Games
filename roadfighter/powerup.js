function PowerUp(){
	this.width = 30;
	this.height = 50;
	this.x = random(this.width,width-this.width);
	this.y = -this.height;
	this.speed = 10;
			
	this.update = function(){
		this.y += this.speed;
	}
	
	this.show = function(){
		rectMode(CORNER);
		noStroke();
		fill(color(167,255,30));
		rect(this.x,this.y,this.width,this.height);
		fill(0);
		textSize(this.height/3);
		text("+5",this.x+this.width/8,this.y+this.height/2);
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

