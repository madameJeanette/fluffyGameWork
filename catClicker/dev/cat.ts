
class Cat {
    private divC : HTMLElement;
    private screenW:number = window.innerWidth;
    private screenH:number = window.innerHeight;
    private randomNumW:number = Math.random();
    private randomNumH:number = Math.random()
    private xC: number;
    private yC: number;

    
    constructor() {
             
        this.divC = document.createElement("cat");
        document.body.appendChild(this.divC);
        console.log("create cat tag");
         //----------------------------------------------- create cat
         this.xC =  this.randomNumW*(this.screenW-320); 
         this.yC =  this.randomNumH*(this.screenH-295); 
         console.log("get random");
         //----------------------------------------------- coordinates cat
         this.divC.style.transform = `translate(${this.xC}px, ${this.yC}px)`;
         console.log("place random cat")
         // -------------------> delete cats when clicked.
         this.divC.addEventListener("click", () => this.deleteCat()) 

    }  

public update(): void {
    
}
deleteCat(){
    this.divC.remove();
  
}
}