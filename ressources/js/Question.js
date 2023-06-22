class Question{
    constructor(creationObject,indexQuestion){
        this.question = creationObject.question;
        this.response = creationObject.response;
        this.questionNumber = indexQuestion;
        this.image = `../image/illustrations/Batgame_${indexQuestion+3}.png`
    }
    toHtml(){
        let quiz = document.createElement("div");
        let image = document.createElement("img");
        let questionResponse = document.createElement("article");
        let titre =  document.createElement("h3");
        let responses =  document.createElement("div");
        quiz.classList.add("quiz");
        image.setAttribute("src",this.image);
        questionResponse.classList.add("question-response");
        titre.innerHTML = this.question;
        responses.classList.add("responses");

        this.response.forEach(element => {
            let response = document.createElement("div");
            let input = document.createElement("input");
            let label = document.createElement("label");
            response.classList.add("response");
            input.type = "checkbox";
            input.setAttribute("type","checkbox");
            input.setAttribute("name",this.questionNumber);


            // the responses on the checkbox and label
            let text = element["text"];
            input.setAttribute("id", text);
            label.setAttribute("for", text);
            label.innerHTML = text; 
            
            // add from the most inside element
            response.appendChild(input);
            response.appendChild(label);

            responses.appendChild(response);

            response.onclick = ()=>{
                response.firstChild.click();
            }
        });


        
        questionResponse.appendChild(titre);
        questionResponse.appendChild(responses);
        quiz.appendChild(image);
        quiz.appendChild(questionResponse);
        return quiz;

    }
    checkAnswer(answer){
        let isGood = this.response.map(item=>item["isGood"]);
        for(let i=0;i<isGood.length;i++){
            if(answer[i] !== isGood[i])
                return 0;
        }   
        return 1;
    }
}