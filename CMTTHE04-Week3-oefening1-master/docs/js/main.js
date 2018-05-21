"use strict";
var Ball = (function () {
    function Ball() {
        this.x = 0;
        this.y = 0;
        this.xspeed = 1;
        this.yspeed = 1;
        this.div = document.createElement("ball");
        document.body.appendChild(this.div);
        this.xspeed = 2 + Math.random();
        this.yspeed = 2 + Math.random();
    }
    Ball.prototype.update = function () {
        this.x += this.xspeed;
        this.y += this.yspeed;
        if (this.x > window.innerWidth || this.x < 0) {
            this.xspeed = this.xspeed * -1;
        }
        if (this.y > window.innerHeight || this.y < 0) {
            this.yspeed = this.yspeed * -1;
        }
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    return Ball;
}());
var GameObjects = (function () {
    function GameObjects() {
        this.xBall = 2;
        this.yBall = 2;
        this.xPaddle = 6;
        this.yPaddle = 3;
        this.radiusPaddle = 3;
        this.radiusBall = 1;
        var dx = this.xPaddle - this.xBall;
        var dy = this.yPaddle - this.yBall;
        var distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < this.radiusPaddle + this.radiusBall) {
            console.log("CRASH!");
        }
    }
    return GameObjects;
}());
var Paddle = (function () {
    function Paddle() {
        var _this = this;
        this.x = 2;
        this.y = 2;
        this.downSpeed = 0;
        this.upSpeed = 0;
        this.div = document.createElement("paddle");
        document.body.appendChild(this.div);
        this.upkey = 87;
        this.downkey = 83;
        this.x = 0;
        this.y = 200;
        window.addEventListener("keydown", function (e) { return _this.onKeyDown(e); });
        window.addEventListener("keyup", function (e) { return _this.onKeyUp(e); });
    }
    Paddle.prototype.getRectangle = function () {
        return this.div.getBoundingClientRect();
    };
    Paddle.prototype.onKeyDown = function (e) {
        switch (e.keyCode) {
            case this.upkey:
                this.upSpeed = 5;
                break;
            case this.downkey:
                this.downSpeed = 5;
                break;
        }
    };
    Paddle.prototype.onKeyUp = function (e) {
        switch (e.keyCode) {
            case this.upkey:
                this.upSpeed = 0;
                break;
            case this.downkey:
                this.downSpeed = 0;
                break;
        }
    };
    Paddle.prototype.update = function () {
        var newY = this.y - this.upSpeed + this.downSpeed;
        if (newY > 0 && newY + 100 < window.innerHeight)
            this.y = newY;
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    return Paddle;
}());
var Game = (function () {
    function Game() {
        console.log("new game created!");
        this.ball = [];
        for (var i = 0; i < 5; i++) {
            var b = new Ball();
            this.ball.push(b);
            b.update();
        }
        this.paddle = new Paddle();
        this.gameLoop();
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        for (var _i = 0, _a = this.ball; _i < _a.length; _i++) {
            var b = _a[_i];
            b.update();
        }
        this.paddle.update();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
//# sourceMappingURL=main.js.map