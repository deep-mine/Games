function Bullets(x,y,angle){
    this.x = x;
    this.y = y;
    this.r = 2.5;
    this.speed = 3;
    this.xspeed = this.speed * sin(angle);
    this.yspeed = this.speed *-1*cos(angle);

    this.move = function(){
        this.x += this.xspeed*this.speed;
        this.y += this.yspeed*this.speed;
    }

    this.show = function(){
        stroke(255);
        noFill();
        ellipse(this.x,this.y,this.r*2,this.r*2);
    }

    this.hit = function(other){
        var d = dist(this.x, this.y, other.x, other.y);
        if(d<this.r+other.r+5){
            return true;
        }else{
            return false;
        }
    }
}
