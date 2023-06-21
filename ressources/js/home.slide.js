function slideCard( cardList,intervalle,classSlide){
    let indexCard = 0;
    setInterval(()=> {
        cardList.forEach(element => {
            if(element.classList.contains(classSlide))
                element.classList.remove(classSlide);
        });
        cardList[indexCard].classList.add(classSlide);
        indexCard ++;
        if(indexCard == cardList.length){
            indexCard = 0;
        }
    },
    intervalle);
}

let justiceleague = document.querySelectorAll("section#slide-justice-league img");

slideCard(justiceleague,5000,"active");