function Ball(){
    this.x = width/2;
    this.y = height/2;
    this.dia = 20;

    var dirchoices = [-1,1];
    var xdir = random(dirchoices);
    var ydir = random(dirchoices);
    var speed = 5;

    this.update = function(){
        if((this.x<0) || (this.y>player.y-this.dia/2 && this.y<player.y+player.h+this.dia/2 && this.x==player.x+player.w+this.dia/2)){
            xdir = 1;
        }
        if(this.x>width || (this.y>=opponent.y-this.dia/2 && this.y<opponent.y+opponent.h+this.dia/2 && this.x==opponent.x-this.dia/2)){
            xdir = -1;
        }

        if(this.y<this.dia/2){
            ydir = 1;
        }
        if(this.y>height-this.dia/2){
            ydir = -1;
        }

        if(this.y>player.y && this.y<player.y+player.h && this.x==player.x+player.w+this.dia/2){
            var impact = (this.y-player.y)-player.h/2;
            ydir = (1 + (1-impact/player.h)*(-1))*2;
        }

        if(this.y>=opponent.y && this.y<opponent.y+opponent.h && this.x==opponent.x-this.dia/2){
            var impact = (this.y-opponent.y)-opponent.h/2;
            ydir = (1 + (1-impact/opponent.h)*(-1))*2;
        }
    }

    this.move = function(vel){
        this.x += speed*xdir*vel;
        this.y += speed*ydir*vel;
    }

    this.show = function(){
        fill(255);
        ellipseMode(CENTER);
        ellipse(this.x,this.y,this.dia,this.dia);
    }

}
