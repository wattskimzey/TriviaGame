let counter = 5;
let currentQuestion = 0;
let score = 0;
let lost = 0;
let timer;

function nextQuestion() {
    const isQuestionOver = (quizQuestions.length - 1) === currentQuestion;
    if(isQuestionOver) {
        console.log("GAME IS OVER CAT LOSER!!!");
        displayResult();
    }
    else {
    currentQuestion++;
    loadQuestion();
}
}

function timeUp() {
    clearInterval(timer);
    lost++;
    nextQuestion();
}

function countDown() {
    counter--;
    $('#time').html("Tick-Tock Tick-Tock... " + counter);
    if(counter === 0) {
        timeUp();
    }
}

function loadQuestion() {
    counter = 5;
    timer = setInterval(countDown, 1000);
    const question = quizQuestions[currentQuestion].question;
    const choices = quizQuestions[currentQuestion].choices;
    $('#time').html("Tick-Tock Tick-Tock... " + counter);
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

$(document).on('click', '.choice', function() {
   clearInterval(timer); 
   const selectedAnswer = $(this).attr('data-answer');
   const correctAnswer = quizQuestions[currentQuestion].correctAnswer;
   if(correctAnswer === selectedAnswer ){
        score++;
        nextQuestion();
        console.log("wins");
   } else {
       lost++;
       nextQuestion();
       console.log("loses");
   }
    console.log("yeep ", selectedAnswer);

});;

function displayResult() {
    const result = `
        <p>You got ${score} question(s) correct!</p>
        <p>You missed ${lost} question(s)!</p>
        <p>Total questions: ${quizQuestions.length}</p>
        <button class="btn btn-primary" id="reset">Reset Game</button>
    `;
    $('#game').html(result);
}

$(document).on('click', '#reset', function(){
    console.log("is this resetting");
    counter = 5;
    currentQuestion = 0;
    score = 0;
    lost = 0;
    timer = null;
    loadQuestion();
});

loadQuestion();