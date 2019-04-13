

function flappyProjectile (x,y,dir,speed) {
   
    // initializes variables for the projectile class
   
    this.x = x;
    this.y = y;
    this.dir = dir;
    this.speed = speed;

    let pos = createVector(this.x,this.y);

    this.step = function () {
        // this is the method which moves the bullets
        // it uses the exact same logic as how the player moves
        // since velocity is a vector the sine and cosine find the
        // vertical and horizontal proportions of the current angle
        // and they are multiplied by the speed to find the respective
        // amounts of x and y velocity
       
        // this.x += cos(this.dir) * this.speed;
        // this.y += sin(this.dir) * this.speed;
        // pos.add(Flappy.face*this.speed);
        this.x +=this.speed;
        // this.y +=  this.speed;
    };
    this.draw = function () {
       
        // draws bullets to screen
        noStroke();
        fill(255, 50, 50,50);
        ellipse(this.x, this.y, 15, 15);
        fill(255, 152, 153,100);
        ellipse(this.x, this.y, 7, 7);
        fill(230,250,40,250);
        ellipse(this.x, this.y, 4, 4);
    };
}



let projectiles = [
    new flappyProjectile()
];