"use strict";
var Game = (function () {
    function Game() {
        this.witch = new Witch();
        this.gameLoop();
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        this.witch.update();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
console.log("new game made");
var Witch = (function () {
    function Witch() {
        var _this = this;
        this.counter = 1;
        this.divW = document.createElement("witch");
        document.body.appendChild(this.divW);
        this.divN = document.createElement("counter");
        document.body.appendChild(this.divN);
        this.yW = 337;
        this.x = (window.innerWidth / 2);
        this.yN = 100;
        this.divW.addEventListener("click", function () {
            _this.divN.innerHTML = ("You have " + _this.counter + " cats");
            console.log("MOAR CATS");
            _this.counter++;
            new Cat();
            console.log("new cat created");
        });
    }
    Witch.prototype.update = function () {
        this.divW.style.transform = "translate(" + this.x + "px, " + this.yW + "px)";
        this.divN.style.transform = "translate(" + this.x + "px, " + this.yN + "px)";
    };
    return Witch;
}());
var Cat = (function () {
    function Cat() {
        this.screenW = window.innerWidth;
        this.screenH = window.innerHeight;
        this.randomNumW = Math.random();
        this.randomNumH = Math.random();
        this.divC = document.createElement("cat");
        document.body.appendChild(this.divC);
        console.log("create cat tag");
        this.xC = this.randomNumW * this.screenW - 320;
        this.yC = this.randomNumH * this.screenH + 296;
        console.log("get random");
        this.divC.style.transform = "translate(" + this.xC + "px, " + this.yC + "px)";
        console.log("place random cat");
    }
    Cat.prototype.update = function () {
    };
    return Cat;
}());
//# sourceMappingURL=main.js.map