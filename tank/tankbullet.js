function Bullet(x, y, dir, s) {
    this.x = x;
    this.y = y;
    this.w = 2;
    this.h = 5;

    var speed = 15;
    var dir = dir;

    this.update = function() {
        if (dir == "up") {
            this.y -= speed;
        }
        if (dir == "left") {
            this.x -= speed;
        }
        if (dir == "right") {
            this.x += speed;
        }
        if (dir == "down") {
            this.y += speed;
        }
    }

    this.show = function() {
        noStroke();
        fill("orange");
        if (dir == "up") {
            rect(this.x + s / 2, this.y - s / 2, this.w, this.h);
        }
        if (dir == "left") {
            rect(this.x - s / 2, this.y + s / 2, this.h, this.w);
        }
        if (dir == "right") {
            rect(this.x + 3 * s / 2, this.y + s / 2, this.h, this.w);
        }
        if (dir == "down") {
            rect(this.x + s / 2, this.y + 3 * s / 2, this.w, this.h);
        }
    }

    this.hit = function(other) {
        var d = dist(other.x, other.y, this.x, this.y);
        if (d <= other.r+10) {
            return true;
        } else {
            return false;
        }
    }
}
