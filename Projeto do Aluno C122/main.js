x = 0;
y = 0;
screenWidth = 0
screenHeight = 0
apple = ""
speakData=""
toNumber=""

drawApple = ""

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();
function preload() {
  apple=loadImage()

  
}

function start()
{
  document.getElementById("status").innerHTML = "O sistema está ouvindo. Por favor, fale.";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "A fala foi reconhecida: " + content; 
    to_number = Number(content)
    if (Number.isIteger(to_number)) {
      document.getElementById("status").innerHTML = "a MAÇÃ COMEÇOU A SER DESENHADA"
      drawApple="set"
      
    }
    else if(Number.isIteger(to_number)){
      document.getElementById("status").innerHTML = " o numero não foi reconhecido"
    }

}

function setup() {
 screenwidth = window.innerWidth
 screenheight = window.innerHeight
 createCanvas(screenWidth, screenHeight-150)
 canvas.position()
 

}

function draw() {
  if(drawApple == "set")
  {
    document.getElementById("status").innerHTML = toNumber + " maçãs desenhadas";
    drawApple = "";
    for(var i=1;i<=toNumber;i++){
      x=Math.floor(Math.random()*700)
      y=Math.floor(Math.random()*400)
      image(apple,x,y,screenWidth,screenHeight)
      

    }
  }
 document.getElementById("status").innerHTML = to_number + "maçãs desenhadas"
 speak()

}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speakData);

    synth.speak(utterThis);

    speakData = "";
}
