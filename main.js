//Create a reference for canvas 
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

//Give specific height and width to the car image
carWidth = 75;
carHeight = 150;
background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.
carX = 5;
carY = 225;

function add() {
    //upload car, and background images on the canvas.
    bgImgTag = new Image();
    bgImgTag.onload = uploadBackground;
    bgImgTag.src = background_image;

    carImgTag = new Image();
    carImgTag.onload = uploadgreencar;
    carImgTag.src = greencar_image;
}

function uploadBackground() {
    //Define function ‘uploadBackground’
    ctx.drawImage(bgImgTag, 0, 0, canvas.width, canvas.height);
}

function uploadgreencar() {
    //Define function ‘uploadgreencar’.
    ctx.drawImage(carImgTag, carX, carY, carWidth, carHeight);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '38') {
        up();
        console.log("up");
    }

    if (keyPressed == '40') {
        down();
        console.log("down");
    }

    if (keyPressed == '37') {
        left();
        console.log("left");
    }

    if (keyPressed == '39') {
        right();
        console.log("right");
    }


}

function up() {
    //Define function to move the car upward
    if (carY > 0) {
        carY = carY - 10;
        uploadBackground();
        uploadgreencar();
    }
}

function down() {
    //Define function to move the car downward
    if (carY < canvas.height - 150) {
        carY = carY + 10;
        uploadBackground();
        uploadgreencar();
    }
}

function left() {
    //Define function to move the car left side
    if (carX > 0) {
        carX = carX - 10;
        uploadBackground();
        uploadgreencar();
    }
}

function right() {
    //Define function to move the car right side
    if (carX < canvas.width - 75) {
        carX = carX + 10;
        uploadBackground();
        uploadgreencar();
    }
}