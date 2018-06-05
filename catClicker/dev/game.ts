class Game {
    //objects:GameObject[]
     
     witch:Witch;  
    
    constructor() {  
      //  this.objects = [new Cat(), new Witch()]
      
      this.witch = new Witch()
      
      this.gameLoop()
    }
     
    gameLoop(){
  //  for(let o of this.objects){
         //   o.update()}

        this.witch.update() 
       
    requestAnimationFrame(() => this.gameLoop())  
   
    }      
}

window.addEventListener("load", () => new Game())
console.log("new game made");
//class GameObject {

//    update(){
    
  //}
//}
