//
// geef de vis een random positie en een random kleur

let randomNumberC:number = Math.random()
let randomNumberX:number = Math.random()
let randomNumberY:number = Math.random()
let screenHeight:number = window.innerHeight
let screenWidth:number = window.innerWidth

function createFishies(){
    let elementFi:string = document.createElement("fish")
    document.body.appendChild(elementFi)
    elementFi.style.webkitFilter = "hue-rotate(300 deg)"
    elementFi.style.filter = "hue-rotate("+ randomNumber * 360 + "deg)"
    elementFi.style.left = randomNumberX*screenWidth + "px"
    elementFi.style.top = randomNumberY*screenHeight + "px"

    elementFi.addEventListener("click",dooieVis)
    function dooieVis(){
        elementFi.classList.add("dead")
    }
}

//
// geef de bubble een random positie
//
function createBubbles(){
 
 let elementBub:string = document.createElement("bubble")
 document.body.appendChild(elementBub)
 elementBub.style.left = randomNumberX*screenWidth + "px"
 elementBub.style.top = randomNumberY*screenHeight + "px"
}

function manyFishies(){ 
    
    randomNumber = Math.random()
    randomNumberX = Math.random()
    randomNumberY = Math.random()
    createFishies()
    createBubbles()

}


//
// roep een functie aan als alles geladen is
function timer(){
    for(let i:number =0;i<101;i++){
    setTimeout(manyFishies, 300 * i)

   
    }
}


    timer()





