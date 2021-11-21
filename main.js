prediction1= "";
prediction2= "";
Webcam.set({
    width:350,
    height:300,
    image_format: "png",
    png_quality: 95
});
webcamattacher= document.getElementById("camera");
Webcam.attach("#camera")
function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML="<img id='crazyman' src='"+data_uri+"'/>";
    });
}
model_attach= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/NAaJKCPyT/model.json", modelLoaded);
function modelLoaded() {
    console.log("teachable machine model is loaded sir :-)")
}