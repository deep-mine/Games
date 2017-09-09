var playerscore = 0;
var opponentscore = 0;
var enter_p = true;
var enter_o = true;
var winnerpos = 0;
var ballstart = 1;
var endscore = 10;
var gamefin = false;


function setup() {
    createCanvas(1080,600);
    player = new Paddle(20);
    opponent = new Paddle(width-40);
    ball = new Ball();
}

function keyReleased(){
    player.move(0);
    opponent.move(0);
}


function keyPressed(){
    if(key == 'Q'){
        player.move(-5);
    }
    if(key == 'A'){
        player.move(5);
    }

    if(key == 'P'){
        opponent.move(-5);
    }
    if(key == 'L'){
        opponent.move(5);
    }
}

function checkwin(){
    if(playerscore == endscore || opponentscore == endscore){
        gamefin = true;
        if(playerscore == endscore){
            winnerpos = width/4;
        }else{
            winnerpos = 3*width/4;
        }
    }


}

function displayWinner(){
    if(gamefin){
        fill(255);
        textSize(30);
        text("WINNER",winnerpos,120);
        ballstart = 0;
    }
}

function scoreUpdate(){
    if(ball.x > player.x){
        enter_p = true;
    }

    if(ball.x < opponent.x){
        enter_o = true;
    }

    if(ball.x < player.x && enter_p){
        opponentscore++;
        enter_p = false;
    }

    if(ball.x > opponent.x && enter_o){
        playerscore++;
        enter_o = false;
    }

    var playerscorepos_x = width/2-80;
    var opponentscorepos_x = width/2+40;
    var scoreposy = 50;

    fill(255);
    textSize(50);
    text(playerscore,playerscorepos_x,scoreposy);
    text(opponentscore,opponentscorepos_x,scoreposy);
}

function draw() {
    background(0);

    player.update();
    player.show();

    opponent.update();
    opponent.show();

    ball.update();
    ball.move(ballstart);
    ball.show();

    scoreUpdate();
    checkwin();
    displayWinner();

    var step = height/ 20;
    for(var i = 0 ; i < height ; i+=step){
        rectMode(CENTER);
        rect(width/2,i+step*0.25,5,step*0.5);
    }
	
	textSize(height/30);
	text("Q - - A",width/4,height-10);
	text("P - - L",3*width/4,height-10);
	text("10 to Win!",width/2-height/27,height-10);

}
