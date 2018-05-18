//
// geef de vis een random positie en een random kleur

let randomNumberC = Math.random() //random number genereert een random nummer
let randomNumberX = Math.random()
let randomNumberY = Math.random()
let screenHeight = window.innerHeight //creëert screenheight door de window groote aan de innerheight te koppelen.
let screenWidth = window.innerWidth //creëert screenheight door de window groote aan de innerheight te koppelen.

function createFishies(){ //functie voor het maken van de vis
    var elementFi = document.createElement("fish") //maakt de tag fish 
    document.body.appendChild(elementFi) //maakt de tag fish aan de body vast
    elementFi.style.webkitFilter = "hue-rotate(300 deg)" 
    elementFi.style.filter = "hue-rotate("+ randomNumber * 360 + "deg)" //geeft een random nummer tussen de 0 en 360 voor een random kleur van de vis.
    elementFi.style.left = randomNumberX*screenWidth + "px" //geet een random number voor coordinaten van de vis voor de breedte van het scherm.
    elementFi.style.top = randomNumberY*screenHeight + "px" //geet een random number voor coordinaten van de vis voor de hoogte van het scherm.

    elementFi.addEventListener("click",deadFish) //maakt een adventlistener voor een klik op de vis
    function deadFish(){                        //funtie verwisseld het vis plaatje voor een dood vis plaatje wanneer aangeklikt.
        elementFi.classList.add("dead")
    }
}


function createBubbles(){  //funtie om de bubbles te maken.
 
 var elementBub = document.createElement("bubble") //maakt tag genaamd bubble
 document.body.appendChild(elementBub)           //plakt de bubble tag aan de body vast.
 elementBub.style.left = randomNumberX*screenWidth + "px" // geeft de bubble een random positie binnen de hoogte en breedte van het scherm.
 elementBub.style.top = randomNumberY*screenHeight + "px"//
}

function manyFishies(){  //functie om visjes en bubbles aan te roepen.
    
    randomNumber = Math.random()     //pakt elke keer als manyFishes wordt aangeroepen een nieuwe random number.
    randomNumberX = Math.random()
    randomNumberY = Math.random()
    createFishies()    //maakt visjes
    createBubbles()   //maakt bubbles

}

function timer(){      //creeert een loop die de visjes en bubbles 100 keer tekent.
    for(var i=0;i<100;i++){
    setTimeout(manyFishies, 300 * i)  //maakt een vertraging waardoor de visjes om de 300 miliseconden getekent worden

   
    }
}


    timer()   //roept de timer aan en tekent hierdoor de visjes en bubbles.





