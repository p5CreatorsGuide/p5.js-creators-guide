function Enemy(x,y,s,mass){

    this.x = x;
    this.y = y;
    this.s = s;
    this.mass = createVector(0,0);

    // this.dir = dir;
    // this.speed = speed;
    // this.speedX = speedX;
    // this.speedY = speedY;
    // this.pos = this.pos;
    // this.acc = this.acc;
    // this.vel = this.vel;


    this.pos = createVector(this.x, this.y);
    this.acc = createVector(0, 0);
    this.vel = createVector(0, 0);

    
    this.draw = function() {
        rectMode(CORNER);
        translate(this.pos.x,this.pos.y);
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
        // this.dir = atan((Flappy.pos.y - this.y) / (Flappy.pos.x - this.x));
        // this.speedX = cos(this.dir) * this.speed;
        // this.speedY = sin(this.dir) * this.speed;
        this.pos.add(this.vel);
        this.vel.add(this.acc);
        this.acc.add(this.mass);
        
        if (this.acc.x > 1){
            this.acc.x = 1;
        }
        if (this.acc.x < -1){
            this.acc.x = -1;
        }
        if (this.acc.y > 1){
            this.acc.y = 1;
        }
        if (this.acc.y < -1){
            this.acc.y = -1;
        }
        
        
        if(Flappy.pos.x >= this.x){
            // this.vel.x = -this.vel.x;
            this.mass.x = 0.01;
            if( dist(this.pos.x, this.pos.y, Flappy.pos.x, Flappy.pos.y) <= 100){
                this.vel.x = 0;
                this.mass.x = random(-0.1,-0.2);
            }
        }
        if(Flappy.pos.x <= this.x){
            // this.vel.x = -this.vel.x;
            this.mass.x = -0.01;
            if( dist(this.pos.x, this.pos.y, Flappy.pos.x, Flappy.pos.y) <= 100){
                this.vel.x = 0;
                this.mass.x = random(0.1,0.2);

            }
        }

    }
    this.boundaries = function() {
        if(this.pos.x > 3000){
            this.vel.x = 0;
            this.acc.x = 0;
            this.mass.x = random(-0.1, -0.2);
        }
    }
}

            
         
        
        // const Alien = function() {
            
            
            //     let alien = new Enemy(400,400,0.4,2,5,5,5);
            //     alien.draw();
            //     alien.update();
            //     // alien.moveTest();
// };

// 