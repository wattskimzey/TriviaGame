let counter = 30;
let currentQuestion = 0;
let score = 0;
let lost = 0;
let timer;

function loadQuestion() {

    const question = quizQuestions[currentQuestion].question;
    const choices = quizQuestions[currentQuestion].choices;

    $('#time').html(counter);
    $('#game').html(`
        <h4>${question}</h4>
    `);
}

loadQuestion();