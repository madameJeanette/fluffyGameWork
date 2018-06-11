
class Witch {
    private divB : HTMLElement;
    private divW : HTMLElement;
    private divN : HTMLElement;
    private yW: number;
    private x: number;
    private yN: number;
    public counter: number= 1;
    
    
    constructor() {
        this.divB = document.createElement("background");
        document.body.appendChild(this.divB);
      //----------------------------------------------- create background
       this.divW = document.createElement("witch");
       document.body.appendChild(this.divW);
       //----------------------------------------------- create witch
       this.divN = document.createElement("counter");
       document.body.appendChild(this.divN);
       console.log(this.divN)
       //----------------------------------------------- create counter
       this.yW =  337;  
       //----------------------------------------------- coordinates witch
       this.x = (window.innerWidth/2);
       this.yN =  100; 
           //----------------------------------------------- coordinates counter
           
        this.divW.addEventListener("click", () => { 
        this.divN.innerHTML = ("You have " + this.counter + " cats");
        console.log("MOAR CATS") ;    
        this.counter++;
        new Cat();
        console.log("new cat created");
        })

       
    }
    public update(): void {
        this.divW.style.transform = `translate(${this.x}px, ${this.yW}px)`;
        this.divN.style.transform = `translate(${this.x}px, ${this.yN}px)`;
       
    }
 
}

