class Questionnaire{
    constructor(questionSet,titre,container,bouton){
       this.questions= questionSet.map((question,index)=>new Question(question,index));
       this.titre = document.querySelector(titre);
       this.container = document.querySelector(container);
       this.bouton = document.querySelector(bouton);
       this.currentScore = 0;
       this.currentQuestion = 0;

    }
    begin(){
        this.currentScore = 0;
        this.currentQuestion = 0;    
        this.bouton.onclick = ()=>{
            
            this.bouton.innerHTML = "Question suivante";
            if(this.currentQuestion >= this.questions.length){
                this.finish();  
                return;
            }
           if(this.currentQuestion != 0){
                let questionObject = this.questions[this.currentQuestion-1];
                let answer = document.querySelectorAll("div.response input");
                if(answer.length !== 0)
                {
                    let userAnswer = Array.from(answer).map(element => element.checked);
                    this.currentScore += questionObject.checkAnswer(userAnswer);
                    
                }
           }
           

            //nouveau question
            
            let questionObject = this.questions[this.currentQuestion];

            this.container.innerHTML = "";
            this.titre.innerHTML = `${this.currentQuestion+1}/${this.questions.length}`;
            this.container.appendChild(questionObject.toHtml());
            if(this.currentQuestion == 6){
                document.querySelectorAll(".image-clandestin-9").forEach((element)=>{
                    element.classList.add("active");
                });
            }
            else{
                document.querySelectorAll(".image-clandestin-9").forEach((element)=>{
                    if(element.classList.contains("active")
)                    element.classList.remove("active");
                });
            }
            this.currentQuestion++;   

        }
    }
    beginAgain(){
        this.titre.innerHTML = "CONNAISSEZ VOUS BIEN LE CHEVALIER NOIR?";
        this.container.innerHTML = `<img src="../image/illustrations/Batgame_2.png" alt="">`;
        this.bouton.innerHTML = "démarrer le quiz";
        this.begin();
    }
    finish(){
       let popupResponse = document.querySelector("#popup-response");
       let popupTitle = document.querySelector("#popup-response h3");
       let popupP = document.querySelector("#popup-response p");
       let popupBtn = document.querySelector("#popup-response #btn-redo-quiz");
       popupResponse.classList.add("visible");
        let numberOfQuestion = this.questions.length;
       if(this.currentScore < Math.floor(numberOfQuestion/2)){
        popupTitle.innerHTML = `${this.currentScore}/${numberOfQuestion} c'est pas tout à fait ça...`;
        popupP.innerHTML = "Oula ! heureusement que le Riddler est sous les verrous... Il faut<br/> que vous vous repassiez les films, cette fois en enlevant peut-être le <br> masque qui vous a bloqué la vue ! Aller, rien n'est perdu !";   
    }
       else if((this.currentScore != this.questions.length)){
        popupTitle.innerHTML = `${this.currentScore}/${numberOfQuestion} pas mal !`;
        popupP.innerHTML = "Encore un peu d'entraînement avec le Chevalier Noir vous serait<br/> bénéfique, mais vous pouvez marcher la tête haute vos <br>connaissance sont là. A vous de les consolider,foncez Gotham est<br> votre terrain de chasse";
       }
       else{
        popupTitle.innerHTML = `${this.currentScore}/${numberOfQuestion} bravo !`;
        popupP.innerHTML = "Vous êtes véritablement un super fan de l'univers de Batman ! <br> Comics, films, rien ne vous échappe. Bruce Wayne a de quoi être fier, <br> Gotham est en paix et Batman peut prendre sa retraite, vous veillez <br> aux grains !";
       }
       popupBtn.onclick = ()=>{
        popupResponse.classList.remove("visible");
        this.beginAgain();
       }
    }
}

