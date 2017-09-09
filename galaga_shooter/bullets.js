function Bullet(x){
    this.x = x+10;
    this.y = height-60;
    this.w = 2;
    this.h = 5;

    var speed = 5;

    this.update = function(dir){
        this.y -= speed;
    }

    this.show = function(){
        noStroke();
        fill("yellow");
        rectMode(CORNER);
        rect(this.x,this.y,this.w,this.h);
    }

    this.hit = function(other){
        if(this.x<other.x+other.w && this.y<other.y+other.h && other.x<this.x+this.w && other.y<this.y+this.h){
            return true;
        }else{
            return false;
        }
    }
}
