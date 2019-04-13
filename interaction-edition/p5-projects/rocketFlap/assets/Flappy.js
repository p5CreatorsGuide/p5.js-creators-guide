new p5();

let Flappy = {
    pos: createVector(150, 50),
    vel: createVector(0, 0),
    acc: createVector(0, 0),
    mass: createVector(0, 1),
    face: 45,
    asc: false,
    timer: 0,
    sze: 0.5,
    shield: 100,
    projectiles: [],
    ammoTimer: 0,
    death: false,
    deathParticles: [],
    
    
    show: function () {
        if(this.shield >= 1){
        
        this.timer = this.timer+ 0.1;
        translate(this.pos.x, this.pos.y);
        scale(this.sze);
        rotate(this.face);
        fill(230,150,0,250);
        triangle(15,25+this.timer/500,50,25+this.timer/500,32.5,random(25,55)+this.timer/50);
        
        noStroke();
        fill(0, 102, 153);
        triangle(0, 0, 0 + 30, 0, 0 + 15, 0 + 30);
        fill(130, 150, 153);
        triangle(0 + 30, 0 - 30, 0 + 15, 0 + 15, 0 + 50, 0 + 15);
        fill(0, 102, 153);
        triangle(0 + 30, 0, 0 + 60, 0, 0 + 45, 0 + 30);
        resetMatrix();

        } // resetMatrix();
    },
    update: function () {
        this.pos.add(this.vel);
        this.vel.add(this.acc);
        this.acc.add(this.mass);

        if(this.acc.y > 0.05){
            this.acc.y = 0.05;
        }
        if(this.vel.y > 20){
            this.vel.y =20;
        }
        if(this.acc.y < 0.05){
            this.acc.y = 0.05;
        }
        if(keyIsDown(87)){
            this.acc.y += -0.2;
            this.face= this.face - 1+this.acc.y/2;
        }
        if(keyIsDown(83)){
            this.acc.y += 0.2;
            this.face= this.face + 1+this.acc.y/2;
        }

        if(this.face < 30){
            this.face = 30;
        }
        if(this.face > 120){
            this.face = 120;
        }
        
        // if(this.asc === false){
        //     this.acc.add(this.mass);
        // }
        // // this.acc.rotate(this.face*random(10));
        // if (keyIsPressed || mouseIsPressed) {
        //     this.asc = true;
        // } else {
        //     this.asc = false;
        // }

        // if (this.asc === true) {
        //     this.acc.y = -0.25;
        // }
        
      
    },
    boundaries: function (){
        
           if(this.pos.y > height){
                this.shield = this.shield - 1;
               this.vel.y = random(-3,-7);
               this.acc.y = 0;
               this.face = random (20, 120);
               this.face = this.face-(random(-5, 10));
           }
   
           if(this.pos.y < 0){
            this.shield = this.shield - 1;
               this.vel.y = random(3,7);
               this.acc.y = 0;
   
               this.face = random (20,120);
               this.face = this.face-(random(-5, 10));
           }
   
           if(Flappy.pos.x<0){
            // this.shield = this.shield - 1;
               Flappy.pos.x<150;            
          }
          if(Flappy.pos.x<150){
           Flappy.pos.x +=2.5;
          }
          if(Flappy.pos.x>150){
              Flappy.pos.x = 150;
          }
       },

    applyForce: function (force) {
        let forceCopy = force;
        this.mass.div(forceCopy);

        // this.acc.set(0,0);
    },
    shoot: function(){
       
        for(var i = 0; i< this.projectiles.length;i++) {
            
            // this loops through every projectile in current list of
            // projectiles and draws them and moves them with their specific
            // speeds
            
            this.projectiles[i].draw();
            this.projectiles[i].step();
    
            
        }
        // let cooldownTimer = 0;
        // let cooldownTimerToggle = false;
        // if(cooldownTimer < 1 && keyIsDown(32)){
        //     cooldownTimerToggle = true;
        // }
        // if(cooldownTimerToggle === true){
        //     if(cooldownTimer<1){
        //         this.projectiles.push(new flappyProjectile(this.pos.x,this.pos.y,this.face,3));
        //     }
        //     cooldownTimer++;
            
        //     if(cooldownTimer > 1000){
        //         cooldownTimer = 0;
        //     }
        // }
        if(keyIsDown(32)){
            this.ammoTimer++;
            if(this.ammoTimer < 2){
                this.projectiles.push(new flappyProjectile(this.pos.x+20, this.pos.y-5,this.face,7));
            }else if(this.ammoTimer > 10){
                this.ammoTimer = 0;
            }
        }
    },
    death: function (){
        if(this.shield < 1){
            this.death = true;
            
        }
        if(this.death === true){
            for (let i = 0; i < 100; i++) {
                deathParticles.push( new deadFlappy( ) );
                    
                }
               }
           for ( let deadFlappy of deathParticles) {
               deadFlappy.update();
               deadFlappy.show();
           }
    },
}



const flappy = function () {
    Flappy.update();
    Flappy.show();
    Flappy.applyForce(grav);
    Flappy.boundaries();
    Flappy.shoot();
    // Flappy.death();
};