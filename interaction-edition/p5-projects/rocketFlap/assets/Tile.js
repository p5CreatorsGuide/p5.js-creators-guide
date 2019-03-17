function Tile(x, y, rez) {
    rectMode(CENTER);
    translate(x, y);
    fill(25, 180, 125);
    rect(0, 0, rez, rez);
    resetMatrix();
    rectMode(CORNER);

    if (dist(Flappy.pos.x, Flappy.pos.y, x, y) < rez*0.8) {
        let timer = 0;
        if(timer < 1){
            this.face = random (20, 120);
            this.face = this.face-(random(-5, 10));
            timer++;
            Flappy.pos.x -= 5;
            Flappy.shield = Flappy.shield - 1;
            
        }if(timer > 1){
            Flappy.pos.x = 150;
            Flappy.pos.y = 50;
        }
        fill(255,200,10,80);
        ellipse(Flappy.pos.x, Flappy.pos.y, rez,rez);
        fill(255,200,0);
        textSize(36);
        text('DANGER',random(20,150),random(10,50));
    }
   
};