var SpeechRecognition=window.webkitSpeechRecognition;
 //WebkitSpeechRecognition is the web speech API used to  recognnise whatever we speak and converts it into text
var recognition=new SpeechRecognition();
function start_listening() {
    document.getElementById("textbox").innerHTL="";
    recognition.start();

}
 recognition.onresult=function run(event) {
     console.log(event);
     var content=event.results[0][0].transcript;
     console.log(content);
     document.getElementById("textbox").innerHTML=content;
     if(content=="take my selfie") {
     speak_text();
      }
      Webcam.attach("#camera");
      setTimeout(function(){
        take_snapshot();
        save_image();
      },5000);
      
 }

 Webcam.set({
     width:360,
     height:250,
     image_format:'jpeg',
     jpeg_quality:100
 });
 

  function speak_text() {
      var synth=window.speechSynthesis;
     //speechSynthesis is a web speech API which is used to convert text to speech
     var speak_data="Taking your selfie in 5 seconds";
     var utter_this= new SpeechSynthesisUtterance(speak_data);
     synth.speak(utter_this);
  }

  function take_snapshot() {
      Webcam.snap(function(data_uri){
     document.getElementById("selfie").innerHTML="<img src='"+ data_uri + "' id='image_selfie'>";
       });
    
    }
  
    function save_image() {
        anchorTag=document.getElementById("anchor");
        image=document.getElementById("image_selfie").src;
        anchorTag.href=image;
        anchorTag.click();            
    }