class Ball {
    
    private div : HTMLElement
    private x : number = 0
    private y : number = 0
    private xspeed: number = 1
    private yspeed: number = 1
    
    constructor() {
        this.div = document.createElement("ball")
        document.body.appendChild(this.div)

        this.xspeed = 2 + Math.random()
        this.yspeed = 2 + Math.random()
        
    }
    
    public update() : void {
        this.x+= this.xspeed
        this.y+= this.yspeed

     if (this.x>window.innerWidth || this.x <0){
         this.xspeed = this.xspeed*-1
     }
     if (this.y>window.innerHeight || this.y <0){
        this.yspeed = this.yspeed*-1
    }

        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`
    }
}