/// <reference path="ball.ts"/>
///<reference path="paddle.ts"/>
///<reference path="collision.ts"/>


class Game {
    private ball:Ball[]
    private paddle:Paddle

    constructor(){
    console.log("new game created!")
    this.ball = []  //ball array aanroepen

    for(let i=0; i<5;i++){  //loop maakt vijf ballen
        let b = new Ball()   
        this.ball.push(b)   //maakt bal
        b.update()          //update loop
    }

    this.paddle = new Paddle()  //maakt nieuwe paddle
    this.gameLoop()               //roept game loop
    }

     gameLoop(){
     for(let b of this.ball){
         b.update()
     }
     this.paddle.update()
     requestAnimationFrame(()=>this.gameLoop())
            }
        }

window.addEventListener("load", () => new Game());
 
