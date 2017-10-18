function ThugShot(x1, y1, x2, y2) {
    this.x = x1;
    this.y = y1;
    this.w = 2;
    this.h = 5;
    this.aim_x = x2;
    this.aim_y = y2;
    this.d = dist(x1, y1, x2, y2);
    var speed = 5;
    angleMode(DEGREES);
    var angle = (atan((this.aim_y - this.y) / (this.aim_x - this.x)));
    this.xspeed = 5;
    this.yspeed = 5;
    this.starttime = 0;
    this.endtime = 0;

    this.move = function() {
        this.xspeed = speed * cos(angle);
        this.yspeed = speed * sin(angle);
    }

    this.update = function() {
        if (this.x > this.aim_x) {
            this.xspeed *= -1;
            this.yspeed *= -1;
        }
        this.endtime += 1;
        this.x += this.xspeed;
        this.y += this.yspeed;
    }

    this.show = function() {
        noStroke();
        fill("orange");
        rect(this.x, this.y, this.w, this.h);

    }

    this.miss = function() {
        if (abs(this.xspeed) < 0.9 && abs(this.yspeed) < 0.9) {
            return true;
        } else {
            return false;
        }
    }

    this.hit = function(other) {
        var d = dist(other.x + other.s / 2, other.y + other.s / 2, this.x, this.y);
        if (d <= 20) {
            return true;
        } else {
            return false;
        }
    }
}
