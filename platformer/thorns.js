function Thorns(){
    this.x = width;
    this.y = height-60;
    this.speed = -2;
    
    this.move = function(){
        this.x += this.speed;
    }

    this.show = function(s){
        if(s==1){
            stroke(255);
            //fill("orange");
           line(this.x,this.y,this.x,height);
        }
    }
}
