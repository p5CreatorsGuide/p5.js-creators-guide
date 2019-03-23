new p5();

let w = 192;
let magicAngle;
let maxD;
let howMany = 42*24;
let orthoX;
let orthoY;
let orthoZ = w*w+4096;
let orthoBound = 900;
let stopZoom;
let angle = 0;

//terrain tiles
let water;
let sand;
let grass;
let stone;
let dirt;
let snow;
let lava;


function preload() {
    water = loadImage("https://raw.githubusercontent.com/kttalley/terrain-generator/master/assets/water.jpg");  
    sand  = loadImage("https://raw.githubusercontent.com/kttalley/terrain-generator/master/assets/sand.png");
    grass = loadImage("https://raw.githubusercontent.com/kttalley/terrain-generator/master/assets/grass.png");
    stone = loadImage("https://raw.githubusercontent.com/kttalley/terrain-generator/master/assets/stone.png");
    dirt = loadImage("https://raw.githubusercontent.com/kttalley/terrain-generator/master/assets/dirt.jpg");
    snow = loadImage("https://raw.githubusercontent.com/kttalley/terrain-generator/master/assets/snow.jpg");
    lava = loadImage("https://raw.githubusercontent.com/kttalley/terrain-generator/master/assets/lava.jpg");
}

function setup() {
    createCanvas(window.innerWidth, window.innerHeight, WEBGL);
    magicAngle = atan(1 /sqrt(2));
    orthoX = width;
    orthoY = height;
}

function draw() {
    background(200,200,0);
    noStroke();
    translate(width/2, height*3,9080);
    ortho( -orthoX, orthoX, -orthoY, orthoY, orthoZ, -orthoZ);
    
    // ortho( -orthoBound, orthoBound, orthoBound, -orthoBound, 0, orthoBound);
    directionalLight(200,255,230,0,-1,200);
    directionalLight(255,230,255,0,0,-200);
    
    // rotateX(frameCount*0.02);
    // rotateY( -QUARTER_PI);
    if(!stopZoom) {
        orthoX+=2;
        orthoY+=2;
    }
    
    
    if(orthoY >= height*3.5) {
        stopZoom = true;
    }
    ambientLight(63);
    
    for (let z = 0; z < howMany; z += w*2.25) {
        for (let x = 0; x < howMany; x += w/2.75) {
            for (let y = 0; y < howMany; y += w) {
                let m = map(getNoise(x,z), -1, 1, -5000, 1900);
                let mc = constrain(m, 0, 640);
                translate(x-width/2, y-width/2, z - height/2,900);
                // resetMatrix();
                rotateX(180);
                rotateY(sin(2));
                push();
                // translate(x, 0 ,z);
                let d = dist(x,z,width/2,height/2);
                let offset = map(d,0,maxD,-w/22, w/1.25);
            let a = angle + offset;
            // let howHigh = floor(map(sin(a), -1, 1, w, height));
            // transla/te(x-width/2, 0, z - height/2);
            // specularMaterial(255);
            // box(w, howHigh, w);
           
           
            // camera(100,0,-200,0,0,0);
            if(mc < 120) {
                // specularMaterial(255,0,255,100);
                texture(water);
                box(w*1.2, mc, w*1.2);
            }else if(mc >= 120 && mc < 150) {
                specularMaterial(255,0,255,100);
                texture(sand);
                box(w,mc,w);
            }else if(mc >= 150 && mc < 384) {
                texture(grass);
                box(w,m,w);
            }else if (mc >384 && mc < 512) {
                texture(dirt);
                box(w,m,w)
            }else if (mc >= 512 && mc < 640) {
                specularMaterial(255,0,255,100);
                texture(stone);
                box(w,m*1.2,w);
            }else if (mc >= 640) {
                texture(snow);
                box(w*0.8,m*1.3,w*0.8);
            }
            pop();
            resetMatrix();

        }
    }
    }

    function getNoise(x, z) {
        let numFrames = 110;
        let t = (0.1*frameCount/numFrames)%1;
        let scale = 0.0008; //noise 'zoom'
        let ns = noise(scale*x, scale*z, cos(TWO_PI*t), sin(TWO_PI*t));
        return ns;
    }



    //grass
    // translate(-100,0, -100);
    // rotateX(frameCount*0.01);
    // texture(grass);
    // box(50, 50, 50);
    // resetMatrix();

     //snow
    //  translate(100,0, -100);
    //  rotateX(frameCount*0.01);
    //  texture(snow);
    //  box(50, 50, 50);
    //  resetMatrix();
    angle -= 0.05;
    orthoBound -= angle/20

}