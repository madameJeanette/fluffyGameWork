class PlayScreen {
     witch:Witch;
     game:Game;
public tooMuchCats:number = 45;
     
    constructor(g:Game) {
        
      this.game = g;
      this.witch = new Witch();
     
    }      
    public update() { 
    this.tooMuch();
      
    } 
    public tooMuch(){
      if ( this.witch.counter > this.tooMuchCats){
          this.clickedSoMuch();}
  }
    private clickedSoMuch() {  //if cat tag > then 45 = game Over
      this.game.emptyScreen();
      this.game.showGameOver(new GameOver(this.game))
  }
}
