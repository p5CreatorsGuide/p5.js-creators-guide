let angle = 0;
let w = 55;
let magicAngle;

let maxD

let orthoBound = 900;
let counter = 0;

function setup() {
    createCanvas(1080,1080, WEBGL);
    // magicAngle = atan(1 / sqrt(2));
    // magicAngle = 0;
    magicAngle = atan(2/sqrt(2))
    maxD = dist(0,0, height /2 , height / 2);
}

function draw() {
    background(63, 0, 0);
    ortho( -orthoBound, orthoBound, orthoBound, -orthoBound, 0, orthoBound);
    ambientLight(63);
    //red
    pointLight(127, 255, 127, 0, 0, 0);

    //green
    pointLight(255, 127, 127, width/2, 0, height/2);

    //blue
    pointLight(127, 127, 255, 0, 0, height);

    rotateX(-magicAngle); //THIS IS THE PROPER ROTATION FOR ISOMETRIC GRAPHICS
    rotateY(angle/12);

    for (let z = 0; z < height; z += w) {
        for (let x = 0; x < width; x+= w) {
            push();
            let d = dist(x,z,width/2,height/2);
            let offset = map(d,0,maxD,-w/12, w/12);
            let a = angle + offset;
            let howHigh = floor(map(sin(a), -1, 1, w, height));
            translate(x-width/2, 0, z - height/2);
            specularMaterial(255);
            box(w, howHigh, w);
            pop();
        }
    }
    angle -= 0.05;
    orthoBound -= angle/20

}