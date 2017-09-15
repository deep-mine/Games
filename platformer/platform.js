function Platform(){
    this.x = width+50;
    this.y = random(50,height-150);
    this.speed = -2;
    this.w = random(100,200);
    this.h = random(20,40);


    this.move = function(){
        this.x += this.speed;
    }

    this.show = function(s){
        if(s==1){
            noStroke();
            fill("orange");
            rect(this.x,this.y,this.w,this.h);
        }
    }
}
