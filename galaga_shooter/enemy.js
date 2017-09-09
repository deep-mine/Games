function Enemy(x,y){
    this.x = x;
    this.y = y;
    this.force = 0;
    this.w = 50;
    this.h = 20;

    var speed = 2 ;

    this.move = function(){
        if(this.x+this.w>width || this.x<0){
            speed *= -1;
            this.y += this.h+3;
        }
    }

    this.update = function(){
        this.x += speed;
    }

    this.show = function(){
        noStroke();
        fill("orange");
        rectMode(CORNER);
        rect(this.x,this.y,this.w,this.h);
    }

}
