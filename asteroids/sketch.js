var canvas;
var ship;
var asteroids = [];
var bullets = [];
var speed = 3;
var f = 0;
var score = 0;
var gamefin = false;
var hit;

function setup(){
	canvas = createCanvas(1200,600);
	//canvas = createCanvas(400,400);
	//canvas = createCanvas(windowWidth,windowHeight);
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
		//save("canvas.png")
	}

	if(key == "S" && !gamefin){
		bullets.push(new Bullets(ship.x,ship.y,ship.angle));
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
	hit = false;

	ship.show(f);
	ship.move();
	ship.update();

	if(frameCount%100==0 && !gamefin){
		//asteroids.push(new Asteroids());
		score++;
	}
	var diff = 100;
	if(score < 10)diff = 100;
	if(score < 20 && score >= 10)diff = 60;
	if(score < 30 && score >= 20)diff = 40;
	if(score >= 30)diff = 30;

	if(frameCount%diff==0 && !gamefin){
		asteroids.push(new Asteroids(random(width),random(height),random(15,30)));
		//score++;
	}

	for(i=0;i<asteroids.length;i++){
		asteroids[i].move();
		asteroids[i].show();
		asteroids[i].update();
	}

	for(i=0;i<bullets.length;i++){
		bullets[i].move();
		bullets[i].show();
	}

	for(i=asteroids.length-1;i>=0;i--){
		if(asteroids.length > 20){
			asteroids.splice(i,floor(random(10,15)));
		}
	}

	for(i=0;i<bullets.length;i++){
		for(j=asteroids.length-1;j>= 0;j--){
			if(bullets[i].hit(asteroids[j])){
				if(!hit){
					asteroids.push(new Asteroids(asteroids[j].x,asteroids[j].y,asteroids[j].r*0.5));
					asteroids.push(new Asteroids(asteroids[j].x,asteroids[j].y,asteroids[j].r*0.5));
					asteroids.splice(j,1);
					hit = true;
				}
			}
		}
	}

	for(i=bullets.length-1;i>=0;i--){
		if(bullets[i].x > width || bullets[i].x < 0 ||
		bullets[i].y>height || bullets[i].y < 0){
			bullets.splice(i,i);
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
