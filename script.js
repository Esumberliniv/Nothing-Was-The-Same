let filepath = 'fromtimeinstru.mp3';
let song;
let img;
var rect_x = 0;
var speed = 10;
  
function preload() {
  soundFormats('mp3', 'ogg');
  song = loadSound('fromtimeinstru');
}

function setup(){
  let canvas = createCanvas(500,350);
  canvas.mousePressed(soundFunction);
  button = createButton("play");
  button.mousePressed(togglePlaying)
  img = loadImage('drakehead.png');
  img_2 = loadImage('parental advisory.png');
  print(img); 
  print(img_2);
  
    }
function soundFunction(){
  mySound.play();
}

function togglePlaying(){
  if(!song.isPlaying()){
    song.play()
    button.html("pause")
  } else{
    song.pause()
    button.html("play")
    

  }
}
  
    
  
//background
function draw(){
  print(mouseX,mouseY)

    background(220);

  
  let canvasWidth = width;
  
  
  
  let g = drawingContext.createLinearGradient(canvasWidth/2,0,canvasWidth/2,height)
  
  g.addColorStop(0,"rgb(65,150,253)");
  g.addColorStop(0.5,"rgb(126,182,250)");
  g.addColorStop(1,"rgb(178,211,250)");
  drawingContext.fillStyle = g;
  rect(rect_x,0,canvasWidth,height);
  rect_x = rect_x + speed;
  triangle(trim,300);
  
 
  if (rect_x > 500){
    speed = -speed;
  }
  if(rect_x < 0){
    speed = -speed;
  }
    
    



  let yo = 0;
  image(img,204,162,140,200)
  image(img_2,0,0,60,60)

  for(let x = canvasWidth/2 - 400;x < canvasWidth/2 + 400; x++){
    let xo = 0;
    for(let y = 100; y < height - 200; y += 2){
      let angle = noise(xo,yo)*TAU - cos(x/y) * 4;
      let v = p5.Vector.fromAngle(angle);
      let n = noise(xo,yo)*255;
      push();
      translate(x + cos(y/20)*20,y);
      rotate(v.heading());
      strokeWeight(angle/3);
      stroke(n*2, n/10 - y/40);
      line(0,0,20,0);
      pop();
      xo += 0.1;
      
    }
    yo += 0.1
  }
  
  
  
  
 // noLoop()

  
  
  
}


//song


