function Enemy(x,y,s,dir,speed,speedX, speedY){

    this.x = x;
    this.y = y;
    this.s = s;
    this.dir = dir;
    this.speed = speed;
    this.speedX = speedX;
    this.speedY = speedY;

    this.draw = function() {
        translate(this.x,this.y);
        scale(this.s);
        noStroke();
        fill(30,255,10,40);
        ellipse(0,-15,200,200);
        fill(30,255,10,50);
        ellipse(0,-15,175,175);
        fill(30,255,10,75);
        ellipse(0,-15,150,150);
        //alien
        fill(0,255,0);
        //bezier(534,234,)
        rect(-16,-30,30,30,20);
        ellipse(0,-35,15,20);
        fill(0);
        ellipse(3,-40, 2,2);
        ellipse(-3,-40, 2,2);
        //ufo
        fill(0,255,255,100);
        ellipse(0,-25,50,75);
        fill(255,102,255);
        ellipse(0,0,150,30);
        resetMatrix();
    }

    this.update = function() {
        this.dir = atan((Flappy.pos.y-this.y) / (Flappy.pos.x - this.x));
        this.speedX = cos(this.dir) * this.speed;
        this.speedY = sin(this.dir) * this.speed;
        if(Flappy.pos.x >= this.x){
            this.x += this.speedX;
            this.y += this.speedY;
        }
        else{
            this.x -= this.speedX;
            this.y -= this.speedY;
        }
    }
}

const Alien = function() {
    let alien = new Enemy(500,500,1,0,5,0,0);
    alien.draw();
    alien.update();
};

