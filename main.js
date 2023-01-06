noseX = 0;
noseY = 0;
difference = 0;
leftWristX = 0;
rightWristX = 0;
function setup() {
video = createCapture(VIDEO);
video.size(550, 500);
canvas = createCanvas(550, 500);
canvas.position(700, 110);
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}
function draw() {
background("#969A97");
fill("#8cc3ed");
stroke("#d3e5f2");
square(noseX, noseY, difference);
document.getElementById("square_size").innerHTML="Size of the Square:" + difference;
}
function modelLoaded() {
console.log("PoseNet Is Initialised");
}
function gotPoses(results) {
if (results.length > 0) {
console.log(results);
noseX = results[0].pose.nose.x;
noseY = results[0].pose.nose.y;
console.log("Nose X = "+ noseX + "Nose y ="+ noseY);
leftWristX = results[0].pose.leftWrist.x;
rightWristX = results[0].pose.rightWrist.x;
difference = floor(leftWristX - rightWristX);
console.log("Left Wrist X ="+leftWristX + "Right Wrist =" +rightWristX+ "Difference =" + difference);
}
}
