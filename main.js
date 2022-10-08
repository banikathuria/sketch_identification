function preload(){
    classifier=ml5.imageClassifier("DoodleNet")
}
function setup(){
canvas=createCanvas(500,500)
canvas.position(500,230)
background("white")
canvas.mouseReleased(classifyCanvas)
}
function draw(){
    strokeWeight(3)
    stroke(0)
    if(mouseIsPressed){
        line(pmouseX,pmouseY,mouseX,mouseY)}
}
function classifyCanvas(){
    classifier.classify(canvas,gotResult)
}
function gotResult(error,result){
if(error){console.log(error)}
else{
    console.log(result)
    document.getElementById("guess").innerHTML=result[0].label
    confidence1=result[0].confidence
    Math.round(confidence1=confidence1*100)
    document.getElementById("confidence").innerHTML=result[0].confidence

}
}
function clearCanvas(){
    background("white")
}