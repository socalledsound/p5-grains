
class Voice {
    constructor(id, buffer, attack, release, spread, density){
        this.touchid = id; //the id of the touch event 
        this.grains = [];
        this.grainCount = 0;
        this.dens = map(density,1,0,0,1);
        this.interval = (this.dens * 500) + 70;
        // this.timeout = setTimeout(()=> this.playGrains(), this.interval);

    }
    

    addGrain(currentMouseX, currentMouseY){
        
        const g = new Grain(grainCount, buffer, currentMouseX, currentMouseY, attack, release, spread);
        this.grains[grainCount] = g;
        this.grainCount+=1;
        this.playGrain(g);
        // if(this.graincount > 100){
        //     this.graincount = 0;
        // }
    }


    playGrain(grain){
        grain.play();

        // this.grains.forEach(grain =>{
        //     grain.play();
        //     grain.display();
        // })


 
        //next interval
       
       
        
    }

    // stop(){
    //     clearTimeout(this.timeout);
    // }
}



// //the voice class
// function voice(id){
	
// 	this.touchid = id; //the id of the touch event 
// }

// //play function for mouse event
// voice.prototype.playmouse = function(p){
	
// }
// //play function for touch events - this will get the position from touch events
// voice.prototype.playtouch = function(p,positionx,positiony){
// 	//this.positiony = positiony;
// 	this.positionx = positionx;
// 	this.positiony = positiony;
// 	this.grains = [];
// 	this.graincount = 0;

// 	var that = this; //for scope issues	
// 	this.play = function(){
// 		//create new grain
// 		var g = new grain(p,buffer,that.positionx,that.positiony,attack,release,spread,pan);

// 		//push to the array
// 		that.grains[that.graincount] = g;
// 		that.graincount+=1;
				
// 		if(that.graincount > 30){
// 			that.graincount = 0;
// 		}
// 		//next interval
// 		this.dens = p.map(density,1,0,0,1);
// 		this.interval = (this.dens * 500) + 70;
// 		that.timeout = setTimeout( that.play, this.interval );
// 	}
// 	this.play();
// }

// //stop method
// voice.prototype.stop = function(){
// 	clearTimeout(this.timeout);
// }