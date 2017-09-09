function Player(){
    this.x = width/2;
    this.y = height-60;
    this.force = 0;
    this.w = 20;
    this.h = 50;

    var speed = 5;

    this.move = function(dir){
        this.force = dir*speed;
    }

    this.update = function(){
        this.x += this.force;
        this.x = max(min(this.x,width-this.w/2),this.w/2);
    }

    this.show = function(){
        noStroke();
        fill(255);
        rectMode(CORNER);
        rect(this.x,this.y,this.w,this.h);
    }
}
