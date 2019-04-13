let aliens = [
    new Enemy(random(600,1000),random(200,400),random(0.2,0.6),random(0.1, 0.2)),
    new Enemy(random(600,1000),random(200,400),random(0.2,0.6),random(0.1, 0.2)),
    new Enemy(random(600,1000),random(200,400),random(0.2,0.6),random(0.1, 0.2)),
    new Enemy(random(600,1000),random(200,400),random(0.2,0.6),random(0.1, 0.2)),
    new Enemy(random(600,1000),random(200,400),random(0.2,0.6),random(0.1, 0.2)),
    new Enemy(random(600,1000),random(200,400),random(0.2,0.6),random(0.1, 0.2))
];


let alienDeath = ()=> {
    if (dist(flappyProjectile.pos.x,flappyProjectile.pos.y,aliens[a].x, aliens[a].y) < 100){
        aliens[a].pop();
    }    
};



