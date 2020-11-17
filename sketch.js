const CANVASWIDTH = 1000;
const CANVASHEIGHT = 800;

//settings defaults, later add knobs
let attack = 0.40;
let release = 0.40;
let density = 1.0;
let spread = 1.2;
let reverb = 0.5;
let pan = 0.1;
let trans = 1.25;

const voices = [];
const grains = [];

let grainDensity = 50, randomGrains = 50, grainCount = 0;


function setup(){
    createCanvas(CANVASWIDTH, CANVASHEIGHT);
    background(0);
}

function draw(){
    background(0);
    if(soundFileData){
        drawWaveform(soundFileData);
    }


    if(voices.length  > 0){
        voices.forEach(voice => {
            voice.grains.forEach(grain => {
                grain.checkLife(millis());
                console.log(grain.alive);
                if(grain.alive){
                    grain.display();
                } else {
                    voice.grains.splice(grain.num,1);
                }    
            })
        })
    }

}



function mousePressed(){
    grainDensity = Math.floor(Math.random() * randomGrains + grainDensity);
    let v = new Voice(random(200), buffer, attack, release, spread, density);
    v.addGrain(mouseX, mouseY);
    grainCount++
    voices.push(v);
    const interval = random(100);
    setTimeout( () => addGrain(v), interval);
}

function addGrain(v){
    v.addGrain(mouseX, mouseY);
    if(grainCount < grainDensity){
        const interval = random(100);
        setTimeout( () => addGrain(v), interval);
    }
}


function drawWaveform(soundFileData){
    // console.log(soundFileData);

    let step = Math.ceil( soundFileData.length / width );
    let amp = height / 2;


    for( var i=0; i < width; i++ ){
        var min = 1.0;
        var max = -1.0;
     
        for( j=0; j<step; j++) {
            
            var datum = soundFileData[(i*step)+j]; 
            if (datum < min){
                min = datum;
            }else if(datum > max){
                max = datum;
            }
                       
        }
        stroke(255);
        rect(i,(1+min)*amp,1, Math.max(1,(max-min)*amp));
    }
}