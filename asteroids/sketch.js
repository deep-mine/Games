var canvas;
var ship;
var asteroids = [];
var speed = 2.5;
var f = 0;
var score = 0;
var gamefin = false;

function setup(){
	canvas = createCanvas(600,600);
	canvas.parent("canvas_p");

	ship = new Ship();
}

function keyReleased() {
	if(key == " " && !gamefin){
		f = 0;
	}
	if(keyCode == LEFT_ARROW || keyCode == RIGHT_ARROW && !gamefin){
		ship.anglespeed = 0;
	}

}

function keyPressed(){
	if(keyCode == LEFT_ARROW && !gamefin){
		ship.anglespeed -= 0.1;
		f = 0;
	}

	if(keyCode == RIGHT_ARROW && !gamefin){
		ship.anglespeed += 0.1;
		f = 0;
	}

	if(key == " " && !gamefin){
		ship.xspeed = sin(ship.angle)*speed;
		ship.yspeed = -1*cos(ship.angle)*speed;
		f = 1;
	}
}

function endgame(){
	f = -1;
	ship.show(f);

	for(i=asteroids.length-1;i>=0;i--){
		asteroids.splice(i,asteroids.length);
	}
	
	fill(255);
	noStroke();
	textSize(60);
	textFont("Bulky Pixels Regular")
	text(score,width/2,height/2);


}

function draw(){
	background(51);

	ship.show(f);
	ship.move();
	ship.update();

	if(frameCount%100==0 && !gamefin){
		asteroids.push(new Asteroids());
		score++;
	}

	for(i=0;i<asteroids.length;i++){
		asteroids[i].move();
		asteroids[i].show();
	}

	for(i=asteroids.length-1;i>=0;i--){
		if(asteroids[i].x<0 || asteroids[i].x>width ||
		asteroids[i].y<0 || asteroids[i].y>height){
			asteroids.splice(i,1);
		}
	}

	for(i=0;i<asteroids.length;i++){
		if(asteroids[i].hit(ship)){
			gamefin = true;

		}
	}

	if(gamefin){
		endgame();
	}
	
	if(!gamefin){
		fill(255);
		noStroke();
		textSize(20);
		textFont("Bulky Pixels Regular")
		text(score,40,40);
	}

}