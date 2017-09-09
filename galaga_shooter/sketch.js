var canvas;
var player;
var enemy;
var enemies = [];
var bullets = [];
var enemy_bullets = [];
var fire_rate = 0;

function setup(){
	canvas = createCanvas(600,600);
	canvas.parent("canvas_p");

	player = new Player();
	//enemy = new Enemy(0);

	for(var i = 1 ; i<=6; i++){
		enemies.push(new Enemy(i*60,30));
	}
	for(var i = 1 ; i<=4; i++){
		enemies.push(new Enemy((i+1)*60,90));
	}
	for(var i = 1 ; i<=2; i++){
		enemies.push(new Enemy((i+2)*60,150));
	}
}

function keyReleased(){
	if(key != ' '){
		player.move(0);
	}
}

function keyPressed() {
	if(keyCode === LEFT_ARROW){
		player.move(-1);
	}
	if(keyCode === RIGHT_ARROW){
		player.move(1);
	}
	//make player bullets
	if(key === ' '){
		bullets.push(new Bullet(player.x));
	}
}

// function endGame(){
// 	if(enemies[enemies.length-1].y>height-50){
// 		background("red");
// 	}
// }

function draw(){
	background(51);
	fire_rate++;
//spawn enemies and make enemy bullets
	for(var i = 0 ; i<enemies.length ; i++){
		enemies[i].move();
		enemies[i].update();
		enemies[i].show();
		if(fire_rate%100==80){
			enemy_bullets.push(new EnemyBullet(enemies[i].x,enemies[i].y));
		}
	}
//spawn enemy bullets
	for(var i = 0 ; i<enemy_bullets.length ; i++){
		enemy_bullets[i].update();
		enemy_bullets[i].show();
	}

//spawn player bullets
	for(var i = 0 ; i<bullets.length ; i++){
		bullets[i].update();
		bullets[i].show();
	}
//splice player bullets when out of bounds
	for(var i = bullets.length-1 ; i>=0 ; i--){
		if(bullets[i].y < 0){
			bullets.splice(i,1);
		}
	}
//splice enemy bullets when out of bounds
	for(var i = enemy_bullets.length-1 ; i>=0 ; i--){
		if(enemy_bullets[i].y > height){
			enemy_bullets.splice(i,1);
		}
	}
//kill enemies when hit and vanish bullet if not the last one
	for(var i = 0 ; i<bullets.length ; i++){
		for(var j = enemies.length-1 ; j>=0 ; j--){
			if(bullets[i].hit(enemies[j])){
				enemies.splice(j,1);
				if(i!=bullets.length-1){
					bullets.splice(i,1);
				}
			}
		}
	}
//bullet vanish on hitting an enemy(not working)
	// for(var i = 0 ; i<enemies.length ; i++){
	// 	for(var j = bullets.length-1 ; j>=0 ; j--){
	// 		if(bullets[j].hit(enemies[i])){
	// 			bullets.splice(i+1,1);
	// 		}
	// 	}
	// }
	//
	// for(var i = bullets.length-1 ; i>=0 ; i--){
	// 	for(var j = 0 ; j<enemies.length ; j++){
	// 		if(bullets[i].hit(enemies[j])){
	// 			bullets.splice(i,1);
	// 			console.log("ehit");
	// 		}
	// 	}
	// }

//enemy bullet hits player
	for(var i = 0 ; i<enemy_bullets.length ; i++){
		if(enemy_bullets[i].hit(player)){
			//console.log("Hit");
			}
		}
	player.update();
	player.show();
}
