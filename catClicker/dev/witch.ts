
class Witch {

    private divW : HTMLElement;
    private divN : HTMLElement;
    private yW: number;
    private x: number;
    private yN: number;
    private counter: number= 1;
    //cat:Cat;

   
    
   constructor() {
       
        this.divW = document.createElement("witch");
        document.body.appendChild(this.divW);
       //----------------------------------------------- create witch
        this.divN = document.createElement("counter");
        document.body.appendChild(this.divN);
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
       //     if(this.counter>50){
        //       clear all cats ;
        //    }
        })
    }
    public update(): void {
        this.divW.style.transform = `translate(${this.x}px, ${this.yW}px)`;
        this.divN.style.transform = `translate(${this.x}px, ${this.yN}px)`;
    }}



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
         this.xC =  this.randomNumW*this.screenW-320; 
         this.yC =  this.randomNumH*this.screenH+296; 
         console.log("get random");
           //----------------------------------------------- coordinates cat
           this.divC.style.transform = `translate(${this.xC}px, ${this.yC}px)`;
           console.log("place random cat")
    }  

public update(): void {
    
}}