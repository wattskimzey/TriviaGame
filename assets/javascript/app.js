let counter = 5;
let currentQuestion = 0;
let score = 0;
let lost = 0;
let timer;

function loadQuestion() {

    const question = quizQuestions[currentQuestion].question;
    const choices = quizQuestions[currentQuestion].choices;

    $('#time').html("This is how many seconds you have left, oh Knower of Little Trivia... " + counter);
    $('#game').html(`
        <h4>${question}</h4>
        ${loadChoices(choices)}
    `);
}

function loadChoices(choices) {
    let result = '';

    for (let i = 0; i < choices.length; i++ ){
        result += `<p class="choice" data-answer="${choices[i]}">${choices[i]}</p>`;
    }
    return result;
}
loadQuestion();