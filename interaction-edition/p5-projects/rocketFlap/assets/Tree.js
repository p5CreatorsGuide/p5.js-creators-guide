new p5();

function Tree(x, y, sze) {
    this.x = x;
    this.y = y;
    this.sze = sze;
    var xSpeed = 5;

    this.draw = function () {
        rectMode(CORNER);
        noStroke();
        fill(153, 121, 70);
        rect(this.x, this.y, this.sze / 2, this.sze * 1.5);
        fill(180, 235, 180);
        triangle(this.x - this.sze / 2, this.y, this.x + this.sze / 4, this.y - this.sze * 2, this.x + this.sze, this.y);
        rectMode(CENTER);
    };
    this.pan = function () {
        this.x -= 2;
    }
}