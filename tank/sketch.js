var canvas;
var player;
var player_shots = [];
var enemies = [];
var thug_shots = [];
var framecount = 0;
var dir = "up";
var points = 0;

function setup() {
    canvas = createCanvas(600, 600);
    canvas.parent("canvas_p");
    player = new Tank();
}

function keyReleased() {
    if (key != " ") {
        player.move(0, 0);
    }
}

function keyPressed() {
    if (keyCode == LEFT_ARROW) {
        dir = "left";
        player.move(-1, 0);
    }
    if (keyCode == RIGHT_ARROW) {
        dir = "right";
        player.move(1, 0);
    }
    if (keyCode == UP_ARROW) {
        dir = "up";
        player.move(0, -1);
    }
    if (keyCode == DOWN_ARROW) {
        dir = "down";
        player.move(0, 1);
    }
    if (key == " ") {
        player_shots.push(new Bullet(player.x, player.y, dir, player.s));
    }
}

function endgame(){
	background(51);
	textSize(40);
	fill("pink");
	text(points,width/2,height/2);

	player_shots.splice(0,player_shots.length);
	thug_shots.splice(0,thug_shots.length);
	
	player.move(0,0);
	for(var i = 0;i<enemies.length;i++){
		enemies[i].speed = 0;
	}
	
	
}

function draw() {
    // background(color(150,200,100));
    // background("darkblue");
    //background(color(0,0,80));
    background(51);
    framecount++;

    //new enemies
    if (framecount % 100 == 0) {
        enemies.push(new Thug());

    }
    //bullets of enemies
    for (var i = 0; i < enemies.length; i++) {
        enemies[i].move();
        enemies[i].update();
        enemies[i].show();
        if (framecount % 100 == 0) {
            thug_shots.push(new ThugShot(enemies[i].x, enemies[i].y, player.x, player.y));
        }
    }
    //movement of enemy bullets
    for (var i = 0; i < thug_shots.length; i++) {
        thug_shots[i].move();
        thug_shots[i].update();
        thug_shots[i].show();
    }
    //player position update
    player.update();
    player.show(dir);
    //player bullets
    for (var i = 0; i < player_shots.length; i++) {
        player_shots[i].update();
        player_shots[i].show();
    }
    //player bullets out of bounds
    for (var i = player_shots.length - 1; i >= 0; i--) {
        if (player_shots[i].x < 0 || player_shots[i].x > width ||
            player_shots[i].y < 0 || player_shots[i].y > height) {
            player_shots.splice(i, 1);
        }

    }
    //player bullet hits enemy
    for (var i = 0; i < player_shots.length; i++) {
        for (var j = enemies.length - 1; j >= 0; j--) {
            if (player_shots[i].hit(enemies[j])) {
                enemies.splice(j, 1);
                points += 10;
            }
        }
    }
    //enemy bullet out of bounds
    for (var i = enemies.length - 1; i >= 0; i--) {
        if (enemies[i].x < 0 || enemies[i].x > width ||
            enemies[i].y < 0 || enemies[i].y > height) {
            enemies.splice(i, 1);
        }
    }
    //enemy bullet hits player
    for (var i = thug_shots.length - 1; i >= 0; i--) {
        if (thug_shots[i].hit(player) || thug_shots[i].endtime - thug_shots[i].starttime >= 400) {
            thug_shots.splice(i, 1);
            player.health -= 0.1;
        } else if (thug_shots[i].miss()) {
            thug_shots.splice(i, 1);
        }
    }

    fill(255);
	textSize(20);
    text("Health: "+round(player.health*100/20)+" %",20,20);
    text("Score: "+points,20,40);
	
	if(player.health < 0){
		endgame();
	}
}
