leftwristx=0;
rightwristx=0;
difference=0;
function preload(){

}

function setup(){
    canvas=createCanvas(400,400);
    canvas.position(500,150);
    video=createCapture(VIDEO);
    video.size(450,450);
    poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function gotPoses(results){
if(results.length>0){
console.log(results);
leftwristx=results[0].pose.leftWrist.x;
rightwristx=results[0].pose.rightWrist.x;
difference=leftwristx-rightwristx;
console.log("difference="+difference);
}
}

function modelLoaded(){
    console.log("posenet is initialized");
}

function draw(){
    background('#9737F0');
    textSize(difference);
    fill("#F38AFA");
    text("Avani",50,200);
}

