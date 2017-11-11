function Nav(){
    this.x = 10;
    this.y = height;
    this.w = 10;
    this.h = 30;

    this.move = function(score){
        this.y = map(score,0,300,height,0);
    }

    this.show = function(){
        noStroke();
        fill(color(100,150,250));
        rect(this.x,this.y-this.h,this.w,this.h,2);
    }

}
