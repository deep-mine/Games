function Tank() {
    this.x = 300;
    this.y = 300;
    this.s = 20;
    this.speed = 5;
    this.xforce = 0;
    this.yforce = 0;
    this.health = 20;

    this.move = function(x, y) {
        this.xforce = x * this.speed;
        this.yforce = y * this.speed;
    }

    this.update = function() {
        this.x += this.xforce;
        this.y += this.yforce;

        this.x = max(min(this.x, width - this.s - 15), 15);
        this.y = max(min(this.y, height - this.s - 15), 15);
    }

    this.show = function(dir) {
        //stroke("darkgreen");
        fill(color(50, 150, 0));
        rect(this.x, this.y, this.s, this.s);
        //stroke("black");
        noStroke();
        fill(color(50, 100, 0));
        if (dir == "up") {
            rect(this.x + this.s / 4, this.y - this.s / 2, this.s / 2, this.s / 2);
            rect(this.x - this.s / 4, this.y - this.s / 4, this.s / 4, 3 * this.s / 2);
            rect(this.x + this.s, this.y - this.s / 4, this.s / 4, 3 * this.s / 2);
        }
        if (dir == "left") {
            rect(this.x - this.s / 2, this.y + this.s / 4, this.s / 2, this.s / 2);
            rect(this.x - this.s / 4, this.y - this.s / 4, 3 * this.s / 2, this.s / 4);
            rect(this.x - this.s / 4, this.y + this.s, 3 * this.s / 2, this.s / 4);
        }
        if (dir == "right") {
            rect(this.x + this.s, this.y + this.s / 4, this.s / 2, this.s / 2);
            rect(this.x - this.s / 4, this.y - this.s / 4, 3 * this.s / 2, this.s / 4);
            rect(this.x - this.s / 4, this.y + this.s, 3 * this.s / 2, this.s / 4);
        }
        if (dir == "down") {
            rect(this.x + this.s / 4, this.y + this.s, this.s / 2, this.s / 2);
            rect(this.x - this.s / 4, this.y - this.s / 4, this.s / 4, 3 * this.s / 2);
            rect(this.x + this.s, this.y - this.s / 4, this.s / 4, 3 * this.s / 2);
        }
    }
}
