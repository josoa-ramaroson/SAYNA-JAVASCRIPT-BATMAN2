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
            let questionObject = this.questions[this.currentQuestion];
            let answer = document.querySelectorAll("div.response input");
            if(answer.length !== 0)
            {
                let userAnswer = Array.from(answer).map(element => element.checked);
                this.currentScore += questionObject.checkAnswer(userAnswer);
                console.log(this.currentScore);
            }
            this.container.innerHTML = "";
            this.titre.innerHTML = `${this.currentQuestion+1}/${this.questions.length}`;
            this.container.appendChild(questionObject.toHtml());
            this.currentQuestion ++;
            if(this.currentQuestion >= this.questions.length){
                 this.currentQuestion = 0;    
            }
        }
    }
    beginAgain(){
        this.titre.innerHTML = "CONNAISSEZ VOUS BIEN LE CHEVALIER NOIR?";
        this.container.innerHTML = `<img src="../image/illustrations/Batgame_2.png" alt="">`;
        this.bouton.innerHTML = "démarrer le quiz";
        this.begin();
    }
}

