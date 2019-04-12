new p5();

let Backdrop = {
    x: 1500,
    y: 0,
    show: function () {
        translate(this.x, this.y);
        // background(25, 175, 255);
        // fill(20, 155, 155);
        // rect(-300, 500, 2500, 150);

        for (var t = 0; t < trees.length; t ++) {
            trees[t].draw();
            trees[t].pan();
        }

        resetMatrix();
    },
    pan: function () {
        this.x -= 0.2;

        if (this.x < 1000) {
            this.x = 1500;
        }
    },
};

const backdrop = function () {
    Backdrop.show();
    Backdrop.pan();
};