function Player(){
    this.x = 60;
    this.y = width/2;
    this.xspeed = 0;
    this.yspeed = 0;
    this.gravity = 0.6;
    this.lift = -40;
    var speed = 3;
    this.w = 10;
    this.h = 20;


    this.move = function(dir){
        this.xspeed = dir*speed;
    }

    this.up = function(){
        this.yspeed += this.lift;
    }

    this.update = function(){
        this.x += this.xspeed;

        this.yspeed += this.gravity;
        this.yspeed *= 0.9;
        this.y += this.yspeed;

        this.x = max(min(this.x,width-this.w),0);
        this.y = max(min(this.y,height-this.h),0);
    }

    this.show = function(s){
        if(s == 1){
            noStroke();
            fill(255);
            rect(this.x,this.y,this.w,this.h) ;
        }
    }

    this.hit = function(other){
        if(this.x<other.x+other.w && this.y<other.y+other.h && other.x<this.x+this.w &&
        other.y<this.y+this.h){
             return true;
        }else{
            return false;
        }
    }

    this.standsOn = function(other){
        if(this.x+this.w>other.x && this.x<other.x+other.w && this.y+this.h>=other.y-6 &&
            this.y+this.h<=other.y+6){
            return true;
        }else{
            return false;
        }
    }

    this.headHit = function(other){
        if(this.x>other.x && this.x<other.x+other.w && this.y>=other.y+other.h-6 &&
            this.y<=other.y+other.h+6){
            return true;
        }else{
            return false;
        }
    }

    this.sideHit = function(other){
        if(this.x+this.w>other.x-3 && this.x+this.w<other.x+3 ||
            this.x>other.x+other.w-3 && this.x<other.x+other.w+3 &&
            this.y<other.y+other.h && this.y+this.h>other.y){
            return true;
        }else{
            return false;
        }
    }

}
