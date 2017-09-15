var canvas;
var player;
var platforms = [];
var thorns = [];
var canjump = true;
var jumped = 0;
var score = 0;
var a = 0;
var s = 1;
var framec = 0;
var gameend = false;
var w = 450;
var startzone = true;

function setup(){
	canvas = createCanvas(600,600);
	canvas.parent("canvas_p");

	player = new Player();

}

function keyReleased(){
	if(key != " "){
		player.move(0);
	}

}

function keyPressed(){
	if(keyCode == RIGHT_ARROW){
		player.move(1);
	}
	if(keyCode == LEFT_ARROW){
		player.move(-1);
	}
	if(key == " " && canjump && jumped<=2 &&!gameend && !startzone){
		player.up();
		jumped++;
		if(jumped==2){
			canjump = false;
		}
	}
}

function endgame(){
	s = 0;
	background(51);
	framec=1;
	noStroke();
	text(score,width/2,height/2);
	gameend = true;
}

function draw(){
	console.log("jumped: "+jumped + "canjump: "+canjump);
	background(51);
	if(!gameend){
		framec++;
	}

	player.show(s);
	player.update();

	fill("pink");
	rect(a,width/2+20,w,10);
	rect(a*2+300,width/2-80,5,100);
	rect(a*2+350,width/2-80,5,100);
	rect(a*2+280,width/2-80,90,5);
	a-=1;
	w-=1;
	if(player.y+player.h<700 && player.x<=a+w){
		player.y = width/2;
		startzone = true;
	}else{
		startzone = false;
	}


	if(framec%100 == 0){
		platforms.push(new Platform());
		score++;
	}

	if(framec%10 == 0){
		thorns.push(new Thorns());
	}

	for(var i = 0; i < platforms.length; i++){
		platforms[i].move();
		platforms[i].show(s);
	}



	for(var i = platforms.length-1 ; i >= 0; i--){
		if(platforms[i].x<-1*platforms[i].w){
			platforms.splice(i,1);
		}
	}

	for(var i = 0; i < thorns.length; i++){
		thorns[i].move();
		thorns[i].show(s);
	}



	for(var i = thorns.length-1 ; i >= 0; i--){
		if(thorns[i].x<0){
			thorns.splice(i,1);
		}
	}

	for(var i = 0; i < platforms.length; i++){

		if(player.standsOn(platforms[i])){
			canjump = true;
			jumped = 0;
			player.y = platforms[i].y-player.h;
			if(player.xspeed == 0){
                player.xspeed = platforms[i].speed;
            }
			console.log("standing on platform");


		}
		if(player.headHit(platforms[i])){
			player.y = platforms[i].y+platforms[i].h+7;
			player.gravity = 60;
			console.log("head hit on platform");
		}

		if(!player.headHit(platforms[i])){
			player.gravity = 0.6;
		}

		if(player.sideHit(platforms[i])){
			player.move(0);
			console.log("side hit on platform");
		}

		// if(player.hit(platforms[i])){
		// 	player.y = platforms[i].y-player.h;
        //     if(player.xspeed == 0){
        //         player.xspeed = platforms[i].speed;
        //     }
		// }
	}

	if(player.y+player.h>height-50){
		endgame();
	}

	fill(255);
	noStroke();
	textSize(30);
	if(s==1){
		text(score,40,40);
	}

}
