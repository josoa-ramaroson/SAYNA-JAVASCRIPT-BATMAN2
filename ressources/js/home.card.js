let allCard = document.querySelectorAll(".bat-image");

allCard.forEach((card)=>{

    card.onmouseenter =(e)=>{
        e.target.classList.add("hover");   
    };
    card.onmouseleave = (e)=>{
        e.target.classList.remove("hover");   
    };
});