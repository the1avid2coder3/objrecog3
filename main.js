img = "";
status = "";
objects = [];
function preload() {
    img = loadImage('dog_cat.jpg');
}
function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";

}

function modelLoaded() {
    console.log("Model Loaded")
    status = true;
    objectDetector.detect(img, gotResult);
}
function gotResult(error, results) {
    if(error) {
        console.log(error);
    }
    console.log(results);
    objects = results;

}


function draw() {
    
     fill("#ff0000");
     text("Dog", 50, 85);
     noFill();
    stroke("#ff0000");
     rect(30, 70,250, 400);
     fill("#00ff00");
     noFill();
     stroke("#00ff00");
     rect(300, 130, 270, 300);
     text("Cat", 530, 150);
     fill("#0000ff");
     noFill();
     stroke("#0000ff");
     rect(250, 370, 100, 200);
     text("Bowl", 260, 390);

}
