var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = ""; 
    recognition.start();
} 
 
recognition.onresult = function(event) {

     console.log(event); 
var Content = event.results[0][0].transcript;

document.getElementById("textbox").innerHTML = Content;
console.log(Content);
if(Content=="selfie"){
    console.log("taking selfie ---")
    speak();
}
}

function speak(){
    var synth=window.speechSynthesis;

    speak_data="Taking Your Next Selfies In 3 Seconds"
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);

setTimeout(function(){
    take_snapshot1();
    save();
},3000);
setTimeout(function(){
    take_snapshot2();
    save();
},6000);
setTimeout(function(){
    take_snapshot3();
    save();
},9000);
}

Webcam.set({
    width:360,
    height:250,
    image_format : "png",
    png_quality:90

});

camera=document.getElementById("camera");

function take_snapshot1(){

    Webcam.snap(function(data_uri){
        document.getElementById("pic1").src=data_uri;
    })
}

function take_snapshot2(){

    Webcam.snap(function(data_uri){
        document.getElementById("pic2").src=data_uri;
    })
}

function take_snapshot3(){

    Webcam.snap(function(data_uri){
        document.getElementById("pic3").src=data_uri;
    })
}

function save(){
    link=document.getElementById("link");
    image=document.getElementById("selfie_image").src ;
    link.href=image;
    link.click();
}
