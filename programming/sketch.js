let snowflakes = []; 

function setup() {
    // put setup code here
    createCanvas(500, 500);
}

function draw() {
    // put drawing code here
    background("darkslategray");
    fill('white');
    noStroke();

    var bgTriangle = '#114415';
    var frontTriangle = '#A9A9A9';

        text('Click Triangle  😊  ', 250, 400)


    if (mouseX > width / 2 && mouseY < height / 2) {
        bgTriangle = 0 ;
        frontTriangle = 'red';


    } else if (mouseX < width / 2 && mouseY < height / 2) {
        bgTriangle = '#253361';
        frontTriangle = '#6D2C73'

    } else if (mouseX < width / 2 && height > height / 2) {
        bgTriangle = 'mediumblue'
        frontTriangle = '#8A2BE2'

    } else {


    }

    fill(bgTriangle)
    triangle(300, 140, 150, 370, 450, 370);

    fill(frontTriangle)
    triangle(250, 130, 100, 350, 400, 350);

    //    ellipse(250, 46, 65, 65)


    if (mouseIsPressed) {



        let t = frameCount / 60; // update time

        // create a random number of snowflakes each frame
        for (let i = 0; i < random(5); i++) {
            snowflakes.push(new snowflake()); // append snowflake object
        }

        // loop through snowflakes with a for..of loop
        for (let flake of snowflakes) {
            flake.update(t); // update snowflake position
            flake.display(); // draw snowflake
        }
    }





}


// snowflake class
function snowflake() {
    // initialize coordinates
    this.posX = 0;
    this.posY = random(-50, 0);
    this.initialangle = random(0, 2 * PI);
    this.size = random(2, 5);

    // radius of snowflake spiral
    // chosen so the snowflakes are uniformly spread out in area
    this.radius = sqrt(random(pow(width / 2, 2)));

    this.update = function (time) {
        // x position follows a circle
        let w = 0.6; // angular speed
        let angle = w * time + this.initialangle;
        this.posX = width / 2 + this.radius * sin(angle);

        // different size snowflakes fall at slightly different y speeds
        this.posY += pow(this.size, 0.5);

        // delete snowflake if past end of screen
        if (this.posY > height) {
            let index = snowflakes.indexOf(this);
            snowflakes.splice(index, 1);
        }
    };

    this.display = function () {
        ellipse(this.posX, this.posY, this.size);
    };
    
        
}
