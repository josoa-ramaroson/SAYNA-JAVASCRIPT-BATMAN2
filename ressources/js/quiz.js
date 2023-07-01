
async function startQuiz(link){
    let response = await fetch(link);
    let questionsJSON = await response.json();
    

    return questionsJSON;
}
// si il y a connexion internet
// startQuiz("https://batman-api.sayna.space/questions").catch(error=>{
//     console.error("Error fetching data: ", error);
// }).then((questionJSON)=>{
   
//     let questionnaire = new Questionnaire(questionJSON,"#batman-game h2","#quizs","#btn-quiz");
//     questionnaire.begin();
// });
// sinon

startQuiz("/ressources/js/questions.json").catch(error=>{
    console.error("Error fetching data: ", error);
}).then((questionJSON)=>{
   
    let questionnaire = new Questionnaire(questionJSON,"#batman-game h2","#quizs","#btn-quiz");
    questionnaire.begin();
});
