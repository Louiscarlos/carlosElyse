let avarta = document.querySelector('.avarta-img');
let body = document.querySelector(".body-main");
let button = document.querySelector(".increment")

let card = ()=>{
    let cardAvarta = window.document.createElement('div');
    let secondCard = window.document.createElement('div');
    const t1 = "140px"
    
    let cSS = secondCard.style;
    secondCard.innerText = "Your cart is empty"
    cSS.display = "flex"
    cSS.justifyContent = "center"
    cSS.alignItems = "center"
    cSS.borderTop = "1px solid yellow"
    cSS.height = "100px"
    
    body.appendChild(secondCard);
    cardAvarta.innerText = "Card"
    cardAvarta.className = "cardAvarta"
    let cS = cardAvarta.style;
    cS.width = "240px"
    
    cS.height = t1
    cS.border = "1px solid black"
    cS.borderRadius = "5px"
    cS.zIndex = 2
    cS.position = "absolute"
    cS.top = "100px";
    cS.right = "70px"
    cS.fontSize = "20px"
    body.appendChild(cardAvarta)
    cardAvarta.appendChild(secondCard);
}

avarta.addEventListener('mouseover',(e)=>{
    e.stopPropagation()
    console.log(avarta)
    card();
})

avarta.addEventListener('mouseout',(e)=>{
    e.stopPropagation()
    let cardAvarta = document.querySelector(".cardAvarta")
    if(cardAvarta != null){
        body.removeChild(cardAvarta)
    }
    console.log()
});

const decrementButton = document.getElementById("moin");
    const incrementButton = document.getElementById("plus");
    const counterElement = document.getElementById("counter");
    
    let counterValue = parseInt(counterElement.textContent);

    decrementButton.addEventListener("click", () => {
        if (counterValue > 0) {
            counterValue--;
            counterElement.textContent = counterValue;
        }
    });

    incrementButton.addEventListener("click", () => {
        counterValue++;
        counterElement.textContent = counterValue;
    });


