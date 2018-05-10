let randomNumberC = Math.random()
let randomNumberX = Math.random()
let randomNumberY = Math.random()
let screenHeight = window.innerHeight
let screenWidth = window.innerWidth

var Bubble = (function () {
    function Bubble() {
       console.log("ik ben een bubble")
       var elementBub = document.createElement("bubble")
        document.body.appendChild(elementBub)
        elementBub.style.left = randomNumberX*screenWidth + "px"
        elementBub.style.top = randomNumberY*screenHeight + "px"
    }
    return Bubble;
}());
var Fish = (function () {
    function Fish() {
        console.log("ik ben een fish");
    var elementFi = document.createElement("fish")
    document.body.appendChild(elementFi)
    elementFi.style.webkitFilter = "hue-rotate(300 deg)"
    elementFi.style.filter = "hue-rotate("+ randomNumberC * 360 + "deg)"
    elementFi.style.left = randomNumberX*screenWidth + "px"
    elementFi.style.top = randomNumberY*screenHeight + "px"

    }
    return Fish;
}());
var Game = (function () {
    function Game() {
        console.log("dit is een game");
        new Fish();
        new Bubble();
    }
    Game.prototype.createElements = function () {
        var f = new Fish();
        var b = new Bubble();
    };
    return Game;
}());
window.addEventListener("load", function () {
    new Game();
   
});
//# sourceMappingURL=main.js.map