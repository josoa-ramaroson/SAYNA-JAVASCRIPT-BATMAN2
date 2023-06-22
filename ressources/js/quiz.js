
async function startQuiz(link){
    let response = await fetch(link);
    let questionsJSON = await response.json();
    

    return questionsJSON;
}
startQuiz("https://batman-api.sayna.space/questions").catch(error=>{
    console.error("Error fetching data: ", error);
}).then((questionJSON)=>{
   
    let questionnaire = new Questionnaire(questionJSON,"#batman-game h2","#quizs","#btn-quiz");
    questionnaire.begin();
});

// let question = new Question({
//     "question": "Quelle ville Batman défend-il ?",
//     "response": [
//         {
//             "text": "Gotham City",
//             "isGood": true
//         },
//         {
//             "text": "Starling City",
//             "isGood": false
//         },
//         {
//             "text": "Tananarive",
//             "isGood": false
//         }
//     ]
// },1);

// let container = document.getElementById("quizs");
// console.log(question.toHtml());
// container.innerHTML = "";
// container.appendChild(question.toHtml());