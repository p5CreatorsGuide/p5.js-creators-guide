let tileRez = 70;
const bottomTower3 = function (x, y) {
    Tile(x,y,tileRez);
    Tile(x,y+(tileRez*2),tileRez);
    Tile(x,y+(tileRez*3));
    Tile(x,y+((tileRez*2)));
  };
  
  const topTower2 = function (x, y) {
      Tile(x, y, tileRez);
      Tile(x, y + tileRez, tileRez);
      Tile(x, y + (tileRez*2), tileRez);
      Tile(x, y + (tileRez*3), tileRez);
  
      //   Tile(x,y+200);
  };
  const bottomTower2 = function (x, y) {
      Tile(x, y, tileRez);
      Tile(x, y - tileRez, tileRez);
      Tile(x, y - (tileRez*2), tileRez);
      //   Tile(x,y-200);
  };
  const topTower1 = function (x, y) {
      Tile(x+50, y);
  
      //   Tile(x,y+200);
  };
  const bottomTower1 = function (x, y) {
      Tile(x, y);
  
      //   Tile(x,y-200);
  };

let obst1 = 800;
let obst2 = 1200;
let obst3 = 1600;
let obst4 = 2000;
let obst5 = 1800;