const healthBar = {
    posX: 20,
    posY: 20,
    width: 100,
    height: 20,

    show: function() {
        this.width = Flappy.shield*2;
        
        textSize(18);
        fill(255);
        text("SHEILD",this.posX - 10, this.posY-5);
        fill(255,175,0);
        rect(this.posX, this.posY, this.width, this.height);
    }
}