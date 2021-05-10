video="";
status="";
person=[];
sound="";

function preload(){
    sound=loadSound('y2mate.com - Siren Head Sounds Effect.mp3');
}
function setup(){
    canvas=createCanvas(380,380);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    video.size(380,380);
    objectDetector =ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status:Detecting Objects";

}
function draw(){
    image(video,0,0,380,380);
    if(status !="")
    {
        objectDetecter.detect(person,gotResult);
        for(i=0; i<objects.length;i++){
            document.getElementById("status").innerHTML="Status: Baby in front of camera"

            fill('#32CD32');
            percent=floor(object[i].confidence*100);
            text(objects[i].label + "" + percent + "%",objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke('#32CD32');
            rect(objects[i].x,object[i].y,objects[i].width,objects[i].height);
            if(objects[i].label == "person") { 
                document.getElementById("number_of_objects").innerHTML = "Baby Found" ; 
            console.log("stop"); 
            sound.stop(); 
        }
        else{
            document.getElementById("number_of_objects").innerHTML = "Baby not Found" ; 
            console.log("play"); 
            sound.play(); 
        }
        }
        if(objects.length==0){
            document.getElementById("number_of_objects").innerHTML = "Baby not Found" ; 
            console.log("play"); 
            sound.play(); 
        }
    }

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

