function EnemyBullet(x,y){
    this.x = x+25;
    this.y = y+20;
    this.w = 2;
    this.h = 5;

    var speed = 5;

    this.update = function(dir){
        this.y += speed;
    }

    this.show = function(){
        noStroke();
        fill(color(random(150,201),random(125,150),random(150,201)));
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
