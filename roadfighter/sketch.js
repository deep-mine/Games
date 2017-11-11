var player;
var nav;
var enemy = [];
var powerup = [];
var speed = 10;
var road_speed = 10;
var rels = 0;
var framecount = 0;
var cols = ["red","blue","yellow"];
var score = 0;
var pass = 0;
var hit = false;


function setup(){
	var canvas = createCanvas(400,600);
	//var canvas = createCanvas(500,500);
	canvas.parent("canvas_p");

	player = new Player();
	enemy.push(new Enemy(random(cols)));
	nav = new Nav();
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

function endgame(result){

	framecount=-1;
	road_speed = 0;
	speed = 0;
	player.move(0);
	for (var i = enemy.length-1; i >= 0; i--) {
		enemy.splice(i,enemy.length);
	}
	background(51);
	textSize(32);
	noStroke();
	fill("pink");
	if(result == "lost"){
		text(score,width/2,height/2);
	}else{
		textSize(40);
		text("You Won!",width/2-20,height/2)
	}
}

function draw(){
	background(51);
	if(framecount>=0){
		framecount++;
	}

	fill(255);
	textSize(20);
	textFont("verdana");
	text(score,50,20);

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

	if(player.x==40 || player.x==width-player.width || hit){
		endgame("lost");
	}

	if(framecount%50 == 0){
		enemy.push(new Enemy(random(cols),pass));
		score++;

	}

	if(framecount%500 == 0){
		powerup.push(new PowerUp());
	}


	for (var i = 0; i < enemy.length; i++) {
		enemy[i].move();
		enemy[i].show();
		enemy[i].update();
	}

	for (var i = 0; i <enemy.length; i++) {
		if (enemy[i].hits(player)) {
			hit=true;
		}
	}


	for (var i = enemy.length-1; i >= 0; i--) {
		if (enemy[i].offscreen()) {
			enemy.splice(i, 1);
		}
	}

	for (var i = 0; i <powerup.length; i++) {
		powerup[i].show();
		powerup[i].update();
	}

	for (var i = powerup.length-1; i >= 0; i--) {
		if (powerup[i].hits(player)) {
			score += 5;
			powerup.splice(i,1);
			pass += 0.1;
		}
	}

	for (var i = powerup.length-1; i >= 0; i--) {
		if (powerup[i].offscreen()) {
			powerup.splice(i,1);
		}
	}

	if(framecount == 1000){
		framecount = 0;
	}

	if(score >= 300){
		endgame("won");
	}

	nav.move(score);
	nav.show();

	fill(255);
	rectMode(CENTER);
	rect(15,height/2,25,2)
	rectMode(CORNER);
	rect(30,0,10,height);

}
