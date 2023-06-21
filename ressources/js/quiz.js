async function startQuiz(link){
    let response = await fetch(link);
    let questionsJSON = await response.json();
    
    let questionnaire = new Questionnaire(questionsJSON);
    questionnaire.begin();

    return questionsJSON;
}

startQuiz("https://batman-api.sayna.space/questions").catch(error=>{
    console.error("Error fetching data: ", error);
});



