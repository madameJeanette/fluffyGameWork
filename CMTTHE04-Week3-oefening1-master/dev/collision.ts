
class GameObjects{ 
    public xBall:number = 2
    public yBall:number = 2
    public xPaddle:number = 6
    public yPaddle:number = 3
    public radiusPaddle:number = 3
    public radiusBall:number = 1
 
     constructor(){   
 
 // afstand tussen twee objecten
     
 let dx = this.xPaddle - this.xBall
 let dy = this.yPaddle - this.yBall
 let distance = Math.sqrt(dx * dx + dy * dy)
 
 // als afstand kleiner dan de radius van de twee cirkels
 if (distance < this.radiusPaddle + this.radiusBall) {
     console.log("CRASH!")
 }
 }
 }