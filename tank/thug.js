function Thug() {
    var spawn_areas = [
        [0, 50],
        [0, 550],
        [50, 0],
        [550, 0],
        [600, 50],
        [600, 550],
        [550, 600],
        [0, 550]
    ];
    var spawn = random(spawn_areas);
    var start_x = spawn[0];
    var start_y = spawn[1];
    var vel_x = 0;
    var vel_y = 0;
    this.x = start_x;
    this.y = start_y;
    this.r = 15;
	this.speed = 1;


    this.move = function() {
        if (start_x == 0) {
            vel_x = 2;
            vel_y = 0;
        } else if (start_x == 600) {
            vel_x = -2;
            vel_y = 0;
        } else if (start_y == 0) {
            vel_x = 0;
            vel_y = 2;
        } else if (start_y == 600) {
            vel_x = 0;
            vel_y = -2;
        }
    }

    this.update = function() {
        this.x += vel_x*this.speed;
        this.y += vel_y*this.speed;
    }

    this.show = function() {
        fill("yellow");
        ellipse(this.x, this.y, 2 * this.r, 2 * this.r);
    }
}
