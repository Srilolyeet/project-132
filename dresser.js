img="";
rank1="";
objects=[];

function preload (){
    img=loadImage('dog_cat.jpg');
}

function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("rank1").innerHTML="Ranks: Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded!")
    rank1=true;
    objectDetector.detect(img,gotResult);
}

function gotResult(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);
    objects=results;
}