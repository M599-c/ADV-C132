img=""
status=""

function setup()
{
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="status: Detecting Objects ";
}

function preload(){
    img = loadImage("dog_cat.jpg");
  }

function draw()
{
    image(img, 0, 0, 640, 420);
    fill("maroon")
    stroke("#db3042")
    text("dog", 120, 90)
    noFill();
    rect(30, 60, 450, 350);

    //image(img, 0, 0, 640, 420);
    fill("maroon")
    stroke("#db3042")
    text("cat", 360, 90)
    noFill();
    rect(300, 60, 270, 350)
}  

function modelLoaded()
{
    console.log("model loaded")
    status=true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results)
{
    if(error)
    {
        console.log(error)
    }
    else
    {
        console.log(results)
    }
    
    
}