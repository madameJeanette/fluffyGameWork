class Car {
    private x:number = 0
    private y:number = 0
    private xspeed:number = 1
    private yspeed:number = 1
    private element:HTMLElement
    constructor() {
        this.element = document.createElement("car")
        document.body.appendChild(this.element)
        console.log("vrooom!")

        this.xspeed = 2 + Math.random()
        this.yspeed = 2 + Math.random()
        
    }
public update(){
this.x+= this.xspeed
this.y+= this.yspeed

if(this.x > window.innerWidth || this.x <0){
    this.xspeed = this.xspeed*-1
}
if(this.y > window.innerHeight || this.y <0){
    this.yspeed = this.yspeed*-1
}
console.log("car speed 1")
this.element.style.transform = `translate(${this.x}px,${this.y}px)`
}
}
