video="";
status="";
person=[];

function preload(){
    video=createVideo(VIDEO);
    video.hide();
}
function setup(){
    canvas=createCanvas(480,380);
    canvas.center();

}
function draw(){
    image(video,0,0,480,380);
    if(status !="")
    {
        objectDetecter.detect(person,gotResult);
        for(i=0; i<objects.length;i++){
            document.getElementById("status").innerHTML="Status: Baby not in front of camera"

            fill('#32CD32');
            percent=floor(object[i].confidence*100);
            text(objects[i].label + "" + percent + "%",objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke('#32CD32');
            rect(objects[i].x,object[i].y,objects[i].width,objects[i].height);
        }
    }

}
function start(){
    objectDetector =ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status:Detecting Objects";

}
function modelLoaded(){
    console.log("Model Loaded!");
    status=true;
}
function gotResult(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);
    objects=results;
}

