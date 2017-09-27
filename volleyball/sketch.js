var canvas;
var player,opp,net;
var ball;
var speed = 5;

var pointsA = 0;
var pointsB = 0;

var pointsUp = true;

function setup(){
	canvas = createCanvas(1200,600);
	canvas.parent("canvas_p");

	player = new Player(3*width/4,1);
	opp = new Player(width/4,2);
	var options = [width/4,3*width/4];
	ball = new Ball(random(options));
	net = new Net();
}

function keyReleased(){
	if(keyCode != UP_ARROW){
		player.vel.set(0,player.vel.y);
	}
	if(keyCode == UP_ARROW && player.pos.y == height){
		player.vel.set(player.vel.x,0);
	}

	if(key != "W"){
		opp.vel.set(0,opp.vel.y);
	}
	if(key == "W" && opp.pos.y == height){
		opp.vel.set(opp.vel.x,0);
	}
}

function keyPressed(){
	if(keyCode == LEFT_ARROW){
		player.vel.set(-1*speed,player.vel.y);
	}
	if(keyCode == RIGHT_ARROW){
		player.vel.set(1*speed,player.vel.y);
	}
	if(keyCode == UP_ARROW && player.pos.y == height){
		var jump = createVector(0,-6);
		player.applyForce(jump);
	}

	if(key == "A"){
		opp.vel.set(-1*speed,opp.vel.y);
	}
	if(key == "D"){
		opp.vel.set(1*speed,opp.vel.y);
	}
	if(key == "W" && opp.pos.y == height){
		var jump = createVector(0,-6);
		opp.applyForce(jump);
	}
}

function draw(){
	background(51);

	var gravity = createVector(0,0.1);

	player.applyForce(gravity);
	player.show();
	player.update();

	opp.applyForce(gravity);
	opp.show();
	opp.update();

	ball.applyForce(gravity);
	ball.show();
	ball.update();

	//console.log(opp);

	if(ball.hit(player)){
		dy = ball.pos.y-player.pos.y;
		dx = ball.pos.x-player.pos.x;
		var angle = atan(dy/dx);
		if(ball.pos.x<player.pos.x){
			ball.vel.x = -1*cos(angle)*12;
			ball.vel.y = -1*sin(angle)*12;
		}else{
			ball.vel.x = cos(angle)*12;
			ball.vel.y = sin(angle)*12;
		}
	}

	if(ball.hit(opp)){
		dy = ball.pos.y-opp.pos.y;
		dx = ball.pos.x-opp.pos.x;
		var angle = atan(dy/dx);
		if(ball.pos.x<opp.pos.x){
			ball.vel.x = -1*cos(angle)*12;
			ball.vel.y = -1*sin(angle)*12;
		}else{
			ball.vel.x = cos(angle)*12;
			ball.vel.y = sin(angle)*12;
		}
	}
	net.show();
	
	if(ball.netHit(net)){
		console.log("net");
		ball.vel.x *= -1;
		if(ball.pos.y+ball.r>net.y){
			ball.vel.y *= -1;
		}
	}
	
	if(ball.pos.y+ball.r>=height && pointsUp){
		if(ball.pos.x>width/2){
			pointsA += 1;
			//pointsUp = false;
		}
		if(ball.pos.x<width/2){
			pointsB += 1;
			//pointsUp = false;
		}
		//pointsUp = true;
		//ball.remove();
	}
	
	fill(255);
	noStroke();
	textSize(20);
	textFont("Bulky Pixels Regular")
	text(pointsA,width/4,40);
	text(pointsB,3*width/4,40);
	
}
