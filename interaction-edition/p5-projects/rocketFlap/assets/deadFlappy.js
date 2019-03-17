class deadFlappy {
    constructor() {
        this.position = createVector(Flappy.pos.x, Flappy.pos.y);
        this.velocity = p5.Vector.random2D();
        this.velocity.setMag(random(0.5,2.5));
        this.acceleration = createVector();
    }

    update() {
        this.position.add(this.velocity);
        this.velocity.add(this.acceleration);
    }

    show() {
        fill(255,150,0);
        ellipse(this.position.x,this.position.y,20,20);
        fill(255,150,0);
        ellipse(this.position.x,this.position.y,20,20);
    }
}