function Paddle(x) {
    this.x = x;
    this.y = height/2;
    this.w = 10;
    this.h = 70;
    this.speed = 1;
    this.dy = 0;

    this.update = function(){
        this.y += this.speed*this.dy;
        this.y = max(min(this.y,height-this.h),0);
    }

    this.move = function(dir) {
        this.dy = dir;
    }

    this.show = function(){
        stroke(255);
        fill(255);
        rectMode(CORNER);
        rect(this.x,this.y,this.w,this.h);
    }
}
