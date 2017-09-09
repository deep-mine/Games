var player;
var enemy = [];
var powerup = [];
var speed = 10;
var road_speed = 10;
var rels = 0;
var framecount = 0;
var cols = ["red","blue","yellow"];
var score = 0;


function setup(){
	var canvas = createCanvas(400,600);
	canvas.parent("canvas_p");
	
	player = new Player();
	enemy.push(new Enemy(random(cols)));
	//powerup.push(new PowerUp());
}

function keyReleased(){
	player.move(0);
}

function keyPressed(){
	if(keyCode == LEFT_ARROW){
		player.move(-1*speed);
	}
	if(keyCode == RIGHT_ARROW){
		player.move(speed);
	}
}

function draw(){
	background(51);
	framecount++;
	
	fill(255);
	textSize(20);
	textFont("verdana");
	text(score,20,20);
	
	var step = height/ 20;
    for(var i = 0 ; i <=height ; i+=step){
        if(rels == height/20){
			rels = 0;
		}
		rectMode(CENTER);
		noStroke();
		fill(255);
        rect(width/2,i+step*0.25+rels-step*0.5,5,step*0.5);
    }
	rels += road_speed;
	
	player.update();
	player.show();
	
	if(framecount%50 == 0){
		enemy.push(new Enemy(random(cols)));
		score++;
		
	}
	
	if(framecount%500 == 0){
		powerup.push(new PowerUp());
		/* console.log(""); */
	}
	
	
	for (var i = enemy.length-1; i >= 0; i--) {
		enemy[i].move();
		enemy[i].show();
		enemy[i].update();
		if (enemy[i].hits(player)) {
			road_speed = 0;
			speed = 0;
			for (var i = enemy.length-1; i >= 0; i--) {
				enemy[i].speed = 0;
			}
			console.log("HIT");
		} 
		if (enemy[i].offscreen()) {
			enemy.splice(i, 1);
		}
	}
	
	for (var i = powerup.length-1; i >= 0; i--) {
		powerup[i].show();
		powerup[i].update();
		if (powerup[i].hits(player)) {
			score += 5;
			powerup.splice(i,1);
		} 
		/* if (powerup[i].offscreen()) {
			powerup.splice(i,1);
		} */
	}
	
	if(framecount == 1000){
		framecount = 0;
	}
	
}

