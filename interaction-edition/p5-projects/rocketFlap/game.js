new p5();


function setup() {
    rectMode(CENTER);
    angleMode(DEGREES);
    createCanvas(700, 550);
    grav = createVector(0, 10);
}



function draw() {
    background(25, 175, 255);
    fill(20, 155, 155);
    rect(-300, 500, 2500, 150);
    backdrop();
    for (var t = 0; t < trees.length; t ++) {
        trees[t].draw();
        // trees[t].pan();
    }
    
    for (var a = 0; a < aliens.length; a++) {
        // aliens[a].setup();
        aliens[a].draw();
        aliens[a].update();
        // aliens[a].applyForce(grav);
    }

    
    flappy();
    // Alien();


    
    obst1 -= 5;
    obst2 -= 5;
    obst3 -= 5;
    obst4 -= 5;
    obst5 -= 5;

    if (obst1 < -100) {
        obst1 = random(700, 1100);
    }

    if (obst2 < -100) {
        obst2 = random(1200, 1600);
    }
     if (obst3 < -100) {
        obst3 = random(1800, 2200);
    }

    if (obst4 < -100) {
        obst4 = random(2200, 2600);
    }

    topTower2(obst1, 0);
    bottomTower2(obst2, 550);
    topTower1(obst3, 0);
    bottomTower2(obst4, 550);
    bottomTower3(obst5, 550);
    
    healthBar.show();


}

